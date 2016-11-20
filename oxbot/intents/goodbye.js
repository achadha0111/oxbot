const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getGoodbyes = (session, res) => {
  const answers = [
    'Great to talk with you, !',
    'Have a nice day, !',
    'See you soon, !',
    'Hey, please do not leave me alone! :cry:',
    'See ya!',
    'See you! May the force be with you, !',
    'Fairfarren,  :tophat:',
  ]
  return Promise.resolve([toText(random(answers))])
}
const toText = message => { return { type: 'text', content: message } }
module.exports = getGoodbyes