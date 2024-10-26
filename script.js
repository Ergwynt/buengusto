$(document).ready(function() {
    $.getJSON('./productos.json', function (data) {
        $('.menu-btn').click(function () {
            var categoriaSeleccionada = $(this).data('category');
            console.warn('Categoría seleccionada:', categoriaSeleccionada);

            // Mapeo de categorías y sus subcategorías
            var categoriasMap = {
                "bebidas": ["Calientes", "Refrescos", "Alcohólicas"],
                "primer-plato": ["Ensalada", "Sopa"],
                "segundo-plato": ["Carne", "Pescado", "Vegetariano"],
                "postres": ["Frutas", "Dulces"]
            };

            // Verifico si la categoría seleccionada está en el mapa
            if (categoriasMap[categoriaSeleccionada]) {
                $('.sub-menu').empty();
                $('.product-list').empty();

                // Iterar sobre cada categoría de la categoría seleccionada
                categoriasMap[categoriaSeleccionada].forEach(function (categoria) {
                    if (data[categoria]) {
                        // Crear un botón para cada categoría
                        var botonCategoria = $('<button>' + categoria + '</button>').addClass('boton-categoria');
                        $('.sub-menu').append(botonCategoria); // Agregar el botón al submenú

                        // Asignar el evento clic al botón recién creado
                        botonCategoria.click(function() {
                            $('.product-list').empty();
                            console.log('Productos en la categoría:', categoria);
                            data[categoria].forEach(function (producto) {

                                var productoContenedor = $('<div class="producto"></div>').addClass('productoContenedor');
                                var nombreProducto = $('<span>' + producto.nombre + '</span>');

                                var botonMenos = $('<button>-</button>').addClass('boton-menos');
                                var botonMas = $('<button>+</button>').addClass('boton-mas');
                                var contador = $('<span class="contador">0</span>');

                                productoContenedor.data('producto', producto.nombre);
                                
                                botonMenos.click(function() {
                                    var count = parseInt(contador.text());
                                    if (count > 0) {
                                        contador.text(count - 1);
                                    }
                                });

                                botonMas.click(function() {
                                    var count = parseInt(contador.text());
                                    contador.text(count + 1);
                                });

                                productoContenedor.append(nombreProducto, botonMenos, contador, botonMas);
                                $('.product-list').append(productoContenedor);
                            });
                        });
                    }
                });
            }
        });

        
        $('#enviarComanda').click(function () {
            // Obtener los productos seleccionados
            var productosSeleccionados = [];
            $('.producto').each(function () {
                var nombreProducto = $(this).data('producto');
                var cantidad = parseInt($(this).find('.contador').text());
                if (cantidad > 0) {
                    productosSeleccionados.push(nombreProducto + ' (Cantidad: ' + cantidad + ')');
                }
            });

            $('#productos-seleccionados').empty();
            if (productosSeleccionados.length > 0) {
                productosSeleccionados.forEach(function (producto) {
                    $('#productos-seleccionados').append('<li>' + producto + '</li>');
                });
            } else {
                $('#productos-seleccionados').append('<li>No se seleccionaron productos.</li>');
            }

            $('#mensaje-confirmacion').show();
        });
    });
});




