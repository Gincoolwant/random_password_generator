// generate random password
function sample(collection, passwordLength) {
  let password = ''

  for (let i = 1; i <= passwordLength; i++) {
    randomIndex = Math.floor(Math.random() * collection.length)
    password += collection[randomIndex]
  }

  return password
}

function generatePassword(options) {
  // define user selection
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const upperCaseLetters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
  const numbers = '0123456789'.split('')
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'.split('')

  // create collection
  let collection = []

  // create a collection to store things user pick up
  if ( options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters)
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters)
  }
  
  if (options.numbers === 'on') {
    collection = collection.concat(numbers)
  }
  
  if (options.symbols === 'on') {
    collection = collection.concat(symbols)
  }

  // remove things user do not need
  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character))
  }
  
  if (!options.length) {
    return 'Please input the length of password you want to generate.'
  }

  if (collection.length === 0) {
    return 'No valid characters in your selections.'
  }

  

  // return password result
  return sample(collection, options.length)

}

module.exports = generatePassword