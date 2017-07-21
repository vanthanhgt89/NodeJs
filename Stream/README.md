# Stream
## Stream là gì?
* Steam là các đối tượng cho phép bạn đọc dữ liệu từ một nguồn và ghi dữ liệu đến một đích.
* Các loại stream
1. Readable ->  stream đọc
2. Writable -> stream ghi 
3. Duplex -> stream cả ghi và đọc
4. Transform -> là 1 kiểu duplex stream khác là đầu ra được tính toán dựa trên dữ liệu bạn nhập
* Mỗi loại **Stream** thể hiện của đối tương **EventEmitter** và ném sự kiện tại các thời điểm khác nhaunhau
* Một số sự kiện thường dùng:
  * data: sự kiện này kích hoạt khi dữ liệu có sẵn cho hoạt động đọc
  * end: sự kiện này kích hoạt khi không còn dữ liệu đẻ đọc
  * error: khi xảy ra bất kỳ lỗi trong việc đọc và ghi dữ liệu
  * finish: kích hoạt khi tất cả dữ liệu đã chuyển hết đến vùng hệ thống cơ sở
  