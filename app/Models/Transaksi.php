<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Transaksi extends Model
{
    use HasFactory;

    protected $table = 'transaksis';
    protected $primaryKey = 'id_transaksi';

    public $fillabe = [
        'id_peminjam',
        'id_alat',
        'jumlah_pinjam',
        'tgl_pinjam',
        'tgl_kembali',
        'status',
    ];

    public function peminjam() {
        return $this->belongsTo(Peminjam::class, 'id_peminjam');
    }

    public function alat() {
        return $this->belongsTo(AlatBahan::class, 'id_alat');
    }
}
