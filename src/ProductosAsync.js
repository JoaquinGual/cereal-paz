const products = [
    { 
        id: '1', 
        nombre: 'Marquise de Chocolate', 
        precio: 1200, 
        ingredientes: 'Chocolate, Cacao Amargo, Huevos, Escencia de Vainilla, Harina 0000, Dulce de leche, Merengue', 
        img:'https://i.ytimg.com/vi/ebgCov6FmV8/maxresdefault.jpg', 
        stock: 25, 
        descripcion:'Base de Marquise de Chocolate decorada con una capa de Dulce de leche y Copos de Merengue'
    },
    { 
        id: '2', 
        nombre: 'Chocotorta', 
        precio: 1000, 
        ingredientes: 'Galletas Chocolinas, Queso Crema, Dulce de Leche', 
        img:'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/09/14170007/chocotorta-destacada.jpg', 
        stock: 25, 
        descripcion:'Capas de Galletas Chocolinas con Queso Crema y Dulce de Leche'
    },
    { 
        id: '3', 
        nombre: 'CheeseCake de Frutos Rojos', 
        precio: 1500, 
        ingredientes: 'Galletas de Vainilla, Manteca, Queso Mascarpone, Crema de Leche, Escencia de Vainilla, Gelatina sin Sabor y Frutos Rojos', 
        img:'https://recetascheesecake.com/wp-content/uploads/cheesecake-frutos-rojos.jpg', 
        stock: 25, 
        descripcion:'Base de Galletas de Vainilla rellena de Cheese Cream decorada de Mermelada de frutos Rojos'
    },
  ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}