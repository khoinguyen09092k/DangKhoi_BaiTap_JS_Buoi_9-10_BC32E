/**
 * Hàm kiểm tra để trống sử dụng trim() để loại bỏ các khoang trăng
 * @param {*} value truyền vào giá trị cần xét
 * @param {*} id truyền vào địa chỉ id của nơi hiện ra thông báo
 * @param {*} name truyền vào text thông báo
 * @returns 
 */
function kiemTRaDeTrong(value, id, name,) {
    if (value.trim() !== '') {
        document.querySelector(id).innerHTML = '';
        return true
    } else {
        document.querySelector(id).innerHTML = name + "không để trống !"
        return false
    }
}
// Kiểm tra độ dài của kí số nhập vào
/**
 * 
 * @param {*} value chính là giá trị của phần tử lấy từ object khai báo ở phần method
 * @param {*} id id của thẻ p bên html xuất ra dòng cảnh báo nếu nhập sai
 * @param {*} name 1 chuỗi tring tùy ý
 * @param {*} minLength độ dài nhỏ nhất của kí tư nhập vào
 * @param {*} maxLength độ dài lớn nhất của kí tư nhập vào
 * @returns 
 */
function kiemTraTaiKhoan(value, id, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue < minLength || lengthValue > maxLength) {
        document.querySelector(id).innerHTML = name + "Vui lòng nhập từ " + minLength + " đến " + maxLength + " kí tự !"
        return false
    } else {
        document.querySelector(id).innerHTML = "";
        return true
    }
}

/**
 * 
 * @param {*} value là giá trị nhận vào của object(TÀI KHOẢN)
 * @param {*} id id của thẻ p nếu xảy ra cảnh báo
 * @param {*} name dòng tring cảnh báo
 * @param {*} arrMang  mảng chứa tất cả các phần tử
 * @returns 
 */
// kiểm ttra tài khoản không được trùng nhau
function kiemTraTaiKhoanTrungNhau(value, id, name, arrMang) {
    console.log(arrMang)
    for (index = 0; index < arrMang.length; index++) {
        if (value === arrMang[index].taiKhoan) {
                document.querySelector(id).innerHTML = name + 'đã bị trùng !';
                return false
        }         
    }
    return true

}
/** Tạo hàm regex để chứa các trường hợp cần so sánh  
 * @param {*} value chính là giá trị của phần tử lấy từ object khai báo ở phần method
 * @param {*} id truyền vào địa chỉ id của nơi hiện ra thông báo
 * @param {*} name truyền vào text thông báo
 * @returns 
 */
// kiểm tra tất cả là chữ
function kiemTraTatCaLaChu(value, id, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(id).innerHTML = '';
        return true
    }
    document.querySelector(id).innerHTML = name + " tất cả phải là chữ !";
    return false;
}
// kiêm tra định dạng email
function kiemTraEmail(value, id, name) {
    var regexLetter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexLetter.test(value)) {
        document.querySelector(id).innerHTML = "";
        return true
    }
    document.querySelector(id).innerHTML = name + " sai định dạng !"
    return false
}
// kiem tra mật khẩu 
/**
 * 
 * @param {*} value chính là giá trị của phần tử lấy từ object khai báo ở phần method
 * @param {*} id truyền vào địa chỉ id của nơi hiện ra thông báo
 * @param {*} name  truyền vào text thông báo
 * @param {*} minLength số phần tử của kí tự nhập vào nhỏ nhất
 * @param {*} maxLength số phần tử của kí tự nhập vào lớn nhất
 * @returns 
 */
function kiemTraMatKhau(value, id, name, minLength, maxLength) {
    var lengthValue = value.length
    var regexLetter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/;
    if (regexLetter.test(value) && (lengthValue >= minLength) && (lengthValue <= maxLength)) {
        document.querySelector(id).innerHTML = '';
        return true
    }
    document.querySelector(id).innerHTML = name + " từ " + minLength + " đến " + maxLength + " kí tự " + "trong đó bao gồm 1 kí tự in hoa, 1 kí tự thường, 1 kí tự số và 1 kí tự đặc biệt";
    return false;
}
// kiểm tra ngày
function kiemTraNgay(value, id, name) {
    var regexLetter = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (regexLetter.test(value)) {
        document.querySelector(id).innerHTML = '';
        return true
    }
    document.querySelector(id).innerHTML = name + ' sai định dạng !';
    return false;
}
// hàm này sẽ dùng chung khi đề cho các giới hạn trong khoảng xác định như mức lương từ min đến max... phải đổi về kiểu Number để tính toán
// kiểm tra lương bản

function kiemTRaTrongGioiHan(value, id, name, minValue, maxValue) {
    value = Number(value);
    if (value < minValue || value > maxValue) {
        document.querySelector(id).innerHTML = name + " từ " + minValue + " đến " + maxValue;
        return false
    }
    document.querySelector(id).innerHTML = '';
    return true
}
// kiểm tra option đã tích chọn value hay chưa
/**
 * 
 * @param {*} id truyền vào địa chỉ id của nơi hiện ra thông báo
 * @param {*} idOutput truyền vào địa chỉ id của nơi hiện ra thông báo
 * @param {*} name truyền vào text thông báo
 * @returns 
 */
function kiemTraLuaChon(id, idOutput, name) {
    var luaChon = id;
    if (luaChon === '0') {
        document.querySelector(idOutput).innerHTML = name + ' chưa lựa chọn !'
        return false
    } else if (luaChon === '1') {
        document.querySelector(idOutput).innerHTML = '';
        return true
    } else if (luaChon === '2') {
        document.querySelector(idOutput).innerHTML = '';
        return true
    } else if (luaChon === '3') {
        document.querySelector(idOutput).innerHTML = '';
        return true
    }
}



// hàm tìm nhân viên theo phân loại
/**
 * 
 * @param {*} id là id của option mình muốn xét sau đó chuyển nó về dạng value để so sánh với từng trường hợp
 * @param {*} arrMangNhanVien mảng full chứa toàn bộ dữ liệu để trích xuất phân loại
 * @returns sẽ trả về mảng tạm chứa các giá trị của từng trường hợp 
 */
function kiemTraPhanLoai(id, arrMangNhanVien) {
    //console.log(luaChon)
    var luaChon = document.querySelector(id).value
    var arrMangPhanLoai = [];
    if (luaChon === '10') {
        return arrMangNhanVien;
    } else if (luaChon === '11') {
        //tim 
        for (var i = 0; i < arrMangNhanVien.length; i++) {
            if (arrMangNhanVien[i].gioLam >= 192) {
                arrMangPhanLoai.push(arrMangNhanVien[i])
            }
        }
        return arrMangPhanLoai;
    } else if (luaChon === '12') {
        for (var i = 0; i < arrMangNhanVien.length; i++) {
            if (arrMangNhanVien[i].gioLam >= 176 && arrMangNhanVien[i].gioLam < 192) {
                arrMangPhanLoai.push(arrMangNhanVien[i])
            }
        }

    } else if (luaChon === '13') {
        for (var i = 0; i < arrMangNhanVien.length; i++) {
            if (arrMangNhanVien[i].gioLam >= 160 && arrMangNhanVien[i].gioLam < 176) {
                arrMangPhanLoai.push(arrMangNhanVien[i])
            }
        }

    } else if (luaChon === '14') {
        for (var i = 0; i < arrMangNhanVien.length; i++) {
            if (arrMangNhanVien[i].gioLam < 160) {
                arrMangPhanLoai.push(arrMangNhanVien[i])
            }
        }

    }

    return arrMangPhanLoai;
}
 // hàm reset 
 function resetForm() {
    document.querySelector('#tknv').value = ""
    document.querySelector('#name').value = ""
    document.querySelector('#email').value = ""
    document.querySelector('#password').value = ""
    document.querySelector('#luongCB').value = ""
    document.querySelector('#chucvu').value = "0"
    document.querySelector('#gioLam').value = ""
    document.querySelector('#datepicker').value = ""
    document.querySelector('#error_taikhoan').innerHTML=""
    document.querySelector('#error_taikhoan1').innerHTML=""
    document.querySelector('#error_taikhoan2').innerHTML=""
    document.querySelector('#error_hoten').innerHTML=""
    document.querySelector('#error_hoten1').innerHTML=""
    document.querySelector('#error_email').innerHTML=""
    document.querySelector('#error_email1').innerHTML=""
    document.querySelector('#error_matkhau').innerHTML=""
    document.querySelector('#error_matkhau1').innerHTML=""
    document.querySelector('#error_luongcoban').innerHTML=""
    document.querySelector('#error_luongcoban1').innerHTML=""
    document.querySelector('#error_luongcoban2').innerHTML=""
    document.querySelector('#error_giolam').innerHTML=""
    document.querySelector('#error_giolam1').innerHTML=""
    document.querySelector('#error_ngaylam').innerHTML=""
    document.querySelector('#error_ngaylam1').innerHTML=""
    document.querySelector('#error_giolam2').innerHTML=""
    document.querySelector('#error_chucvu').innerHTML=""

}

// kiểm tra tất cả là số
function kiemTraTatCaLaSo (value,id,name){
    var regexLetter = /^[0-9]+$/;
    if(regexLetter.test(value)){
        document.querySelector(id).innerHTML = '';
        return true;
    }
    document.querySelector(id).innerHTML = name +  ' phải nhập tất cả là số !'
    return false;
}