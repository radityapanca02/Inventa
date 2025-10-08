<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AlatBahan extends Model
{
    use HasFactory;

    protected $table = 'alat_bahans';
    protected $primaryKey = 'id_alat';
    protected $fillable = [
        'nama_alat',
        'jenis',
        'kondisi',
        'jumlah',
        'deskripsi'
    ];

    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class, 'id_peminjaman');
    }

    public function getJumlahTersediaAttribute()
    {
        $dipinjam = $this->peminjaman()
            ->whereIn('status', ['disetujui', 'dipinjam'])
            ->sum('jumlah_pinjam');
            
        return $this->jumlah - $dipinjam;
    }
}