<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
        'deskripsi',
    ];
}
