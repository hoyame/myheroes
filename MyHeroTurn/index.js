var Turn = require('node-turn');

var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    username: "password"
  }
});

server.start()
    .then(() => {
        console.log('[MyHeroTurn] : Started')
    })

    .catch((err) => {
        console.log('[MyHeroTurn] : Error [' + err + ']')
    })
;