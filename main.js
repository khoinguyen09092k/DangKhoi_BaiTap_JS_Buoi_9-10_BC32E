
var arrMangNhanVien = [];
// var arrMangPhanLoai = arrMangNhanVien;

document.querySelector('#btnThemNV').onclick = function(){
    var nhanVien = new NhanVien();
    // lấy thông tin từ người dùng nhập liệu
    nhanVien.taiKhoan = document.querySelector('#tknv').value;
    nhanVien.hoTen = document.querySelector('#name').value;
    nhanVien.email = document.querySelector('#email').value;
    nhanVien.matKhau = document.querySelector('#password').value;
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.chucVu = document.querySelector('#chucvu').value;
    nhanVien.gioLam = document.querySelector('#gioLam').value;
    var ngayLam = document.querySelector('#datepicker').value;
    nhanVien.ngayLam = moment(ngayLam).format('DD-MM-YYYY')

    // kiểm tra để trống
    var valid =true;
    valid &= kiemTRaDeTrong(nhanVien.taiKhoan,'#error_taikhoan','Tài khoản ','#tknv')
    valid &= kiemTRaDeTrong(nhanVien.hoTen,'#error_hoten','Họ tên ')
    valid &= kiemTRaDeTrong(nhanVien.email,'#error_email','Email ')
    valid &= kiemTRaDeTrong(nhanVien.matKhau,'#error_matkhau','Mật khẩu ')
    valid &= kiemTRaDeTrong(nhanVien.luongCoBan,'#error_luongcoban','Lương cơ bản ')
    valid &= kiemTRaDeTrong(nhanVien.gioLam,'#error_giolam','Giờ làm ')
    valid &= kiemTRaDeTrong(nhanVien.ngayLam,'#error_ngaylam','Ngày làm ')

    // // kiểm tra tài khoản tối đa 4-6 kí số
     valid &= kiemTraTaiKhoan(nhanVien.taiKhoan,'#error_taikhoan1','',4,6)
    // // Kiểm tra tên nhân viên phải là chữ
     valid &= kiemTraTatCaLaChu(nhanVien.hoTen,'#error_hoten1','Họ tên')
    // //Kiểm tra định dạng email
     valid &= kiemTraEmail(nhanVien.email,'#error_email1','Email')
    // // kiểm tra mật khẩu
     valid &= kiemTraMatKhau(nhanVien.matKhau,'#error_matkhau1','Mật khẩu ',6,10)
     // kiểm tra ngày
     valid &= kiemTraNgay(nhanVien.ngayLam,'#error_ngaylam1','Ngày làm ')
     // kiểm tra lương cơ bản
     valid &= kiemTRaTrongGioiHan(nhanVien.luongCoBan,'#error_luongcoban1','Lương ',1000000,20000000)
     // kiểm tra giờ làm 
     valid &= kiemTRaTrongGioiHan(nhanVien.gioLam,'#error_giolam1',' Giờ làm ',80,200)
     // kiểm tra chức vụ
     valid &= kiemTraLuaChon(nhanVien.chucVu,'#error_chucvu','Chức vụ')
    // Kiểm tra tài khoản bị trùng nhau
     valid &= kiemTraTaiKhoanTrungNhau(nhanVien.taiKhoan,'#error_taikhoan2','Tài khoản ',arrMangNhanVien)
    // kiểm tra ở mức lương cơ bản và số giờ làm phải là số 
    valid &= kiemTraTatCaLaSo(nhanVien.luongCoBan,'#error_luongcoban2','Lương cơ bản')
    valid &= kiemTraTatCaLaSo(nhanVien.gioLam,'#error_giolam2','Giờ làm')

    
    
     // // nếu bị false sẽ ngắt chương trình ở return
    if(valid != true){
        return;
    }
    arrMangNhanVien.push(nhanVien);
   //console.log(arrMangNhanVien);
    tableNhanVien(arrMangNhanVien);
    //luuLocalStorage();
}
// hàm tạo bảng
function tableNhanVien(arrNhanVien){
var chuoiNhanVien = '';
for(var index = 0;index<arrNhanVien.length;index++){
    var nv = arrNhanVien[index];

    nv.tongLuong = function(){
        var tongLuongNV = 0 
        if(this.chucVu == '1'){
            tongLuongNV =  this.luongCoBan*3;    
        }else if(this.chucVu == '2'){
            tongLuongNV = this.luongCoBan*2;
        }else if(this.chucVu == '3'){
            tongLuongNV = this.luongCoBan*1;
        }
        return tongLuongNV;
    }
    
       
     nv.xepLoai = function(){
        var loaiNhanVien ='';
        if(this.gioLam >= 192){
            loaiNhanVien = 'Nhân viên xuất sắc';
        }else if(this.gioLam >=176){
            loaiNhanVien = 'Nhân viên giỏi'
        }else if(this.gioLam >= 160){
            loaiNhanVien = 'Nhân viên khá'
        }else{
            loaiNhanVien = 'nhân viên trung bình'
        }
        return loaiNhanVien;
     }
    /**
     * 
     * @returns bởi vì giá trị value đang là 1 2 3 phải quy đổi về dạng string 
     * để xuất ra table không bị lỗi nên ta sẽ tạo hàm quy đổi từ value => string
     */
     nv.outputChucVu = function(){
        var value = ''
        if(this.chucVu == '1'){
            value = 'Sếp';    
        }else if(this.chucVu == '2'){
           value ='Trưởng Phòng'
        }else if(this.chucVu == '3'){
            value = 'Nhân Viên'
        }
        return value;
     }

    chuoiNhanVien += `
    <tr>
    <td>${nv.taiKhoan} </td>
    <td>${nv.hoTen} </td>
    <td>${nv.email} </td>
    <td>${nv.ngayLam} </td>
    <td>${nv.outputChucVu()} </td>
     <td>${nv.tongLuong()}</td>
    <td> ${nv.xepLoai()}   </td>
    <td><button class="btn btn-danger" onclick="xoaNhanVien('${nv.taiKhoan}')">Xóa</button></td>
    <td><button class="btn btn-warning" data-toggle="modal"
    data-target="#myModal" onclick="chinhSua('${nv.taiKhoan}')">Chỉnh Sửa</button></td>
    </tr>
    `;

 
}

document.querySelector('#tableDanhSach').innerHTML = chuoiNhanVien;
return chuoiNhanVien; // return tại sao phải trả về
}

// hàm xóa nhân viên
function xoaNhanVien(taiKhoanNV){
var indexDel = arrMangNhanVien.findIndex(nv => nv.taiKhoan == taiKhoanNV)
arrMangNhanVien.splice(indexDel,1);
tableNhanVien(arrMangNhanVien);
}

// hàm chỉnh sửa
function chinhSua(tkNhanVienClick){
    var indexEdit = arrMangNhanVien.findIndex(nv => nv.taiKhoan == tkNhanVienClick);
    var nvEdit = arrMangNhanVien[indexEdit];
    //khoá mã nv
    document.querySelector('#tknv').disabled = true;
    // gán giá trị chỉnh sửa
    document.querySelector('#tknv').value = nvEdit.taiKhoan;
    document.querySelector('#name').value = nvEdit.hoTen;
    document.querySelector('#email').value = nvEdit.email;
    document.querySelector('#password').value = nvEdit.matKhau;
    document.querySelector('#datepicker').value = nvEdit.ngayLam;
    document.querySelector('#luongCB').value = nvEdit.luongCoBan;
    document.querySelector('#chucvu').value = nvEdit.chucVu;
    document.querySelector('#gioLam').value = nvEdit.gioLam;
    // load dữ liệu cũ lên lại
}
// hàm cập nhật
 document.querySelector('#btnCapNhat').onclick = function(){
    var nhanVien = new NhanVien();
    //Lấy input từ người dùng
    nhanVien.taiKhoan = document.querySelector('#tknv').value;
    nhanVien.hoTen = document.querySelector('#name').value;
    nhanVien.email = document.querySelector('#email').value;
    nhanVien.matKhau = document.querySelector('#password').value;
    var ngayLam = document.querySelector('#datepicker').value;
    // xử lý ngày
    nhanVien.ngayLam = moment(ngayLam).format('MM-DD-YYYY');
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.chucVu = document.querySelector('#chucvu').value;
    nhanVien.gioLam = document.querySelector('#gioLam').value;
    // lấy dữ liệu lên form lại để chỉnh
    var indexEdit = arrMangNhanVien.findIndex(nv => nv.taiKhoan === nhanVien.taiKhoan);
    // mangNhanVien[indexEdit].tknv = nv.tknv;
    arrMangNhanVien[indexEdit].hoTen = nhanVien.hoTen;
    arrMangNhanVien[indexEdit].email = nhanVien.email;
    arrMangNhanVien[indexEdit].password = nhanVien.password;
    arrMangNhanVien[indexEdit].ngayLam = nhanVien.ngayLam;
    arrMangNhanVien[indexEdit].luongCoBan = nhanVien.luongCoBan;
    arrMangNhanVien[indexEdit].chucVu = nhanVien.chucVu;
    arrMangNhanVien[indexEdit].gioLam = nhanVien.gioLam;
    // tiến hành chỉnh sửa
    //tạo lại bảng nhân viên mới sau khi thay đổi
    tableNhanVien(arrMangNhanVien);
    //mở lại nút mã nhân viên
    document.querySelector('#tknv').disabled = false;
   
 }


 //hàm tìm nhân viên
  document.querySelector('#timkiem').onclick = function(){
   
    //var temp =  document.querySelector('#chonnhanvien').value ;
   var arrMangPhanLoai =  kiemTraPhanLoai('#chonnhanvien',arrMangNhanVien);
     tableNhanVien(arrMangPhanLoai);
    }
    // nhấn nút thêm thì form sẽ reset về lại trắng thông tin
 document.querySelector('#btnThem').onclick = function(){
     resetForm();
 }
// 
    function luuLocalStorage(){
    // biến đổi mảng thành chuỗi => string
        //  sau đó lưu vào localStrorage
        var sMangNhanVien = JSON.stringify(arrMangNhanVien);   
    localStorage.setItem('arrMangNhanVien',sMangNhanVien);   }

    // check xem storage có dữ liệu ko
    function layLocalStorage(){
        if( localStorage.getItem('arrMangNhanVien')){// lấy tên '' trong lưu localstorage để so sánh
            // lấy ra
            var sMangNhanVien = localStorage.getItem('arrMangNhanVien');
            // lấy mảng sinh viên gán =  chuỗi lấy từ localstorage ra phải dùng JSON.parse để chuyển về mảng lại
            arrMangNhanVien = JSON.parse(sMangNhanVien);
            //  tạo ra table sinh viên từ mảnh
            tableNhanVien(arrMangNhanVien);
        }
        }
    // gọi hàm lấy localstorage từ khi trang vừa loand
        window.onload = function(){
        // brownser vừa load lên làm gì thì sẽ code ở đây
    layLocalStorage();
    }
