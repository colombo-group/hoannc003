/**
 * Created by conghoan on 04/06/2016.
 */
function draw() {
    var html = "";
    var number = document.getElementById('number5').value;
    var i, j, k;
    if(isNaN(number) == false && number % 1 == 0){
        number = parseInt(number);
        if(number > 0){
            for (i = 1; i <= number; i ++){
                for(j = i; j > i/2; j--){
                    x = j % 10;
                    html += x + '  ';
                }
                for(k = Math.ceil(i/2) + 1; k <= i; k++ ){
                    y = k % 10;
                    html += y + '  ';
                }
                html += "<br>";
            }
            document.getElementById('show-bai5').innerHTML = html;
        }else{
            alert("Nhập vào số nguyên lớn hơn 0");
        }
    }else{
        alert('Bạn đã nhập vào là ký tự không đúng ! Vui lòng nhập lại !')
    }
}