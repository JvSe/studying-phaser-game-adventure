/**
 * ESSE ARQUIVO ESTÁ RESPONSÁVEL POR CRIAR O
 * SERVIDOR PARA O JOGO PODER RODAR.
 * 
 * De acordo com a documentação, o Phaser 3.x passou por umas alterações
 * e uma delas é que, para que o jogo funcione, ele precisa de um servidor 
 * por trás rodando, por questões de segurança e outros fatores.
 * 
 * Qualquer coisa, busque saber mais na documentação, pois lá tem tudo 
 * explicado certinho
 */

const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();

server.use(cors());
server.use(express.static('src'));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/index.html'))
});

server.listen(process.env.PORT || 3000);