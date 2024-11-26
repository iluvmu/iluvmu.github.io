$(document).ready(function() {
    $('#icon1').click(function(){
        const pass = document.getElementById("nhapvo1");
        if(this.src.includes('visible.png')){
            this.src = 'enable.png';
            pass.type = 'text'; 
        }
        else{
            this.src = 'visible.png';
            pass.type = 'password';
        }
    });
    $('#guidi').click(function() {
        const user = $('#nhapvo');
        const pass = $('#nhapvo1');
        const reg  = $('#nhapvo2');
        const khoi = user.closest('#khu');
        const khoi1 = pass.closest('#khun'); 
        if (user.val().trim() === "" && pass.val().trim() === "") {
            alert('Tên đăng kí và mật khẩu không được để trống');
            khoi.removeClass('khu').addClass('khusai');
            khoi1.removeClass('khun').addClass('khunsai');
        }
        else if (user.val().trim() === "") {
            khoi.removeClass('khu').addClass('khusai');
            khoi1.removeClass('khunsai').addClass('khun');
            alert('Tên đăng kí không được để trống!');
        }
        else if (pass.val().trim() === "") {
            khoi1.removeClass('khun').addClass('khunsai');
            khoi.removeClass('khusai').addClass('khu');
            alert('Mật khẩu đăng kí không được để trống!');
        }
        else {
            khoi.removeClass('khusai').addClass('khu');
            khoi1.removeClass('khunsai').addClass('khun');
            if(user.val().length >= 3 && user.val().length <= 15 && pass.val().length >= 3 && pass.val().length <= 15 ){
                if(reg.val().length === pass.val().length){
                    alert("đăng kí thành công! Chào mừng đến với hệ thống");
                   
                }
                else{
                    alert("nhập lại mật khẩu không khớp")
                }
            }
            else{
                alert("Tên đăng kí và mật khẩu đăng kí phải từ 3 đến 15 kí tự!");
            }
        }
    });
});   
