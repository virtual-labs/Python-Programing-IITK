//Retrieving the Value of the Input Field
input_1 = document.getElementById("input_1");
input_2 = document.getElementById("input_2");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");


//Retrieve the Options
//event for Start Button
btn_1.onclick = function(){
var input=document.getElementById("input_1").value;
//if(input=="")
//{
  var option=document.getElementById("option").value;
  if(option=="math1"){
    document.getElementById("input_2").style.display = "none";
    document.getElementById("math").style.display = "block";
    document.getElementById("btn_1").disabled = true;
    }
  else if(option=="dt1"){
    document.getElementById("input_2").disabled = true;
    document.getElementById("input_1").disabled = true;
    document.getElementById("dt").style.display = "block";
    document.getElementById("btn_1").disabled = true;
    }
  else if(option=="random1"){
    document.getElementById("random").style.display = "block";
    document.getElementById("btn_1").disabled = true;
    }
  else if(option=="operator1"){
      document.getElementById("operator").style.display = "block";
      document.getElementById("btn_1").disabled = true;
    }
}

//Global Variable to permanently Store the Value of Incrementing entity
var i = 0;
//Calculating Random Values
f = Math.floor((Math.random() * 100000000) + 1);
//onclick event for Start Button
btn_2.onclick = function(){
  var v = [1,2,3,4,5,6,7,8,9];
  var option=document.getElementById("option").value;
  if(option == "math1"){
    var z = parseFloat(input_1.value);
      var a = Math.sqrt(z);
      var b = Math.floor(z);
      var c = Math.ceil(z);
    if(v[i] == 1){
      document.getElementById("m1").style.color = "red";
      document.getElementById("row1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("m2").style.color = "red";
      document.getElementById("row2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("m3").style.color = "red";
      document.getElementById("row3").style.display = "block";
      document.getElementById("row7").style.display = "block";
      document.getElementById("row3_0").innerHTML = a;
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("m4").style.color = "red";
      document.getElementById("row7_2").innerHTML = a;
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("m5").style.color = "red";
      document.getElementById("row4").style.display = "block";
      document.getElementById("row8").style.display = "block";
      document.getElementById("row4_0").innerHTML = b;
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("m6").style.color = "red";
      document.getElementById("row8_1").innerHTML = b;
      i++;
    }
    else if(v[i] == 7){
      document.getElementById("m7").style.color = "red";
      document.getElementById("row5").style.display = "block";
      document.getElementById("row9").style.display = "block";
      document.getElementById("row5_0").innerHTML = c;
      i++;
    }
    else if(v[i] == 8){
      document.getElementById("m8").style.color = "red";
      document.getElementById("row9_1").innerHTML = c;
      i++;
    }
    else if(v[i] == 9){
      alert('Program Completed');
    }
  }
  else if(option == "dt1"){
    var a = new Date();
    var b = a.getDate();
    var c = a.getHours();
    var e = a.getMinutes();
    var d = a.getFullYear();
    if(v[i] == 1){
      document.getElementById("t1").style.color = "red";
      document.getElementById("row1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("t2").style.color = "red";
      document.getElementById("row2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("t3").style.color = "red";
      document.getElementById("row3").style.display = "block";
      document.getElementById("row7_0").style.display = "block";
      document.getElementById("row3_0").innerHTML = b;
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("t4").style.color = "red";
      document.getElementById("row7_2").innerHTML = b;
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("t5").style.color = "red";
      document.getElementById("row4").style.display = "block";
      document.getElementById("row8_0").style.display = "block";
      document.getElementById("row4_0").innerHTML = c%12+":"+e;
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("t6").style.color = "red";
      document.getElementById("row8_1").innerHTML = c%12+":"+e;
      i++;
    }
    else if(v[i] == 7){
      document.getElementById("t7").style.color = "red";
      document.getElementById("row5").style.display = "block";
      document.getElementById("row9_0").style.display = "block";
      document.getElementById("row5_0").innerHTML = d;
      i++;
    }
    else if(v[i] == 8){
      document.getElementById("t8").style.color = "red";
      document.getElementById("row9_1").innerHTML = d;
      i++;
    }
    else if(v[i] == 9){
      alert('Program Completed');
    }
  }
  else if(option == "operator1"){
    a = parseInt(input_1.value) + parseInt(input_2.value);
    b = parseInt(input_1.value) - parseInt(input_2.value);
    c = parseInt(input_1.value) * parseInt(input_2.value);
    if(v[i] == 1){
      document.getElementById("o1").style.color = "red";
      document.getElementById("row1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("o2").style.color = "red";
      document.getElementById("row2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("o3").style.color = "red";
      document.getElementById("row3").style.display = "block";
      document.getElementById("row7_3").style.display = "block";
      document.getElementById("row3_0").innerHTML = a;
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("o4").style.color = "red";
      document.getElementById("row7_2").innerHTML = a;
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("o5").style.color = "red";
      document.getElementById("row4").style.display = "block";
      document.getElementById("row8_2").style.display = "block";
      document.getElementById("row4_0").innerHTML = b;
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("o6").style.color = "red";
      document.getElementById("row8_1").innerHTML = b;
      i++;
    }
    else if(v[i] == 7){
      document.getElementById("o7").style.color = "red";
      document.getElementById("row5").style.display = "block";
      document.getElementById("row9_2").style.display = "block";
      document.getElementById("row5_0").innerHTML = c;
      i++;
    }
    else if(v[i] == 8){
      document.getElementById("o8").style.color = "red";
      document.getElementById("row9_1").innerHTML = c;
      i++;
    }
    else if(v[i] == 9){
      alert('Program Completed');
    }
  }
  else if(option == "random1"){
    min = Math.ceil(input_1.value);
    max = Math.floor(input_2.value);
    g = Math.floor(Math.random() * (max - min)) + min;
    if(v[i] == 1){
      document.getElementById("r1").style.color = "red";
      document.getElementById("row1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("r2").style.color = "red";
      document.getElementById("row2").style.display = "block";
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("r3").style.color = "red";
      document.getElementById("row3").style.display = "block";
      document.getElementById("row7_4").style.display = "block";
      document.getElementById("row3_0").innerHTML = g;
      i++;
    }
    else if(v[i] == 4) {
      document.getElementById("r4").style.color = "red";
      document.getElementById("row7_2").innerHTML = g;
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("r5").style.color = "red";
      document.getElementById("row4").style.display = "block";
      document.getElementById("row8_3").style.display = "block";
      document.getElementById("row4_0").innerHTML = f;
      i++;
    }
    else if(v[i] == 6) {
      document.getElementById("r6").style.color = "red";
      document.getElementById("row8_1").innerHTML = f;
      i++;
    }
    else if(v[i] == 7){
      alert('Program Completed');
    }
  }
}

//onclick event for Reset Button
btn_3.onclick = function(){
  window.location.reload(true);
}
