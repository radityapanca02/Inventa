<?php

namespace App\Http\Controllers;

use App\Models\Peminjam;
use App\Models\Peminjaman;
use App\Models\AlatBahan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PeminjamController extends Controller
{
    public function index()
    {
        try {
            $peminjaman = Peminjaman::with(['peminjam', 'alatBahan'])
                ->orderBy('created_at', 'desc')
                ->paginate(10);

            $alatBahan = AlatBahan::where('jenis', 'alat') // Hanya alat yang bisa dipinjam
                ->get()
                ->map(function ($item) {
                    return [
                        'id_alat' => $item->id_alat,
                        'nama_alat' => $item->nama_alat,
                        'jumlah_tersedia' => $item->jumlah_tersedia,
                        'kondisi' => $item->kondisi
                    ];
                });

            // Pastikan data tidak null
            return Inertia::render('Pengajuan/Index', [
                'peminjaman' => $peminjaman ?? [],
                'alatBahan' => $alatBahan ?? [],
                'flash' => session()->get('flash') ?? []
            ]);
            
        } catch (\Exception $e) {
            // Fallback jika ada error
            return Inertia::render('Pengajuan/Index', [
                'peminjaman' => ['data' => []],
                'alatBahan' => [],
                'flash' => ['error' => 'Terjadi kesalahan saat memuat data']
            ]);
        }
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_peminjam' => 'required|string|max:100',
            'email' => 'nullable|email',
            'kontak' => 'required|string|max:20',
            'alamat' => 'nullable|string',
            'instansi' => 'nullable|string|max:100',
            'alasan' => 'required|string|max:255',
            'alat_bahan' => 'required|array',
            'alat_bahan.*.id_alat' => 'required|exists:alat_bahans,id_alat',
            'alat_bahan.*.jumlah' => 'required|integer|min:1',
            'tanggal_pinjam' => 'required|date',
            'tanggal_kembali' => 'required|date|after:tanggal_pinjam',
            'keterangan' => 'nullable|string'
        ]);

        // Buat data peminjam
        $peminjam = Peminjam::create([
            'nama_peminjam' => $validated['nama_peminjam'],
            'email' => $validated['email'],
            'kontak' => $validated['kontak'],
            'alamat' => $validated['alamat'],
            'instansi' => $validated['instansi'],
            'alasan' => $validated['alasan']
        ]);

        // Buat data peminjaman untuk setiap alat
        foreach ($validated['alat_bahan'] as $alat) {
            Peminjaman::create([
                'id_peminjam' => $peminjam->id_peminjam,
                'id_alat' => $alat['id_alat'],
                'jumlah_pinjam' => $alat['jumlah'],
                'tanggal_pinjam' => $validated['tanggal_pinjam'],
                'tanggal_kembali' => $validated['tanggal_kembali'],
                'status' => 'menunggu',
                'keterangan' => $validated['keterangan']
            ]);
        }

        return redirect()->route('peminjaman.index')
            ->with('success', 'Pengajuan peminjaman berhasil dikirim!');
    }

    public function approve($id)
    {
        try {
            $peminjaman = Peminjaman::findOrFail($id);
            
            // Cek ketersediaan stok
            $alatBahan = $peminjaman->alatBahan;
            if ($alatBahan->jumlah_tersedia < $peminjaman->jumlah_pinjam) {
                return redirect()->back()
                    ->with('error', 'Stok tidak mencukupi untuk menyetujui peminjaman ini.');
            }

            $peminjaman->update(['status' => 'disetujui']);

            return redirect()->back()
                ->with('success', 'Peminjaman berhasil disetujui!');
                
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    public function reject(Request $request, $id)
    {
        try {
            $request->validate([
                'catatan_admin' => 'required|string'
            ]);

            $peminjaman = Peminjaman::findOrFail($id);
            $peminjaman->update([
                'status' => 'ditolak',
                'catatan_admin' => $request->catatan_admin
            ]);

            return redirect()->back()
                ->with('success', 'Peminjaman berhasil ditolak!');
                
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    public function return($id)
    {
        try {
            $peminjaman = Peminjaman::findOrFail($id);
            
            // Update status menjadi dikembalikan
            $peminjaman->update(['status' => 'dikembalikan']);

            return redirect()->back()
                ->with('success', 'Alat berhasil dikembalikan!');
                
        } catch (\Exception $e) {
            return redirect()->back()
                ->with('error', 'Terjadi kesalahan: ' . $e->getMessage());
        }
    }

    public function destroy($id)
    {
        try {
            $peminjaman = Peminjaman::findOrFail($id);
            $peminjaman->delete();

            return redirect()->route('peminjaman.index')
                ->with('success', 'Data peminjaman berhasil dihapus!');
                
        } catch (\Exception $e) {
            return redirect()->route('peminjaman.index')
                ->with('error', 'Terjadi kesalahan saat menghapus: ' . $e->getMessage());
        }
    }
}