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
  //!Solucion1

  function PriorityQueue() {
    this.collection = [];

    this.printCollection = function () {
      console.log(this.collection);
    };
    // Only change code below this line

    this.enqueue = function (item) {
      console.log(item);
      console.log(this.collection);
      // let index = this.collection.findIndex(elem => elem[1] > item[1]);
      let index = this.collection.findIndex((elem) => {
        console.log(elem);
        console.log(item);
        return elem[1] > item[1];
      });
      if (index !== -1) {
        console.log(index);
        console.log(item);
        this.collection.splice(index, 0, item);
      } else {
        console.log(index);
        console.log(item);
        console.log(this.collection);
        this.collection.push(item);
        console.log(this.collection);
      }
    };

    this.end = function () {
      let final = this.collection[this.collection.length - 1][0];
      return final;
    };

    this.dequeue = function () {
      return this.collection.shift()[0];
    };

    this.size = function () {
      return this.collection.length;
    };

    this.isEmpty = function () {
      return this.size() === 0;
    };

    this.front = function () {
      return this.collection[0][0];
    };
    // Only change code above this line
  }

  /*  let pq = new PriorityQueue();
 
   pq.enqueue(['rabbit', 8]);
   pq.enqueue(['dog', 6])
   pq.enqueue(['kitten', 12]);
   pq.enqueue(['human', 1]);
 
 
   // console.log(pq.dequeue());
 
 
 
   console.log("");
   console.log("");
   
   console.log("<<_this.collection_>>")
   pq.printCollection();
   console.log(""); 
   console.log("---------Front------------")
   console.log(pq.front());
   console.log("");
   console.log("--------End-----------")
   console.log(pq.end());
  */

}





// Problema Explicación

// Priority Queue es un tipo de datos abstracto.

// Se puede implementar usando otras estructuras de datos, pero comúnmente se implementa usando un na pila.

// Cada nodo contiene una prioridad. Cuando ponemos en cola un nodo en la cola, se "burbujea" hasta su lugar en la cola.

// En este desafío, necesitamos crear una clase de Priority Queue

// enqueue() - Pone en cola el nuevo nodo en su lugar apropiado en la cola.

// dequeue() - Elimina el primer nodo de la cola.

// front(): este método devuelve el primer nodo que se eliminará de la cola.

// size() - Devuelve el tamaño de la cola.

// isEmpty(): regresa si la cola está vacía.

{
  ///! Solucion de chat 1 corregida

  function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
      console.log(this.collection);
    };

    this.isEmpty = () => this.collection.length === 0 ? true : false; // verifica si la cola esta vacia

    this.size = () => this.collection.length; // verifica el Tamaño de la cola

    this.enqueue = (arr) => {
      if (arr[1] === 1) {
        console.log(arr[1]);
        console.log(this.collection[1]);
        this.collection.unshift(arr); // Inserta nuevos elementos al comienzo de una matriz  
        // console.log(arr[0]);
        this.collection.sort((a, b) => a[1] - b[1]);
        console.log(console.log(this.collection));
        return this.collection;
      } else {
        this.collection.push(arr);  // Inserta nuevos elementos al final de una matriz
        // console.log(arr[0]);
        this.collection.sort((a, b) => a[1] - b[1]);
        return this.collection;
      }
    };
    this.dequeue = () => this.collection.shift()[0]; // elimina el primer elemento de la cola

    this.front = () => this.collection[0][0];// muestra el primer elemento de la cola
  }


  /*   let pq = new PriorityQueue();
  
    pq.enqueue(['rabbit', 8]);
    pq.enqueue(['dog', 6]);
    pq.enqueue(['kitten', 2]);
    pq.enqueue(['human', 1]);
  
  
    // console.log(pq.dequeue());
  
  
  
    console.log("");
    console.log("");
  
    console.log("<<_this.collection_>>");
    pq.printCollection();
    console.log("");
    console.log("---------Front------------");
    console.log(pq.front());
    console.log("");
   */

}  


{
  ///! Solucion de chat 2
  class PriorityQueue {
    constructor() {
      this.collection = [];
    };
    printCollection() {
      console.log(this.collection);
    };
    enqueue(value) {
      if (typeof value === "object" && value.length === 2 && typeof value[1] === "number") {
        let index = 0;
        while (this.collection[index] && this.collection[index][1] < value[1] + 1) {
          index++;
        }
        this.collection.splice(index, 0, value);
      }
    };
    dequeue() {
      if (this.collection.length > 0) return this.collection.pop()[0];
    };
    front() {
      return this.collection[this.collection.length - 1][0];
    };
    size() {
      return this.collection.length;
    };
    isEmpty() {
      return this.collection.length === 0;
    };
  };
  let pq = new PriorityQueue();

  pq.enqueue(['rabbit', 8]);
  pq.enqueue(['dog', 6]);
  pq.enqueue(['kitten', 2]);
  pq.enqueue(['human', 1]);


  // console.log(pq.dequeue());



  console.log("");
  console.log("");

  console.log("<<_this.collection_>>");
  pq.printCollection();
  console.log("");
  console.log("---------Front------------");
  console.log(pq.front());
  console.log("");

  ///Muchas gracias por su ayuda... Al menos encontré el problema. De la matriz hay que eliminar el primer elemento, no el último. Cambié el método pop() y ahora paso la prueba Gracias.;


}


{
  /// Ejemplo de sort con objetos
  const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

  // sort by value
  console.log(items);
  console.log(items.sort((a, b) => a.value - b.value));
}


{
  let x = [2];
  x[0] = 1;
  x[1] = 2;
  console.log(x); 

  let y = new Array(2);
  y[0] = "A";
  y[1] = "B";


  console.log(y);
  console.log(y[0][1]);
}