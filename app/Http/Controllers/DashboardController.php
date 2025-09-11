<?php

namespace App\Http\Controllers;

use App\Models\AlatBahan;
use App\Models\Transaksi;
use Inertia\Inertia;
class DashboardController extends Controller
{
    public function index() {
        return Inertia::render('Dashboard', [
            'totalAlat' => AlatBahan::sum('jumlah'),
            'alatRusak' => AlatBahan::where('kondisi', 'rusak')->count(),
            'alatHilang' => AlatBahan::where('kondisi', 'hilang')->count(),
            'dipinjam' => Transaksi::where('status', 'pinjam')->sum('jumlah_pinjam'),
            'riwayat' => Transaksi::with(['peminjam', 'alat'])->latest()->take(10)->get(),
        ]);
    }
}
