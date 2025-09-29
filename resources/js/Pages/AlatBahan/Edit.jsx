import React, { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "@inertiajs/react";

export default function Edit({ alat }) {
    const { data, setData, put, errors, processing, reset } = useForm({
        nama_alat: alat.nama_alat || "",
        jenis: alat.jenis || "",
        kondisi: alat.kondisi || "baik",
        jumlah: alat.jumlah || 0,
        deskripsi: alat.deskripsi || "",
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("alat.update", alat.id_alat), {
            onSuccess: () => {
                toast.success("Alat/Bahan berhasil diperbarui!");
            },
            onError: () => {
                toast.error("Gagal memperbarui alat/bahan. Silakan cek form Anda.");
            }
        });
    };

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 p-4 md:p-8">
            <Toaster
                position="top-right"
                toastOptions={{
                    duration: 4000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: '#4ade80',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        duration: 4000,
                        iconTheme: {
                            primary: '#ef4444',
                            secondary: '#fff',
                        },
                    },
                }}
            />

            <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Edit Alat/Bahan</h1>
                    <p className="text-gray-600">Perbarui informasi alat/bahan</p>
                </div>

                <form onSubmit={submit} className="space-y-6">
                    {/* Nama Alat */}
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

                    {/* Jenis */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jenis</label>
                        <select
                            value={data.jenis}
                            onChange={(e) => setData("jenis", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        >
                            <option value="">Pilih jenis</option>
                            <option value="alat">Alat</option>
                            <option value="bahan">Bahan</option>
                        </select>
                        {errors.jenis && <p className="text-red-500 text-sm mt-1">{errors.jenis}</p>}
                    </div>

                    {/* Kondisi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Kondisi</label>
                        <select
                            value={data.kondisi}
                            onChange={(e) => setData("kondisi", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                        >
                            <option value="baik">Baik</option>
                            <option value="baru">Baru</option>
                            <option value="rusak">Rusak</option>
                            <option value="hilang">Hilang</option>
                        </select>
                        {errors.kondisi && <p className="text-red-500 text-sm mt-1">{errors.kondisi}</p>}
                    </div>

                    {/* Jumlah */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah</label>
                        <input
                            type="number"
                            value={data.jumlah}
                            onChange={(e) => setData("jumlah", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Masukkan jumlah"
                            min="0"
                        />
                        {errors.jumlah && <p className="text-red-500 text-sm mt-1">{errors.jumlah}</p>}
                    </div>

                    {/* Deskripsi */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
                        <textarea
                            value={data.deskripsi}
                            onChange={(e) => setData("deskripsi", e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                            placeholder="Masukkan deskripsi alat/bahan"
                            rows="3"
                        />
                        {errors.deskripsi && <p className="text-red-500 text-sm mt-1">{errors.deskripsi}</p>}
                    </div>

                    {/* Tombol Aksi */}
                    <div className="flex space-x-4 pt-2">
                        <Link
                            href="/alat"
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
                            ) : "Simpan Perubahan"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
