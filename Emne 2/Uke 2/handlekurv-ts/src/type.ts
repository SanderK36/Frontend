

export type App = {
    currentPage: 'products'
}
export type Product = {
     id: string
     name: string
     price: number
     description: string
     image: string
     category: string
}

export type Products = [{product:Product}]

export type cartItem = {product:Product, quantity:number}


//EXPORT
//export type {App,Product,Products,cartItem} 
//eller
//export type Products = [product:Product]