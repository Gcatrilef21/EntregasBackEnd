/* 
✅ Formato del entregable =  ProductManager.js 
*/

const fs = require ('fs')


class ProductManager{
    constructor(){
        this.path = '/Archivo/archivo.txt'
    }

/*   ⭕  Debe tener un método getProducts, el cual debe leer el archivo de productos y devolver todos los productos en formato de arreglo. */
    getProducts(){    
        let product = this.path
        if(product){

        }
    }

    /* ⭕ Debe tener un método addProduct el cual debe recibir un objeto con el formato previamente especificado, asignarle un id autoincrementable y guardarlo en el arreglo (recuerda siempre guardarlo como un array en el archivo). */

    addProduct(){

    }

    /*  ⭕Debe tener un método getProductById, el cual debe recibir un id, y tras leer el archivo, debe buscar el producto con el id especificado y devolverlo en formato objeto 
    */

    getProductById(){

    }


    /* ⭕ .Debe tener un método updateProduct, el cual debe recibir el id del producto a actualizar, así también como el campo a actualizar (puede ser el objeto completo, como en una DB), y debe actualizar el producto que tenga ese id en el archivo. NO DEBE BORRARSE SU ID */ 

    updateProduct(){

    }


    /* ⭕ .Debe tener un método deleteProduct, el cual debe recibir un id y debe eliminar el producto que tenga ese id en el archivo. */
    deleteProduct(){

    }
}