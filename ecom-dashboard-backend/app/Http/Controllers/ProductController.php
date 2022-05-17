<?php

namespace App\Http\Controllers;

use GuzzleHttp\Handler\Proxy;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    function addProduct(Request $req)
    {
        // return $req->file('file')->store('products'); // untuk membuat atau upload file gambar dengan API. location Storage/App/Product
        $product = new Product;
        $product->name = $req->input('name');
        $product->file_path = $req->file('file')->store('products');
        $product->description = $req->input('description');
        $product->price = $req->input('price');
        $product->save();
        return $req->input();
    }

    function listProduct()
    {
        return Product::all();
    }
}
