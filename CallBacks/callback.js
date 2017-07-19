function creatName(callback){
    return callback('thanh')
}

var name = creatName(name  => name)
// console.log(name);

var info = {
    name: 'thanh', 
    setName: function(name) {
         this.name = name
    }
}
function test(callback, callbackObject){
    let name = 'Bui van thanh'
    callback.apply(callbackObject, [name])
    // callback.call(callbackObject)
}
// Goi den ham va truyen callback
test(info.setName,info)

console.log(info.name) // ket qua khong doi 'thanh'


// // Object chứa hàm callback
// var domainInfo = {
//     name : 'freetuts.net',
//     setName : function(name){
//         this.name = name;
//     }
// };
 
// // Hàm có tham số callback
// function test(callback, callbackObject){
//     var name = "Nguyễn Văn Cường";
//     callback.apply(callbackObject, [name]);
// }
 
// // Gọi đến hàm và truyền hàm callback vào
// test(domainInfo.setName, domainInfo);
 
// // Kết quả: Nguyễn Văn Cường
// console.log(domainInfo.name);
