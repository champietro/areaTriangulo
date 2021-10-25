let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let altura: number = 2;

  function calcularAreaTriangulo(base, altura) {
    let resultado: number;
    resultado = (base * altura) / 2;
    console.log(resultado);
  }

  for (let base = 1; base < 8; base++) {
    altura = altura + 2;
    calcularAreaTriangulo(base, altura);
  }
});
