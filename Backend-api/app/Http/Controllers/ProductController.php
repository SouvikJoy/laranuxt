<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $products = Product::all();

        return view('products.index', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('products.create');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'slug'=>'required',
            'name'=>'required'
        ]);

        $product = new Product([
            'slug' => $request->get('slug'),
            'name' => $request->get('name'),
            'category' => $request->get('category'),
            'brand' => $request->get('brand'),
            'price' => $request->get('price'),
            'description' => $request->get('description'),
            'shortDescription' => $request->get('shortDescription'),
            'imageUrl_1' => $request->get('imageUrl_1'),
            'imageUrl_2' => $request->get('imageUrl_2'),
            'imageUrl_3' => $request->get('imageUrl_3'),
        ]);
        $product->save();
        return redirect('/products')->with('success', 'Product saved!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Product::findorFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $product = Product::find($id);

        return view('products.edit', compact('product'));
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'slug'=>'required',
            'name'=>'required'
        ]);

        $product = Product::find($id);
        $product->slug = $request->get('slug');
        $product->name =  $request->get('name');
        $product->category = $request->get('category');
        $product->brand = $request->get('brand');
        $product->price = $request->get('price');
        $product->description = $request->get('description');
        $product->shortDescription = $request->get('shortDescription');
        $product->imageUrl_1 = $request->get('imageUrl_1');
        $product->imageUrl_2 = $request->get('imageUrl_2');
        $product->imageUrl_3 = $request->get('imageUrl_3');
        $product->save();

        return redirect('/products')->with('success', 'Product updated!');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();

        return redirect('/products')->with('success', 'Product deleted!');
    }
}
