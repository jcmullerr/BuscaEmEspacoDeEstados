class Busca{

    static BuscaHeuristica(cidadeA,cidadeB){
        let Mapa = require('./Mapa')
        let mapa = new Mapa()
        let escolhidos = []
        let fechados = []
        let quantidadeVisitados = 0
        let proximovizinho = cidadeA
        escolhidos.push(cidadeA)
        while(quantidadeVisitados < mapa.mapa.length){
            let possiveis = mapa.Vizinhos(proximovizinho)
            possiveis = possiveis.filter( ( el ) => !escolhidos.includes( el.nome )).filter(el => !fechados.includes(el.nome))
            if(possiveis.length === 0){
                fechados.push(escolhidos.pop())
                proximovizinho = escolhidos[escolhidos.length-1]
                continue
            }
            let distancias = possiveis.map(x => x.distancia)
            let menorDistancia= Math.min.apply( Math, distancias )
            if (possiveis.map(x => x.nome).includes(cidadeB))
                proximovizinho = possiveis.find(x => x.nome === cidadeB).nome
            else
                proximovizinho = possiveis.find(x => x.distancia == Math.min(menorDistancia)).nome
            escolhidos.push(proximovizinho)
            if(proximovizinho === cidadeB)
                return escolhidos
            quantidadeVisitados++
        }
        return null
    }

    static BuscaDijkstra (cidadeA,cidadeB){
        let Mapa = require('./Mapa')
        let mapa = new Mapa()
        let fechadas = []
        let cidadesComDistancia = []
        cidadesComDistancia.push({
            cidade: cidadeA,
            distancia: 0,
            origem : cidadeA
        })
        mapa.cidades.filter(x => x.nome != cidadeA).forEach(x => {
            cidadesComDistancia.push({
                cidade : x.nome,
                distancia : 1000000,
                origem : ''
            })
        })
        let proximaCidade = cidadeA
        let visitados = []
        while(fechadas.length < mapa.cidades.length){
            let vizinhos = mapa.Vizinhos(proximaCidade)
            if(vizinhos.filter(x => !fechadas.includes(x.nome)).length == 0){
                fechadas.push(visitados.pop())
                proximaCidade = visitados[visitados.length-1]
                continue
            }
            vizinhos.forEach(x => {
                let i = cidadesComDistancia.findIndex(d => d.cidade ===x.nome)
                if (cidadesComDistancia.find(x => x.cidade == proximaCidade).distancia + x.distancia < cidadesComDistancia[i].distancia ){
                    cidadesComDistancia[i].distancia =cidadesComDistancia.find(x => x.cidade == proximaCidade).distancia + x.distancia// cidadesComDistancia[i].distancia + x.distancia
                    cidadesComDistancia[i].origem = proximaCidade //== cidadesComDistancia[i].cidade ? cidadesComDistancia[i].origem : x.nome
                }
            })
            fechadas.push(proximaCidade)
            let distancias = vizinhos.filter(x => !fechadas.includes(x.nome)).map(x => x.distancia)
            let menorDistancia= Math.min.apply( Math, distancias )
            visitados.push(proximaCidade)
            proximaCidade = vizinhos.find(x => x.distancia == Math.min(menorDistancia) && !fechadas.includes(x.nome)).nome
        }
        let caminho = []
        let cidadeAtual = cidadeB
        while(cidadeAtual != cidadeA){
            caminho.unshift(cidadeAtual)
            cidadeAtual = cidadesComDistancia.find(x => x.cidade == cidadesComDistancia.find(d => d.cidade === cidadeAtual).origem).cidade
            if(cidadeAtual == cidadeA)
                caminho.unshift(cidadeAtual)
        }
        return caminho
    }


    static BuscaCega(cidadeA,cidadeB){
        let Mapa = require('./Mapa')
        let mapa = new Mapa()
        let escolhidos = []
        let descartados = []
        escolhidos.push(cidadeA)
        let proximovizinho = cidadeA
        while(descartados.length < mapa.mapa.length){
            let possiveis = mapa.Vizinhos(proximovizinho)
            possiveis = possiveis.filter(x => !descartados.includes(x.nome)).filter(x => !escolhidos.includes(x.nome))
            if(possiveis.length === 0){
                descartados.push(escolhidos.pop())
                proximovizinho = escolhidos[escolhidos.length-1]
                continue
            }
            proximovizinho = possiveis[0].nome
            escolhidos.push(proximovizinho)
            if(proximovizinho === cidadeB)
                return escolhidos
        }
        return null
    }
}

module.exports = Busca