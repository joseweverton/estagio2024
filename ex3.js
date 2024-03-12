/*
3) Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, proximo: 9
b) 2, 4, 8, 16, 32, 64, proximo: 128
c) 0, 1, 4, 9, 16, 25, 36, proximo: 49
d) 4, 16, 36, 64, proximo: 64
e) 1, 1, 2, 3, 5, 8, proximo: 13
f) 2,10, 12, 16, 17, 18, 19, proximo: 20 
*/

function proxElemento(arr, regra) {
  return regra(arr)
}

const ordem = {
  A: [1, 3, 5, 7],
  B: [2, 4, 8, 16, 32, 64],
  C: [0, 1, 4, 9, 16, 25, 36],
  D: [4, 16, 36, 64],
  E: [1, 1, 2, 3, 5, 8],
  F: [2, 10, 12, 16, 17, 18, 19]
}

const regra = {
  a: (arr) => arr[arr.length - 1] + 2,
  b: (arr) => arr[arr.length - 1] * 2,
  c: (arr) => Math.pow(arr.length, 2),
  d: (arr) => Math.pow(arr.length * 2, 2),
  e: (arr) => arr[arr.length - 1] + arr[arr.length - 2],
  f: (arr) => (arr.length < 4) ? arr[arr.length - 1] + 2 : arr[arr.length - 1] + 1
}

for (const key in ordem) {
  console.log(`Próximo da sequência ${key}:`, proxElemento(ordem[key], regra[key.toLowerCase()]))
}
