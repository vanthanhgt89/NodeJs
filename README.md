# NODE JS
## Node js là gì?
* Node Js là nền tảng Server Side chạy trên nền tảng Javascript Engine V8 (Code bằng ngôn ngữ C nên chạy nhanh)
* Node Js sử dụng mô hình Non-Blocking I/O để tạo ra các ứng dụng nhẹ và hiệu quả cho các ứng dụng về dữ liệu thời gian thực chạy trên các thiết bị phân tán.
> Node.js = Môi trường runtiem + thư viện JS
### Đặc điểm của Node js
* Không đồng bộ (Non-bloking) và phát sinh sự kiện (Event Drivent)
* Chạy nhanh 
* Các tiến trình đơn giản hiệu năng cao
* Không đệm: Ứng dụng node js không lưu dữ liệu buffer
* Giấy phép: MIT License
### Node js sử dụng ở đâu
* Các ứng dùng về I/O
* Các ứng dụng về luồng dữ liệu
* Các ứng dụng về dữ liệu hướng đến thời gian thực
* Ứng dụng Realtime
* Các ứng dụng dựa và JSON APIS
* Các ứng dụng single page aplication

## REPL TERMINAL là gì?
### REPL : Read Eval Print Look (Đọc - đánh giá - in và lặp)
* Read: đọc các thông tin từ người dùng, chuyển đổi thành các dư liệu javascript và lưu và database
* Eval: Đánh giá các cấu trúc dữ liệu này
* Print: In ra kết quả
* Loop: Lặp các dòng lệnh đến khi người dùng gõ CTRT + C 2 lần
* Đặc tính REPL của Node js rất hữu ích khi bạn sử dụng Node.js với mục đích debug code.

## NPM là gì?
### NPM: Node Package Module cung cấp 2 chức năng:
* Tạo các online repository cho node.js mà có thể tìm kiếm được tại địa chỉ [searching.nodejs.org](https://nodejs.org/en/)
* Cung cấp và cài đặt thư viện tiện ích của nodejs, quản lý các version, update...
> Kiểm tra verson $npm -version
- Cài đặt module Node js $npm install express (cài local)
- Cài đặt Global $ npm install express -g
- Kiểm tra các phiên bản cài toàn cục $npm ls -g
- Update $npm update express
- Tìm kiếm module $npm search express
- Gỡ cài đặt npm uninstall express
### Tạo một module mới trong Node js
- $npm init
- Quá trình tạo Module yêu cầu tạo ra package.json 
- $npm install --save
### Thuộc tính của package json
- name - tên của package
- version - phiên bản của package
- description - phần mô tả của package
- homepage - trang chủ của package
- author - tác giả của package
- contributors - tên người đóng góp cho package
- dependencies - Danh sách các gói phụ thuộc, tự động được cài theo.
- repository - loại repository và url của package
- main - điểm vào của package
- keywords - các từ khóa