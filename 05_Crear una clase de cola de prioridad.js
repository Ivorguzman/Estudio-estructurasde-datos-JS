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
  //! Solucion1

  function PriorityQueue() {
    this.collection = [];

    this.printCollection = function () {
      console.log(this.collection);
    };
    // Only change code below this line

    this.enqueue = function (item) {
      // console.log(item);
      // console.log(this.collection);
      // let index = this.collection.findIndex(elem => elem[1] > item[1]);
      let index = this.collection.findIndex((elem) => {

        return elem[1] > item[1]; // verficando los indices que representa la prioridades, del parametro de: this.collection.findIndex((elem)==>{....}  contra  el parametro de la invocacion del metodo ==>  this.enqueue = function (item){....}

      });
      if (index !== -1) { // ubica los elementos en el array en orden desendente
        this.collection.splice(index, 0, item); // agrega el elemnto al principio de la del array
      } else { // agrega el elemento al final de la fila
        this.collection.push(item); // es == -1 findIndex (elem) => {}  agrega el nuevo elemento al final del array 
      }
    };

    this.end = function () {
      let final = this.collection[this.collection.length - 1][0];
       //  this.collection[this.collection.length - 1][0] es ===  this.collection[0][0]
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
  }

  //   let pq = new PriorityQueue();
  // 
  //   pq.enqueue(['rabbit', 8]);
  //   pq.enqueue(['dog', 12]);
  //   pq.enqueue(['kitten', 6]);
  //   pq.enqueue(['human', 1]);
  // 
  // 
  //   console.log(pq.front());
  //   console.log(pq.end());
  //   console.log(pq.isEmpty());
  //   console.log(pq.size());
  //   pq.printCollection();

  //  console.log(pq.dequeue());


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
  ///! Solucion de chat 1 corregida todo dentro del constructor (metodos directos)

  function PriorityQueue() {
    this.collection = [];
    this.printCollection = function () {
      console.log(this.collection);
    };

    this.isEmpty = () => this.collection.length === 0 ? true : false; // verifica si la cola esta vacia POR MEDIO DE LA PROPIEDAD LENGTH

    this.size = () => this.collection.length; // verifica el Tamaño de la cola

    this.enqueue = (arr) => {
      if (arr[1] === 1) {// si es igual a 1 su prioridad es maxima pasa a ser primero el la fila
        this.collection.unshift(arr); // Inserta nuevos elementos al comienzo de una matriz  
        // console.log(arr[0]);
        this.collection.sort((a, b) => a[1] - b[1]); // ordena los elementos del array en el indixe de menor a mayor segun el indice 1 del array
        return this.collection;
      } else {// si es diferente a 1 su prioridad es menor  pasa a colocarse final de la cola 
        this.collection.push(arr);  // Inserta nuevos elementos al final de una matriz
        this.collection.sort((a, b) => a[1] - b[1]);// ordena los elementos del array en el indixe de menor a mayor segun el indice 1 del array
        return this.collection;
      }
    };
    this.dequeue = () => this.collection.shift()[0]; // elimina el primer elemento de la cola

    this.front = () => this.collection[0][0];// muestra el primer elemento de la cola
    this.end = function () { // muestra el ultimo array en la  posisicion 0 ( arr[length-1][0])
      let final = this.collection[this.collection.length - 1][0];
       //  this.collection[this.collection.length - 1][0] es ===  this.collection[0][0]
      return final;
    };

  }



  //   let pq = new PriorityQueue();
  // 
  // pq.enqueue(['rabbit', 8]);
  // pq.enqueue(['dog', 12]);
  // pq.enqueue(['kitten', 6]);
  // pq.enqueue(['human', 1]);
  // 
  //   console.log(pq.front());
  //   console.log(pq.end());
  //   console.log(pq.isEmpty());
  //   console.log(pq.size());
  //   pq.printCollection();


}


{
  ///! Solucion de chat 2 (PROXIMO A CORREGIR Y COMENTAR)

  class PriorityQueue {
    constructor() {
      this.collection = [];
    };


    printCollection() {
      console.log(this.collection);

    };


    enqueue(value) {
      if (typeof value === "object" && value.length === 2 && typeof value[1] === "number") {  // verifica si es un array(Objeto), de longitud 2, y que sea un numero
        // console.log(value);
        let index = 0;  // Da el valor  (0) al indice del array ==> this.collection.splice(index=0 , 0, value) luego agrega el contenido de el parametro de value en le indice (0) de this.collection.splice(0, 0, value)
        this.collection.splice(index, 0, value);

        this.collection.sort((a, b) => a[1] - b[1]); // ordena los elementos del array en el indixe de menor a mayor segun el indice 1 del array
        return this.collection;
      }
    };

    dequeue() {
      if (this.collection.length > 0) return this.collection.pop()[0];
    };

    front() {
      return this.collection[0][0];
    };



    end() { // muestra el ultimo array en la  posisicion 0 ( arr[length-1][0])
      let final = this.collection[this.collection.length - 1][0];
      //  this.collection[this.collection.length - 1][0] es ===  this.collection[0][0]

      return final;
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
  pq.enqueue(['dog', 12]);
  pq.enqueue(['kitten', 6]);
  pq.enqueue(['human', 1]);

  console.log(pq.front());
  console.log(pq.end());
  console.log(pq.isEmpty());
  console.log(pq.size());
  pq.printCollection();


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
  // console.log(items);
  // console.log(items.sort((a, b) => a.value - b.value));
}


{
  let x = [2];
  x[0] = 1;
  x[1] = 2;
  // console.log(x);

  let y = new Array(2);
  y[0] = "A";
  y[1] = "B";


  // console.log(y);
  // console.log(y[0][1]);
}