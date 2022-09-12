

{
    //! Explicación

    ///  Crear una clase de cola




    // Al igual que las pilas, las colas son una colección de elementos. Pero a diferencia de las pilas, las colas siguen el principio FIFO (primero en entrar, primero en salir). Los elementos agregados a una cola se colocan al final, o al final, de la cola, y solo se permite eliminar el elemento que se encuentra al principio de la cola.

    // Las colas son similares a las pilas, excepto que el punto de inserción es diferente del punto de eliminación.

    // Agregamos en un extremo de la cola y eliminamos del otro extremo.

    // Esta vez, lo llamamos Primero en entrar, primero en salir (FIFO).

    // Podríamos usar una matriz para representar una cola, pero al igual que las pilas, queremos limitar la cantidad de control que tenemos sobre nuestras colas.

    // Los dos métodos principales de una clase de cola son el método enqueue() y el dequeue(). El método enqueue()para agregar elementos , y el método dequeue() para sacar elementos . Otros métodos útiles son los métodos front(), size() e isEmpty().

    //  Una cola es una estructura de datos abstracta.


    // En este desafío necesitamos implementar los métodos enqueue(), dequeue(), front(), size().isEmpty()

    // enqueue()- Este método para agregar elementos
    // dequeue()- Este método elimina el primer elemento de la cola.
    // front()- Este método devuelve el primer elemento de la cola que se eliminaría.
    // size()- Este método devuelve el tamaño de la cola.
    // isEmpty()- Este método regresa si la cola está vacía.


}


{
    //! Desafio

    // Escriba un método enqueue que empuje un elemento al final de la cola, un método dequeue que elimine y devuelva el elemento frontal, método un front que nos permita ver el elemento frontal, un  método size que muestre la longitud y un método isEmpty para verificar si la cola es vacío


    function Queue() {
        var collection = [];
        this.print = function () {
            console.log(collection);
        };
        // Only change code below this line

        // Only change code above this line
    }
}

{
    //! Solución 1 con funcion contructora Queue (){} 


    // Escriba un método enqueue que empuje un elemento al final de la cola, un método dequeue que elimine y devuelva el elemento frontal, método un front que nos permita ver el elemento frontal, un  método size que muestre la longitud y un método isEmpty para verificar si la cola es vacío.

    function Queue() {
        let collection = [];


        // push() grega uno o más elementos al final de una matriz 
        this.enqueue = function (item) {
            collection.push(item);
            console.log(collection);
            // return collection.push(item);
        };

        //El shift()método elimina el primer elemento de una matriz 
        this.dequeue = function () {
            // console.log(collection);
            // collection.shift()
            // console.log(collection);
            return collection.shift();

            // return collection.shift();
        };

        this.front = function () {
            // El método at() recibe un valor numérico entero y devuelve el elemento en esa posición, permitiendo valores positivos y negativos. Los valores negativos contarán desde el último elemento del array.

            // console.log(collection.at(0));// Metodo 2
            // console.log(collection[0]);// Metodo 1
            return collection.at(0);
        };
        this.end = function () {
            return collection.at(collection.length-1)
        }
        this.size = function () {
            // console.log(collection.length);
            return collection.length;
        };
        this.isEmpty = function () {
            // console.log(collection.length = 0);
            // console.log(collection.length );

            return collection.length = 0;
        };

        this.print = function () {
            console.log(collection);
            console.log(this);
            // return this.collection
        };


       
    };



    let cola = new Queue();
    cola.print();
    console.log("---COMPRAS con funcion contructora ------");
    cola.enqueue("leche dia lunes con funcion contructora ");
    cola.enqueue("leche dia martes con funcion contructora ");
    cola.enqueue("leche dia miercoles con funcion contructora ");
    cola.enqueue("leche dia lueves con funcion contructora ");

    console.log("---VENTAS con funcion contructora ------");
    cola.dequeue();
    // cola.dequeue()
    // cola.dequeue()
    // cola.dequeue()
    console.log(cola.front());
    console.log(cola.end());

    cola.size();
    cola.isEmpty();






}

{
    //! Solucion 2 con una class Queue ES 2015
    class Queue {
        constructor() {
            this.collection = [];

        }

        imprimir() {
            return this.collection;
        }

        enqueue(data) {
            this.collection.push(data);
            return this.collection;
        }
        dequeue() {
            this.collection.shift();
            return this.collection;
        }
        size() {
            return this.collection.length;
        }

        front() {
            return this.collection.at(0);
        }
        end() {

            return this.collection.at(this.collection.length - 1);
        }

    };

    let cola = new Queue();
    console.log("---COMPRAS ( con  Clase) ------");
    console.log(cola.enqueue("leche dia lunes  ( con  Clase) "));
    console.log(cola.enqueue("leche dia miercoles  ( con  Clase) "));
    console.log(cola.enqueue("leche dia viernes  ( con  Clase) "));


    console.log(cola.dequeue());
    // console.log(cola.dequeue());
    console.log(cola.enqueue("leche  y diario dia domingo  ( con  Clase) "));
    console.log(cola.size());
    console.log(cola.front());
    console.log(cola.end());
}