function notas() {
  let nombre: string[] = new Array(4);
  let notaMatematica: number[] = new Array(4);
  let notaFisica: number[] = new Array(4);
  let notaBiologia: number[] = new Array(4);
  for (let i: number = 0; i < 5; i++) {
    nombre[i] = String(prompt("ingrese nombre"));
    notaMatematica[i] = Number(
      prompt("ingrese nota de matematica de ", nombre[i])
    );
    notaFisica[i] = Number(prompt("ingrese nota de fisica de ", nombre[i]));
    notaBiologia[i] = Number(prompt("ingrese nota de biologia de ", nombre[i]));
  }

  let i = Number(prompt("ingrese la posicion del alumno"));
  console.log(
    "las notas del alumno",
    nombre[i],
    "son =matematica",
    notaMatematica[i],
    "fisica",
    notaFisica[i],
    "fisica",
    notaFisica[i],
    "biologia",
    notaBiologia[i]
  );
}
notas();
