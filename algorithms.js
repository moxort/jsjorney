// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
//
// For example, take 153 (3 digits), which is narcissistic:


function isNarc(value){
    let numbArray = value.toString().split('')
    let realDigits = value.toString().split('').map(Number)
    let result = 0;
    realDigits.forEach((num) =>{
        result = result + num**realDigits.length
    })

    return result === value
}
