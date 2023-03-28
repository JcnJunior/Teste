const dataAtual = new Date(2023, 03 - 1, 28, 00, 00, 0);
const dataFinal = new Date(2023, 03 - 1, 28, 00, 13, 0);
const amanha = new Date(2023, 03 - 1, 29, 00 - 3, 00 - 13, 0);

function criarAgendas() {
  while (dataFinal <= amanha) {
    dataAtual == dataAtual.setMinutes(dataAtual.getMinutes() + 20);
    dataFinal == dataFinal.setMinutes(dataFinal.getMinutes() + 20);
    console.log(JSON.stringify(dataFinal))
  }
}
criarAgendas();
