//Retriving the Values for Both the Input Fields
var x = document.getElementById("input1");
var input_2 = document.getElementById("input_2");
var input_3 = document.getElementById("input_3");
//Retrieving the Button Elements by Id
btn_2 = document.getElementById("btn_2");
btn_1 = document.getElementById("btn_1");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;

//onclick event for Start Button
btn_1.onclick = function(){
  var str=x.value;
  var sv = str.charAt(0);
  var vs = str.charAt((x.length)-1);
  if(document.getElementById("input1").value.length == 0 || document.getElementById("input1").value == ' '){
    alert("Please Enter a Valid Input !!!");
  }
  //else if(sv != '"' && vs != '"'){
    //alert("Please Put \" \" before Strings");
//  }
  else if(!isNaN(input1.value)){
    alert("!!!!Only Strings are Allowed");
  }
  else{
    document.getElementById('step').style.display = "block";
    document.getElementById('btn_1').disabled = true;
    document.getElementById('btn_2').disabled = false;
    }
  }

  //Function for Concatenating the Entered strings
  function Concat(){
    var str1 = x.value;
    var str2 = input_2.value
    var str3 = input_3.value;
    var strr = str1.concat(" "+ str2);
    if(document.getElementById("input_3").value.length != 0){
      var str4 = strr.concat(" ", str3);
      document.getElementById("res_2").innerHTML = str4;
    }
    else{
      document.getElementById("res_2").innerHTML = strr;
    }

  }

//Global Variable to Permanently Store the Counter for the Array
  var i = 0;
//onclick event for Start button
btn_2.onclick = function(){
  var v = [1,2,3,4,5,6];
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
    i++;
  }
  else if(v[i] == 5) {
    document.getElementById("5").style.color = "red";
    document.getElementById("res_1").style.display = "block";
    document.getElementById("res_2").style.display = "block";
    Concat();
    i++;
  }
  else if(v[i] == 6) {
      alert('Program Completed');
  }
}

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
