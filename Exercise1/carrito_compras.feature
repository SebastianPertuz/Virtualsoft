Feature: Agregar producto al carrito
    Como usuario puedo agregar productos
    al carrito de compras mientras 
    navego por la tienda en linea

    #Pagina web usada --- https://www.saucedemo.com/

    #Background es usado para ejecutar ciertos pasos antes de cada scenario
    Background:
        Given Ingreso con el usuario 'standard_user' y la contraseña 'secret_sauce' desde la pagina de inicio de sesion
        And Soy redirigido a la pagina principal
        And Hay al menos un producto mostrado en la pagina principal
        And El icono del carrito de compra es visible en la parte superior derecha de la pagina

    #El reporte de error para este test case se encuentra en la carpeta Exercise1
    Scenario: Agregar producto al carrito desde la pagina de detalles del producto
        When Selecciono un producto de la lista de productos en la pagina principal
        And Soy redirigido a los detalles del producto seleccionado
        And El carrito de compras esta vacio
        And Doy click en el boton 'Add to cart' 
        Then El producto es correctamente agregado al carrito de compras
        And El texto del boton del producto cambia a 'Remove'
        And El numero de productos en el carrito es '1'

    Scenario: Agregar productos desde la pagina principal
        And El carrito de compras esta vacio
        When Doy click en el boton 'Add to cart'
        And El texto del boton del producto cambia a 'Remove'
        Then El producto es correctamente agregado al carrito de compras
        And El numero de productos en el carrito es '1'

    Scenario: Agregar varios productos al carrito desde la pagina principal
        And El carrito de compras esta vacio
        When Doy click en el boton 'Add to cart' para los 3 primeros productos
        And El texto del boton del producto cambia a 'Remove'
        Then El producto es correctamente agregado al carrito de compras
        And El numero de productos en el carrito es '3'

    Scenario: Ingresando al carrito de compras
        And El carrito de compras esta vacio
        When Doy click en el boton 'Add to cart' para los 3 primeros productos
        And El texto del boton del producto cambia a 'Remove'
        Then El producto es correctamente agregado al carrito de compras
        And El numero de productos en el carrito es '3'
        When Doy click en el icono del carrito de compras
        And Soy redirigido a la pagina del carrito de compras
        Then La informacion de los productos es correctamente mostrada 

    Scenario: Eliminando productos desde el carrito de compras
        And El carrito de compras esta vacio
        When Doy click en el boton 'Add to cart' para los 3 primeros productos
        And El texto del boton del producto cambia a 'Remove'
        Then El producto es correctamente agregado al carrito de compras
        And El numero de productos en el carrito es '3'
        When Doy click en el icono del carrito de compras
        And Soy redirigido a la pagina del carrito de compras
        Then La informacion de los productos es correctamente mostrada
        And Doy click en el boton 'Remove'
        And El producto es eliminado del carrito correctamente

    Scenario: Proceso de compra de los productos
        And Hay al menos un producto agreagado en el carrito de compras
        When Doy click en el boton 'Checkout'
        And Completo los datos necesarios para la compra
        And Doy click en el boton 'Continue'
        And Soy redirigido a la pagina confirmacion de la compra
        And Verifico que los valores para los precios sean los correctos
        And Doy click en el boton 'Finish'
        Then La alerta con el texto 'Thank you for your order! Your order has been dispatched, and will arrive just as fast as the pony can get there!' es mostrada
        And Los productos son removidos del carrito de compras