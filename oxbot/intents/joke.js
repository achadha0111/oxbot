const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getJoke = () => {
  const answers = [
    'I am not Siri or Cortana, who were created by teams of PhDs. My creator hasn\'t even got his Bachelor\'s yet!',
    'I would have made you laugh, but my mother doesn\'t Allo that! ;)',
	'You know what\'s my favourite subject? Botany!'
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getJoke