function requisicao() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(99);
    }, 2000);
  });
}

// IIFE
(async function () {
  //   const resposta = await requisicao();
  //   console.log({ resposta });
  //   console.log("Vou aparecer depois por causa do await");

  const minhaPromise = requisicao();
  minhaPromise
    .then((resposta) => {
      console.log("Sou o log do primeiro then", resposta);
      return `Vim do primeiro then junto com: ${resposta}`;
    })
    .then((resposta) => {
      console.log("Sou o log do segundo then", resposta);
      return `Vim do segundo then junto com: ${resposta}`;
    })
    .catch((err) => {
      console.log("O codigo do erro foi:", err);
    })
    .finally((resposta) => {
      console.log(
        "Vou aparecer independente de ter sido reject ou fullfied",
        resposta
      );
    });
  console.log("Vou aparecer primeiro porque eu sou sincrono");
})();
