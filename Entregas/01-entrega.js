
class ProductManger {
    constructor (){
        this.products=[{id:1}]
    }

    getProduct(){   
        return this.products
    }

    addProduct(){
       
    }


    getPrudctosById(id){
        const idProduct = this.products.find(idProduct => idProduct.id === id)
        return idProduct ? console.log(`Este es el ID del Producto ${idProduct}`) : console.error('Not Found ❌')
    }
}

const productManager = new ProductManger()

productManager.getPrudctosById(1)
productManager.getProduct()

