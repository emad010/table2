
var table = document.getElementById("myTable");



var data = [
["ali","ahmed","emad"],
["ali1","ahmed","emad"],
["ali2","ahmed","emad"],
["ali3","ahmed","emad"],
["ali4","ahmed","emad"]


];


for(var j = 0;j <data.length; j++){
	
	var row = table.insertRow();
	for(var i = 0; i <data[0].length ; i++){
		var cell1 = row.insertCell();
		cell1.innerHTML = data[j][i];
		
	}
}




function addRow(){
	var row = table.insertRow();
	for(var i = 0; i <data[0].length ; i++){
		var cell1 = row.insertCell();
		cell1.innerHTML = "test";
		
	}
	
	
}







function clearTable() {
	
  var rowCount = table.rows.length;

  for (var i = rowCount - 1; i > 0; i--) {
    table.deleteRow(i);
  }
}

