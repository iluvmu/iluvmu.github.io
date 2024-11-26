
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
        const khoi = user.closest('#khu');
        const khoi1 = pass.closest('#khun'); 
        if (user.val().trim() === "" && pass.val().trim() === "") {
            alert('Tên đăng nhập và mật khẩu không được để trống');
            khoi.removeClass('khu').addClass('khusai');
            khoi1.removeClass('khun').addClass('khunsai');
        }
        else if (user.val().trim() === "") {
            khoi.removeClass('khu').addClass('khusai');
            khoi1.removeClass('khunsai').addClass('khun');
            alert('Tên đăng nhập không được để trống!');
        }
        else if (pass.val().trim() === "") {
            khoi1.removeClass('khun').addClass('khunsai');
            khoi.removeClass('khusai').addClass('khu');
            alert('Mật khẩu không được để trống!');
        }
        else {
            khoi.removeClass('khusai').addClass('khu');
            khoi1.removeClass('khunsai').addClass('khun');
            if(user.val().length >= 3 && user.val().length <= 15 && pass.val().length >= 3 && pass.val().length <= 15){
                alert("đăng nhập thành công! Chào mừng đến với hệ thống");
                
            }
            else{
                alert("Tên đăng nhập và mật khẩu phải từ 3 đến 15 kí tự!");
            }
        }

    });
});   
