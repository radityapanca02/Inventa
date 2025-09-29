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
        Schema::create('alat_bahans', function (Blueprint $table) {
            $table->id('id_alat');
            $table->string('nama_alat', 100);
            $table->string('jenis', 23);
            $table->enum('kondisi', ['baik', 'baru', 'hilang', 'rusak'])->default('baik');
            $table->integer('jumlah');
            $table->text('deskripsi');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alat_bahans');
    }
};
