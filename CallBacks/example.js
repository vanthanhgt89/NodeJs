// example 1
// Luu tru trong bien
// let func = (x) => {
//   console.log(x);
// }
// func(34)

// Khoi tao trong mot function khac
// function log(x) {
//   function newFunction() {
//     console.log('This is function inside function')
//   }
//   newFunction()
//   console.log(x)
// }

// log(54) // return ''This is function inside function' / 54


// Truyen function dang tham so tra ve mot function khac

// function sum(a, b) {
//   return a + b
// }
// function multi(a, b) {
//   return a * b
// }

// function calcNumber(a, b, callback) {
//   return callback(a, b)// tra ve mot function
// }

// console.log(calcNumber(3, 4, sum)) // return 7
// console.log(calcNumber(3, 4, multi)) // return 12

/**
 * Callback function sử dụng chủ đạo mô hình lập trình functional programming chủ yếu về cách sử dụng function như một tham số
 * Callback được truyền vào một function khác như một biến
 * Callback đươc gọi hoặc được chạy bên trong function đó
 * example forEach()
 */

// let arr = ['one', 'two', 'three']
// arr.forEach((value, index) => {
//   console.log(`${index}: ${value}`);
// })
// return
// 0: one
// 1: two
// 2: three
// Ta thay function ben trong la ham vo danh co 2 tham so value va index

/**
 * Bất đông bộ trong javascript
 * Bất đồng bộ xảy ra khi hai tiến trình được gọi tuần tự nhưng kết thúc lại không tuần tự
 * dẫn đến khó khăn trong  kiểm soát kết quả của 2 tiến trình  
 * VD: Khi dowload 1file ta cần phải chờ dowload xong mới đọc file được
 * callback nó chờ hàm trước chạy xong mới chạy tiếp 
 */

// function logFirst() {
//   setTimeout(function () {
//     console.log('Firts');
//   }, 2000)
// }

// function logLater() {
//   setTimeout(function () {
//     console.log('Later');
//   }, 1000)
// }

// logFirst()
// logLater()

// function num(x) {
//   setTimeout(function () {
//     return x
//   }, 0)
// }

// let x = num(5)
// console.log(x);// return undefined
// Ở Vd trên mặc dù timeout = 0 nhưng việc khởi tạo x = num(x) vẫn chạy trước khi x được trả về dẫn kq undefined
/**
 * Xử lý bất đồng bộ với hàm callbacks
 * Đối với các hàm cần thời gian sử lý mà ta cần chúng thực hiện nối đuôi, hoặc muốn 'bắt' kết quả
 * của một hàm mà không biết lúc nào sẽ chạy xong đẻ dùng kết quả đó thực hiện tiếp xử lý tiếp theo
 * thì ta dùng callback nest - các hàm callback lồng nhau để xử lý bất đồng bộ một cách tuần tư
 */

const add = (a, b, callback) => {
  setTimeout(function () {
    if (typeof a !== 'number' || typeof b !== 'number') {
      return callback('a, b must be number', undefined)
    } else {
      return callback(false, a + b) // tra ve mot function
    }
  }, 1000)
}

const powBy2 = (a, callback) => {
  setTimeout(function () {
    if (typeof a !== 'number') {
      return callback('a must be number', undefined)
    }
    else {
      return callback(false, a * a)
    }
  })
}
try {
  add(1, 2, function (err, resultOfAdd) {// truyen vao mot function
    if (err) {
      throw new Error(err)
    }
    powBy2(resultOfAdd, function (err, resultOfAdd) {
      if (err) {
        throw new Error(err)
      }
      console.log(resultOfAdd); // in ra 16 sau ~1.5s
    })
  })
} catch (error) {
  console.log(error);
}

