class ProductManager {
    //Variable estática:
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, imagen, code, stock){

        //Validaciones: 
        //Que se agreguen todos los campos
        if(!title || !description || !price || !imagen || !code || !stock){
            console.log("Todos los campos son obligatorios");
            return;
        }

        //Que no se repita el code
        if(this.products.some(item => item.code === code)){
            console.log("El code ya existe");
            return;
        }

        //Crear el objeto

        const newProduct = {
            id: ++ProductManager.ultId, //Sumo a la variable estática, despues asigno
            title,
            description,
            price,
            imagen,
            code,
            stock
        }

        //Agrego el objeto al array
        
        this.products.push(newProduct);
    }

    getProducts(){
        return this.products;  
    }

    getProductbyId(id){
        const product = this.products.find(item => item.id === id);
        if(!product){
            console.log("Not found");
        } else {
            console.log("Producto encontrado", product);
        }
    }
}


//Testing:
//1) Crear instancia de la clase "ProductManager"

const manager = new ProductManager();

//2) Llamar a "getProducts" recien creada la instancia, devolver array vacio

console.log(manager.getProducts());

//3) Llamar a "addProduct" con campos: title, description, price, imagen, code, stock

manager.addProduct("dummyprod", "dummydesc", 100, "sinimagen", "1234", 10);

//El objeto tiene que agregarse con un id generado automaticamente sin repetirse
manager.addProduct("dummyprod2", "dummydesc2", 200, "sinimagen2", "abc321", 15);
//Llamar al método "addProduct" con los campos de arriba, debe arrojar un error porque el code ya existe
manager.addProduct("dummyprod3", "dummydesc3", 400, "sinimagen3", "1234", 12); //Acá repetí el code del producto 1 para que quede probado
//4) Llamar a "getProducts" para ver el array con el producto agregado

console.log(manager.getProducts());

//5) Evaluar que getProductsbyId devuelva error si no encuentra el producto, o que devuelva el producto en caso de encontrarlo

manager.getProductbyId(2);
manager.getProductbyId(73);