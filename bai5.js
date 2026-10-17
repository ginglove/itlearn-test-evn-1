const nhanVien = [
  { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
  { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
  { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
  { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
  { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];

const tinhThuong = (thamNien) =>{
    for (let inf in thamNien){
        if (thamNien[inf].thamNien >= 5){
            return 0.2;
        } else if (thamNien[inf].thamNien >= 3 && thamNien[inf].thamNien <5){
            return 0.1;
        } else {
            return 0.05;
        }
    }
}

const xepLoaiLuong = (Luong) => {
    if(Luong >= 25000000){
        return 'Cao';
    } else if (Luong >= 20000000){
        return 'Trung binh';
    } else {
        return 'Thap';
    }
}
let nhanVienIT = [];
let tienThanhToan = 0;
nhanVien.forEach(function(value){
    console.log(`Lương: ${value.luong * (1+ tinhThuong(nhanVien))} - xếp loại: ${xepLoaiLuong(value.luong)}`)
    if (value.luong > 25000000 && value.phong === 'IT'){
        nhanVienIT.push(value.ten);
    }
    tienThanhToan += value.luong * (1+ tinhThuong(nhanVien));
})
console.log(nhanVienIT);
console.log(tienThanhToan);