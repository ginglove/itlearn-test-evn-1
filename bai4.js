const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];

const tinhTB = (diem) => {
    let result = [];
    for (let score in diem){
        let tongDiem = 0;
        for (let i=0; i<diem[score].diem.length; i++){
            tongDiem += diem[score].diem[i];
        }
        result.push((tongDiem/diem[score].diem.length).toFixed(2));
    }
    return result;
}
console.log(tinhTB(sinhVien));

const xepLoai = (tb) => {
    let diemTB = tinhTB(tb);
    let xepLoaiDiem = [];
    diemTB.forEach(function(diem){
        if (diem >= 8){
            xepLoaiDiem.push('Gioi');
        } else if (diem >= 6.5 && diem < 8){
            xepLoaiDiem.push('Kha');
        } else if (diem >= 5){
            xepLoaiDiem.push('Trung binh');
        } else {
            xepLoaiDiem.push('Yeu');
        }
    })
    return xepLoaiDiem;
}
console.log(xepLoai(sinhVien));

const thongTinSv = (infor) => {
    let diemTB = tinhTB(infor);
    let loai = xepLoai(infor);
    infor.forEach(function(value, index){
        console.log(`Sinh viên ${value.ten}, điểm trung bình: ${diemTB[index]}, xếp loại: ${loai[index]}`);
    })
}
thongTinSv(sinhVien);

const soSinhVienGioi = (pt) => {
    let dsDiem = tinhTB(pt);
    let sum = 0;
    dsDiem.forEach(function(value){
        if (value >= 8){
            sum ++;
        }
    })
    return sum;
    
}
console.log(soSinhVienGioi(sinhVien));

