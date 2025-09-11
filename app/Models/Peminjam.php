<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Peminjam extends Model
{
    use HasFactory;

    protected $table = 'peminjams';
    protected $primaryKey = 'id_peminjam';

    protected $fillabe = [
        'nama_peminjam',
        'kontak',
        'alasan',
    ];
}
