let nome = prompt("Qual seu nome? ")
let nivel = parseInt(prompt("Digite seu XP: washington"))

if( nivel <= 1000){
    document.write(`${nome}, Você está no nivel FERRO`)
}else if( nivel > 1000 && nivel <= 2000){
    document.write(`${nome}, Você está no nivel BRONZE`)
}else if( nivel > 2000 && nivel <= 5000){
    document.write(`${nome}, Você está no nivel PRATA`)
}else if( nivel > 5000 && nivel <= 7000){
    document.write(`${nome}, Você está no nivel OURO`)
}else if( nivel > 7000 && nivel <= 8000){
    document.write(`${nome}, Você está no nivel PLATINA`)
}else if( nivel > 8000 && nivel <= 9000){
    document.write(`${nome}, Você está no nivel ASCENDENTE`)
}else if( nivel > 9000 && nivel <= 10000){
    document.write(`${nome}, Você está no nivel IMORTAL`)
}else if (nivel > 10000){
    document.write(`${nome}, Você está no nível RADIANTE`)
}else{
    document.write("Erro, Forneça seu nome e seu XP")
}

