let arrSoHienThi = [];
let soCanNhap = document.getElementById("nhapSo");
let theKetQua1 = document.getElementById("ketQua1");
document.querySelector(".btn-success").onclick = function () {
  let nhapSo = soCanNhap.value * 1;
  arrSoHienThi.push(nhapSo);
  theKetQua1.innerHTML = arrSoHienThi;
};

// tính tổng các số dương
document.querySelector(".btn-dark").onclick = function () {
  let tongSoDuong = 0;
  for (index = 0; index <= arrSoHienThi.length; index++) {
    if (arrSoHienThi[index] > 0) {
      tongSoDuong += arrSoHienThi[index];
    }
  }
  document.getElementById(
    "ketQua2"
  ).innerHTML = `Tổng các số dương là: ${tongSoDuong} `;
};

// Đếm số dương
document.querySelector(".btn-primary").onclick = function () {
  let soSoDuong = arrSoHienThi.filter((n) => n > 0).length;
  document.getElementById("ketQua3").innerHTML = `Kết quả: ${soSoDuong} `;
};

// Tìm số nhỏ nhất
document.querySelector(".btn-danger").onclick = function () {
  let minArr = Math.min(...arrSoHienThi);
  document.getElementById("ketQua4").innerHTML = `Số nhỏ nhất là: ${minArr} `;
};

// Tìm số dương nhỏ nhất
document.querySelector(".btn-info").onclick = function () {
  let soDuong = arrSoHienThi.filter((n) => n > 0);
  let soDuongNhoNhat = soDuong[0];
  for (let i = 1; i < soDuong.length; i++) {
    if (soDuong[i] <= soDuongNhoNhat) {
      soDuongNhoNhat = soDuong[i];
    }
  }
  if (soDuongNhoNhat == undefined) {
    document.getElementById(
      "ketQua5"
    ).innerHTML = `Không có số dương nào được nhập `;
  } else {
    document.getElementById(
      "ketQua5"
    ).innerHTML = `Số dương nhỏ nhất là: ${soDuongNhoNhat} `;
  }
};

// Tìm số chẵn cuối cùng
let soChanCuoiCung = 0;
document.querySelector(".btn-light").onclick = function () {
  for (let index = 0; index < arrSoHienThi.length; index++) {
    if (arrSoHienThi[index] % 2 == 0) {
      soChanCuoiCung = arrSoHienThi[index];
    }
  }
  document.getElementById(
    "ketQua6"
  ).innerHTML = `Số chẵn cuối cùng là ${soChanCuoiCung} `;
};

// Đổi chỗ
document.getElementById("button7").onclick = function () {
  let index1 = document.getElementById("viTri1").value * 1;
  let index2 = document.getElementById("viTri2").value * 1;
  let hoanDoi = arrSoHienThi[index1];
  arrSoHienThi[index1] = arrSoHienThi[index2];
  arrSoHienThi[index2] = hoanDoi;
  document.getElementById(
    "ketQua7"
  ).innerHTML = `Mảng sau khi đổi: ${arrSoHienThi} `;
};

// Sắp xếp tăng dần
document.getElementById("button8").onclick = function () {
  arrSoHienThi.sort((a, b) => a - b);
  document.getElementById(
    "ketQua8"
  ).innerHTML = `Mảng sau khi sắp xếp: ${arrSoHienThi} `;
};

// Tìm số nguyên tố đầu tiên
document.getElementById("button9").onclick = function () {
  let soNguyenTo = -1;
  for (let index = 0; index < arrSoHienThi.length; index++) {
    let soNguyenToDauTien = arrSoHienThi[index];
    if (soNguyenToDauTien > 1) {
      // Số nguyên tố phải lớn hơn 1
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(soNguyenToDauTien); i++) {
        if (soNguyenToDauTien % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        soNguyenTo = soNguyenToDauTien;
        break;
      }
    }
  }
  if (soNguyenTo !== -1) {
    document.getElementById(
      "ketQua9"
    ).innerHTML = `Số nguyên tố đầu tiên trong mảng là ${soNguyenTo} `;
  } else {
    document.getElementById(
      "ketQua9"
    ).innerHTML = `Không có số nguyên tố trong mảng `;
  }
};

// Đếm số nguyên
let arrSoNguyen = [];
document.getElementById("button10").onclick = function () {
  let nhapSoNguyen = document.getElementById("nhapSoNguyen").value * 1;
  arrSoNguyen.push(nhapSoNguyen);
  document.getElementById("ketQua10").innerHTML = arrSoNguyen;
};

document.getElementById("button11").onclick = function () {
  let demSoNguyen = arrSoNguyen.filter((n) => Number.isInteger(n)).length;
  document.getElementById(
    "ketQua11"
  ).innerHTML = `Số nguyên đếm được là ${demSoNguyen} `;
};

// So sánh số âm và dương
document.getElementById("button12").onclick = function () {
  let demSoDuong = arrSoHienThi.filter((n) => n > 0).length;
  let demSoAm = arrSoHienThi.filter((n) => n < 0).length;
  if (demSoAm > demSoDuong) {
    document.getElementById("ketQua12").innerHTML = `Số âm > Số dương`;
  } else if (demSoAm < demSoDuong) {
    document.getElementById("ketQua12").innerHTML = `Số âm < Số dương`;
  } else {
    document.getElementById("ketQua12").innerHTML = `Số âm = số dương `;
  }
};
