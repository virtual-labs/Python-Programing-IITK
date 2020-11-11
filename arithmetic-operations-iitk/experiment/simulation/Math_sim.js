//Retriving the Values for Both the Input Fields
var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;


//onclick event for Submit Button
btn_1.onclick = function(){
var option=document.getElementById("option").value;
  if(document.getElementById("input_1").value.length == 0 || document.getElementById("input_2").value.length == 0){
    alert("Please Enter a Valid Input !!!");
  }
  else if(document.getElementById("input_1").value == ' ' || document.getElementById("input_2").value == ' '){
    alert("Please Enter a Valid Input !!!");
  }
  else if(isNaN(input_1.value) || isNaN(input_2.value)){
    // alert("!!!!Only Integers are Allowed");
  }
  else{
    if(option=="add1"){
      document.getElementById("add").style.display = "block";
      document.getElementById("btn_2").disabled = false;
      document.getElementById("btn_1").disabled = true;
    }
    else if(option=="sub1"){
      document.getElementById("sub").style.display = "block";
      document.getElementById("btn_2").disabled = false;
      document.getElementById("btn_1").disabled = true;
    }
    else if(option=="mul1"){
      document.getElementById("mul").style.display = "block";
      document.getElementById("btn_2").disabled = false;
      document.getElementById("btn_1").disabled = true;
    }
    else if(option=="div1"){
      document.getElementById("div").style.display = "block";
      document.getElementById("btn_2").disabled = false;
      document.getElementById("btn_1").disabled = true;
    }
  }
}

var i = 0;
//onclick event for Start Button
btn_2.onclick = function(){
  var v = [1,2,3,4,5];
  var option=document.getElementById("option").value;
  if(option == "add1"){
    var c = parseFloat(input_1.value) + parseFloat(input_2.value);
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      document.getElementById('r1_1').innerHTML = input_1.value;
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
	  document.getElementById("1").style.color = "black";
      document.getElementById("r2_2").innerHTML = input_2.value;
      document.getElementById("r2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
	  document.getElementById("2").style.color = "black";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_3").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("4").style.color = "red";
	  document.getElementById("3").style.color = "black";
      document.getElementById("r5_1").style.display = "block";
      document.getElementById("r5_5").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 5){
      alert('Program Completed');
    }
  }
  else if(option =="sub1"){
    var c = parseFloat(input_1.value) - parseFloat(input_2.value);
    if(v[i] == 1){
      document.getElementById("s1").style.color = "red";
      document.getElementById('r1_1').innerHTML = input_1.value;
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("s2").style.color = "red";
	  document.getElementById("s1").style.color = "black";
      document.getElementById("r2_2").innerHTML = input_2.value;
      document.getElementById("r2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("s3").style.color = "red";
	  document.getElementById("s2").style.color = "black";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_3").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("s4").style.color = "red";
	  document.getElementById("s3").style.color = "black";
      document.getElementById("r5_2").style.display = "block";
      document.getElementById("r5_5").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 5){
      alert('Program Completed');
    }
  }
  else if(option =="mul1"){
    var c = parseFloat(input_1.value) * parseFloat(input_2.value);
    if(v[i] == 1){
      document.getElementById("m1").style.color = "red";
      document.getElementById('r1_1').innerHTML = input_1.value;
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("m2").style.color = "red";
	  document.getElementById("m1").style.color = "black";
      document.getElementById("r2_2").innerHTML = input_2.value;
      document.getElementById("r2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("m3").style.color = "red";
	  document.getElementById("m2").style.color = "black";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_3").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("m4").style.color = "red";
	  document.getElementById("m3").style.color = "black";
      document.getElementById("r5_3").style.display = "block";
      document.getElementById("r5_5").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 5){
      alert('Program Completed');
    }
  }
  else if(option == "div1"){
	if(input_2.value==0){
		alert('Division By Zero Not Possible');
		i=4;
	}
    var c = parseFloat(input_1.value) / parseFloat(input_2.value);
    if(v[i] == 1){
      document.getElementById("d1").style.color = "red";
      document.getElementById('r1_1').innerHTML = input_1.value;
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("d2").style.color = "red";
	  document.getElementById("d1").style.color = "black";
      document.getElementById("r2_2").innerHTML = input_2.value;
      document.getElementById("r2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("d3").style.color = "red";
	  document.getElementById("d2").style.color = "black";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_3").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("d4").style.color = "red";
	  document.getElementById("d3").style.color = "black";
      document.getElementById("r5_4").style.display = "block";
      document.getElementById("r5_5").innerHTML = parseFloat(c);
      i++;
    }
    else if(v[i] == 5){
      alert('Program Completed');
    }
  }
}

//onclick event for Reset Button
btn_3.onclick = function(){
  window.location.reload(true);
}
