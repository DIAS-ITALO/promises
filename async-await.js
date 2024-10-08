function rand(min, max) {
  min *= 1000;
  max *= 1000;

  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("CAI NO ERRO");
        return;
      }

      resolve(msg.toUpperCase() + " - Passei na promise");
      return;
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);

    const fase2 = await esperaAi(2, rand());
    console.log(fase2);

    const fase3 = await esperaAi("Fase3 ", rand());
    console.log(fase3);

    console.log("Terminamos na fase: ", fase3);
  } catch (e) {
    console.log(e);
  }
}
//executa();
const teste2 = esperaAi('qlq', 5000);
console.log(teste2)

/* 
Estados da promise
- pending -> pendente
- fullfield -> resolvida
- rejected -> rejeitada
*/