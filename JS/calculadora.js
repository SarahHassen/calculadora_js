

function gestao()
{

let numero1
let numero2
let escolha
let resultado

numero1 = parseFloat(document.getElementById("num1").value)
numero2 = parseFloat(document.getElementById("num2").value)

escolha = document.getElementById("operador")

switch (escolha.value) 
{
    case '+':
        resultado = somar( numero1 , numero2)
        
        break;
        case '-':
            resultado = subtrair( numero1 , numero2)

        break;
        case 'x':
            resultado =multiplicar( numero1 , numero2)


        break;
        case '/':
           resultado = dividir( numero1 , numero2)

        break;  

    default:
        window.alert("Opção inválida!")
        break;

     
}

document.getElementById("resultado").innerHTML = resultado

}

function somar( n1 , n2)
{
    let mais =  n1 + n2
return mais
}

function subtrair( n1 , n2)
{
    let menos =  n1 - n2
   return  menos
}

function multiplicar( n1 , n2)
{
    let vezes =  n1 * n2
    return vezes
}

function dividir( n1,n2)
{
    if(n2 == 0)
        {
            window.alert("O segundo número não pode ser 0! ")
        }
        else
        {
            let divisao =  n1 / n2
            return divisao
        
        }
}
