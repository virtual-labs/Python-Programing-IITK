
 <h3>String</h3>
                     We can access a string using indexing. In a string each character is assigned with a unique index value which starts from 0. A string can be written in both single quotes and double quotes.
Example  :  'Hello World'<br>
"Hello World"<br>
s = "Hello World"<br>

Python allows negative indexing as well.
Example : -1, -3, -5.
Where -1 refers to the last index, -2 refers to second last index and so on.
Printing here can be done by placing the string in single or double quotes after print.
<br>
print("Hello World")<br><br>

<h4>Concatenation</h4>
A string in python is immutable i.e. it can not be changed once defined. But concatenation is still possible<br>
s = 'Hello World'<br>
s = s +"Example<br>
Now the string will be as "Hello WorldExample".<br>
                    <h4>Repetition</h4>This is a unique property of strings in Python programming language. When a string is multiplied with an integer, the characters of string are multiplied the same number of times.

Syntax : string*integer<br>
s="k"<br>
s=s*5<br>
Now the string will be "kkkkk". It has repeated itself 5 times.<br>
<h4>Slicing</h4>Slicing is done in Python to select or display the desired number of characters in a string. It is done with the help of symbol ':'.

Syntax : String[ index: ]
<br>
s="Hello World"<br> 1) s = s[2:]<br>

2. s = s[1:8]<br>
   Here the 1st example will give output "llo World". All the characters from and after second index is selected.
   In the 2nd example output will be "ello Wo". Characters between index number 1 and 8 are selected.

Length of a string can be calculated using the len function.
Syntax : len("string")<br>
len("Hello World"<br>
It will return 11.<br>
