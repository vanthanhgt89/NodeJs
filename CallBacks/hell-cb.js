// Viết chương trình 3 công việc phụ thuộc vào nhau A -> B ->C
// Dat ten cho cac ham callback trong ham main() chinh
function doA(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'A')
  }, time)
}

function doB(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'B')
  }, time)
}

function doC(job, time, doneJob) {
  setTimeout(() => {
    return doneJob(false, 'C')
  }, time)
}


function main() {
  doA('A', 2000, (err, res) => {
    console.log('done: ', res);
    doB('B', 1000, (err, res) => {
      console.log('done: ', res);
      doC('C', 1000, (err, res) => {
        console.log('done: ', res);
      })
    })
  })
}

main()

//