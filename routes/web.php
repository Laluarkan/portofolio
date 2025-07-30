<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/', [PortfolioController::class, 'index']);
Route::get('/about', [PortfolioController::class, 'about']);
Route::get('/projects', [PortfolioController::class, 'projects']);
Route::get('/contact', [PortfolioController::class, 'contact']);