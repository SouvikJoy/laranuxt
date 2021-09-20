@extends('base')
@section('main')
    <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <h1 class="display-3">Update a contact</h1>

            @if ($errors->any())
                <div class="alert alert-danger">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
                <br />
            @endif
            <form method="post" action="{{ route('products.update', $product->id) }}">
                @method('PATCH')
                @csrf
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" class="form-control" name="name" value={{ $product->name }} />
                </div>

                <div class="form-group">
                    <label for="slug">Slug:</label>
                    <input type="text" class="form-control" name="slug" value={{ $product->slug }} />
                </div>

                <div class="category">
                    <label for="category">Category</label>
                    <input type="text" class="form-control" name="category" value={{ $product->category }} />
                </div>

                <div class="form-group">
                    <label for="brand">brand:</label>
                    <input type="text" class="form-control" name="brand" value={{ $product->brand }} />
                </div>

                <div class="form-group">
                    <label for="price">price:</label>
                    <input type="text" class="form-control" name="price" value={{ $product->price }} />
                </div>

                <div class="form-group">
                    <label for="description">Description:</label>
                    <input type="text" class="form-control" name="description" value={{ $product->description }} />
                </div>

                <div class="form-group">
                    <label for="shortDescription">Short Description:</label>
                    <input type="text" class="form-control" name="shortDescription" value={{ $product->shortDescription }} />
                </div>

                <div class="form-group">
                    <label for="imageUrl_1">imageUrl_1:</label>
                    <input type="text" class="form-control" name="imageUrl_1" value={{ $product->imageUrl_1 }} />
                </div>

                <div class="form-group">
                    <label for="imageUrl_2">imageUrl_2:</label>
                    <input type="text" class="form-control" name="imageUrl_2" value={{ $product->imageUrl_2 }} />
                </div>

                <div class="form-group">
                    <label for="imageUrl_3">imageUrl_3:</label>
                    <input type="text" class="form-control" name="imageUrl_3" value={{ $product->imageUrl_3 }} />
                </div>

                <button type="submit" class="btn btn-primary">Update</button>
            </form>
        </div>
    </div>
@endsection
