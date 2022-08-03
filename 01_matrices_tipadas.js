
{
    /// === Explicacion ===
    //! Matrices tipadas;

    // Las matrices son objetos de JavaScript que pueden contener muchos elementos diferentes.;

    { var complexArr = [1, 5, "2", "Word", { "name": "James" }]; }

    ///  Básicamente, lo que sucede en segundo plano es que su navegador le dará automáticamente la cantidad correcta de espacio de memoria para esa matriz.También cambiará según sea necesario si agrega o elimina datos.

    /// Sin embargo, en el mundo del alto rendimiento y los diferentes tipos de elementos, a veces es necesario ser más específico sobre la cantidad de memoria que se otorga a una matriz.

    ///  Las matrices tipadas son la respuesta a este problema.Ahora puede decir cuánta memoria desea dar a una matriz.A continuación se muestra una descripción general básica de los diferentes tipos de matrices disponibles y el tamaño en bytes de cada elemento de esa matriz.

    //* Escribe	Tamaño de cada elemento en bytes
    /* 
    Int8Array	1
    Uint8Array	1
    Uint8ClampedArray	1
    
    Int16Array	2
    Uint16Array	2

    Int32Array	4
    Uint32Array	4
    Float32Array	4

    Float64Array	8
    
     */
    /// Hay dos formas de crear este tipo de arreglos.Una forma es crearlo directamente. A continuación se muestra cómo crear una longitud de 3 Int16Array.;

    {
        var i8 = new Int16Array(3);

        // console.log(i8);
        // Returns [0, 0, 0]
    }
    /// También puede crear un búfer para asignar la cantidad de datos(en bytes) que desea que ocupe la matriz.

    /// Nota: Para crear matrices tipadas usando búferes, debe asignar el número de bytes para que sea un múltiplo de los bytes enumerados anteriormente.;

    {
        // Create same Int16Array array differently

        var byteSize = 6; // Needs to be multiple of 2
        var buffer = new ArrayBuffer(byteSize);
        var i8View = new Int16Array(buffer);

        // console.log(byteSize);
        // console.log(buffer.byteLength); // Returns 6
        // console.log(i8View.byteLength); // Returns 6
        // console.log(i8View); // Returns [0, 0, 0]

    }


    /// Los búferes son objetos de propósito general que solo transportan datos.No puede acceder a ellos normalmente.Para acceder a ellos, primero debe crear una vista.
    {
        i8View[0] = 42; // 
        // console.log(i8View); // Returns [42, 0, 0]
    }
    /// Nota Las matrices con tipo no tienen algunos de los métodos que tienen las matrices tradicionales, como.pop()o.push().Las matrices tipeadas también fallan Array.isArray()al verificar si algo es una matriz.Aunque más simple, esto puede ser una ventaja para que los motores de JavaScript menos sofisticados los implementen.;



}


{
    // ! === Desafio ===


    /// Primero cree un archivo  bufferde 64 bytes. A continuación, cree una Int32Arraymatriz con tipo con una vista llamada i32View.
    var buffer;
    var i32View;



}


{
    //! === Solucion 1 ===
    let tamanoEnBites = 64;

    var buffer = new ArrayBuffer(tamanoEnBites);// Crea un búfer de 64 bytes

    var i32View = new Int32Array(buffer);// Crea una vista de 32 bits con el búfer
    console.log(i32View);

}

{
    //! === Solucion 2 ===
    let i32View = new Int32Array(16); // Crea una vista de 32 bits en forma direta
    console.log(i32View);

}


{

    /// https://developer.mozilla.org/es/docs/Web/JavaScript/Typed_arrays

    //!Usar vistas con búferes
    // En primer lugar, necesitaremos crear un búfer, aquí con una longitud fija de 16 bytes:
    let buffer = new ArrayBuffer(16);// Crea un búfer de 16 bytes
    console.log(buffer.byteLength);// Muestra 16

    if (buffer.byteLength === 16) {
        console.log("Sí, son 16 bytes");
    } else {
        console.log("¡Oh no, es del tamaño incorrecto!");
    }

    let int32View = new Int32Array(buffer); // crea una vista de 32 bits con el búfer  y se guarda en int32View. Antes de que podamos trabajar realmente con este búfer, necesitamos crear una vista que trate los datos en el búfer como un arreglo de enteros 


    for (let i = 0; i < int32View.length; i++) {
        console.log(int32View[i]);
        int32View[i] = i * 2;
    }
    // Esto completa las 4 entradas en el arreglo (4 entradas de 4 bytes cada una suman 16 bytes en total) con los valores 0, 2, 4 y 6.

}

{
    // !   Combirtiendoles arreglos normales


    {
        //! === Solucion 1 Array.prototype.slice.call()===
        let typedArray = new Uint8Array([1, 2, 3, 4]);// Crea una matriz de tipo Uint8Array con los valores 1, 2, 3 y 4
        console.log(typedArray);

        let normalArray = Array.prototype.slice.call(typedArray);// Crea un arreglo normal de los elementos de la matriz tipada Uint8Array y lo guarda en normalArray 

        console.log(normalArray);// Devuelve [1, 2, 3, 4], El arreglo es normal no es una matriz tipada


        console.log(normalArray.length === 4);// true porque normalArray es un arreglo normal de 4 elementos y no una matriz tipada 

        console.log(normalArray.constructor === Array);// true  porque normalArray es un arreglo normal de 4 elementos y no una matriz tipada  

    }

    {
        /// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/from
        // El método Array.from()crea una nueva instancia de Array a partir de un objeto iterable.   

        //! === Solucion 2  Array.from() ===
        let typedArray = new Uint8Array([1, 2, 3, 4]);// Crea una matriz tipada Uint8Array con los elementos 1, 2, 3 y 4 y la guarda en typedArray 
        console.log(typedArray);

        let normalArray = Array.from(typedArray);// Crea un arreglo normal de los elementos de la matriz tipada Uint8Array y lo guarda en normalArray

        console.log(normalArray);// [1, 2, 3, 4], porque normalArray es un arreglo normal de 4 elementos y no una matriz tipada 

        console.log(normalArray.length === 4);// true porque normalArray es un arreglo normal de 4 elementos y no una matriz tipada

        console.log(normalArray.constructor === Array);// true  porque normalArray es un arreglo normal de 4 elementos y no una matriz tipada

    }


}
