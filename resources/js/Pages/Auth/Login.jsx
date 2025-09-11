import { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
            <Head title='Login Page' />
            <div className="w-full max-w-md bg-white p-8 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="logo items-center justify-center flex">
                    <img src="image/logo.png" alt="logo" className="rounded-full size-20"/>
                </div>
                <div className="text-center mb-6">
                    <p className="text-gray-700 font-bold text-lg">Login Admin</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input type="text" 
                            placeholder="Email atau Username"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300" />
                            {errors.email && <p className='text-red-500 text-sm'> {errors.email} </p>}
                    </div>
                    <div>
                        <input type="password"
                            placeholder='Password'
                            value={data.password}
                            onChange={(e) => setData("password", e.target.value)}
                            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-purple-300" />
                            {errors.password && <p className='text-red-500 text-sm'> {errors.password} </p>}
                    </div>

                    <div className="flex items-center justify-between">
                        <label className="flex items-center text-sm text-gray-600 hover:cursor-pointer">
                            <input type="checkbox"
                                checked={data.remember}
                                onChange={(e) => setData("remember", e.target.checked)}
                                className="mr-2 rounded-md focus:ring-purple-300" />
                                Ingat Saya
                        </label>
                        <a href="#" className="text-sm text-purple-500 hover:underline">Lupa Password ?</a>
                    </div>

                    <button 
                        type="submit"
                        disabled={processing}
                        className="w-full py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white rounded-lg hover:opacity-90 transition">
                            {processing ? "Proses Login..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}