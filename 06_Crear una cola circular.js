{
    //! Expliczción

    // Crear una cola circular
    // En este desafío crearás una cola circular. Una cola circular es una cola que escribe al final de una colección y luego comienza a sobrescribirse al principio de la colección. Este tipo de estructura de datos es útil en ciertas situaciones. Por ejemplo, se puede usar una cola circular para la transmisión de medios. Una vez que la cola esté llena, los nuevos datos multimedia sobrescribirán los datos antiguos.

    // Una buena manera de ilustrar este concepto es con una matriz de length 5:

    // [null, null, null, null, null]
    //  ^Read @ 0
    //  ^Write @ 0
    // Aquí, la lectura y la escritura están en la posición 0. Ahora la cola obtiene 3 nuevos registros a, b y c. Nuestra cola ahora se ve así:

    // [a, b, c, null, null]
    //  ^Read @ 0
    //   ^Write @ 3
    // A medida que lee el cabezal de lectura, puede eliminar valores o mantenerlos:

    // [null, null, null, null, null]
    //                    ^Read @ 3
    //                    ^Write @ 3
    // Ahora escribimos los valores d, ey fen la cola. Una vez que la escritura llega al final de la matriz, regresa al principio:

    // [f, null, null, d, e]
    //                 ^Read @ 3
    //     ^Write @ 1
    // Este enfoque requiere una cantidad constante de memoria, pero permite procesar archivos de un tamaño mucho mayor



}


{

    //! Desafio

    // En este desafío implementaremos una cola circular. La cola circular debe proporcionar enqueuemétodos dequeueque le permitan leer y escribir en la cola. La clase en sí también debe aceptar un argumento de número entero que puede usar para especificar el tamaño de la cola cuando se crea. Hemos escrito la versión inicial de esta clase para usted en el editor de código.

    // Cuando pone elementos en la cola, el puntero de escritura debe avanzar y volver al principio una vez que llega al final de la cola. El enqueuemétodo debería devolver el elemento que puso en cola si tiene éxito; de lo contrario, volverá null.

    // Del mismo modo, el puntero de lectura debe avanzar a medida que quita elementos de la cola. Cuando elimina un elemento de la cola, ese elemento debe devolverse. Si no puede sacar de la cola un elemento, debe devolver null.

    // No se debe permitir que el puntero de escritura se mueva más allá del puntero de lectura(nuestra clase no le permitirá sobrescribir datos que aún no haya leído) y el puntero de lectura no debería poder avanzar más allá de los datos que ha escrito.

    class CircularQueue {
        constructor(size) {

            this.queue = [];
            this.read = 0;
            this.write = 0;
            this.max = size - 1;

            while (size > 0) {
                this.queue.push(null);
                size--;
            }
        }

        print() {
            return this.queue;
        }

        enqueue(item) {
            // Only change code below this line

            // Only change code above this line
        }

        dequeue() {
            // Only change code below this line

            // Only change code above this line
        }
    }



}

{

    // ! Solución

    class CircularQueue {
        constructor(size) {

            this.queue = [];
            this.read = 0;
            this.write = 0;
            this.max = size - 1;

            while (size > 0) {
                this.queue.push(null);
                size--;
            }
        }

        print() {
            return this.queue;
        }

        enqueue(item) {
            // Only change code below this line

            // Only change code above this line
        }

        dequeue() {
            // Only change code below this line

            // Only change code above this line
        }
    }

}




{
    //! consejo
    //     Problema Explicación
    // En este desafío creamos una estructura de datos de cola circular.

    // Primero, necesitamos crear una matriz size con todos los elementos establecidos en null.

    // Luego creamos un método equeue, que mueve el puntero de escritura pero no excede el puntero de lectura.

    // El método de dequeue, por otro lado, mueve el puntero de lectura pero no excede el puntero de escritura.

    // Ejemplo:

    // Primero, creamos una matriz de longitud 5:
    //   [null, null, null, null, null]
    //    ^Read @ 0
    //    ^Write @ 0
    // Luego ponemos en cola a, by c:
    //   [a, b, c, null, null]
    //    ^Read @ 0
    //             ^Write @ 3
    // Ahora eliminamos todos los elementos en cola:
    //   [null, null, null, null, null]
    //                      ^Read @ 3
    //                      ^Write @ 3
    // Finalmente, ponemos en cola d, ey f:
    //   [f, null, null, d, e]
    //                   ^Read @ 3
    //       ^Write @ 1
    // Soluciones

    {
        //  Solución 1 (haga clic para mostrar/ocultar)

        class CircularQueue {
            constructor(size) {
                this.queue = [];
                this.read = 0;
                this.write = 0;
                this.max = size - 1;

                while (size > 0) {
                    this.queue.push(null);
                    size--;
                }
            }

            print() {
                return this.queue;
            }

            enqueue(item) {
                if (this.queue[this.write] === null) {
                    this.queue[this.write++] = item;

                    if (this.write > this.max) this.write = 0;
                    return item;
                }
                return null;
            }

            dequeue() {
                if (this.queue[this.read] != null) {
                    let item = this.queue[this.read];
                    this.queue[this.read++] = null;
                    if (this.read > this.max) this.read = 0;
                    return item;
                }
                return null;
            }
        }
    }




    {


        //  Solución 2 (haga clic para mostrar/ocultar)


        class CircularQueue {
            constructor(size) {

                this.queue = [];
                this.read = 0;
                this.write = 0;
                this.max = size - 1;

                while (size > 0) {
                    this.queue.push(null);
                    size--;
                }
            }

            print() {
                return this.queue;
            }

            enqueue(item) {
                // Only change code below this line
                if (this.write >= (this.read + this.max + 1)) return null;
                this.queue[this.write % (this.max + 1)] = item;
                this.write++;
                return item;
                // Only change code above this line
            }

            dequeue() {
                // Only change code below this line
                if (this.read >= this.write) return null;
                const item = this.queue[this.read % (this.max + 1)];
                this.queue[this.read % (this.max + 1)] = null;
                this.read++;
                return item;
                // Only change code above this line
            }
        }
    }

}


{
    //soluconn del chat

    class CircularQueue {
        constructor(size) {

            this.queue = [];
            this.read = 0;
            this.write = 0;
            this.max = size - 1;
            this.count = 0;

            while (size > 0) {
                this.queue.push(null);
                size--;
            }
        }
        checkEmpty() {
            var count = 0;
            for (let i = 0; i <= this.max; i++) {
                if (this.queue[i] == null) {
                    count++;
                }
            }
            if (count == this.max + 1) {
                return true;
            }
            return false;
        }
        checkFull() {
            var count = 0;
            for (let i = 0; i <= this.max; i++) {
                if (this.queue[i] == null) {
                    count++;
                }
            }
            if (count > 0) {
                return false;
            }
            return true;
        }

        print() {
            return this.queue;
        }

        enqueue(item) {
            // Only change code below this line
            if (!this.checkFull()) {
                this.queue[this.write] = item;
                this.write = (this.write + 1) % (this.max + 1);
            }
        }
        // Only change code above this line

        dequeue() {
            // Only change code below this line
            if (!this.checkEmpty()) {
                let val = this.queue[this.read];
                this.queue[this.read] = null;
                this.read = (this.read + 1) % (this.max + 1);
                return val;
            }
            else return null;
            // Only change code above this line
        }
    }
}

/* 

hbar1st
junio '18
No usaría el método checkEmpty en absoluto. Para la lectura solo tienes que preocuparte del registro actual. Comprobar que toda la cola está vacía no parece correcto. Es decir, creo que verificaría si hay algo para leer en el punto actual. Si es así, devuélvelo, si no, devuelve nulo. Ignore todos los demás puntos de la cola.




olaruandrei
junio '18
reemplazó /// "if(!this.checkEmpty())" con "if(this.queue[this.read])" y nada cambió:ceñudo:




hbar1st
junio '18

dequeue() {
/// Solo cambie el código debajo de esta línea
let val=this.queue[this.read];
if (val) {
/// this.queue[this.read]=null; //no necesito esto, ya que esta función es solo para leer
this.read=(this.read+1)%(this.max+1); //cambiar el contador de lectura
return val;
}
más devuelve nulo;
/// Solo cambia el código arriba de esta línea
}

Entonces, si el anterior es su nuevo método, luego de mirarlo, diría que aún debe preocuparse por la posición del contador de escritura. Si el contador de escritura está, por ejemplo, en la posición 5 y está intentando leer la posición 5 o superior, entonces debe devolver nulo.

Pensemos en ello en ejemplos más concretos:

Alguien escribe (pone en cola) 5 registros A, B, C, D, E
y el tamaño máximo de la cola es 6, por lo que mi contador de escritura apunta a la sexta posición
. Luego trato de leer en la posición 1, 2, 3, 4, 5 y luego intente leer 6, entonces debería obtener un nulo.
Otro ej. ¿Qué pasa si alguien pone en cola 6 registros A, B, C, D, E, F y luego intenta leer 7?
Entonces, eso significaría que mi contador de escritura después de escribir 6 apunta a la A nuevamente, mientras que mi contador de lectura después de 6 lecturas apunta a la A (listo para leer A). Su código debe decir 'deténgase allí mismo' porque 'A' también es donde apunta el contador de escritura, por lo tanto, no debería volver a leer A.

Al menos, así es como interpreto el criterio de éxito "Intentando desencolar más allá del puntero de escritura...", así que espero que esto ayude.




olaruandrei
junio '18
entonces, por lo que dices, no puedo tener en algún momento una cola vacía como queue.length=4 =[null, null, null, null]. Porque eso significa que entendí mal el problema. ok, intentare solucionar este problema y te aviso




hbar1st
junio '18
No del todo, pero estaba tratando de decir que deberías comprobar la posición de los punteros de escritura frente a los de lectura. En ningún momento debe intentar leer algo que aún no ha escrito (y eso no depende de nulo, sino que solo depende de la posición actual de los punteros). Puede leer A, B, C, D, E, F solo una vez. No debe volver a leer A, B, etc. solo porque alguien llama a la cola. Solo léalos si el contador de escritura está por delante de la lectura.



*/