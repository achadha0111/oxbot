const random = array => { return array[Math.floor(Math.random() * array.length)] }
const getInfoOxford = () => {
  const answers = [
    'Oxford’a Motto is Dominus Illuminatio Mea or The Lord is my light are the opening words of Psalm 27',
    'The first colleges of Oxford were built in the 13th century, but it wasn\'t until 1878 that women were admitted to the university',
    'Oxford\'s Ashmolean Museum was the first museum in the world to be opened to the public',
    'Oxford has more published writers per square mile than anywhere else in the world.',
    'Oxford University has educated 26 British Prime Ministers',
    'Every member of Oxford University upon joining the University swears an oath stating that they will not light a fire inside the world famous Bodleian Library',
    'The word ‘snob’ originates in Oxford',
    'The only graffiti permitted on Oxford college walls is to celebrate rowing victories over rival colleges\' boat crews',
    'Rock bands Supergrass and Radiohead come from Oxford',
    'Residents and natives of Oxford are known as Oxonians',
    'Just east of Oxford, in the suburb of Headington, is the famous Shark House - a house with a 25-foot long headless shark protruding from the roof',
    'There is an Oxford in New Zealand, an Oxford in Canada, 21 Oxfords in the United States, besides a Mount Oxford, two Lake Oxfords and Oxford County, Maine',
    'It was whilst at Oxford University that Bob Hawke, former Australian Prime Minister was inducted into the Guinness Book of records for drinking a yard of ale in 11 second'
  ]
  const suggestions = [
     'Wonder if you knew this?',
     'Here, take this enlightening one',
     'How about this?',
     'Here, just came to know this'
  ]
  return Promise.resolve([toText(random(suggestions) + " " + random(answers))])
}

const toText = message => { return { type: 'text', content: message } }
module.exports = getInfoOxford