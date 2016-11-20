// Required Packages
const config = require('./config.js')
const restify = require('restify')
const builder = require('botbuilder')
const recast = require('recastai')
const recastClient = new recast.Client(config.recast)

const connector = new builder.ChatConnector({
	appId: config.appid,
	appPassword: config.secret,
})


const getGreetings = require('./intents/greetings.js')
const getInfoOxford = require('./intents/infooxford.js')
const getFeelings = require('./intents/feelings.js')
const getGoodbyes = require('./intents/goodbye.js')
const getHelp = require('./intents/help.js')
const getJoke = require('./intents/joke.js')
const getNeutral= require('./intents/neutral.js')
const getGratitude= require('./intents/gratitude.js')


// Intent Map
const INTENTS = {
  greetings: getGreetings,
  infooxford: getInfoOxford,
  feelings: getFeelings,
  goodbyes: getGoodbyes,
  help: getHelp,
  joke: getJoke,
  neutral: getNeutral,
  gratitude: getGratitude,
}

//Link to Microsoft Bot Framework
const bot = new builder.UniversalBot(connector)

const sendMessageByType = {
  text: (session, elem) => session.send(elem.content),
}
// Get User Data from Facebook Messenger



bot.dialog('/', (session) => {
  session.sendTyping()
	recastClient.textRequest(session.message.text, (recast, err) =>{
		if (err) {
			session.send('I need some sleep right now...Zzzz')
		} else { 
			  const intent = recast.intent()
     		const entity = recast.get('oxford')
        console.log(intent)
      	if (intent) {
        		INTENTS[intent](entity)
        		 .then(res => { res.forEach( (message) => sendMessageByType[message.type](session, message)) })
        		 .catch(err => { err.forEach( (message) => sendMessageByType[message.type](session, message)) })
        } else if (!intent) {
            session.send('I am not quite sure I got that. Ask for help!')
			  }
      }
	})
})

const server = restify.createServer()
server.listen(8080)
server.post('/', connector.listen())