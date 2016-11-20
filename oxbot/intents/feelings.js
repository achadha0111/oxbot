
const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getFeelings = () => {
  const answers = [
    'I\'m doing well thanks!',
    'I had a nightmare yesterday about being a bot. Terrifying. Hopefully it was just a bad dream!',
    'Super good, as usual! You know how glad I am when I see you typing :cat:',
    'Someone just spoiled the last episode of Game of thrones, so I\'m kinda bumped...',
    'Not bad. Just dreaming of holidays on the beach.',
    'I feel like a legitimate badass! '
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getFeelings