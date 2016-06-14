/**
 * Created by conghoan on 04/06/2016.
 */
function draw(){
    var html = ""
    var i, j;
    var number = document.getElementById('number4').value;
    if(isNaN(number) == false && number % 1 == 0){
        number = parseInt(number);
        if(number > 0){
            for (i = 1; i <= number; i++){
                for(j = i; j > 0; j--){
                    k =  j % 10;
                    html += k + ' ';
                }
                html += '<br>';
            }
            document.getElementById('show-bai4').innerHTML = html;
        }else{
            alert("Nhập vào số nguyên lớn hơn 0");
        }
    }else{
        alert('Bạn đã nhập vào là ký tự không đúng ! Vui lòng nhập lại !')
    }
}