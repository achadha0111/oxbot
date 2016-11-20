const random = array => { return array[Math.floor(Math.random() * array.length)] }

const getGratitude = () => {
  const answers = [
    'It\'s my pleasure to make you smile :)',
    'So happy I made you laugh! :)',
    'Woot Woot!',
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getGratitude