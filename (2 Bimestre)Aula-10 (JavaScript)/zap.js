/*1) Escreva um programa em JavaScript que exiba na tela o maior número
entre dois números fornecidos pelo usuário.*/

/* const numero1 = +prompt("Digite o Primeiro Numero.");
const numero2 = +prompt("Digite o Segundo Numero.");

if(numero1 > numero2){
    console.log("Número: " + numero1 + " é maior que: " + numero2);
}else if(numero1==numero2){
    console.log("Os números são iguais.");
}else{
    console.log("L");
} */


/*3) Escreva um programa em JavaScript que exiba na tela uma mensagem
de acordo com a nota do usuário. Se a nota for menor do que 6, exiba
"Reprovado". Se a nota for maior ou igual a 6 e menor do que 8, exiba
"Aprovado". Se a nota for maior ou igual a 8, exiba "Aprovado com louvor".*/


/* const nota = +prompt("Digite sua Nota.");

if(nota>=8){
    alert("Aprovado com Louvor");
}else if(nota>=6){
    alert("APROVADO")
}else if(nota<=8){
    alert("Reprovado")
} */


/*4) Escreva um programa em JavaScript que exiba na tela a média dos
números de um vetor.*/

/* const vector = [1,2,3];
let soma = 0;
for(let i=0; i < vector.length; i++){
    soma+= vector[i];
}
const media = soma / vector.length;
alert("A média é " + media); */


/*5) Escreva um programa em JavaScript que exiba na tela uma mensagem
de acordo com o valor de uma variável. Se a variável for igual a "a", exiba
"A". Se a variável for igual a "b", exiba "B". Se a variável não for nem "a"
nem "b", exiba "Outra letra".*/

/* let letra = prompt("Digite alguma letra. (a, b, outra letra)");
switch (letra) {
    case "a":
        alert("a selecionada.");
        break;
    case "b":
        alert("b  selecionada.");
        break;
    case "A":
        alert("A  selecionada.");
        break;
    case "B":
        alert("B  selecionada.");
        break;
    default:
        alert("Outra letra selecionada.");
} */


/* 6) Escreva um programa em JavaScript que exiba na tela a soma dos
elementos de uma matriz. */

/* const matrizLinha = +prompt("Digite a quantidade de linhas da matrix.");
const matrizColuna = +prompt("Digite a quantidade de colunas da matrix.");
let matriz = [];
let soma = 0;


for(let i = 0; i < matrizLinha; i++){
    matriz[i] = [];
    for(let j = 0; j < matrizColuna; j++){
        matriz[i][j] = +prompt(`Insira o número da linha ${i+1} e coluna ${j+1}`);
        soma += matriz[i][j];
    }
}

alert(`Matrix: ${matrizLinha}} x ${matrizColuna}. A soma dos elementos é: ${soma}`); */



/* 7) Escreva um programa em JavaScript que exiba na tela o fatorial de um
número fornecido pelo usuário. */

/* const numero = +prompt("Digite um número.");
let fatorial = numero;

for(let i = (fatorial - 1); i > 0; i--){
    fatorial = fatorial * i;
}

alert(`A Fatorial de ${numero} é ${fatorial}`); */




/* 8) Escreva um programa em JavaScript que exiba na tela uma mensagem
de acordo com a escolha do usuário em um menu de opções. O menu
deve ter as opções "1. Opção 1", "2. Opção 2" e "3. Opção 3". Se o usuário
escolher a opção 1, exiba "Opção 1 escolhida". Se o usuário escolher a
opção 2, exiba "Opção 2 escolhida". Se o usuário escolher a opção 3,
exiba "Opção 3 escolhida". Se o usuário escolher uma opção inválida,
exiba "Opção inválida". */

/* const escolha = +prompt("Escolha uma opção: (1. Opção 1, 2. Opção 2, 3. Opção 3)");

switch (escolha) {
    case 1:
        alert("Opção 1 Escolhida");
        break;
    case 2:
        alert("Opção 2 Escolhida");
        break;
    case 3:
        alert("Opção inválida");
        break;
    default:
        alert("Opção inválida");
        break;
} */



/* 9) Escreva um programa em JavaScript que exiba na tela o maior número
de um vetor. */

/* let vector = [1,2,3,4,5,6,99];
let numero = 0;

for(i = 0; i < vector.length; i++){
    if(vector[i]>numero){
        numero=vector[i];
    }
}

alert(`O maior número do vetor é ${numero}`); */

/* 10)Escreva um programa em JavaScript que exiba na tela a média dos
elementos de uma matriz. */

/* const matrizLinha = +prompt("Digite a quantidade de linhas da matriz.");
const matrizColunas = +prompt("Digite a quantidade de colunas da matriz.");
let matriz = [];
let soma = 0;

for (let i = 0; i < matrizLinha; i++) {
    matriz[i] = [];
    for(let j = 0; j < matrizColunas; j++){
        matriz[i][j] = +prompt(`Insira o número da linha: ${i+1} e coluna: ${j+1}.`);
        soma+=matriz[i][j];
    }
}

let media = soma / (matriz.length * matrizColunas);
alert(`A média da matriz é ${media}.`); */