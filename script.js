function inserir(numero){
    let num = document.querySelector('.Resultado').innerHTML
    document.querySelector('.Resultado').innerHTML = num + numero
}
function limpar(){
    let num = document.querySelector('.Resultado').innerHTML= ''
}
function voltar(){
    let res = document.querySelector('.Resultado').innerHTML
    document.querySelector('.Resultado').innerHTML = res.substring(0, res.length - 1)
}
function calcular(){
    let res = document.querySelector('.Resultado').innerHTML 
    if(res){
       document.querySelector('.Resultado').innerHTML = eval(res)
    }else{
        document.querySelector('.Resultado').innerHTML= ''
    }
}