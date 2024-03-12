/*
1) Observe o trecho de código abaixo:

int indice = 13, soma = 0, k = 0;
enquanto k < indice faça
{
  k = k + 1;
  soma = soma + k;
}
imprimir(soma);

Ao final do processamento, qual será o valor da variável soma?
*/

let indice = 13
let soma = 0
let k = 0

for (let i = 0; i < indice; i++) {
  k++
  soma += k
}

console.log(`total: ${soma}`); 