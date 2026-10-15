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

const pheptinh = ["+", "-", "*", "/"] 
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
for (let i =0; i < pheptinh.length; i++){
    console.log (`${a} ${pheptinh[i]} ${b} = ${tinhToan(a,b,pheptinh[i])}`);

}
