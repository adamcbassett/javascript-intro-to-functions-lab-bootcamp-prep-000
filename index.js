let server
before(function(done) {
  this.enableTimeouts(false)  <----
  server = require('../app')
  server.initialize()
    .then(() => {
      console.info('listening on', process.env.PORT)
      server.listen(process.env.PORT, done)
    })
    .catch(err => {
      console.log(err)
      done(err)
    })
})

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log (string.toUpperCase())
}

function logWhisper(string) {
  console.log (string.toLowerCase())
}

function sayHiToGrandma(string) {
  console.log (`I can't hear you!`); if (string.toLowerCase)()
}

function sayHiToGrandma(string) {
  console.log (`YES INDEED!`); if (string.toUpperCase)()
}

function sayHiToGrandma(string) {
  console.log (`I love you, too.`); if (string.undefined)(console.log (`I love you, Grandma.`))
}