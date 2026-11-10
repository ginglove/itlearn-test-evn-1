// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: biến, vòng lặp for, if/else, arrow function.
// Cho mảng nhiệt độ 7 ngày trong tuần:
// const nhietDo = [28, 35, 31, 26, 38, 30, 33];
// Viết arrow function xepLoai(nhiet): >= 35 → "Nóng"; 30–34 → "Ấm"; < 30 → "Mát".
// Dùng vòng lặp for duyệt mảng, in ra: "Ngày [số thứ tự]: [nhiệt độ] - [xếp loại]".
// Đếm và in ra tổng số ngày "Nóng".

const nhietDo = [28, 35, 31, 26, 38, 30, 33];
const xepLoai = (nhiet) => {
    try {
        if (Number(nhiet) >= 35) {
            return "Nóng";
        } else if (Number(nhiet) >= 30 && Number(nhiet) < 34) {
            return "Ấm";
        } else return "Mát";
    } catch (error) {
        console.log(error);
    }

}

function soNgayNong(nhietDoArr) {
    try {
        let totalNong = 0;
        nhietDoArr.forEach(function (nhietDo, index) {
            try {
                const xepLoaiChiTiet = xepLoai(nhietDo);
                if (xepLoaiChiTiet == 'Nóng') {
                    totalNong += 1;
                }
                console.log(`Ngày ${index + 1}: ${nhietDo} - ${xepLoai(nhietDo)}`);
            } catch (error) {
                arrNew.push(null);
            }
        })
        return totalNong;
    } catch (error) {
        console.log(error);
        return 0 ;
    }
}

console.log(soNgayNong(nhietDo));