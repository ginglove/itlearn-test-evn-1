/**
 * Bài tập 1: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: biến, vòng lặp for, if/else, arrow function.
Cho mảng nhiệt độ 7 ngày trong tuần:
const nhietDo = [28, 35, 31, 26, 38, 30, 33];
Viết arrow function xepLoai(nhiet): >= 35 → "Nóng"; 30–34 → "Ấm"; < 30 → "Mát".
Dùng vòng lặp for duyệt mảng, in ra: "Ngày [số thứ tự]: [nhiệt độ] - [xếp loại]".
Đếm và in ra tổng số ngày "Nóng".

 */
const nhietDo = [28, 35, 31, 26, 38, 30, 33];

const xepLoai = (nhiet) => {
  if (nhiet >= 35) {
    return "Nóng";
  } else if (nhiet >= 30) {
    return "Ấm";
  } else {
    return "Mát";
  }
};

let soNgayNong = 0;

for (let i = 0; i < nhietDo.length; i++) {
  const loai = xepLoai(nhietDo[i]);
  // console.log(`Ngày ${i + 1}: ${nhietDo[i]} - ${loai}`);
  if (loai === "Nóng") {
    soNgayNong++;
  }
}

// console.log(`Tổng số ngày Nóng: ${soNgayNong}`);

/**
 * Bài tập 2: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: biến, mảng, hàm, switch-case, vòng lặp for.
Cho hai số và danh sách phép tính:
const a = 12, b = 5;
const pheptinh = ["+", "-", "*", "/"];
Viết hàm tinhToan(x, y, pt) dùng switch-case trả về kết quả của x [pt] y.
Dùng vòng lặp for duyệt mảng pheptinh, gọi hàm và in: "12 + 5 = 17".
Với phép chia, làm tròn 2 chữ số thập phân (dùng toFixed(2)).
 */
const a = 12,
  b = 5;
const pheptinh = ["+", "-", "*", "/"];
const tinhToan = (x, y, pt) => {
  switch (pt) {
    case "+":
      return x + y;
    case "-":
      return x - y;
      x;
    case "*":
      return x * y;
    case "/":
      return (x / y).toFixed(2);
    default:
      return "Phep tinh khong hop le";
  }
};
for (let i = 0; i < pheptinh.length; i++) {
  console.log(`${a} ${pheptinh[i]} ${b} = ${tinhToan(a, b, pheptinh[i])}`);
}

/**
 * Bài tập 3: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: biến, mảng object, forEach, switch-case, hàm, điều kiện.
Cho danh sách đơn hàng:
const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];
Viết hàm tinhThue(loai) dùng switch-case (quanao:10, sach:0, thucpham:5, mặc định:8).
Dùng forEach tính thành tiền mỗi mục = gia * soLuong * (1 + thuế/100).
Cộng dồn và in ra tổng tiền cả đơn hàng.
 */
const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];

const tinhThue = (loai) => {
  switch (loai) {
    case "quanao":
      return 10;
    case "sach":
      return 0;
    case "thucpham":
      return 5;
    default:
      return 8;
  }
};
let tongTien = 0;
donHang.forEach((item) => {
  const tong = item.gia * item.soLuong * (1 + tinhThue(item.loai) / 100);
  tongTien += tong;
});
console.log(`Tong tien: ${tongTien}`);

/**
 * Bài tập 4: Viết code JavaScript thuần giải quyết vấn đề thực tế.
Kiến thức: mảng object lồng nhau, hàm, arrow function, forEach, if/else.
Cho danh sách sinh viên và điểm các môn:
const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];
Viết arrow function tinhTB(diem) trả về điểm trung bình của mảng điểm.
Viết hàm xepHocLuc(tb): >=8 "Giỏi"; >=6.5 "Khá"; >=5 "Trung bình"; <5 "Yếu".
Dùng forEach in ra: tên, điểm TB (2 số), học lực.
Đếm số sinh viên đạt học bổng (TB >= 8).
 */
const sinhVien = [
  { ten: "An", diem: [8, 9, 7] },
  { ten: "Bình", diem: [5, 6, 4] },
  { ten: "Cường", diem: [9, 9, 10] },
  { ten: "Dung", diem: [6, 7, 7] },
];

const tinhTB = (diem) => {
  let tong = 0;
  diem.forEach((a) => {
    tong += a;
  });
  return tong / diem.length;
};
const xepHocLuc = (tb) => {
  if (tb >= 8) {
    return "Giỏi";
  } else if (tb >= 6.5) {
    return "Khá";
  } else if (tb >= 5) {
    return "Trung bình";
  } else {
    return "Yếu";
  }
};

let soHocBong = 0;

sinhVien.forEach((sv) => {
  const tb = tinhTB(sv.diem);
  const hocLuc = xepHocLuc(tb);
  console.log(`${sv.ten}: ${tb.toFixed(2)} - ${hocLuc}`);
  if (tb >= 8) {
    soHocBong++;
  }
});

console.log(`So sinh vien dat hoc bong: ${soHocBong}`);

/**
 * Bài tập 5: Viết code JavaScript thuần giải quyết vấn đề thực tế.
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
- Tính tổng quỹ lương thực nhận của công ty.
*/
const nhanVien = [
  { id: 1, ten: "An", phong: "IT", luong: 25000000, thamNien: 3 },
  { id: 2, ten: "Bình", phong: "HR", luong: 18000000, thamNien: 5 },
  { id: 3, ten: "Cường", phong: "IT", luong: 30000000, thamNien: 7 },
  { id: 4, ten: "Dung", phong: "Sale", luong: 22000000, thamNien: 2 },
  { id: 5, ten: "Hà", phong: "IT", luong: 28000000, thamNien: 4 },
];

const tinhThuong = (thamNien) => {
  if (thamNien >= 5) {
    return 0.2;
  }
  if (thamNien >= 3) {
    return 0.1;
  } else {
    return 0.05;
  }
};
return thamNien;

/**
Bài tập 6: Viết code JavaScript thuần giải quyết vấn đề thực tế.
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
- Tính tổng giá trị tồn kho theo từng loại (vpp và dientu).

Bài tập 7: Dành cho học viên đã có nền tảng. Tính tiền điện theo bậc thang.
Kiến thức: arrow function, vòng lặp, điều kiện nhiều bậc, tích lũy, tìm max.
Biểu giá điện lũy tiến:
Bậc 1 (0–50 kWh): 1.800đ   |   Bậc 2 (51–100): 1.900đ
Bậc 3 (101–200): 2.200đ   |   Bậc 4 (>200): 2.800đ
const soDien = [45, 90, 150, 320];   // số kWh của 4 hộ
- Viết arrow function tinhTienDien(kWh) tính tiền theo bậc thang lũy tiến.
- Dùng vòng lặp in tiền điện từng hộ.
- Tìm và in ra hộ có hóa đơn cao nhất.
- (Thưởng) Cộng VAT 8% và in tổng tiền cả 4 hộ.

 */
