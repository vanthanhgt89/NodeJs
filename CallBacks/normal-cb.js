// Khai bao day du tham so  cua callback err and result
function sum(a, b, cb) {
  // setTimeout(function () {
    let err, result;
    if (typeof a !== 'number' || typeof b !== 'number') {
      err = 'a va b phai dang number'
      result = undefined
      return cb(err, result)
    }
    err = false;
    result = a + b;
    return cb(err, result)
  // }, 0);
}

function multi(a, b, cb) {
  // setTimeout(function () {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return cb('A va b phai dang number')
    }
    return cb(false, a * b)

  // }, 0);
}

// Viet theo cach thong thuong khi chua co thoi gian thuc thi thi ket qua tra ve nhu nhau
// Khi set thoi gian thuc thi thi viet theo cac thong thuong se xay ra loi x luc nay tra ve 1 function 

// normal function
let x = sum(3, 4, (err, res) => {
  if (err) {
    console.log(err);
    return
  }
  return (res)
})

multi(x, 5, (err, res) => {
  if (err) {
    console.log(err);
    return
  }
  console.log(res)
})

// sum(1, "2", (err, result) => {
//   if (err) {
//     console.log(err);
//     return
//   }
//   console.log(result)
// })

// callback function
multi(3, 4, function (err, result) {
  if (err) {
    console.log(err);
    return
  }
  sum(result, 5, function (err, resultOfSum) {
    if (err) {
      console.log(err);
      return
    }
    console.log(resultOfSum);
  })
})



