class Mapa{
    mapa = [
        {CidadeA:'oradea',CidadeB:'zerind',Distancia:71},
        {CidadeA:'oradea',CidadeB:'sibiu',Distancia:151},
        {CidadeA:'zerind',CidadeB:'arad',Distancia:75},
        {CidadeA:'arad',CidadeB:'sibiu',Distancia:140},
        {CidadeA:'arad',CidadeB:'timisoara',Distancia:118},
        {CidadeA:'sibiu',CidadeB:'fagaras',Distancia:99},
        {CidadeA:'sibiu',CidadeB:'rimnicu vilcea',Distancia:80},
        {CidadeA:'timisoara',CidadeB:'lugoj',Distancia:111},
        {CidadeA:'lugoj',CidadeB:'mehadia',Distancia:70},
        {CidadeA:'dobreta',CidadeB:'mehadia',Distancia:75},
        {CidadeA:'rimnicu vilcea',CidadeB:'pitesti',Distancia:97},
        {CidadeA:'rimnicu vilcea',CidadeB:'craiova',Distancia:146},
        {CidadeA:'dobreta',CidadeB:'craiova',Distancia:120},
        {CidadeA:'craiova',CidadeB:'pitesti',Distancia:138},
        {CidadeA:'fagaras',CidadeB:'bucharest',Distancia:211},
        {CidadeA:'pitesti',CidadeB:'bucharest',Distancia:101},
        {CidadeA:'bucharest',CidadeB:'giurgiu',Distancia:90},
        {CidadeA:'bucharest',CidadeB:'urziceni',Distancia:85},
        {CidadeA:'urziceni',CidadeB:'hirsova',Distancia:98},
        {CidadeA:'hirsova',CidadeB:'eforie',Distancia:86},
        {CidadeA:'urziceni',CidadeB:'vaslui',Distancia:142},
        {CidadeA:'vaslui',CidadeB:'iasi',Distancia:92},
        {CidadeA:'iasi',CidadeB:'neamt',Distancia:87},
    ];
    cidades = [
        {nome:'oradea'},
        {nome:'zerind'},
        {nome:'arad'},
        {nome:'timisoara'},
        {nome:'lugoj'},
        {nome:'mehadia'},
        {nome:'dobreta'},
        {nome:'craiova'},
        {nome:'rimnicu vilcea'},
        {nome:'sibiu'},
        {nome:'fagaras'},
        {nome:'pitesti'},
        {nome:'bucharest'},
        {nome:'giurgiu'},
        {nome:'urziceni'},
        {nome:'hirsova'},
        {nome:'eforie'},
        {nome:'vaslui'},
        {nome:'iasi'},
        {nome:'neamt'},
      ];
    Vizinhos(cidade){
        let ret =  this.mapa.filter(x => (x.CidadeA === cidade || x.CidadeB === cidade)).map((it) => {
            return it.CidadeA === cidade ? {nome : it.CidadeB,distancia: it.Distancia} : {nome : it.CidadeA, distancia: it.Distancia}
        })

        return ret
    }
    getMapa(){
        return this.mapa;
    }
}

module.exports = Mapa;