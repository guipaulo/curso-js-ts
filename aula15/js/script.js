const numero = Number(prompt('Digite um número:'));
const numeroTitulo = window.document.getElementById('n-titulo');
const numeroTexto = window.document.getElementById('texto')

numeroTitulo.innerHTML = numero;
numeroTexto.innerHTML += `<p>Raiz quadrada ${numero**(0.5)}</p>`
numeroTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
numeroTexto.innerHTML += `<p>${numero} é NaN: ${Number.isNaN(numero)}</p>`;
numeroTexto.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}</p>`;
numeroTexto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
numeroTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;