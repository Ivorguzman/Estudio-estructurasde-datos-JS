{

    //! === Explicación

    //     Aprenda cómo funciona una pila ( Una pila es una estructura de datos que tiene una cabeza y una cola.)

    // Probablemente esté familiarizado con la pila de libros en su mesa. Es probable que haya utilizado la función de deshacer de un editor de texto. Probablemente también esté acostumbrado a presionar el botón Atrás en su teléfono para volver a la vista anterior en su aplicación.

    // ¿Sabes lo que todos tienen en común? Todos ellos almacenan los datos de una manera en la que se puede recorrer hacia atrás.

    // El libro más alto de la pila fue el que se colocó en último lugar. Si quita ese libro de la parte superior de su pila, expondrá el libro que se colocó allí antes del último libro y así sucesivamente.

    // Si lo piensa, en todos los ejemplos anteriores, está obteniendo el tipo de servicio Last-In-First-Out . Intentaremos imitar esto con nuestro código.

    // Este esquema de almacenamiento de datos se llama Stack . En particular, tendríamos que implementar el push()método que coloca los objetos de JavaScript en la parte superior de la pila; y pop()método, que elimina el objeto de JavaScript que está en la parte superior de la pila en el momento actual.

    // Aquí tenemos una pila de tareas asignadas representadas como una matriz: "BIO12"está en la base y "PSY44"está en la parte superior de la pila.

    // Modifique la matriz dada y trátela como si stackusara los métodos de JavaScript mencionados anteriormente. Retire el elemento superior "PSY44"de la pila. Luego agregue "CS50"para ser el nuevo elemento superior de la pila.



}

{
    //! Desafio

    //     Aquí tenemos una pila de tareas asignadas representadas como una matriz: "BIO12"está en la base y "PSY44"está en la parte superior de la pila.

    // Modifique la matriz dada y trátela como si stack usara los métodos de JavaScript mencionados anteriormente.Retire el elemento superior "PSY44"de la pila.Luego agregue "CS50" para ser el nuevo elemento superior de la pila.

    var homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
    //Solo cambia el código debajo de esta línea

}

{
    //! === Solución

    let homeworkStack = ["BIO12", "HIS80", "MAT122", "PSY44"];
    //Solo cambia el código debajo de esta línea

    homeworkStack.pop();
    homeworkStack.push("CS50");

    console.log(homeworkStack)



}