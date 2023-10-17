
class ProductManger {
    constructor (){
        this.products=[]
    }

    getProduct(){   
        let prod = this.products
        return console.log(prod) 
    }

    addProduct(nombre, description, price, thumbnail, stock){

        let code = 1

        if (this.products.length > 0) {
            code = this.products[this.products.length-1].code + 1 
        }else {
            console.error('Producto & Code ya existen',)
        }

        let newProduct = {
            code,
            nombre,
            description,
            price,
            thumbnail,
            stock
        }


        this.products.push(newProduct)
    }


    getProductById(code){
        const idProduct = this.products.find(product => product.code === code)
        //console.log(idProduct)
        return idProduct 
            ? console.log(`Este es el ID del Producto ${idProduct.code}`) 
            : console.error('Not Found ❌')
    }
}

const productManager = new ProductManger()


productManager.addProduct('edam','Griego',7990,'img',10)
productManager.addProduct('stilton','Ingles',5990,'img',8)
productManager.addProduct('Feta','Turco',5990,'img',5)
productManager.getProductById(3)

productManager.getProduct()



