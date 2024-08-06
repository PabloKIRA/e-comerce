const items = [
    {   id: 1,
        nombre:"Mate",
        precio:25000,
        stock: 10,
        categoria: "mate",
        image:"https://acdn.mitiendanube.com/stores/635/133/products/img_75521-4531382075931ee0a616723175999395-640-0.jpg"
    },
    {   id: 2,
        nombre:"Zapato",
        precio:3000,
        stock: 13,
        categoria: "calzado"
        ,image:"https://www.corbataslester.com/magazine/wp-content/uploads/2018/01/oxford02.jpg"
    },
    {   id: 3,
        nombre:"Termo",
        precio:60000,
        stock: 10,
        categoria:"mate"
        ,image:"https://mla-s1-p.mlstatic.com/709841-MLA32566444815_102019-F.jpg"
        
    },
    {   id: 4,
        nombre:"Zapatilla Asics Trainer",
        precio:300000,
        stock: 1,
        categoria:"calzado"
        ,image:"https://www.deportesapalategui.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/6/t624n_9007_f_de_althalf3_lr.jpg"
    },
    {   id: 5,
        nombre:"Smartphone Samsung A54 5G ",
        precio:300000,
        stock: 1,
        categoria:"tec"
        ,image:"https://samsungar.vtexassets.com/arquivos/ids/187463-800-auto?width=800&height=auto&aspect=true"   
    },
    {   id: 6,
        nombre:"Notebook LENOVO",
        precio:300000,
        stock: 1,
        categoria:"tec"
        ,image:"https://i5.walmartimages.com/asr/a9695efc-89cc-40de-8ca2-703812bb8af8.39a06f7ec8200bc9cf7a9fe77973c2ad.jpeg"
    },
    {   id: 7,
        nombre:"Running Nike",
        precio:200000,
        stock: 1,
        categoria:"calzado"
    ,image:"https://www.deportesapalategui.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/5/652925-404_b1_a.jpg"
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