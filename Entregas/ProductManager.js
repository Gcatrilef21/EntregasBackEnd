
const fs = require ('fs')

class ProductManager{
    constructor(){
        this.path = '../Archivo/products.json'
    }

    static id = 0
    
    getProducts() { 
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path))
        }else {
            return []
        }
    }

    addProduct (title, description, price, code, thumbnail, stock) {
        let products = this.getProducts()

        ProductManager.id++
        
        let newProduct = {
            id: ProductManager.id,
            title,
            description,
            price,
            code,
            thumbnail,
            stock
        }

        let exist = products.find(prod => prod.code === code)

        if(exist){
            console.error(`Producto ya existe con el codigo ${code} en BBDD`)
            return
        }
        products.push(newProduct)
        
        fs.writeFileSync(this.path, JSON.stringify(products,null,8))

        
    }
}

const product = new ProductManager


product.addProduct('Feta','es un queso Turco',200,'asd123','img',10)
//product.addProduct('Stilton','es un queso Ingles',5990,'qwe123','img',8)
product.addProduct('Camembert', 'es un queso de origen francés',7557, 'zxc3211', 'img', 231 )
product.addProduct('Maasdam', 'es un queso de origen suizo-holandés',10990, 'poi098', 'img', 15 )
product.addProduct('Maasdam', 'es un queso de origen suizo-holandés',10990, 'poi098', 'img', 15 )


//cconsole.log(product.getProducts())
