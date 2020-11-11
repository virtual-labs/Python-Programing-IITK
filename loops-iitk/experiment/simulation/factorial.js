//Retriving the Values for Both the Input Fields
var input_1 = document.getElementById("input_1");
//Retrieving the Button Elements by Id
btn_2 = document.getElementById("btn_2");
btn_1 = document.getElementById("btn_1");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;


//onclick event for Start Button
btn_1.onclick = function(){
  if(document.getElementById("input_1").value.length == 0 || document.getElementById("input_1").value == ' '){
    alert("Please Enter a Valid Input !!!");
  }
  else if(isNaN(input_1.value)){
    alert("!!!!Only Integers are Allowed");
  }
  else{
    document.getElementById('step').style.display = "block";
    document.getElementById('btn_1').disabled = true;
    document.getElementById('btn_2').disabled = false;
    }
  }

//Global Variable to Permanently Store the Counter for the Array
  var i = 0;
  var j =0;
//onclick event for Start button
btn_2.onclick = function(){
  var v = [1,2,3,4,5,6,7,8,9,10,11];
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("4").style.color = "red";
      if(parseInt(input_1.value) < 0){
        alert("Factorial for negative numbers does not exist!!! Please! Try Again");
      }
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("5").style.color = "red";
      i++;
    }
    else if(v[i] == 6) {
      var n = 1;
      document.getElementById("6").style.color = "red";
      if(parseInt(input_1.value) == 0 ){
        document.getElementById("res_1").style.display = "block";
        document.getElementById("res_2").innerHTML = n;
          alert('Program Completed !!');
      }
      else{
        i++;
      }
    }
    else if(v[i] == 7) {
      document.getElementById("7").style.color = "red";
      i++;
    }
    else if(v[i] == 8) {
      document.getElementById("8").style.color = "red";
      i++;
    }
    else if(v[i] == 9){
      document.getElementById("9").style.color = "red";
      i++;
    }
    else if(v[i] == 10){
      var fact = 1;
      document.getElementById("10").style.color = "red";
      document.getElementById("res_1").style.display = "block";
        for(j=1;j<= parseInt(input_1.value);j++){
          fact = fact * j;
        }
        document.getElementById("res_2").innerHTML = fact;
      i++;
    }
    else if(v[i] == 11){
      alert('Program Completed');
    }
  }

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
