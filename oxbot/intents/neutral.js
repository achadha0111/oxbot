const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getNeutral = () => {
  const answers = [
    ';)',
    ';p',
    '<3',
    'You bet! ;)'
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getNeutral