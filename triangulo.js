//triangulo pode ser a base x a altura a dividio por 2 //

const calculo = (base, altura) => {
    const calcular =  base * altura;
    return calcular;

} 
const AreaTringulo = (divisao) =>{
const triangulo = calculo(12,10) / divisao;
return triangulo;
}
console.log(`a multiplicação da base e altura é: ${calculo(12,10)}`);
console.log(`A Area do triangulo é: ${AreaTringulo(2)}`);