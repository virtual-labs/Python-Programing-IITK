//Retrieving the Input form the Input Field
input_1 = document.getElementById("input_2");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");

//Retrieve the Options
//event for Start Button
btn_1.onclick = function(){
  if(document.getElementById("input_2").value.length == 0 || document.getElementById("input_2").value == ' '){
    alert("Please Enter a Valid Input !!!");
    }
  else{
    document.getElementById("id").style.display = "block";
    document.getElementById("btn_1").disabled = true;
  }
}

var i = 0;
var rand = Math.floor(Math.random() * (60000000 - 20000000 + 1) ) +20000000;
//onclick event for Start Button
btn_2.onclick = function(){

  var v = [1,2,3,4];
  var option=document.getElementById("option").value;
  var rnd = rand;
  if(option == "int"){
    if(isNaN(input_2.value)){
    alert("!!!!Only Integers are Allowed");
    }
    else if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      document.getElementById("r1").style.display = "block";
      document.getElementById("r2_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 4){
      alert('Program Completed');
    }
  }
  else if(option == "float"){
    if(isNaN(input_2.value)){
    alert("!!!!Only Integers are Allowed");
    }
    else if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      document.getElementById("r1").style.display = "block";
      document.getElementById("r2_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 4){
      alert('Program Completed');
    }
  }
  else if(option == "str"){
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      document.getElementById("r1").style.display = "block";
      document.getElementById("r2_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_1").innerHTML = rnd;
      i++;
    }
    else if(v[i] == 4){
      alert('Program Completed');
    }
  }
}

//onclick event for Reset button
btn_3.onclick = function(){
  window.location.reload(true);
}
