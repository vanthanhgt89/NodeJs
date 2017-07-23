# File System
### Đọc file
* fs.readdir(path, callback) đọc file không đồng bộ
* fs.readdirSync (path)  đọc file đồng bộ

```js
    fs.readdir('./File/input.txt', (err, data) => {
        if(err) throw new Error(err.message)
        console.log(data.toString())
    })

    let data = fs.readdirSync('./File/input.txt')
    console.log(data.toString())


```

### Ghi file
* fs.writedir(path, callback) ghi file không đồng đồng bộ
* fs.writedirSync(path) ghi file đồng bộ

```js
 fs.readFile('./File/input.txt', 'utf8', (err, data) => {
    if(err) throw new Error (err)
    fs.writeFile('./File/output.txt', data, (err) => {
         if(err) throw new Error (err)
         console.log('file dc ghi xong)   
    })
})

```

### Mở một file 
* fs.open(path, flags[, mode], callback)
- path - Đây là một chuỗi biểu diễn tên file cũng như đường dẫn tới file đó.
- flags - Biểu diễn hành vi của file được mở. Tất cả các giá trị có thể sẽ được trình bày trong bảng dưới đây.
- mode - Thiết lập chế độ cho file, các chế độ này chỉ được thiết lập khi file đã được tạo. Giá trị mặc định là 0666, tức - là readable và writeable.
- callback - Hàm callback nhận hai tham số, ví dụ (err, fd).


```js
fs.openSync(__dirname + '/input.txt', 'r+')

fs.open('./File/input.txt', 'r+', (err, fd) => {
    if(err) throw new Error (err)
    console.log('File dc mo thanh cong');    
})

```

### Đóng một file
* fs.close(fd, callback)
- fd - Là viết tắt của file descriptor được trả về bởi phương thức fs.open().
- callback - Hàm callback nhận một tham số để xử lý trường hợp nếu có exception.



