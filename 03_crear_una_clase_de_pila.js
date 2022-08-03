
{

    //! Explicación
    /// Crear una clase de pila;

    // En la última sección, hablamos sobre qué es una pila y cómo podemos usar una matriz para representar una pila.En esta sección, crearemos nuestra propia clase de pila.Aunque puede usar arreglos para crear pilas, a veces es mejor limitar la cantidad de control que tenemos con nuestras pilas.Además del método pushy pop, las pilas tienen otros métodos útiles.Agreguemos un método peek, isEmptyy cleara nuestra clase de pila.

    // Stack (pila) es una estructura de datos abstracta.
    // La pila sigue el principio LIFO (último en entrar, primero en salir)
    // Agregamos y eliminamos elementos de la misma parte de la pila, llamada parte superior.

}

{
    //! Desafio

    // Escriba un método push que empuje un elemento a la parte superior de la pila; Un método pop que elimine y devuelva el elemento en la parte superior de la pila; Un método peek que observe el elemento superior de la pila, un; Método isEmptyque que verifique si la pila está vacía y un método clear que elimina todos los elementos de la pila.Normalmente, las pilas no tienen esto, pero hemos agregado un método print auxiliar que la consola registra la colección.

    function Stack() {
        var collection = [];
        this.print = function () {
            console.log(collection);
        };
        // Only change code below this line

        // Only change code above this line
    }


    //! Nota


    // En este desafío, necesitamos agregar .push(), .pop(), .peek()y métodos a la clase .isEmpty()..clear()
    // El push()agrega uno o más elementos al final de una matriz 
    // pop() elimina elelemento al final de una matriz
    // peek()método se usa para ver solo el último elemento de una matriz
    // isEmpty()El método comprueba si esta pila está vacía.
    // clear()El método elimina todos los elementos de la pila.

}
{

    //! Solucion 

    function Stack() {
        var collection = [];

        this.print = function () {
            return collection;
        };
        // push() grega uno o más elementos al final de una matriz 
        this.push = function (item) {
            collection.push(item)
            console.log(collection);
            // return collection.push(item);

        };
        // pop() elimina elelemento al final de una matriz 
        this.pop = function () {
            collection.pop();
            console.log(collection);
            // return collection.pop();
        };
        // peek() método se usa para ver solo el último elemento de una matriz
        this.peek = function () {
            console.log(this);
            console.log(collection);
            console.log(collection[collection.length - 1]);
            return collection[collection.length - 1];

            // El peek()método se usa para ver solo el último elemento de una matriz o ver el elemento agregado recientemente en una estructura de datos de pila.

            // Desafortunadamente, no hay ningún método llamado peek()en el Arrayobjeto. Tenemos que implementarlo nosotros mismos en JavaScript.

            // Todo lo que tenemos que hacer es obtener el último elemento pero no eliminarlo.

            // Se puede hacer así: const lastElement = array[array.length - 1];


            // Only change code above this line
        };
        // isEmpty()El método comprueba si esta pila está vacía.
        this.isEmpty = function () {
            console.log(collection.length);
            if (collection.length === 0) {
                console.log('Pila Vacia');
                return true;
            } else {
                console.log('Pila no Vacia ' + " contiene " + collection.length + " elemento/os");
                return false;
            }

        };
        // clear()El método elimina todos los elementos de la pila.
        this.clear = function () {
            collection.length = 0;
            console.log(collection);
            return collection;
        };

    }

    let pila = new Stack();

    // pila.print();
    console.log("---COMPRAS------")
    pila.push("telefono modelo 2019");
    pila.push("telefono modelo 2020");
    pila.push("telefono modelo 2021");
    pila.push("telefono modelo 2022");
    console.log("---VENTAS------")
    pila.pop();
    pila.pop();
    pila.pop();

    // pila.peek();
    // pila.isEmpty();
    // pila.clear();
}