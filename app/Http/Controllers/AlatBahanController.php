<?php
namespace App\Http\Controllers;

use App\Models\AlatBahan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlatBahanController extends Controller
{
    public function index()
    {
        $alat = AlatBahan::latest()->paginate(10);
        return Inertia::render('AlatBahan/Index', [
            'alat' => $alat
        ]);
    }

    public function create()
    {
        return Inertia::render('AlatBahan/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'nama_alat' => 'required|string|max:100',
            'jenis' => 'required|string',
            'kondisi' => 'required|in:baik,rusak,hilang',
            'jumlah' => 'required|integer|min:1',
        ]);

        AlatBahan::create($request->all());

        return redirect()->route('alat.index')->with('success', 'Alat berhasil ditambahkan.');
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
            'kondisi' => 'required|in:baik,rusak,hilang',
            'jumlah' => 'required|integer|min:1',
        ]);

        $alat->update($request->all());

        return redirect()->route('alat.index')->with('success', 'Alat berhasil diperbarui.');
    }

    public function destroy(AlatBahan $alat)
    {
        $alat->delete();
        return redirect()->route('alat.index')->with('success', 'Alat berhasil dihapus.');
    }
}
