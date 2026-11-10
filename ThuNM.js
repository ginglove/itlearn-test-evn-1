/*Bài tập 1 : Viết code JavaScript thuần giải quyết vấn đề thực tế. Kiến thức: biến, vòng lặp for, if/else, arrow function. Cho mảng nhiệt độ 7 ngày trong tuần: const nhietDo = [28, 35, 31, 26, 38, 30, 33];

Viết arrow function xepLoai(nhiet): >= 35 → "Nóng"; 30–34 → "Ấm"; < 30 → "Mát".
Dùng vòng lặp for duyệt mảng, in ra: "Ngày [số thứ tự]: [nhiệt độ] - [xếp loại]".
Đếm và in ra tổng số ngày "Nóng".*/
const nhietDo = [28, 35, 31, 26, 38, 30, 33];
const xepLoai = (nhiet) => {
    if (nhiet >= 35){
        return "Nóng";
    } else if (nhiet >= 30){
        return "Ấm";
    } else{
        return "Mát"
    }
};
    
for (let i = 0; i < nhietDo.length; i++){
    console.log(`Ngày ${i} : ${nhietDo[i]} -  ${xepLoai(nhietDo[i])}`);
}

/*Bài tập 2 : Viết code JavaScript thuần giải quyết vấn đề thực tế. Kiến thức: biến, mảng, hàm, switch-case, vòng lặp for. Cho hai số và danh sách phép tính: const a = 12, b = 5; const pheptinh = ["+", "-", "*", "/"];

Viết hàm tinhToan(x, y, pt) dùng switch-case trả về kết quả của x [pt] y.
Dùng vòng lặp for duyệt mảng pheptinh, gọi hàm và in: "12 + 5 = 17".
Với phép chia, làm tròn 2 chữ số thập phân (dùng toFixed(2)).*/

const tinhToan = (a, b, pt) => {
    switch (pt) { 
        case '+' : 
        return a + b;
        case '-' :
        return a - b;
        case '*': 
        return a * b;
        case '/': 
        return (a/b).toFixed(2);
        default: throw new Error ('Phep tinh khong hop le');
    }
}
const a = 12, b = 5; 
const pheptinh = ["+", "-", "*", "/"];
for (let i =0; i < pheptinh.length; i++){
    console.log (`${a} ${pheptinh[i]} ${b} = ${tinhToan(a,b,pheptinh[i])}`);

}

/*Bài tập 3 : Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: biến, mảng object, forEach, switch-case, hàm, điều kiện.
Cho danh sách đơn hàng:
const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];
- Viết hàm tinhThue(loai) dùng switch-case (quanao:10, sach:0, thucpham:5, mặc định:8).
- Dùng forEach tính thành tiền mỗi mục = gia * soLuong * (1 + thuế/100).
- Cộng dồn và in ra tổng tiền cả đơn hàng.*/
const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];
const tinhThue = (loai) => {
    switch (loai) {
        case 'quanao': return 10;
        case 'sach': return 0;
        case 'thucpham': return 5
        default:  return 8;
    }
}
let tongTien = 0;
donHang.forEach((hang) => {
    const thue = tinhThue(hang.loai);
    const thanhTien = hang.gia * hang.soLuong * (1 + thue/100);
    tongTien += thanhTien;
    console.log (`${hang.ten}: ${thanhTien} VND co thue la: ${thue}%`)
})
console.log (`Tong tien don hang: ${tongTien}`)

/*Bài tập 4: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: mảng object lồng nhau, hàm, arrow function, forEach, if/else.
Cho danh sách sinh viên và điểm các môn:
const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];
- Viết arrow function tinhTB(diem) trả về điểm trung bình của mảng điểm.
- Viết hàm xepHocLuc(tb): >=8 "Giỏi"; >=6.5 "Khá"; >=5 "Trung bình"; <5 "Yếu".
- Dùng forEach in ra: tên, điểm TB (2 số), học lực.
- Đếm số sinh viên đạt học bổng (TB >= 8).*/
const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];
const tinhTB = (diem) => {
    let tong = 0;
    diem.forEach((d) => {
        tong += d;   
    });
return tong/diem.length
}
function xepHocLuc(tb) {
    if (tb >= 8){ 
        return 'Gioi';  
    } else if (tb >= 6.5){
        return 'Kha';   
    } else if (tb >= 5){
        return 'Trung binh'
    } else {return 'Yeu'};
}
let hocBong = 0;
sinhVien.forEach((sv)=>{
    const tb = tinhTB (sv.diem);
    const hocLuc = xepHocLuc(tb);
    console.log(`${sv.ten}: Diem trung binh la ${tb.toFixed(2)} - ${hocLuc}`);
if (tb >= 8) {
    hocBong++
};
})
console.log(`so sinh vien dat hoc bong: ${hocBong}`)

/*Bài tập 5: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: tổng hợp biến, vòng lặp, if/else, switch, hàm, arrow function, mảng object.
Cho danh sách nhân viên:
const nhanVien = [
  { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
  { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
  { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
  { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
  { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];
- Arrow function tinhThuong(thamNien): >=5 → 0.20; 3–4 → 0.10; <3 → 0.05.
- Hàm xepLoaiLuong(luong) trả về "Cao" / "Trung bình" / "Thấp".
- Duyệt mảng, tính thực nhận = luong * (1 + thưởng), in kèm xếp loại.
- Lọc nhân viên phòng IT có lương > 25 triệu vào mảng mới.
- Tính tổng quỹ lương thực nhận của công ty.*/
const nhanVien = [
  { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
  { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
  { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
  { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
  { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];
const tinhThuong = (thamNien) =>{
    if (thamNien >=5) {
        return 0.20;
    } else if (thamNien >=3) {
        return 0.10;
    } else {
        return 0.05;
    } 
};
function xepLoaiLuong(luong) {
    if (luong > 25000000){
        return 'Cao';
    } else if (luong > 20000000){
        return 'Trung Binh';
    } else {
        return 'Thap';
    } 
};
let tongQuyLuong = 0;
nhanVien.forEach((nv) => {
    const thuong = tinhThuong(nv.thamNien);
    const luongThucNhan = nv.luong * (1 + thuong);  
    const loaiLuong = xepLoaiLuong(nv.luong); 
    tongQuyLuong +=luongThucNhan;
    console.log(`Nhan vien ${nv.ten} co luong thuc nhan la = ${luongThucNhan} - loai luong ${loaiLuong}`)
 
});
const itLuongcao = nhanVien.filter((nv)=> nv.phong === 'IT' && nv.luong > 25000000);
console.log (`Tong quy luong la: ${tongQuyLuong}`);
console.log (itLuongcao);

/*Bài tập 6: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: tổng hợp + lọc mảng + gom nhóm theo loại.
Cho dữ liệu kho hàng:
const khoHang = [
  { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
  { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
  { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
  { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
  { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
];
- Hàm trangThai(soLuong): 0 → "Hết hàng"; <10 → "Sắp hết"; >=10 → "Còn hàng".
- Arrow function giaTri(sp) trả về soLuong * gia.
- Duyệt kho, in: mã, tên, trạng thái, giá trị tồn.
- Lọc các sản phẩm cần nhập thêm (Sắp hết hoặc Hết hàng).
- Tính tổng giá trị tồn kho theo từng loại (vpp và dientu).*/
const khoHang = [
  { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
  { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
  { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
  { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
  { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
];
function trangThai(soLuong) {
    if (soLuong === 0){
        return 'Het hang';
    } else if (soLuong < 10){
        return 'Sap het';
    } else { return 'Con hang';
    }
};
const giaTri = (sp) => sp.soLuong * sp.gia;
khoHang.forEach((sp) => {
    const trangThaiKho = trangThai(sp.soLuong);
    const giaTriTon = giaTri(sp)
   console.log(`Ma${sp.ma} - ${sp.ten} - trang thai: ${trangThaiKho} - Giat tri ton:${giaTriTon} VND`);
});
const spNhapthem = khoHang.filter((sp) => trangThai(sp.soLuong) !== 'Con hang');
console.log(`SpNhapthem`, spNhapthem);
let tongVpp = 0;
let tongDientu = 0;
khoHang.forEach((sp) => {
  if (sp.loai === "vpp") {
    tongVpp += giaTri(sp);
  } else if (sp.loai === "dientu") {
    tongDientu += giaTri(sp);
  }
});
console.log(`Tong gia tri ton kho VPP: ${tongVpp}`);
console.log(`Tong gia tri ton kho Dien tu: ${tongDientu}`);