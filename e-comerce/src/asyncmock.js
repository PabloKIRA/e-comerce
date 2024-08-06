const items = [
    {   id: 1,
        nombre:"mate",
        precio:30000,
        stock: 10,
        categoria: "mate",
        image:"https://acdn.mitiendanube.com/stores/635/133/products/img_75521-4531382075931ee0a616723175999395-640-0.jpg"
    },
    {   id: 2,
        nombre:"zapato",
        precio:3000,
        stock: 13,
        categoria: "calzado"
    },
    {   id: 3,
        nombre:"termo",
        precio:60000,
        stock: 10,
        categoria:"mate"
    },
    {   id: 4,
        nombre:"zapatilla",
        precio:300000,
        stock: 1,
        categoria:"calzado"
    },
    {   id: 5,
        nombre:"celular",
        precio:300000,
        stock: 1,
        categoria:"tec"
    },
    {   id: 6,
        nombre:"notebook",
        precio:300000,
        stock: 1,
        categoria:"tec"
    },
    {   id: 7,
        nombre:"zapatilla Nike",
        precio:300000,
        stock: 1,
        categoria:"calzado"
    },
]


export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 2000);
    })
}

export const getProductById = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id*1))            
        }, 500);
    })
}