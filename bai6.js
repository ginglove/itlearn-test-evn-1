// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: tổng hợp + lọc mảng + gom nhóm theo loại.
// Cho dữ liệu kho hàng:
// const khoHang = [
//   { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
//   { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
//   { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
//   { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
//   { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
// ];
// Hàm trangThai(soLuong): 0 → "Hết hàng"; <10 → "Sắp hết"; >=10 → "Còn hàng".
// Arrow function giaTri(sp) trả về soLuong * gia.
// Duyệt kho, in: mã, tên, trạng thái, giá trị tồn.
// Lọc các sản phẩm cần nhập thêm (Sắp hết hoặc Hết hàng).
// Tính tổng giá trị tồn kho theo từng loại (vpp và dientu).

const khoHang = [
    { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
    { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
    { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
    { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
    { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
];

const giaTri = (sp) => {
    return sp.soLuong * sp.gia;
}

function trangThaiCan(soLuong) {
    try {
        if (Number(soLuong) >= 10) {
            return "Còn hàng";
        } else if (Number(soLuong) > 0) {
            return "Sắp hết";
        } else return "Hết hàng";
    } catch (error) {
        console.log(error);
        return null;
    }
}

var vppGiaTriTon = 0;
var dientuGiaTriTon = 0;
var sanPhamCanNhapThem = [];

khoHang.forEach(kh => {
    const giaTriTon = giaTri(kh);
    const trangThai = trangThaiCan(kh.soLuong);
    if (trangThai == "Hết hàng" || trangThai == "Sắp hết") {
        sanPhamCanNhapThem.push(kh);
    }
    if (kh.loai == "vpp") {
        vppGiaTriTon += giaTriTon;
    } else if (kh.loai == "dientu") {
        dientuGiaTriTon += giaTriTon;
    }
    console.log(`Mã ${kh.ma}, Tên ${kh.ten}, Trạng thái ${trangThai}, Giá trị tồn ${giaTriTon}`);
});

console.log(`Giá trị tồn điện tử là: ${dientuGiaTriTon}`);
console.log(`Giá trị tồn văn phòng phẩm là: ${vppGiaTriTon}`);
console.log(sanPhamCanNhapThem);