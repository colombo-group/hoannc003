var listName = new Array();
function input(){
    var count = prompt("Số lượng giá trị trong đồ thị bạn muốn hiển thị: ", '');
    var listInput = "";
    while(count <= 0 || isNaN(count) == true || count % 1 != 0){
        alert("Bạn đã nhập sai ! Vui lòng nhập lại !");
        count = prompt("Số lượng giá trị trong đồ thị bạn muốn hiển thị: ", '');
    }
    if(count > 0){
        for(i = 0; i < count; i++) {
            stt = i+1;
            noti = "Tên đồ thị thứ " + stt + " :";
            name = prompt(noti, '');
            listName[i] = name;
            listInput +='<tr><td>' + name + '</td><td>' +'<input type="text" id = "name'+ i + '" placeholder="Giá trị phần trăm">%<br></td></tr>'
        };
    }
    var string =
        '<h2>Nhập vào giá trị các trường </h2>'
        +'<form>'
        + '<table>'
        + listInput
        + '</table>'
        + '<input type="button" value="Vẽ đồ thị" onclick="draw()">'
        + '</form>'
    document.getElementById("bai2").innerHTML = string;
}

function draw(){
    var number = listName.length;
    var row = "";
    for (i = 0; i < number; i++){
        name = "name"+i;
        x = document.getElementById(name).value;
        row += 		'<tr>'
            +			'<td>'+listName[i]+'</td>'
            +			'<td style = "width:150px">'
            +				'<div style = "width:100px">'
            +					'<div style = "border: solid red; width: '+ x + '%; float:left; float: left; margin-top:5px; margin-right:3px">'
            +					'</div>'
            +				'</div>'
            +				'<label>'+x+'%</label>'
            +			'</td>'
            +		'</tr>'
    }
    var html = '<h2>Hiển thị đồ thị</h2>'
        +	'<table border = "1">'
        + 	row
        +	'</table>'
    document.getElementById("show-bai2").innerHTML = html;
}

