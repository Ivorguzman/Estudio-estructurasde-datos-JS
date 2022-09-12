{
    //! Expliczción

    // Crear una cola circular
    // En este desafío crearás una cola circular. Una cola circular es una cola que escribe al final de una colección y luego comienza a sobrescribirse al principio de la colección. Este tipo de estructura de datos es útil en ciertas situaciones. Por ejemplo, se puede usar una cola circular para la transmisión de medios. Una vez que la cola esté llena, los nuevos datos multimedia sobrescribirán los datos antiguos.

    // Una buena manera de ilustrar este concepto es con una matriz de length 5:

    // [null, null, null, null, null]
    //  ^Read @ 0
    //  ^Write @ 0
    // Aquí, la lectura y la escritura están en la posición 0. Ahora la cola obtiene 3 nuevos registros a, by c. Nuestra cola ahora se ve así:

    // [a, b, c, null, null]
    //  ^Read @ 0
    //           ^Write @ 3
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

    // Primero, necesitamos crear una matriz sizecon todos los elementos establecidos en null.

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