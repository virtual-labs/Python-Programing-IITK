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
  var v = [1,2,3,4,5,6,7];
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
	  document.getElementById("res_1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
	  document.getElementById("1").style.color = "black";
	  document.getElementById("res_2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
	  document.getElementById("1").style.color = "black";
	  document.getElementById("2").style.color = "black";
	  document.getElementById("res_3").style.display = "block";
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("4").style.color = "red";
      document.getElementById("2").style.color = "black";
	  document.getElementById("1").style.color = "black";
	  document.getElementById("3").style.color = "black";
	  document.getElementById("res_4").style.display = "block";
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("5").style.color = "red";
	  document.getElementById("4").style.color = "black";
      document.getElementById("2").style.color = "black";
	  document.getElementById("1").style.color = "black";
	  document.getElementById("3").style.color = "black";
	  document.getElementById("res_5").style.display = "block";
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("6").style.color = "red";
      document.getElementById("5").style.color = "black";
	  document.getElementById("4").style.color = "black";
      document.getElementById("2").style.color = "black";
	  document.getElementById("1").style.color = "black";
	  document.getElementById("3").style.color = "black";
	  document.getElementById("res_6").style.display = "block";
      i++;
    }
    else if(v[i] == 7){
      alert('Program Completed');
    }
  }

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
