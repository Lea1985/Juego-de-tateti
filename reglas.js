var x = document.querySelectorAll("td");
var reInicio = document.querySelector("#reset");
var cliks = -1;



generarFichas();
fichar();
reInicio.addEventListener("click", reiniciar);



function generarFichas() {

    for (let index = 0; index < 9; index++) {

        // Obtener una referencia al elemento en el que se quiere insertar un nuevo nodo
        var parentElement = x[index];

        // Crear un nuevo elemento
        var newElement = document.createElement("div");
        newElement.className = "ficha";
        newElement.id = String(index);
        newElement.addEventListener("click", fichar);

        // Obtener una referencia al primer hijo
        var theFirstChild = parentElement.firstChild;

        // Insertar el nuevo elemento antes que el primer hijo
        parentElement.insertBefore(newElement, theFirstChild);

    }
}


function fichar() {

    var x = document.querySelectorAll(".ficha");
    x.forEach(el => {
        el.addEventListener("click", e => {
            const id = e.target.getAttribute("id");
            console.log("Se ha clickeado el id " + id);
            console.log("Cantidad de clicks" + cliks);
            var y = document.getElementById(String(id));


            if (cliks % 2 == 1) {
                y.innerHTML = '<i class=' + '"' + 'fa-solid fa-cat' + '"' + '></i>'

                console.log("Impar")
            } else {
                y.innerHTML = '<i class=' + '"' + 'fa-solid fa-fish' + '"' + '></i>'

                console.log("Par")
            }
            validar();
        });
    });


    cliks = ++cliks;



}

function reset() {
    var msj = document.querySelector(".mostrar-msjVictoria");
    msj.classList.remove("mostrar-msjVictoria");
    msj.classList.add("no-mostrar");
    var ganador = document.querySelectorAll("span");
    ganador[0].innerHTML = ''
    ganador[1].innerHTML = ''
    var x = document.querySelectorAll("td");
    x.forEach(function(elemento) {
        elemento.innerHTML = "";
    })

    generarFichas();
    fichar();
    cliks = 0;
}

function reiniciar() {
    var x = document.querySelectorAll("td");
    x.forEach(function(elemento) {
        elemento.innerHTML = "";
    })

    generarFichas();
    fichar();
    cliks = 0;

}

function validar() {

    var x = document.querySelectorAll(".ficha");


    if (x[0].firstElementChild != null && x[1].firstElementChild != null && x[2].firstElementChild != null) {

        if (x[0].firstElementChild.classList.value === x[1].firstElementChild.classList.value && x[1].firstElementChild.classList.value === x[2].firstElementChild.classList.value) {
            console.log("Ganaste");
            console.log(String(x[0].firstElementChild.className));
            ganaste(String(x[0].firstElementChild.className));
        }

    }
    if (x[3].firstElementChild != null && x[4].firstElementChild != null && x[5].firstElementChild != null) {

        if (x[3].firstElementChild.classList.value === x[4].firstElementChild.classList.value && x[4].firstElementChild.classList.value === x[5].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[3].firstElementChild.className));
        }

    }
    if (x[6].firstElementChild != null && x[7].firstElementChild != null && x[8].firstElementChild != null) {

        if (x[6].firstElementChild.classList.value === x[7].firstElementChild.classList.value && x[7].firstElementChild.classList.value === x[8].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[6].firstElementChild.className));
        }

    }
    if (x[0].firstElementChild != null && x[3].firstElementChild != null && x[6].firstElementChild != null) {

        if (x[0].firstElementChild.classList.value === x[3].firstElementChild.classList.value && x[3].firstElementChild.classList.value === x[6].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[0].firstElementChild.className));
        }

    }
    if (x[1].firstElementChild != null && x[4].firstElementChild != null && x[7].firstElementChild != null) {

        if (x[1].firstElementChild.classList.value === x[4].firstElementChild.classList.value && x[4].firstElementChild.classList.value === x[7].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[1].firstElementChild.className));
        }

    }
    if (x[2].firstElementChild != null && x[5].firstElementChild != null && x[8].firstElementChild != null) {

        if (x[2].firstElementChild.classList.value === x[5].firstElementChild.classList.value && x[5].firstElementChild.classList.value === x[8].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[2].firstElementChild.className));
        }

    }
    if (x[0].firstElementChild != null && x[4].firstElementChild != null && x[8].firstElementChild != null) {

        if (x[0].firstElementChild.classList.value === x[4].firstElementChild.classList.value && x[4].firstElementChild.classList.value === x[8].firstElementChild.classList.value) {
            console.log("Ganaste");

            ganaste(String(x[0].firstElementChild.className));
        }


    }
    if (x[2].firstElementChild != null && x[4].firstElementChild != null && x[6].firstElementChild != null) {

        if (x[2].firstElementChild.classList.value === x[4].firstElementChild.classList.value && x[4].firstElementChild.classList.value === x[6].firstElementChild.classList.value) {
            console.log("Ganaste");
            ganaste(String(x[2].firstElementChild.className));

        }

    }
    if (x[0].firstElementChild != null && x[1].firstElementChild != null && x[2].firstElementChild != null && x[3].firstElementChild != null && x[4].firstElementChild != null && x[5].firstElementChild != null && x[6].firstElementChild != null && x[7].firstElementChild != null && x[8].firstElementChild != null) {
        empataron();
    }

}

function ganaste(win) {

    var msj = document.querySelector(".no-mostrar");
    msj.classList.add("mostrar-msjVictoria");
    var ganador = document.querySelectorAll("span");

    ganador[0].innerHTML = '<i class=' + '"' + win + '"' + '></i>';
    ganador[1].innerHTML = '<i class=' + '"' + win + '"' + '></i>';
    console.log(win);

    setTimeout(reset, 2000);

}

function empataron() {

    var msj = document.querySelector(".no-mostrar");
    msj.classList.add("mostrar-msjVictoria");
    var ganador = document.querySelectorAll("span");
    msj.innerHTML = "<span></span><h1>Empataron!!!</h1> <span></span>";
    var ganador = document.querySelectorAll("span");
    ganador[0].innerHTML = '<i class=' + '"' + 'fa-solid fa-cat' + '"' + '></i>';
    ganador[1].innerHTML = '<i class=' + '"' + 'fa-solid fa-fish' + '"' + '></i>';
    setTimeout(msj.innerHTML = "<span></span><h1>Ganaste!!!</h1> <span></span>", 1999);
    setTimeout(reset, 2000);
}