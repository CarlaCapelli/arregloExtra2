function notas() {
  let nombre: string[] = new Array(4);
  for (let i: number = 0; i < 5; i++) {
    nombre[i] = String(prompt("ingrese nombre"));
  }
  let notaMatematica: number[] = new Array(4);
  for (let i: number = 0; i < 5; i++) {
    notaMatematica[i] = String(
      prompt("ingrese nota de matematica de ", nombre[i])
    );
  }
  let notaFisica: number[] = new Array(4);
  for (let i: number = 0; i < 5; i++) {
    notaFisica[i] = String(prompt("ingrese nota de fisica de ", nombre[i]));
  }
  let notaBiologia: number[] = new Array(4);
  for (let i: number = 0; i < 5; i++) {
    notaBiologia[i] = String(prompt("ingrese nota de biologia de ", nombre[i]));
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
