// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: biến, mảng object, forEach, switch-case, hàm, điều kiện.
// Cho danh sách đơn hàng:
// const donHang = [
//   { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
//   { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
//   { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
//   { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
// ];
// Viết hàm tinhThue(loai) dùng switch-case (quanao:10, sach:0, thucpham:5, mặc định:8).
// Dùng forEach tính thành tiền mỗi mục = gia * soLuong * (1 + thuế/100).
// Cộng dồn và in ra tổng tiền cả đơn hàng.

const donHang = [
    { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
    { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
    { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
    { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];

function tinhThue(loai) {
    switch (loai) {
        case "quanao": return 10; break;
        case "sach": return 0; break;
        case "thucpham": return 5; break;
        default: return 8;
    }
}

function tinhTienTheoLoai(donHang){
    return donHang.gia * donHang.soLuong * (1 + tinhThue(donHang.loai)/100);
}

let total = 0
donHang.forEach(function(don,index){
    total += tinhTienTheoLoai(don);
});

console.log(total)