'use strict'

const fibonacci = () => {
let fArr = []; //Criação do array
let element = 0;

for (let i = 0;; i++) { // o "i" é o incremento utilizado para formar o valor de element
    if(i < 2){ //Se o incremento for menor que 2 ele é inserido no array
        fArr.push(i); //adicionando o incremento no array
        continue
    }
    element = fArr[i-1] + fArr[i-2] //composição do element juntamente com o incremento

    if( element > 350){  //Se a o element for maior que 350 o if dispara o break que interrompe o laço de repetição
        break;
    }
    fArr.push(element) //adicionando o element no array
}
    return fArr; 
}

console.log(fibonacci());



const isFibonnaci = (num) => {
    const array = fibonacci();
    const res = array.includes(num); // O includes verificar se certo elemento está contido ou não no array

    return res; //Retorno do método com a resposta true ou false
}

console.log(isFibonnaci(12)); //Inserir entre parênteses o número para ser ver se está contido na sequência


module.exports = { //exportação dos métodos para serem utilizados em outros arquivos
    fibonacci,
    isFibonnaci
}
