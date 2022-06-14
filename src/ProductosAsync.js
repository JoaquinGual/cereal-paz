const products = [
    { 
        id: '1', 
        nombre: 'Marquise de Chocolate', 
        precio: 1200, 
        ingredientes: 'Chocolate, Cacao Amargo, Huevos, Escencia de Vainilla, Harina 0000, Dulce de leche, Merengue', 
        img:'https://i.ytimg.com/vi/ebgCov6FmV8/maxresdefault.jpg', 
        stock: 25, 
        categoria: 'premium',
        descripcion:'Base de Marquise de Chocolate decorada con una capa de Dulce de leche y Copos de Merengue'
    },
    { 
        id: '2', 
        nombre: 'Chocotorta', 
        precio: 1000, 
        ingredientes: 'Galletas Chocolinas, Queso Crema, Dulce de Leche', 
        img:'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg', 
        stock: 25, 
        categoria: 'basico',
        descripcion:'Capas de Galletas Chocolinas con Queso Crema y Dulce de Leche'
    },
    { 
        id: '3', 
        nombre: 'CheeseCake de Frutos Rojos', 
        precio: 1500, 
        ingredientes: 'Galletas de Vainilla, Manteca, Queso Mascarpone, Crema de Leche, Escencia de Vainilla, Gelatina sin Sabor y Frutos Rojos', 
        img:'https://recetascheesecake.com/wp-content/uploads/cheesecake-frutos-rojos.jpg', 
        stock: 25, 
        categoria: 'premium',
        descripcion:'Base de Galletas de Vainilla rellena de Cheese Cream decorada de Mermelada de frutos Rojos'
    },
    { 
        id: '4', 
        nombre: 'Selva Negra', 
        precio: 1000, 
        ingredientes: 'Chocolate, Azucar, Harina, Huevos, Licor Kirsch', 
        img:'https://media.mykaramelli.com/galeria/recetas/receta-tarta-selva-negra_129_1.jpg', 
        stock: 25, 
        categoria:'premium',
        descripcion:'Capas de Galletas Chocolinas con Queso Crema y Dulce de Leche'
    },
    { 
        id: '5', 
        nombre: 'Turron de Quaker', 
        precio: 1500, 
        ingredientes: 'Galletas de Vainilla, Manteca, Queso Mascarpone, Crema de Leche, Escencia de Vainilla, Gelatina sin Sabor y Frutos Rojos', 
        img:'https://elgourmet.s3.amazonaws.com/recetas/cover_ipk5fgqbdh_eg-pf-platos-turron-de-avena-hi-03.jpg', 
        stock: 25, 
        categoria: 'basico',
        descripcion:'Base de Galletas de Vainilla rellena de Cheese Cream decorada de Mermelada de frutos Rojos'
    },
    { 
        id: '6', 
        nombre: 'Lemon Pie', 
        precio: 1000, 
        ingredientes: 'Galletas Chocolinas, Queso Crema, Dulce de Leche', 
        img:'https://www.annarecetasfaciles.com/files/lemon-pie-scaled.jpg', 
        stock: 25, 
        categoria: 'premium',
        descripcion:'Capas de Galletas Chocolinas con Queso Crema y Dulce de Leche'
    },
    { 
        id: '7', 
        nombre: 'Tiramisu', 
        precio: 1500, 
        ingredientes: 'Galletas de Vainilla, Manteca, Queso Mascarpone, Crema de Leche, Escencia de Vainilla, Gelatina sin Sabor y Frutos Rojos', 
        img:'https://images.aws.nestle.recipes/original/de34e8d407c1b2a71b8f2016b7ff066f_tiramisu.png', 
        stock: 25, 
        categoria: 'premium',
        descripcion:'Base de Galletas de Vainilla rellena de Cheese Cream decorada de Mermelada de frutos Rojos'
    },
    
  ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 0)
    })
}

export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === id))
        }, 0)
    })
}

export const getProductsByCategory = (categoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.categoria === categoria))
        }, 0)
    })
}