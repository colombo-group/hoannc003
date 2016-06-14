/**
 * Created by conghoan on 04/06/2016.
 */
function calculator(a){
    var v1 = document.getElementById('value1').value;
    var v2 = document.getElementById('value2').value;
    if(isNaN(v1) == false && isNaN(v2) == false){
        document.getElementById('result').value = eval(v1 + a + v2);
    }else{
        alert('Bạn đã nhập sai ! Vui lòng nhập lại !');
    }
}
function power(){
    var v1 = document.getElementById('value1').value;
    var v2 = document.getElementById('value2').value;
    if(isNaN(v1) == false && isNaN(v2) == false){
        document.getElementById("result").value = Math.pow(v1, v2);
    }else{
        alert('Bạn đã nhập sai ! Vui lòng nhập lại !');
    }
}