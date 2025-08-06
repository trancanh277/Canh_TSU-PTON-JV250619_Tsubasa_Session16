function isPalindrome(chuoi) {
  let chuoiDaoNguoc = chuoi.split('').reverse().join('');
  return chuoi === chuoiDaoNguoc;
}

let chuoi = prompt("Mời nhập vào chuỗi kiểm tra");

if (isPalindrome(chuoi) === true) {
    alert("Chuỗi đối xứng")
} 
else {
    alert("Chuỗi không đối xứng")
}