var Turn = require('node-turn');

var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    username: "password"
  }
});

setTimeout(() => {
    server.start()
    console.log('[MyHeroTurn] : Started')


}, 1000)

