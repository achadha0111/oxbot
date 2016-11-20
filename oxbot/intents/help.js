const random = array => { return array[Math.floor(Math.random() * array.length)] }
const help = () => {
  const answers = [
    'I can tell you some facts, and amuse you in general, fire away!'
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = help