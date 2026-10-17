const donHang = [
  { ten: "Áo", loai: "quanao", gia: 200000, soLuong: 2 },
  { ten: "Sách", loai: "sach", gia: 80000, soLuong: 3 },
  { ten: "Bánh", loai: "thucpham", gia: 50000, soLuong: 5 },
  { ten: "Quần", loai: "quanao", gia: 300000, soLuong: 1 },
];
const kieu = ['quanao', 'sach', 'thucpham']
const tinhThue = (loai) =>{
    let result = [];
    for (let type in loai) {
        switch(loai[type].loai){
            case 'quanao': result.push('quanao: 10'); break;
            case 'sach': result.push('sach: 0'); break;
            case 'thucpham': result.push('thucpham: 5'); break;       
            default: result.push('mặc định: 8'); break;       
        }
    }
    return result;
}
console.log(tinhThue(donHang));


const tinhTien = (loai) => {
    let tienQuanAo = 0, tienSach = 0, tienBanh = 0;
    loai.forEach(function(value){
        if (value.loai === kieu[0]){
            tienQuanAo += (value.gia)*(value.soLuong)*(1+10/100);
        } else if (value.loai === kieu[1]){
            tienSach += (value.gia)*(value.soLuong)*(1+0/100);
        } else{
            tienBanh += (value.gia)*(value.soLuong)*(1+5/100);
        }
    }
    )
    console.log(`Tiền quần áo: ${tienQuanAo}, Tiền sách: ${tienSach}, Tiền bánh: ${tienBanh}`);
}
tinhTien(donHang);

console.log('Cách 1');
const tongTien = (type) =>{
    let sum = 0;
    for (let bill in type){
        if (type[bill].loai === kieu[0]){
            sum += (type[bill].gia)*(type[bill].soLuong)*(1+10/100);
            // 
        }else if (type[bill].loai === kieu[1]){
            sum += (type[bill].gia)*(type[bill].soLuong)*(1+0/100);
        } else{
            sum += (type[bill].gia)*(type[bill].soLuong)*(1+5/100);
        }
    }
    return sum;
}
console.log(tongTien(donHang));

console.log('Cách 2');
