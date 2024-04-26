let menu =
  "1. Ejercicio1\n2. Ejercicio2\n3. Ejercicio3\n4. Ejercicio4\n5. Ejercicio5\n6. Ejercicio6\n7. Ejercicio7\n8. Ejercicio8\n9. Ejercicio9\n10. Ejercicio10\n11. Ejercicio11\n12. Ejercicio12\n13. Ejercicio13\n14. Ejercicio14\n15. Ejercicio15\n16. Ejercicio16\n.17 Ejercicio17\n.18 salir ";
let opcion = "";

do {
  opcion = prompt(menu);
  switch (opcion) {
    case "1":
      contrasenaValida(prompt("Ingrese la contraseña: "));
      break;
    case "2":
      calcularImpuestos(
        parseInt(prompt("Ingrese la edad: ")),
        parseFloat(prompt("Ingrese sus Ingresos: "))
      );
      break;
    case "3":
      bmi(
        parseFloat(prompt("Ingrese el Peso: ")),
        parseFloat(prompt("Ingrese La Altura: "))
      );

      break;
    case "4":
      imprimirArreglo(parseInt(prompt("Ingrese el tamaño del arreglo: ")));
      break;
    case "5":
      contarRango(
        parseInt(prompt("Ingrese El primer numero: ")),
        parseInt(prompt("Ingrese El segundo numero: "))
      );
      break;
    case "6":
      likes(parseInt(prompt("Ingrese un numero: ")));
      break;
    case "7":
      sumarRango(
        parseFloat(prompt("Ingrese el Numero Inicial: ")),
        parseFloat(prompt("Ingrese el Numero Final: "))
      );
      break;
    case "8":
      numeroDeAes(prompt("Ingrese una Palabra"));
      break;
    case "9":
      break;
    case "10":
      break;
    case "11":
      break;
    case "12":
      break;
    case "13":
      break;
    case "14":
      break;

    default:
      alert("Opcion No Valida");
      break;
  }
} while (opcion != "18");
//     EJERCICIO #1
function contrasenaValida(contrasena) {
  if (contrasena === "2Fj(jjbFsuj" || contrasena === "eoZiugBf&g9") {
    alert("true");
  } else {
    alert("false");
  }
}

//      EJERCICIO #2
function calcularImpuestos(edad, ingreso) {
  if (edad >= 18 && ingreso >= 1000) {
    alert(`El ${ingreso} resultado es:` + ingreso * 0.4);
  } else {
    alert(0);
  }
}
// EJERCICIO #3
function bmi(peso, altura) {
  let bmI = peso / altura ** 2;
  if (bmI < 18.5) {
    alert("Bajo de Peso");
  } else if (bmI >= 18.5 && bmI <= 24.9) {
    alert("Peso Normal");
  } else if (bmI >= 25 && bmI <= 29.9) {
    alert("Sobrepeso");
  } else if (bmI >= 30) {
    alert("Obeso");
  }
}

//  EJERCICIO #4
function imprimirArreglo(tam) {
  let arreglo = [];
  for (let i = 0; i < tam; i++) {
    let elemento = prompt("Ingrese un elemento");
    arreglo.push(elemento);
  }
  for (let i = 0; i < arreglo.length; i++) {
    alert(`Elemento #${i + 1}: ` + arreglo[i]);
  }
}

// EJERCICIO #5
function contarRango(num1, num2) {
  let contador = -1;
  for (let i = num1; i < num2; i++) {
    contador++;
  }
  alert(contador);
}

// EJERCICIO #6
function likes(numero) {
  let cadena = " ";
  if (numero < 1000) {
    cadena = numero.toString();
    alert(cadena);
  } else if (numero < 1000000) {
    cadena = (numero / 1000).toFixed(0) + "K";
  } else {
    cadena = (numero / 1000000).toFixed(0) + "M";
  }
  alert(cadena);
}

//   EJERCICIO #7
function sumarRango(inicial, final) {
  let suma = 0;
  for (let i = inicial; i <= final; i++) {
    suma = suma + i;
  }
  alert(suma);
}

// EJERCICIO #8
function numeroDeAes() {}
