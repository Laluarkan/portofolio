<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $name = "Nama Lengkap Anda";
        $title = "Pengembang Web | Desainer UI/UX";
        return view('portofolio.home', compact('name', 'title'));
    }

    public function about()
    {
        $skills = ['PHP', 'Laravel', 'JavaScript', 'HTML', 'CSS', 'Database'];
        return view('portofolio.about', compact('skills'));
    }

    public function projects()
    {
        $projects = [
            [
                'title' => 'Sistem Informasi Mahasiswa',
                'description' => 'Aplikasi web untuk mengelola data mahasiswa, mata kuliah, dan nilai.',
                'image' => 'https://via.placeholder.com/300x200?text=Project+1',
                'link' => '#'
            ],
            [
                'title' => 'Sistem Prediksi Penyakit',
                'description' => 'Aplikasi web untuk mengelola data mahasiswa, mata kuliah, dan nilai.',
                'image' => 'https://via.placeholder.com/300x200?text=Project+1',
                'link' => '#'
            ],
            [
                'title' => 'Website E-commerce Sederhana',
                'description' => 'Platform belanja online dengan fitur keranjang dan pembayaran.',
                'image' => 'https://via.placeholder.com/300x200?text=Project+2',
                'link' => '#'
            ],
            [
                'title' => 'Aplikasi Manajemen Tugas',
                'description' => 'Alat untuk mengatur dan melacak tugas harian dengan antarmuka yang intuitif.',
                'image' => 'https://via.placeholder.com/300x200?text=Project+3',
                'link' => '#'
            ],
        ];
        return view('portofolio.projects', compact('projects'));
    }

    public function contact()
    {
        return view('portofolio.contact');
    }
}