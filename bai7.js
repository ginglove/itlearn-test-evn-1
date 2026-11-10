const soDien = [45, 90, 150, 320];  
const tinhTienDien = (kWh) =>{
    let tienDien = 0;
    if (kWh <= 50){
        return tienDien =  1800 * kWh;
    } else if (kWh > 50 && kWh <= 100){
        return tienDien = 1800 * 50 + (kWh-50)*1900;
    } else if (kWh > 100 && kWh <= 200){
        return tienDien = 1800 * 50 + (100-50)*1900 + (kWh-100) * 2200;
    } else {
        return tienDien = 1800 * 50 + (100-50)*1900 + (200-100) * 2200 + (kWh-200)*2800;
    }
}
let tienDienCacHo = [];
for (let i=0; i<soDien.length; i++){
   tienDienCacHo.push(tinhTienDien(soDien[i]));
}
console.log(tienDienCacHo);

let max = tienDienCacHo[0];
for (let i = 0; i<tienDienCacHo.length; i++){
    if (tienDienCacHo[i] >= max){
        max = tienDienCacHo[i];
    } 
}
console.log(max);
let tongTien = 0;
tienDienCacHo.forEach(function(value){
    tongTien += (value * 1.08);
})
console.log(`Tổng tiền các hộ: ${tongTien}`);