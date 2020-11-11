//Retriving the Values for Both the Input Fields
var input_1 = document.getElementById("input_1");
var input_2 = document.getElementById("input_2");

//Retrieving the Button Elements by Id
btn_2 = document.getElementById("btn_2");
btn_1 = document.getElementById("btn_1");
btn_3 = document.getElementById("btn_3");

//disbling the Start Button
document.getElementById("btn_2").disabled = true;

//onclick event for Start Button
btn_1.onclick = function(){
  if(document.getElementById("input_1").value.length == 0 || document.getElementById("input_2").value.length == 0){
    alert("Please Enter a Valid Input !!!");
  }
  else if(document.getElementById("input_1").value == ' ' || document.getElementById("input_2").value == ' '){
    alert("Please Enter a Valid Input !!!");
  }
  else if(isNaN(input_1.value) || isNaN(input_2.value)){
    alert("!!!!Only Integers are Allowed");
  }
  else if(input_1.value >= input_2.value){
      alert('Please Input Valid Input!!');
    }
  else{
  document.getElementById('step').style.display = "block";
  document.getElementById("btn_1").disabled = true;
  document.getElementById("btn_2").disabled = false;
  }
}

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}

function Output(){
  var i,n,flag;
  var arr = [];
  var m=0;
  var low = input_1.value;
  var high = input_2.value;
  p = 'The prime numbers in range '+ input_1.value + ' and ' + input_2.value +' are :';
  document.getElementById("res_1").innerHTML = p;

  var string = "";

  if (low == 1)
  {
     low = 2;
  }

  low = parseInt(low);
  high = parseInt(high);

  while (low <= high)
    {
        flag = 0;

        for(i = 2; i <= low/2; ++i)
        {
            if(low % i == 0)
            {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
            string += low + " ";
            m++;
        ++low;
    }
  // document.getElementById("res_2").innerHTML = arr;
  document.getElementById("res_2").innerHTML = string;
  //document.getElementById("btn_2").disabled = true;
  alert("Program Completed !!")
}

//Global Variable to Permanently Store the Counter for the Array
var i = 0;
//onclick event for Next button
btn_2.onclick = function(){
    var v = ['1','2','3','4','5','6','7','8'];
    document.getElementById(v[i]).style.color = "red";
    i++;
    if(i==8){
      Output();
    }
  }
