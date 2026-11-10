const a = 12, b = 5;
const pheptinh = ["+", "-", "*", "/"];
console.log('Cách 1');
const tinhToan = (x,y,pt) =>{
    let result = [];
    for (let value of pt){
        switch (value){
            case '+': result.push(x+y); break;
            case '-': result.push(x-y); break;
            case '*': result.push(x*y); break;
            case '/': result.push(x/y); break;
            
        }
    }
    return result;
}
console.log(tinhToan(a,b,pheptinh));


console.log('Cách 2');
const tinhToan2 = (x,y,pt) =>{
    let result = [];
    pt.forEach(function(value){
            switch (value){
                case '+': result.push(x+y); break;
                case '-': result.push(x-y); break;
                case '*': result.push(x*y); break;
                case '/': result.push(x/y); break;
        }
    }
    )
    return result;
}
console.log(tinhToan2(a,b,pheptinh));

const phepTinh1 = (x,y,pt) =>{
    for (let i=0; i<pt.length; i++){
        const res = tinhToan(x,y,pt)
        if (pt[i] === '/'){
            console.log(`${x} ${pt[i]} ${y} = ${res[i].toFixed(2)}`);
        } else {
        console.log(`${x} ${pt[i]} ${y} = ${res[i]}`);
        }
    }
}
phepTinh1(a,b,pheptinh);