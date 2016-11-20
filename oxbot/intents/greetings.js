const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getGreetings = (session, res) => {

	
  		const answers = [
    	'Hello!',
    	'Yo;)',
    	'Hey,nice to see you.',
    	'Welcome back!',
    	'Hi, how can I help you?',
    	'Hey there, what are you looking for today?',
  		]
  		return Promise.resolve([toText(random(answers))])
  	}
const toText = message => {return {type: 'text', content: message }}
module.exports = getGreetings