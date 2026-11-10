// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: mảng object lồng nhau, hàm, arrow function, forEach, if/else.
// Cho danh sách sinh viên và điểm các môn:
// const sinhVien = [
//   { ten: "An", diem: [8, 9, 7] },
//   { ten: "Bình", diem: [5, 6, 4] },
//   { ten: "Cường", diem: [9, 9, 10] },
//   { ten: "Dung", diem: [6, 7, 7] },
// ];
// Viết arrow function tinhTB(diem) trả về điểm trung bình của mảng điểm.
// Viết hàm xepHocLuc(tb): >=8 "Giỏi"; >=6.5 "Khá"; >=5 "Trung bình"; <5 "Yếu".
// Dùng forEach in ra: tên, điểm TB (2 số), học lực.
// Đếm số sinh viên đạt học bổng (TB >= 8).

const sinhVien = [
    { ten: "An", diem: [8, 9, 7] },
    { ten: "Bình", diem: [5, 6, 4] },
    { ten: "Cường", diem: [9, 9, 10] },
    { ten: "Dung", diem: [6, 7, 7] },
];

function xepHocLuc(diemTrungBinh){
        if(diemTrungBinh >= 8){
        return "Giỏi";
    }else if(diemTrungBinh >= 6.5){
        return "Khá";
    }else if(diemTrungBinh >= 5){
        return "Trung bình";
    }else{
        return "Yếu";
    }
}

var soSinhVienDatHocBong = 0;
sinhVien.forEach(function (sv, index) {
    const diemTB = (diemArr) => {
        let total = 0;
        for (const diem of diemArr) {
            total += diem;
        }
        return (total / diemArr.length).toFixed(2);
    }
    const diemTrungBinh = diemTB(sv.diem);
    console.log(`${sv.ten}, ${diemTrungBinh}, ${xepHocLuc(diemTrungBinh)}`);
});
