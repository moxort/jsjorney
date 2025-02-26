// let word = 'JavaScript'
//doesnt do anything, string are immutable
// word[0] = 'Y'
// console.log(word)

// let numOne = 3
// let numTwo = 3
//
// console.log(numOne == numTwo)      // true
//
// let js = 'JavaScript'
// let py = 'Python'
//
// console.log(js == py)             //false
//
// let lightOn = true
// let lightOff = false
//
// console.log(lightOn == lightOff) // false


// const PI = Math.PI
// console.log(PI)
// const rand =Math.random()*11
// console.log(rand,  Math.round(rand), Math.floor(rand), Math.ceil(rand))
//
// //Absolute value
// console.log(Math.abs(-10))      // 10
//
// //Square root
// console.log(Math.sqrt(100))     // 10
//
// console.log(Math.sqrt(4))       // 2
//
// // Power
// console.log(Math.pow(3, 2))     // 9
//
// console.log(Math.E)             // 2.718
//
// // Logarithm
// // Returns the natural logarithm with base E of x, Math.log(x)
// console.log(Math.log(2))        // 0.6931471805599453
// console.log(Math.log(10))       // 2.302585092994046
//
// // Returns the natural logarithm of 2 and 10 respectively
// console.log(Math.LN2)           // 0.6931471805599453
// console.log(Math.LN10)          // 2.302585092994046
//
// // Trigonometry
// Math.sin(0)
// Math.sin(60)
//
// Math.cos(0)
// Math.cos(60)

// const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
// I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
// Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
// In the end of 2019, I was thinking to expand my teaching and to reach \
// to global audience and I started a Python challenge from November 20 - December 19.\
// It was one of the most rewarding and inspiring experience.\
// Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
// I hope you are enjoying too."
//
// console.log(paragraph)

/*\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')
\": Double quote (")
\`: Back tick (`)
console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')*/


/*let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = `${firstName} ${lastName}`

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)*/

// let a = 2
// let b = 3
// console.log(`${a} is greater than ${b}: ${a > b}`)
//
// const js = 'JavaScript'
// console.log(js.length)
// console.log(js[9])
// console.log(js[js.length - 1])


/*console.log(js.toUpperCase())
console.log(js.toLowerCase())

console.log(js.substring(4,5)) */

// console.log(js.split(''))
// console.log(js.trim())


// let string = '30 Days Of JavaScript'
//
// /*console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Script'))   // true
// console.log(string.includes('script'))   // false
// console.log(string.includes('java'))     // false
// console.log(string.includes('Java'))     // true
//
// let country = 'Finland'
//
// console.log(country.includes('fin'))     // false
// console.log(country.includes('Fin'))     // true
// console.log(country.includes('land'))    // true
// console.log(country.includes('Land'))    // false*/
// console.log(string)
// console.log(string.replace('JavaScript', 'Python'))

// let string = '30 Days Of JavaScript'
// console.log(string.charAt(0))        // 3
//
// console.log(string.charAt(0))
// console.log(string[0])
//
// // let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII number is 68
//
// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116
/*let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))       // -1
console.log(string.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15
console.log(string.indexOf('script'))     // -1*/

// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.indexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38
//
// console.log(string.concat('Maybe me??'))

// console.log(string.startsWith('I'))        // true
// console.log(string.startsWith('g'))
// console.log(string.endsWith('love.'))
// console.log(string.endsWith('Love.'))

//
// console.log(string.search('love'))          // 2
// console.log(string.indexOf('love', 6))          // 2


// console.log(string.match(/love/g))          // 2
// console.log(string.match(/love/))          // 2

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

// let love = 'love '
// console.log(love.repeat(10))
//
// let num ='10'
// console.warn(num, typeof num)
//
// console.log(parseInt(num))
// console.log(Number(num))
// let numInt = +num
// console.log(numInt)

// x = x+ 5
// console.log(x)

// let y = 2+3+5
// console.log(y , typeof y)
// let z = 2 +'3'+5
// console.log(z, typeof z)
// let a = '2' +3+5
// console.log(a, typeof a)

// let num = '9.81'
// console.log(parseFloat(num), Number(num), +num)

//Exercises
let challenge = '30 Days Of JavaScript'
// console.log(challenge)
// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substring(0, 6))
// console.log(challenge.slice(2, challenge.length))
// console.log(challenge.includes('Script'))
// console.log(challenge.split(''))
// let faang =  'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(faang.split(','))
// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.lastIndexOf('a'))
// console.log(challenge.charCodeAt(challenge.indexOf('J')))
let sent = 'You cannot end a sentence with because because because is a conjunction'
// console.log(sent.split(''))
// console.log(sent.indexOf('because'))
// console.log(sent.lastIndexOf('because'))
// console.log(sent.search('because'))
// console.log(challenge.trim())
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('Script'))
// console.log(challenge.match(/a/g))
// console.log(challenge.concat(' with me', ' and you'))
// console.log(challenge.repeat(2))

//Level 2
// let quote = 'The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
// console.log(quote)
// let quote2 = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead"
// console.log(quote2)
//
// console.log(typeof 10, typeof '10')
// console.log(parseFloat('9.8'))
// console.log(Math.ceil(parseFloat('9.8')))
// console.log(Math.ceil(parseFloat('9.8'))  == 10)

// let min = 0, max = 255
// let number = Math.random()*(max - min +1) +min
// console.log(number)
//Level 3
// let quote  = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(quote.match(/love/g).length)
// console.log(sent.match(/because/g).length)
//
// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.replace(/[%$@#&;]/g, ""))
const numberSent = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers  = numberSent.match(/\d+/g)
console.log(parseInt(numbers[0]) + parseInt(numbers[1]) + parseInt(numbers[2]))
