function isEven(a) {
    if (a % 2 === 0) {
        return "Số chẵn";
    }
    else {
        return "Số lẻ";
    }
}
let a = +prompt("Mời nhập vào số a");
alert(isEven(a));
