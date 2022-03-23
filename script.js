const mostrar = () => {
    
    let animal = document.getElementById("animal").value;
    console.log(animal);

    if (animal == 1){
        console.log ("Perro");
        console.log(",-.___,-.");
        console.log("\\_/_ _\\_/");
        console.log("  )O_O(");
        console.log(" { (_) }");
        console.log("  `-^-' ");

         //crear un elemento <p> de html
       const result = document.createElement("p");
       //crear el texto que ira dentro de la etiueta <p>
       const node = document.createTextNode(",-.___,-.");
       const node2 = document.createTextNode("\\_/_ _\\_/");
       //fusionar el texto con la etiqueta <p>
       result.appendChild(node); 
       document.write("<br>");
       result.appendChild(node2);
        // agregar el elemento <p> al body del html
       document.body.appendChild(result);

    }else if(animal == 2){
        console.log("Gato");
        console.log(" /\\_/\\");
        console.log("( o.o )");
        console.log(" > ^ <");

    }else if (animal ==3){
        console.log ("Caballo");
        console.log("        ,--,");
        console.log("  _ ___/ /\\|");
        console.log(" ;( )__, )");
        console.log("; //   '--;");
        console.log("  \\     |");
        console.log("   ^    ^");

    }
    else if (animal == 4){
        alert("Gracias por jugar!")
    }else{
        console.log("Valor Invalido");
    }



}