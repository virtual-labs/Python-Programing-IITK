//Retrieving the Input from the Input Fields
var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");
var input_3 = document.getElementById("input_3");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;

//Events for the Entry of the Different inputs Provided By The User
//onclick event for Lists Button
btn_1.onclick = function(){
  var option=document.getElementById("option").value;
    if(document.getElementById("input_1").value.length == 0 || document.getElementById("input_2").value.length == 0 || document.getElementById("input_3").value.length == 0){
      alert("Please Enter a Valid Input !!!");
    }
    else if(document.getElementById("input_1").value == ' ' || document.getElementById("input_2").value == ' ' || document.getElementById("input_3").value == ' '){
      alert("Please Enter a Valid Input !!!");
    }
    else{
      if(option =="list1"){
        document.getElementById("list").style.display = "block";
        document.getElementById("l2").innerHTML = input_1.value;
        document.getElementById("l4").innerHTML = input_2.value;
        document.getElementById("l6").innerHTML = input_3.value;
        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = false;
      }
      else if(option =="tup1"){
        document.getElementById("tup").style.display = "block";
        document.getElementById("t2").innerHTML = input_1.value;
        document.getElementById("t4").innerHTML = input_2.value;
        document.getElementById("t6").innerHTML = input_3.value;
        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = false;
      }
      else if(option =="dict1"){
        document.getElementById("dict").style.display = "block";
        document.getElementById("d2").innerHTML = input_1.value;
        document.getElementById("d4").innerHTML = input_2.value;
        document.getElementById("d6").innerHTML = input_3.value;
        document.getElementById("btn_1").disabled = true;
        document.getElementById("btn_2").disabled = false;
      }
    }
  }


//Global Variable to permanently Store the Incremented Value of i
var i = 0;
s1 = input_1.value;
s2 = input_2.value;
s3 = input_3.value;

//onclick event for Start Button
btn_2.onclick = function(){
    var v = [1,2,3,4,5,6];
    var option=document.getElementById("option").value;
    if(option =="list1"){
    if(v[i] == 1){
      document.getElementById("l0").style.color = "red";
      document.getElementById("r0").style.display = "block";
      document.getElementById("r0_1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("l1").style.color = "red";
      document.getElementById("l2").style.color = "red";
      document.getElementById("r1").style.display = "block";
      document.getElementById("r1_1").innerHTML = '['+input_1.value+']';
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("l3").style.color = "red";
      document.getElementById("l4").style.color = "red";
      document.getElementById("r2").style.display = "block";
      document.getElementById("r2_1").innerHTML = '['+input_1.value+','+input_2.value+']';
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("l5").style.color = "red";
      document.getElementById("l6").style.color = "red";
      document.getElementById("r3").style.display = "block";
      document.getElementById("r3_1").innerHTML = '['+input_1.value+','+input_2.value+','+input_3.value+']';
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("l7").style.color = "red";
      document.getElementById("r4_1").innerHTML = '['+input_1.value+','+input_2.value+','+input_3.value+']';
      i++;
    }
    else if(v[i] == 6){
      alert('Program Completed!');
    }
  }
  else if(option == "tup1"){
    if(v[i] == 1){
      document.getElementById("t0").style.color = "red";
      document.getElementById("r00").style.display = "block";
      document.getElementById("r0_0_1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("t1").style.color = "red";
      document.getElementById("t2").style.color = "red";
      document.getElementById("r11").style.display = "block";
      document.getElementById("r1_1_1").innerHTML = '('+input_1.value+')';
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("t3").style.color = "red";
      document.getElementById("t4").style.color = "red";
      document.getElementById("r22").style.display = "block";
      document.getElementById("r2_2_1").innerHTML = '('+input_1.value+','+input_2.value+')';
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("t5").style.color = "red";
      document.getElementById("t6").style.color = "red";
      document.getElementById("r33").style.display = "block";
      document.getElementById("r3_3_1").innerHTML = '('+input_1.value+','+input_2.value+','+input_3.value+')';
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("t7").style.color = "red";
      document.getElementById("r4_2").innerHTML = '('+input_1.value+','+input_2.value+','+input_3.value+')';
      i++;
    }
    else if(v[i] == 6){
      alert('Program Completed!');
    }
  }
  else if(option == "dict1"){
    if(v[i] == 1){
      document.getElementById("d0").style.color = "red";
      document.getElementById("r000").style.display = "block";
      document.getElementById("r0_0_0_1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("d1").style.color = "red";
      document.getElementById("d2").style.color = "red";
      document.getElementById("r111").style.display = "block";
      document.getElementById("r1_1_1_1").innerHTML = '{ 0 : '+input_1.value+' }';
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("d3").style.color = "red";
      document.getElementById("d4").style.color = "red";
      document.getElementById("r222").style.display = "block";
      document.getElementById("r2_2_2_1").innerHTML = '{ 0 : '+input_1.value+', 1 : '+input_2.value+' }';
      i++;
    }
    else if(v[i] == 4){
      document.getElementById("d5").style.color = "red";
      document.getElementById("d6").style.color = "red";
      document.getElementById("r333").style.display = "block";
      document.getElementById("r3_3_3_1").innerHTML = '{ 0 : '+input_1.value+', 1 : '+input_2.value+', 2 : '+input_3.value+' }';
      i++;
    }
    else if(v[i] == 5){
      document.getElementById("d7").style.color = "red";
      document.getElementById("r4_3").innerHTML ='{ 0 : '+input_1.value+', 1 : '+input_2.value+', 2 : '+input_3.value+' }';
      i++;
    }
    else if(v[i] == 6){
      alert('Program Completed!');
    }
  }
}

//onclick event for Reset Button
btn_3.onclick = function(){
  window.location.reload(true);
}
