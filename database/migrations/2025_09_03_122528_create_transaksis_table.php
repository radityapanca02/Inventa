<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transaksis', function (Blueprint $table) {
            $table->id('id_transaksi');
            $table->unsignedBigInteger('id_peminjam');
            $table->unsignedBigInteger('id_alat');
            $table->integer('jumlah_pinjam');
            $table->date('tgl_pinjam');
            $table->date('tgl_kembali')->nullable();
            $table->enum('status', ['pinjam', 'kembali'])->default('pinjam');
            $table->timestamps();

            $table->foreign('id_peminjam')->references('id_peminjam')->on('peminjams')->onDelete('cascade');
            $table->foreign('id_alat')->references('id_alat')->on('alat_bahans')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaksis');
    }
};
