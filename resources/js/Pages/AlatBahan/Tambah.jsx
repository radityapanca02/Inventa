import React from "react";
import { useForm, Link } from "@inertiajs/react";
import Swal from 'sweetalert2';

export default function Tambah() {
    const { data, setData, post, errors, processing } = useForm({
        nama_alat: "",
        jenis: "",
        kondisi: "baik",
        jumlah: "",
        deskripsi: "",
    });

    const submit = (e) => {
        e.preventDefault();
        
        post(route("alat.store"), {
            onSuccess: () => {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil!',
                    text: 'Alat/Bahan berhasil ditambahkan',
                    timer: 3000,
                    showConfirmButton: false,
                    toast: true,
                    position: 'top-end'
                });
            },
            onError: (errors) => {
                if (errors.kondisi) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Nilai kondisi tidak valid. Pilih opsi yang tersedia.',
                        timer: 4000,
                        showConfirmButton: true,
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Gagal!',
                        text: 'Gagal menambahkan alat/bahan. Silakan cek form Anda.',
                        timer: 3000,
                        showConfirmButton: false,
                        toast: true,
                        position: 'top-end'
                    });
                }
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4 md:p-8">
            <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Tambah Alat/Bahan</h1>
                    <p className="text-gray-600">Tambahkan alat/bahan baru ke inventaris</p>
                </div>
                
                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Alat/Bahan</label>
                        <input 
                            type="text"
                            value={data.nama_alat}
                            onChange={(e) => setData("nama_alat", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Masukkan nama alat/bahan"
                        />
                        {errors.nama_alat && <p className="text-red-500 text-sm mt-1">{errors.nama_alat}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jenis</label>
                        <select
                            value={data.jenis}
                            onChange={(e) => setData("jenis", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                        >
                            <option value="">Pilih Jenis</option>
                            <option value="alat">Alat</option>
                            <option value="bahan">Bahan</option>
                        </select>
                        {errors.jenis && <p className="text-red-500 text-sm mt-1">{errors.jenis}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kondisi</label>
                        <select
                            value={data.kondisi}
                            onChange={(e) => setData("kondisi", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            required
                        >
                            <option value="baik">Baik</option>
                            <option value="baru">Baru</option>
                            <option value="rusak">Rusak</option>
                            <option value="hilang">Hilang</option>
                        </select>
                        {errors.kondisi && <p className="text-red-500 text-sm mt-1">{errors.kondisi}</p>}
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
                        <input 
                            type="number"
                            value={data.jumlah}
                            onChange={(e) => setData("jumlah", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Masukkan jumlah"
                            min="0"
                            required
                        />
                        {errors.jumlah && <p className="text-red-500 text-sm mt-1">{errors.jumlah}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                        <input 
                            value={data.deskripsi}
                            onChange={(e) => setData("deskripsi", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Masukkan deskripsi"
                            min="0"
                            required
                        />
                        {errors.deskripsi && <p className="text-red-500 text-sm mt-1">{errors.deskripsi}</p>}
                    </div>

                    <div className="flex space-x-4 pt-2">
                        <Link 
                            href={route("alat.index")}
                            className="w-1/3 flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                        >
                            Batal
                        </Link>
                        <button 
                            type="submit"
                            disabled={processing}
                            className="w-2/3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 flex items-center justify-center"
                        >
                            {processing ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Menyimpan...
                                </>
                            ) : "Tambah Data"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
} 