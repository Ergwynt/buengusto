$.getJSON('./productos.json', function (data) {
    $('.menu-btn').click(function () {

        var categoriaSeleccionada = $(this).data('category');
        console.warn('Categoría seleccionada:', categoriaSeleccionada);

        // Verifico si la categoría seleccionada es "bebidas"
        if (categoriaSeleccionada === "bebidas") {

            var categoriasBebidas = ["Calientes", "Refrescos", "Alcohólicas"];

            // Iterar sobre cada categoría de bebidas
            categoriasBebidas.forEach(function (categoria) {
                
                if (data[categoria]) {
                    // Crear un botón para cada categoría
                    var botonCategoria = $('<button>' + categoria + '</button>').addClass('boton-categoria');
                    $('.sub-menu').append(botonCategoria); // Agregar el botón al submenú

                    // Asignar el evento clic al botón recién creado
                    botonCategoria.click(function() {
                        console.log('Productos en la categoría:', categoria);
                        data[categoria].forEach(function (producto) {
                            $('.product-list').append('<li>'+producto.nombre+'</li>')
                        });
                    });
                }
            });
        }
        else if (categoriaSeleccionada === "primer-plato") {

            var categoriasBebidas = ["Ensalada", "Sopa",];

            // Iterar sobre cada categoría de bebidas
            categoriasBebidas.forEach(function (categoria) {

                if (data[categoria]) {
                    $('.sub-menu').html('<button></button>')
                    console.warn(categoria);
                    data[categoria].forEach(function (producto) {
                        console.log('Producto:', producto.nombre);
                    });
                }
            });
        } else if (categoriaSeleccionada === "segundo-plato") {

            var categoriasBebidas = ["Carne", "Pescado", "Vegetariano"];

            // Iterar sobre cada categoría de bebidas
            categoriasBebidas.forEach(function (categoria) {

                if (data[categoria]) {
                    $('.sub-menu').html('<button></button>')
                    console.warn(categoria);
                    data[categoria].forEach(function (producto) {
                        console.log('Producto:', producto.nombre);
                    });
                }
            });
        } else if (categoriaSeleccionada === "postres") {

            var categoriasBebidas = ["Frutas", "Dulces",];

            // Iterar sobre cada categoría de bebidas
            categoriasBebidas.forEach(function (categoria) {

                if (data[categoria]) {
                    $('.sub-menu').html('<button></button>')
                    console.warn(categoria);
                    data[categoria].forEach(function (producto) {
                        console.log('Producto:', producto.nombre);
                    });
                }
            });
        }

    });
});


