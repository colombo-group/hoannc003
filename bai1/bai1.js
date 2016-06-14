var result = new Array();
for (i = 1; i <= 10; i++){
    var text = "";
    for (j = 1; j <= 10; j++) {
        x = i * j;
        text += '<table><tr><td style="width:50px">' + i + " x " + j + "</td><td> = </td><td>" + x + "</td></tr></table>";
    };
    result.push(text);
};
var html = '<table border="1" style="width: 500px;">'
    + '<tr>'
    +'<td>'+result[0]+'</td><td>'+result[1]+'</td><td>'+result[2]+'</td><td>'+result[3]+'</td><td>'+result[4]+'</td>'
    + '</tr>'
    + '<tr>'
    + '<td>'+result[5]+'</td><td>'+result[6]+'</td><td>'+result[7]+'</td><td>'+result[8]+'</td><td>'+result[9]+'</td>'
    + '</tr></table>';
document.getElementById("show").innerHTML = html;
