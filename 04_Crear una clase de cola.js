

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

    // Una cola sigue el principio FIFO/LILO.

    // En este desafío necesitamos implementar los métodos enqueue(), dequeue(), front(), size().isEmpty()

    // enqueue()- 
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
    //! Solución


    // Escriba un método enqueue que empuje un elemento al final de la cola, un método dequeue que elimine y devuelva el elemento frontal, método un front que nos permita ver el elemento frontal, un  método size que muestre la longitud y un método isEmpty para verificar si la cola es vacío.

    function Queue() {
        var collection = [];
        this.print = function () {
            console.log(collection);
            console.log(this);
        };
        // push() grega uno o más elementos al final de una matriz 
        this.enqueue = function (item) {
            collection.push(item);
            console.log(collection);
            // return collection.push(item);
        };
        //El shift()método elimina el primer elemento de una matriz 
        this.dequeue = function () {
            collection.shift();
            console.log(collection);
            // return collection.shift();
        };

    };

    let cola = new Queue();
    cola.print();
    console.log("---COMPRAS------")
    cola.enqueue("leche dia lunes ");
    cola.enqueue("leche dia martes");
    cola.enqueue("leche dia miercoles");
    cola.enqueue("leche dia lueves");
    
    console.log("---VENTAS------")
    cola.dequeue()
    cola.dequeue()
    cola.dequeue()
    cola.dequeue()




}