const R = require('ramda')

const transformCharacter = char =>
  R.find(c => c === char.toLowerCase(), [...'bcdfghjklmnpqrstvwxz']) 
    ? `${char}o${char.toLowerCase()}` 
    : char

const transformWord = R.compose(
  R.reduce((a, b) => a + b, ''),
  R.map(transformCharacter)
)

const rovarsprak = R.compose(
  R.join(' '), 
  R.map(transformWord),
  R.filter(R.identity),
  R.split(/\s/)
)

module.exports = rovarsprak
