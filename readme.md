Application visant à gérer un jeu de dart Jeu de Dart :
mode de jeu implémenté :
 - le 301
    Chaque joueur commence avec un score initial de 301. Chacun leur tour les joueur vont lancer trois fléchettes afin de baisser leur score. A chaque fléchette, onsoustrait le score obtenu par la fléchettes du joueur à son score. Les multiplicateurs sont pris en compte dans le décompte du score. Le premier joueur qui arrive exactement à zéro a gagné. Si un joueur réalise plus de points qu'il n'en reste à soustraire, son tour n'est pas pris en compte. Attention, il faut absolument atteindre zéro en terminant par un double.

L'application est séparés en 2  parties.

 - L'engine (git@github.com:EmileXVIII/DartGameEngine.git):
    - variables d'environnement:
        PORT
    - pour démarrer :
        - ts-node /api/api.ts : pour relier avec l'api
        - ts-node /main.ts  : pour démarer en manuel
    - remarques les logs sont affichées dans la console de l'engine
 - L'api (git@github.com:EmileXVIII/DartGameAPI.git):
    - variables d'environnement:
        - PORTengine
        - PORT
        - URLbdd
        - BDD = perso||mongoose
    - pour démarrer :
        - ts-node /main.ts
    - les routes:
        - GET /
        - GET /players
        - POST /players
        - GET /players/new
        - GET /players/{id}
        - GET /players/{id}/edit
        - PATCH /players/{id}
        - DELETE /players/{id}
        - GET /games
        - GET /games/new
        - POST /games
        - GET /games/{id}
        - GET /games/{id}/edit
        - PATCH /games/{id}
        - DELETE /games/{id}
        - GET /games/{id}/players
        - POST /games/{id}/players
        - DELETE /games/{id}/players
        - POST /games/{id}/shots
        - POST /games/{id}/run : envoie le game à l'engine et le démare si sont statut est "started"