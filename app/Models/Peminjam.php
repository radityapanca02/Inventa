<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peminjam extends Model
{
    use HasFactory;

    protected $table = 'peminjams';
    protected $primaryKey = 'id_peminjam';
    protected $fillable = [
        'nama_peminjam',
        'email',
        'kontak',
        'alamat',
        'instansi',
        'alasan',
        'status'
    ];

    public function peminjaman()
    {
        return $this->hasMany(Peminjaman::class, 'id_peminjam');
    }
}