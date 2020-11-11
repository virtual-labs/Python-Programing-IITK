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
    alert("Please Enter a Valid Input !");
  }
  else if(document.getElementById("input_1").value == 0){
    alert("Please Enter a Valid Input !");
  }
  else if(isNaN(input_1.value)){
    alert("!!!!Only Integers are Allowed");
  }
  else{
    document.getElementById('step1').style.display = "block";
    document.getElementById('btn_1').disabled = true;
    document.getElementById('btn_2').disabled = false;
    }
  }

//Global Variable to Permanently Store the Counter for the Array
  var i = 0;
  var j =0;
  var l = 2;
  var var3 = [];
  var3[0] = 0;
  var3[1] = 1;
//onclick event for Start button
btn_2.onclick = function(){
  var v = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
    if(v[i] == 1){
      document.getElementById("f1").style.color = "red";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("f2").style.color = "red";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("f3").style.color = "red";
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("f4").style.color = "red";
      if(parseInt(input_1.value) < 0){
        alert("Please enter a positive integer");
      }
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("f5").style.color = "red";
      i++;
    }
    else if(v[i] == 6) {
      var n = 0;
      document.getElementById("f6").style.color = "red";
      if(parseInt(input_1.value) == 1 ){
        document.getElementById("res_1").style.display = "block";
        document.getElementById("res_2").innerHTML = n;
          alert('Program Completed !!');
      }
      else{
        i++;
      }
    }
    else if(v[i] == 7) {
      document.getElementById("f7").style.color = "red";
      i++;
    }
    else if(v[i] == 8) {
      document.getElementById("f8").style.color = "red";
      i++;
    }
    else if(v[i] == 9){
      document.getElementById("f9").style.color = "red";
      i++;
    }
    else if(v[i] == 10){
      document.getElementById("f10").style.color = "red";
      i++;
    }
    else if(v[i] == 11){
      document.getElementById("f11").style.color = "red";
      i++;
    }
    else if(v[i] == 12){
      document.getElementById("f12").style.color = "red";
      i++;
    }
    else if(v[i] == 13){
      document.getElementById("f13").style.color = "red";
      i++;
    }
    else if(v[i] == 14){
      document.getElementById("f14").style.color = "red";
      i++;
    }
    else if(v[i] == 15){
      document.getElementById("f15").style.color = "red";
      i++;
    }
    else if(v[i] == 16){
      document.getElementById("f16").style.color = "red";
      document.getElementById("res_1").style.display = "block";
      var var1 = 0;
      var var2 = 1;

      for(var k=3; k <= parseInt(input_1.value);k++)
      {
        var3[l] = var1 + var2;
        var1 = var2;
        var2 = var3[l];
        l++;
      }
        document.getElementById("res_2").innerHTML = var3;
      i++;
    }
    else if(v[i] == 17){
      alert('Program Completed');
    }
  }

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
