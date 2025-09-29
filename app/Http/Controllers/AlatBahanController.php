<?php
namespace App\Http\Controllers;

use App\Models\AlatBahan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlatBahanController extends Controller
{
    public function index()
    {
        $alat = AlatBahan::paginate(10);
        return Inertia::render('AlatBahan/Index', [
            'alat' => $alat,
            'flash' => session()->get('flash') // Pastikan ini ada
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
            'deskripsi' => 'required|string',
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
            'deskripsi' => 'string',
        ]);

        $alat->update($request->all());

        return redirect()->route('alat.index')
            ->with('flash', [
                'success' => 'Alat/Bahan berhasil diperbarui!'
            ]);
    }

    public function destroy(AlatBahan $alat)
    {
        $alat->delete();
        return redirect()->route('alat.index')->with('success', 'Alat berhasil dihapus.');
    }
}
