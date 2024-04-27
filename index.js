let menu =
  "1. Contraseña Valida\n2. Calcular Impuestos\n3. IMC\n4. Imprimir un arreglo\n5. Contar rango de números\n6. Número de Likes\n7. Sumar rango de números\n8. Número de aes\n9. Número de caracteres\n10. Sumar arreglo\n11. Multiplicar arreglo\n12. Remover ceros\n13. Transcribir ADN a ARN\n14. Capitalizar palabra\n15. Encontrar el número máximo\n16. Encontrar números pares en un arreglo\n.17 Generar contraseña\n.18 Encontrar posiciones de números pares\n.19  Encontrar palabras que empiecen por a\n.20  ";
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
      numeroDeCaracteres(
        prompt("Ingrese una Palabra: "),
        prompt("Ingrese el caracter que desea evaluar: ")
      );
      break;
    case "10":
      Array = [];
      let tam = parseInt(prompt("Ingrese el tamaño del arreglo: "));
      for (let i = 0; i < tam; i++) {
        let num = parseFloat(prompt("Ingrese un numero: "));
        Array.push(num);
      }
      suma = sumarArreglo(Array);
      alert(suma);
      break;
    case "11":
      arreglo = [];
      let tama = parseInt(prompt("Ingrese el tamaño del arreglo: "));
      for (let i = 0; i < tama; i++) {
        let num = parseFloat(prompt("Ingrese un numero: "));
        arreglo.push(num);
      }
      multiplicarArreglo(arreglo);
      break;
    case "12":
      sinCero = [];
      let ta = parseInt(prompt("Ingrese el tamaño del arreglo: "));
      for (let i = 0; i < ta; i++) {
        let num = parseFloat(prompt("Ingrese un numero: "));
        sinCero.push(num);
      }
      alert("Este es tu arreglo: " + sinCero);
      removerCeros(sinCero);
      break;
    case "13":
      transcribir(prompt("Escribe una casena de ADN: "));
      break;
    case "14":
      capitalizar(prompt("Escriba una palabra: "));
      break;
    case "15":
      numeros = [];
      let leg = parseInt(prompt("Ingrese el tamaño del arreglo: "));
      for (let i = 0; i < leg; i++) {
        let num = parseFloat(prompt("Ingrese un numero: "));
        arreglo.push(num);
      }
      max(numeros);
      break;
    case "16":
      break;
    case "17":
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
function numeroDeAes(palabra) {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === "a") {
      contador += 1;
    }
  }
  alert(`El número de aes en ${palabra} es de ${contador}`);
}

//  EJERCICIO #9
function numeroDeCaracteres(pal, caract) {
  let contador = 0;
  for (let i = 0; i < pal.length; i++) {
    if (pal[i] === caract) {
      contador += 1;
    }
  }
  alert(`El número de ${caract} en ${pal} es de ${contador}`);
}

//  EJERCICIO #10
function sumarArreglo(array) {
  return array[0] + sumarArreglo(array.slice(1));
}

//  EJERCICIO #11
function multiplicarArreglo(arreglo) {
  let mult = 1;
  for (let i = 0; i < arreglo.length; i++) {
    mult *= arreglo[i];
  }
  alert("La multiplicacion de cada elemento del arreglo es: " + mult);
}

// EJERCICIO #12
function removerCeros(sinCero) {
  let newSin = sinCero.filter((num) => num !== 0);
  alert("Nuevo Arreglo sin ceros: " + newSin);
}

//  EJERCICIO #13
function transcribir(ADN) {
  let arn = "";
  for (let i = 0; i < ADN.length; i++) {
    if (ADN[i] === "G") {
      arn += "C";
    } else if (ADN[i] === "C") {
      arn += "G";
    } else if (ADN[i] === "T") {
      arn += "A";
    } else if (ADN[i] === "A") {
      arn += "U";
    }
  }
  alert("Cadena de ADN: " + ADN + "Cadena de ARN: " + arn);
}

//  EJERCICIO #14
function capitalizar(capi) {
  let capitalizado = capi.charAt(0).toUpperCase() + capi.slice(1);
  alert("El str es: " + capi + ", Capitalizada es: " + capitalizado);
}

//  EJERCICIO #15
function max(numeros) {}
