//Retrieving the input Values
x = document.getElementById("input_2");

//Retrieving the Button Elements by Id
btn_1 = document.getElementById("btn_1");
btn_2 = document.getElementById("btn_2");
btn_3 = document.getElementById("btn_3");

//Retrieve the Options
//event for Start Button
btn_1.onclick = function(){
    document.getElementById("id").style.display = "block";
    document.getElementById("btn_1").disabled = true;
}

function check(i){
  var num = x.value;
  if(!isNaN(num)){
    if(i==2){
        document.getElementById("r2").innerHTML = "Number";
    }
    else {
      document.getElementById("r5").innerHTML = "Number";
    }
  }
  else if(isNaN(num)){
    if(i==2){
        document.getElementById("r2").innerHTML = "String";
    }
    else{
      document.getElementById("r5").innerHTML = "String";
    }
  }
}

var i = 0;
//onclick event for Start Button
btn_2.onclick = function(){
  var v = [1,2,3,4];
    if(v[i] == 1){
      document.getElementById("1").style.color = "red";
      document.getElementById("r1").style.display = "block";
      i++;
    }
    else if(v[i] == 2) {
      document.getElementById("2").style.color = "red";
      document.getElementById("r1").style.display = "block";
      //document.getElementById("r2").innerHTML = typeof input_1.value;
      check(2);
      i++;
    }
    else if(v[i] == 3){
      document.getElementById("3").style.color = "red";
      document.getElementById("r3").style.display = "block";
      //document.getElementById("r5").innerHTML = typeof input_1.value;
      check(3);
      i++;
    }
    else if(v[i] == 4){
      alert('Program Completed');
    }
}

//onclick event for Reset button
btn_3.onclick = function(){
  window.location.reload(true);
}
