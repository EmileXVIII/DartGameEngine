Application visant à gérer un jeu de dart Jeu de Dart :
mode de jeu implémenté :
 - le 301
    Chaque joueur commence avec un score initial de 301. Chacun leur tour les joueur vont lancer trois fléchettes afin de baisser leur score. A chaque fléchette, onsoustrait le score obtenu par la fléchettes du joueur à son score. Les multiplicateurs sont pris en compte dans le décompte du score. Le premier joueur qui arrive exactement à zéro a gagné. Si un joueur réalise plus de points qu'il n'en reste à soustraire, son tour n'est pas pris en compte. Attention, il faut absolument atteindre zéro en terminant par un double.

L'application est séparés en 2  parties.

 - L'engine (git@github.com:EmileXVIII/DartGameEngine.git):
    - variables d'environnement:
        PORT<br/>
    - pour démarrer :
        ts-node /api/api.ts : pour relier avec l'api<br/>
        ts-node /main.ts  : pour démarer en manuel
 - L'api (git@github.com:EmileXVIII/DartGameAPI.git):
    - variables d'environnement:
        PORTengine<br/>
        PORT<br/>
        URLbdd<br/>
        BDD = perso||mongoose<br/>
    - pour démarrer :
        ts-node /main.ts
    - les routes:
        GET /<br/>
        GET /players<br/>
        POST /players<br/>
        GET /players/new<br/>
        GET /players/{id}<br/>
        GET /players/{id}/edit<br/>
        PATCH /players/{id}<br/>
        DELETE /players/{id}<br/>
        GET /games<br/>
        GET /games/new<br/>
        POST /games<br/>
        GET /games/{id}<br/>
        GET /games/{id}/edit<br/>
        PATCH /games/{id}<br/>
        DELETE /games/{id}<br/>
        GET /games/{id}/players<br/>
        POST /games/{id}/players<br/>
        DELETE /games/{id}/players<br/>
        POST /games/{id}/shots<br/>
        POST /games/{id}/run : envoie le game à l'engine et le démare si sont statut est started <br/>