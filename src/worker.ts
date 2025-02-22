const funFact = async (num: number)=>{
  // func to retrieve fun fact from numbersapi.com

  try {
    const numbersApi = `http://numbersapi.com/${num}/math?json`

    const response = await fetch(numbersApi)
    if (!response.ok) {
        throw new Error(`numbersApi.com call failed with status ${response.status}`)
    }

    const data = await response.json()
    return data.text
  } catch (error) {
    return error
  }
}

const isPrime = (num:number)=>{
  // func to check prime property of number

  if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const isPerfect = (num:number)=>{
  // func to check perfect property of number

  if (num <= 1) return false
  let sum = 0
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i
    }
  }
  return sum === num
}

const isOdd = (num:number)=>{
  // func to check the eveness of a number

  if (num % 2 === 0) return false
  return true
}

export const mathsproperties = async(num:number)=>{
  try{
    const num_prime = isPrime(num)
    const num_perfect = isPerfect(num)
    const num_odd = isOdd(num)
    const getFact = await funFact(num)
    const digit_sum = num.toString().split('').map(Number)
    .reduce((sum, digit) => sum+digit, 0)

    const Properties = {
      "number": num,
      "is_prime": num_prime,
      "is_perfect": num_perfect,
      "properties": [
        num_odd? "Odd":"Even",
        num_prime? "prime":null,
        num_perfect? "Perfect":null
      ],
      "digit_sum": digit_sum,
      "fun_fact": getFact
    }
    // console.log(Properties)
    return Properties
  } catch (error){
    return error
  }
}

// const logg = async () => {
//   const fF = await mathsproperties(3033)
//   console.log(fF)
// }
// logg()