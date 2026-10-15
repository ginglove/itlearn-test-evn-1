// Bài tập : Viết code JavaScript thuần giải quyết vấn đề thực tế.
// Kiến thức: biến, mảng, hàm, switch-case, vòng lặp for.
// Cho hai số và danh sách phép tính:
// const a = 12, b = 5;
// const pheptinh = ["+", "-", "*", "/"];
// Viết hàm tinhToan(x, y, pt) dùng switch-case trả về kết quả của x [pt] y.
// Dùng vòng lặp for duyệt mảng pheptinh, gọi hàm và in: "12 + 5 = 17".
// Với phép chia, làm tròn 2 chữ số thập phân (dùng toFixed(2)).

const a = 12, b = 5;
const pheptinh = ["+", "-", "*", "/"];

function tinhToan(x, y, pt) {
    try {
        switch (pt) {
            case "+": return x + y; break;
            case "-": return x - y; break;
            case "*": return x * y; break;
            case "/": {
                if (y != 0) {
                    return (x / y).toFixed(2); break;
                } else {
                    return null;
                }
            }
        }
    } catch (error) {

    }
}

pheptinh.forEach(function (pt2, index) {
    console.log(tinhToan(a, b, pt2));
})