// 'let' tem escopo de bloco, enquanto 'var' tem escopo de função ou global
// 'Frutas :' é uma propriedade, o valor desta propriedade é um array de strings
// ':' é usado dentro de objetos literais para definir pares chave-valor
// '=' é usado para atribuições e reatribuições de valores a variáveis ou propriedades de objetos

/*
Promise States
Pending: This is the initial stage. Nothing happens here. Think of it like this, your customer is taking their time giving you an order. But they haven't ordered anything yet.
Resolved: This means that your customer has received their food and is happy.
Rejected: This means that your customer didn't receive their order and left the restaurant.
*/

let sorveteria_aberta = true

let ingredientes = {
    Frutas   :  ["morango", "uva", "banana", "maçã"],
    Liquidos :  ["água", "gelo"],
    Base     :  ["cone", "copo", "palito"],
    Cobertura:  ["chocolate", "amendoim"] ,
}

// Arrow function 1
let pedido = (tempo, trabalho) => {
    // Resolvido: Sorvete preparado e entregue
    // Rejeitado: O cliente não recebeu o sorvete
    return new Promise((resolver, rejeitar)=>{
        if(sorveteria_aberta){

            setTimeout(()=>{
                // O trabalho está 👇 sendo feito aqui 
                resolver(trabalho())
            // Estabelencendo 👇 o tempo para o trabalho ser concluido
            },tempo)

            resolver()
        }else{
            rejeitar(console.log("Nossa sorveteria está fechada"))
        }
    })
}

// Arrow function 2
let producao = () => {

    setTimeout(()=>{
        console.log("A produção foi iniciada")

        setTimeout(()=>{
            console.log("A fruta foi fatiada")
        },2000)
    },0)
}

//Tempo👇 aqui
pedido(2000, ()=>console.log(`A fruta selecionada foi ${ingredientes.Frutas[0]}`))
//  passa uma ☝️ função como parâmetro aqui para começar a produção 
    .then(()=>{
        return pedido(0, ()=>console.log("Produção inciada"))
    })
    .then(()=>{
        return pedido(2000, ()=>console.log("A fruta foi fatiada"))
    })
    .then(()=>{
        return pedido(1000, ()=>console.log(`Adicionando ${ingredientes.Liquidos[0]} e ${ingredientes.Liquidos[1]}`))
    })
    .then(()=>{
        return pedido(1000, ()=>console.log("Iniciando a máquina"))
    })
    .then(()=>{
        return pedido(2000, ()=>console.log(`Sorvete colocado em um ${ingredientes.Base[1]}`))
    })
    .then(()=>{
        return pedido(3000, ()=>console.log(`A cobertura escolhida foi ${ingredientes.Cobertura[0]}`))
    })
    .then(()=>{
        return pedido(4000, ()=>console.log("Servindo o sorvete"))
    })
//   .then works when a promise is resolved
//   .catch works when a promise is rejected
    .catch(()=>{
        console.log("O cliente foi embora")
    })
//   .finaly irá funcionar independente da promessa ser resolvida ou rejeitada
    .finally(()=>{
        console.log("Fim do dia")
    })