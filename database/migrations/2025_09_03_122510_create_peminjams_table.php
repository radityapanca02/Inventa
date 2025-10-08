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
        Schema::create('peminjams', function (Blueprint $table) {
            $table->id('id_peminjam');
            $table->string('nama_peminjam', 100);
            $table->string('email', 100)->nullable();
            $table->string('kontak', 20);
            $table->string('alamat')->nullable();
            $table->string('instansi', 100)->nullable();
            $table->string('alasan', 255);
            $table->enum('status', ['active', 'blocked'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('peminjams');
    }
};