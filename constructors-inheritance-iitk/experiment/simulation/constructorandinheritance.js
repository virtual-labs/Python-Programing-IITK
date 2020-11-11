//Retrieving the Button Elements by Id
btn_2 = document.getElementById("btn_2");
btn_1 = document.getElementById("btn_1");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;


//onclick event for Start Button
btn_1.onclick = function(){
    document.getElementById('step').style.display = "block";
    document.getElementById('btn_1').disabled = true;
    document.getElementById('btn_2').disabled = false;
  }

//Global Variable to Permanently Store the Counter for the Array
  var i = 0;
//onclick event for Start button
btn_2.onclick = function(){
  var v = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    if(v[i] == 1){
      document.getElementById("9").style.color = "red";
	  document.getElementById("res_1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("1").style.color = "red";
	  document.getElementById("9").style.color = "black";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("2").style.color = "red";
	  document.getElementById("1").style.color = "black";
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("3").style.color = "red";
      document.getElementById("2").style.color = "black";
	  document.getElementById("res_2").style.display = "block";
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("4").style.color = "red";
	  document.getElementById("3").style.color = "black";
	  document.getElementById("res_3").style.display = "block";
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("5").style.color = "red";
	  document.getElementById("4").style.color = "black";
	  document.getElementById("res_4").style.display = "block";
      i++;
    }
    else if(v[i] == 7) {
	  document.getElementById("6").style.color = "red";
      document.getElementById("5").style.color = "black";
	  document.getElementById("res_5").style.display = "block";
      i++;
    }
    else if(v[i] == 8) {
	  document.getElementById("10").style.color = "red";
	  document.getElementById("6").style.color = "black";
      i++;
    }
    else if(v[i] == 9){
      document.getElementById("7").style.color = "red";
	  document.getElementById("10").style.color = "black";
	  document.getElementById("res_6").style.display = "block";
      i++;
    }
    else if(v[i] == 10){
      document.getElementById("1").style.color = "red";
	  document.getElementById("2").style.color = "red";
	  document.getElementById("7").style.color = "black";
      i++;
    }
    else if(v[i] == 11){
      document.getElementById("1").style.color = "black";
	  document.getElementById("2").style.color = "black";
	  document.getElementById("3").style.color = "red";
	  document.getElementById("res_7").style.display = "block";
	  i++;
    }
	else if(v[i] == 12){
	  document.getElementById("3").style.color = "black";
	  document.getElementById("4").style.color = "red";
	  document.getElementById("res_8").style.display = "block";
	  i++;
    }
	else if(v[i] == 13){
	  document.getElementById("4").style.color = "black";
	  document.getElementById("5").style.color = "red";
	  document.getElementById("res_9").style.display = "block";
	  i++;
    }
	else if(v[i] == 14){
	  document.getElementById("5").style.color = "black";
	  document.getElementById("6").style.color = "red";
	  document.getElementById("res_10").style.display = "block";
	  i++;
    }
	else if(v[i] == 15){
	  document.getElementById("6").style.color = "black";
	  document.getElementById("11").style.color = "red";
	  document.getElementById("res_11").style.display = "block";
	  i++;
    }
	else if(v[i] == 16){
	  document.getElementById("11").style.color = "black";
	  document.getElementById("12").style.color = "red";
	  document.getElementById("res_12").style.display = "block";
	  i++;
    }
	else if(v[i] == 17){
	  document.getElementById("12").style.color = "black";
	  document.getElementById("13").style.color = "red";
	  document.getElementById("res_13").style.display = "block";
	  i++;
    }
	else if(v[i] == 18){
	  document.getElementById("13").style.color = "black";
	  document.getElementById("14").style.color = "red";
	  document.getElementById("res_14").style.display = "block";
	  i++;
    }
	else if(v[i] == 19){
	  document.getElementById("14").style.color = "black";
	  document.getElementById("15").style.color = "red";
	  document.getElementById("res_15").style.display = "block";
	  i++;
    }
	else if(v[i] == 20){
	  alert('Program Completed');
    }
	else{
		alert('Program Completed');
	}
  }

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
