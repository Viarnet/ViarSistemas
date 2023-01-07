let dados=[];
let atual=[];
for (let index = 0; index < 416; index++) {
    atual.push(0);
    if(atual.length == 32){
        dados.push(atual);
        atual = [];
    }       
}

console.log(dados[0][6])