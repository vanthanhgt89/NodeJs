function add (a, b, cb){
  if(typeof a !== 'number' && typeof b !== 'number'){
    throw new Error('a, b phai la so')
  }else{
    cb(false,a + b)
  }
}

const add1 = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject(new Error(`a,b must be a number !`)) //onRejected
            }
            resolve(a + b) //onFullified
        }, 500);
    })
}

add1(1,2)
.then(res => add1(res,1))
.then(res => console.log(res))
.catch(err => console.log(err))
function powBy2(a, b, cb){
  if(typeof a !== 'number' && typeof b !== 'number'){
    throw new Error('a, b phai la so')
  }else{
    cb(false,a * b)
  }
}

function divBy2( a, b, cb){
  if(typeof a !== 'number' && typeof b !== 'number'){
    throw new Error('a, b phai la so')
  }else{
    cb(false,a / b)
  }
}


// try {
//   add(2, 2, (err, resultOfAdd) => {
//     if(err) throw new Error(err)
//     powBy2(resultOfAdd, 2, (err, resultOfPow) =>{
//       if(err) throw new Error(err)
//       divBy2(resultOfPow, 2, (err, result) => {
//         if(err) throw new Error(err)
//         console.log(result);
//       }) 
//     })
//   })
// } catch (error) {
//       console.log(error);
// }

// viet lai voi promise

