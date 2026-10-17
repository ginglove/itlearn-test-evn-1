const khoHang = [
  { ma: "SP1", ten: "Bút", soLuong: 120, gia: 5000, loai: "vpp" },
  { ma: "SP2", ten: "Vở", soLuong: 8, gia: 12000, loai: "vpp" },
  { ma: "SP3", ten: "Laptop", soLuong: 3, gia: 15000000, loai: "dientu" },
  { ma: "SP4", ten: "Chuột", soLuong: 0, gia: 150000, loai: "dientu" },
  { ma: "SP5", ten: "Thước", soLuong: 50, gia: 8000, loai: "vpp" },
];

const trangThai = (count) =>{
    if (count.soLuong === 0){
        return 'Het hang';
    } else if (count.soLuong < 10){
        return 'Sap het';
    } else {
        return 'Con hang';
    }
    
}

const giaTri = (sp) =>{
    return sp.soLuong * sp.gia;
}

const thongTin = (kho) =>{
    let hangSapHet = [];
    let tienVPP = 0, tienDienTu = 0;
    kho.forEach(function(value){
    console.log(`Tên: ${value.ten}, Mã sp: ${value.ma}, Trạng thái: ${trangThai(value)}, giá trị tồn: ${giaTri(value)} `);
    if (value.soLuong < 10){
        hangSapHet.push(value.ten);
    }
    if (value.loai === 'vpp'){
        tienVPP += value.soLuong * value.gia;
    } else if (value.loai === 'dientu'){
        tienDienTu += value.soLuong * value.gia;
    }
    })
    console.log(hangSapHet);
    console.log(`Tiền văn phòng phẩm: ${tienVPP}`);
    console.log(`Tiền điện tử: ${tienDienTu}`);
}

thongTin(khoHang);