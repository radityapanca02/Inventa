<?php
namespace App\Http\Controllers;

use App\Models\AlatBahan;
use App\Models\Peminjaman;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlatBahanController extends Controller
{
    public function index()
    {
        $alat = AlatBahan::paginate(10);
        return Inertia::render('AlatBahan/Index', [
            'alat' => $alat,
            'flash' => session()->get('flash')
        ]);
    }

    public function create()
    {
        return Inertia::render('AlatBahan/Tambah');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'nama_alat' => 'required|string|max:255',
            'jenis' => 'required|in:alat,bahan',
            'kondisi' => 'required|in:baik,rusak,baru,hilang',
            'jumlah' => 'required|integer|min:0',
            'deskripsi' => 'nullable|string',
        ]);

        AlatBahan::create($validated);

        return redirect()->route('alat.index')
            ->with('success', 'Alat/Bahan berhasil ditambahkan!');
    }

    public function edit(AlatBahan $alat)
    {
        return Inertia::render('AlatBahan/Edit', [
            'alat' => $alat
        ]);
    }

    public function update(Request $request, AlatBahan $alat)
    {
        $request->validate([
            'nama_alat' => 'required|string|max:100',
            'jenis' => 'required|string',
            'kondisi' => 'required|in:baik,rusak,hilang,baru',
            'jumlah' => 'required|integer|min:1',
            'deskripsi' => 'nullable|string',
        ]);

        $alat->update($request->all());

        return redirect()->route('alat.index')
            ->with('flash', [
                'success' => 'Alat/Bahan berhasil diperbarui!'
            ]);
    }

    public function destroy(AlatBahan $alat)
    {
        $isBorrowed = Peminjaman::where('id_alat', $alat->id_alat)
            ->where('status', 'dipinjam')
            ->exists();

        if ($isBorrowed) {
            return redirect()->route('alat.index')
                ->with('error', 'Tidak dapat menghapus. Alat/Bahan sedang dipinjam!');
        }

        if ($alat->jenis === 'bahan') {
            return redirect()->route('alat.index')
                ->with('error', 'Bahan tidak dapat dihapus/dikembalikan!');
        }

        $alat->delete();
        
        return redirect()->route('alat.index')
            ->with('success', 'Alat berhasil dihapus.');
    }
}