let nombreAlumno =  prompt ("Ingrese el nombre del alumno:");

let materia = prompt ("Ingrese la materia:");

let nota1, nota2, nota3;

while (true) {
 nota1= parseFloat(prompt("Ingrese la primera nota de (0 a 10):"));
 if (!isNaN(nota1) && nota1 >= 0 && nota1 <=10) {
    break
 } else {
   alert ("Por favor ingrese una nota válida de 0 a 10")
  }
 }

 while (true) {
   nota2= parseFloat(prompt("Ingrese la segunda nota de (0 a 10):"));
   if (!isNaN(nota2) && nota2 >= 0 && nota2 <=10) {
     break
   } else {
     alert ("Por favor ingrese una nota válida de 0 a 10")}
  }
 while (true) {
   nota3= parseFloat(prompt("Ingrese la tercera nota de (0 a 10):"));
   if (!isNaN(nota3) && nota3 >= 0 && nota3 <=10) {
     break
   } else {
     alert ("Por favor ingrese una nota válida de 0 a 10")
   }      
 }
let promedio = (nota1 + nota2 + nota3) / 3;

let mensaje= (promedio>=7) ?

`${nombreAlumno} ¡Felicidades!. Has aprobado la materia ${materia} con un promedio de: ${promedio}`:
`${nombreAlumno}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido en la materia ${materia} es: ${promedio}`

console.log (mensaje)