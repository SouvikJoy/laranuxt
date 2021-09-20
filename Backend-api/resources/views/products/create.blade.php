@extends('base')

@section('main')
    <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <h1 class="display-3">Add New Product</h1>
            <div>
                @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div><br />
                @endif
                <form method="post" action="{{ route('products.store') }}">
                    @csrf
                    <div class="form-group">
                        <label for="name">Name: </label>
                        <input type="text" class="form-control" name="name"/>
                    </div>

                    <div class="form-group">
                        <label for="slug">Slug: </label>
                        <input type="text" class="form-control" name="slug"/>
                    </div>

                    <div class="form-group">
                        <label for="category">Category: </label>
                        <input type="text" class="form-control" name="category"/>
                    </div>

                    <div class="form-group">
                        <label for="brand">Brand: </label>
                        <input type="text" class="form-control" name="brand"/>
                    </div>
                    <div class="form-group">
                        <label for="price">Price: </label>
                        <input type="text" class="form-control" name="price"/>
                    </div>
                    <div class="form-group">
                        <label for="description">Description :</label>
                        <input type="text" class="form-control" name="description"/>
                    </div>
                    <div class="form-group">
                        <label for="shortDescription">Short Description:</label>
                        <input type="text" class="form-control" name="shortDescription"/>
                    </div>
                    <div class="form-group">
                        <label for="imageUrl_1">Image - 1 :</label>
                        <input type="text" class="form-control" name="imageUrl_1"/>
                    </div>
                    <div class="form-group">
                        <label for="imageUrl_2">Image - 2 :</label>
                        <input type="text" class="form-control" name="imageUrl_2"/>
                    </div>
                    <div class="form-group">
                        <label for="imageUrl_3">Image - 3 :</label>
                        <input type="text" class="form-control" name="imageUrl_3"/>
                    </div>
                    <button type="submit" class="btn btn-primary-outline">Add Product</button>
                </form>
            </div>
        </div>
    </div>
@endsection
