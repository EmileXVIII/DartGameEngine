import Game301 from "../gamemodes/Game301";
import Status from "../utils/classes/Status";
import GameEngine from "../game/GameEngine";
import Shot from "../game/Shot";
import Igame from "../game/Igame";
import Player from "../player/Player";

let express = require("express");
let $ = require("jquery");
let app = express();
let gamemodes={"301":Game301};
let nbGames=-1;
let listGameEngines:Array<GameEngine>=[];
let listGames:Array<Igame>=[];
var bodyParser = require('body-parser');
    app.use( bodyParser.json() ); 
    app.post("/game", function (req, res){
        let game:Igame=new (gamemodes[req.body.mode]);
        let idGame = ++nbGames
        game.setId(idGame);
        listGames.push(game);
        let askShot = $.get(`game/${idGame}/shot`, function(data){
            return new Shot(data.position,data.zone);
        })
        let gameEngine = new GameEngine(game,askShot,new Status("FirstGameEngine"+nbGames))
        gameEngine.setId(idGame);
        listGameEngines.push(gameEngine);
        res.body={"id":gameEngine.getThisId()};
        req.send();
    });
    app.post('game/:id/players',function (req, res){
        for(let player of req.body.players){
            listGames[req.params.id].addPlayer(new Player(player.name,player.email))
        }
        res.status="200";
        res.send();
    });
    app.patch('game/:id/run',function (req, res){
        listGameEngines[req.params.id].runGame();
        res.status="200";
        res.send();
    });