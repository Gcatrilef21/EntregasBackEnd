
class ProductManger {
    constructor (){
        this.products=[{code:4}]
    }

    getProduct(){   
        let prod = this.products
        //return console.log(prod)
    }

    /* addProduct(nombre, description, price, thumbnail, code, stock){

        let code= 1
        if(code)

        
    } */


    getProductById(code){
        const idProduct = this.products.find(product => product.code === code)
        //console.log(idProduct)
        return idProduct 
            ? console.log(`Este es el ID del Producto ${idProduct.code}`) 
            : console.error('Not Found ❌')
    }
}

const productManager = new ProductManger()

productManager.getProductById(4)
productManager.getProduct()

