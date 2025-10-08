<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AlatBahanController;
use App\Http\Controllers\PeminjamController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/', [AuthController::class, 'showLogin'])->name('login');

Route::middleware('auth')->group(function() {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('alat', AlatBahanController::class);
    Route::resource('peminjaman', PeminjamController::class)->except(['create', 'edit', 'update']);
    
    Route::post('/peminjaman/{id}/approve', [PeminjamController::class, 'approve'])->name('peminjaman.approve');
    Route::post('/peminjaman/{id}/reject', [PeminjamController::class, 'reject'])->name('peminjaman.reject');
    Route::post('/peminjaman/{id}/return', [PeminjamController::class, 'return'])->name('peminjaman.return');
});