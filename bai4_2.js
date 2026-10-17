const sinhVien = [
    { ten: "An", diem: [8, 9, 7] },
    { ten: "Bình", diem: [5, 6, 4] },
    { ten: "Cường", diem: [9, 9, 10] },
    { ten: "Dung", diem: [6, 7, 7] },
];
const tinhTB = (diem) => {
    let tong = 0;
    for (let i=0; i<diem.length; i++) {
        tong += diem[i];
    }
    return tong/diem.length;
};
const xepHocLuc = (tb) => {
    if (tb >= 8) return "Giỏi";
    if (tb >= 6.5) return "Khá";
    if (tb >= 5) return "Trung bình";
    return "Yếu";
};
let soSvHocBong = 0;
sinhVien.forEach(sv => {
    const diemTB = tinhTB(sv.diem);
    const hocLuc = xepHocLuc(diemTB);
    console.log(`Tên: ${sv.ten} | Điểm TB: ${diemTB.toFixed(2)} | Học lực: ${hocLuc}`);

    if (diemTB >= 8) {
        soSvHocBong++;
    }
});

console.log(`\nTổng số sinh viên đạt học bổng (TB >= 8): ${soSvHocBong}`);