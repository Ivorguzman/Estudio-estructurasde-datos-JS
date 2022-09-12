{
    //! Explicación

    /// Crear una clase de cola de prioridad

    // En este desafío crearás una cola de prioridad. Una cola de prioridad es un tipo especial de cola en la que los elementos pueden tener información adicional que especifica su prioridad. Esto podría representarse simplemente con un número entero. La prioridad de los elementos anulará el orden de colocación al determinar la secuencia en la que se eliminan los elementos. Si un elemento con mayor prioridad se pone en cola después de los elementos con menor prioridad, el elemento de mayor prioridad se eliminará de la cola antes que todos los demás.

    // Por ejemplo, imaginemos que tenemos una cola de prioridad con tres elementos:

    // [['kitten', 2], ['dog', 2], ['rabbit', 2]]
    
    // Aquí el segundo valor (un número entero) representa la prioridad del artículo. Si ponemos en cola ['human', 1]con una prioridad de 1(suponiendo que se dé prioridad a las prioridades más bajas), entonces sería el primer elemento que se sacaría de la cola. La colección quedaría así:

    // [['human', 1], ['kitten', 2], ['dog', 2], ['rabbit', 2]]

}


{
    //! Desafio

    //     Hemos comenzado a escribir un PriorityQueueen el editor de código. Deberá agregar un enqueuemétodo para agregar elementos con prioridad, un dequeuemétodo para eliminar y devolver elementos, un sizemétodo para devolver la cantidad de elementos en la cola, un frontmétodo para devolver el elemento al principio de la cola y, finalmente, un isEmptymétodo que devolverá truesi la cola está vacía o falsesi no lo está.

    // El enqueuedebe aceptar elementos con el formato que se muestra arriba ( ['human', 1]), donde 1representa la prioridad. dequeuey frontdebe devolver solo el nombre del elemento, no su prioridad.




    function PriorityQueue() {
        this.collection = [];
        this.printCollection = function () {
            console.log(this.collection);
        };
        // Only change code below this line

        // Only change code above this line
    }

}


{
    //!Solucion


    function PriorityQueue() {
        this.collection = [];
        this.printCollection = function () {
            console.log(this.collection);
        };
        // Only change code below this line

        // Only change code above this line
    }

}



















{

   function PriorityQueue () {
  this.collection = [];
  this.printCollection = function() {
    console.log(this.collection);
  };
  // Only change code below this line
  this.enqueue = function(item) {
    let index = this.collection.findIndex(elem => elem[1] > item[1]);
    if (index !== -1) {
      this.collection.splice(index, 0, item);
    } else {
      this.collection.push(item);
    }
  }

  this.dequeue = function() {
    return this.collection.shift()[0];
  }

  this.size = function() {
    return this.collection.length;
  }

  this.isEmpty = function() {
    return this.size() === 0;
  }

  this.front = function() {
    return this.collection[0][0];
  }
  // Only change code above this line
}

    let colaPrioridad = new PriorityQueue();

    console.log(colaPrioridad.printCollection());
    console.log(colaPrioridad.enqueue(['kitten', 1, 'dog', , 'rabbit', 3]));
    console.log(colaPrioridad.push(['kitten', 1, 'dog', 2, 'rabbit', 3]));


    // Problema Explicación
    // Priority Queue es un tipo de datos abstracto.
    // Se puede implementar usando otras estructuras de datos, pero comúnmente se implementa usando un na pila.
    // Cada nodo contiene una prioridad. Cuando ponemos en cola un nodo en la cola, se "burbujea" hasta su lugar en la cola.
    // En este desafío, necesitamos crear una clase de Priority Queue basada en Min-Heap con algunos métodos:
    // enqueue() - Pone en cola el nuevo nodo en su lugar apropiado en la cola.
    // dequeue() - Elimina el primer nodo de la cola.
    // front(): este método devuelve el primer nodo que se eliminará de la cola.
    // size() - Devuelve el tamaño de la cola.
    // isEmpty(): regresa si la cola está vacía.
    // SD	Acceso	Búsqueda	Insertar	Borrar
    // cola de prioridad	1	1	iniciar sesión	iniciar sesión
    // Enlaces relevantes
    // Wikipedia 121

}

{
    //  !   Pruebas

    // esperando :Su PriorityQueueclase debe tener un enqueuemétodo.
    // esperando :Su PriorityQueueclase debe tener un dequeuemétodo.
    // esperando :Su PriorityQueueclase debe tener un sizemétodo.
    // esperando :Su PriorityQueueclase debe tener un frontmétodo.
    // esperando :Su PriorityQueueclase debe tener un isEmptymétodo.
    // esperando :Su PriorityQueueclase debe realizar un seguimiento correcto de la cantidad actual de elementos utilizando el sizemétodo a medida que los elementos se ponen en cola y se quitan de la cola.
    // esperando :El frontmétodo debe devolver el elemento correcto al principio de la cola a medida que los elementos se ponen en cola y se quitan de la cola.
    // esperando :El isEmptymétodo debería regresar truecuando la cola esté vacía.
    // esperando :La cola de prioridad debe devolver los artículos con una prioridad más alta antes que los artículos con una prioridad más baja y, de lo contrario, devolver los artículos en el orden primero en entrar, primero en salir.
}