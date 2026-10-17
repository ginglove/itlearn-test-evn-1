const nhietDo = [28, 35, 31, 26, 38, 30, 33];
console.log("cách 1");
const xepLoai = (nhiet) => {
    let result = [];
    for (let i=0; i<nhiet.length; i++){
        if (nhiet[i] >= 35){
            result.push('Nóng');
        } else if (nhiet[i]>=30 && nhiet[i]<=34){
            result.push('Ấm');
        } else if (nhiet[i]<30){
            result.push('Mát');
        } else {
            result.push('Không hợp lệ');
        }
    }
    return result;
}
console.log(xepLoai(nhietDo));

const thongTin = (nhiet) => {
    nhiet.forEach(function(value, index){
        if (value >= 35){
            console.log(`Ngày ${index+1}: ${value} - Nóng`);
        } else if (value >= 30 && value <= 34){
            console.log(`Ngày ${index+1}: ${value} - Ấm`);
        } else if (value < 30){
            console.log(`Ngày ${index+1}: ${value} - Mát`);
        } else {
            console.log('Không hợp lệ');
        }
    })
}
thongTin(nhietDo);

const demSoNgay = (nhiet) => {
    let sum = 0;
    for (let value of nhiet){
        if (value >= 35){
            sum ++;
        }
    }
    return sum;
}

console.log(demSoNgay(nhietDo));