//Retriving the Values for Both the Input Fields
var x = document.getElementById("input1");
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

  //Finction for Revsersing the Entered Strings
  function reverseString() {
      var str=x.value;
      // Step 1. Use the split() method to return a new array
      var splitString = str.split("");

      // Step 2. Use the reverse() method to reverse the new created array
      var reverseArray = splitString.reverse();

      // Step 3. Use the join() method to join all elements of the array into a string
      var joinArray = reverseArray.join("");

      //Step 4. Return the reversed string
      document.getElementById("res_2").innerHTML = joinArray;
      console.log(joinArray);
  }

//Global Variable to Permanently Store the Counter for the Array
  var i = 0;
//onclick event for Start button
btn_2.onclick = function(){
  var v = [1,2,3];
  if(v[i] == 1){
    document.getElementById("1").style.color = "red";
    i++;
  }
  else if(v[i] == 2) {
    document.getElementById("2").style.color = "red";
    document.getElementById("res_1").style.display = "block";
    document.getElementById("res_2").style.display = "block";
    reverseString();
    i++;
  }
  else if(v[i] == 3){
    alert('Program Completed');
  }
}

//onclick event for Reset button
btn_3.onclick = function(){
  location.reload(true);
}
