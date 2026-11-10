// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: tổng hợp biến, vòng lặp, if/else, switch, hàm, arrow function, mảng object.
// Cho danh sách nhân viên:
// const nhanVien = [
//   { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
//   { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
//   { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
//   { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
//   { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
// ];
// Arrow function tinhThuong(thamNien): >=5 → 0.20; 3–4 → 0.10; <3 → 0.05.
// Hàm xepLoaiLuong(luong) trả về "Cao" / "Trung bình" / "Thấp".
// Duyệt mảng, tính thực nhận = luong * (1 + thưởng), in kèm xếp loại.
// Lọc nhân viên phòng IT có lương > 25 triệu vào mảng mới.
// Tính tổng quỹ lương thực nhận của công ty.

const nhanVien = [
    { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
    { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
    { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
    { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
    { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];

const tinhThuong = (thamNien) => {
    try {
        if (Number(thamNien) >= 5) {
            return 0.20;
        } else if (Number(thamNien) >= 3) {
            return 0.10;
        } else return 0.05;
    } catch (error) {
        console.log(error);
        return null;

    }
}

function xepLoaiLuong(luong) {
    if (Number(luong) >= 20000000) {
        return "Cao";
    } else if (Number(luong) >= 8000000) {
        return "Trung Bình";
    } else return "Thấp";
}

var nhanVienLuongCaoHon25Trieu = [];
var quyLuong = 0;
nhanVien.forEach(nv => {
    try {
        const tiLeThuong = tinhThuong(nv.thamNien);
        const luongThucNhan = nv.luong * (1 + tiLeThuong);
        quyLuong += luongThucNhan;
        if(luongThucNhan > 25000000){
            nhanVienLuongCaoHon25Trieu.push(nv);
        }
        console.log(`Nhân viên ${nv.ten} có lương thực nhận là ${luongThucNhan} xếp loại ${xepLoaiLuong(luongThucNhan)}`);
    } catch (error) {
        console.log(error);
    }
});
console.log(`Quyx lương của công ty là: ${quyLuong}`);
console.log(nhanVienLuongCaoHon25Trieu);