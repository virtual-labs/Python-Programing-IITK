### Aim

In this experiment, user will learn the concepts of string in Python programming language.
To implement the operations that can be performed in a string.

### Theory


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

### Procedure

 <h4>Steps of simulator </h4><br>
                        1.&nbsp;Select the problem.<br>
                        2.&nbsp; Read the simulator details.<br>
                        3.&nbsp;Enter the desired input you want to operate.<br>
                        4.&nbsp; Press CALCULATE to proceed. <br>
                        5.&nbsp;The code will be displayed <br>
                        6.&nbsp;Press NEXT to see the execution of code. <br>
                        7.&nbsp;Relevant line in the code will be highlighted.<br>
                        8.&nbsp;The local variables will be shown in the Output Panel with their values.<br>

### Pre Test

### Pre Test

1. Q.1 What is the output of the following code?
   str1="Virtual PythonLab"
   str1[3]='s'
   print(str1)

 <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Virtual Python Lab
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Virtual
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Error
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;Virsual Python Lab
                        <br>
                        <p id = "p1"></p>
                        <br>
 2. What is the output of given string??
 str1="Virtual"
str2="Python"
str3=str1+str2
print(len(str3))
                        <br>
                        A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp;10
                        <br>
                        B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;11
                        <br>
                        C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp;12
                        <br>
                        D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;13
                        <br><br>
                        <p id = "p2"></p>
                        <br>
 
 3.  What arithmetic operators cannot be used with strings?
                        <br>
                        A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;+
                        <br>
                        B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;*
                        <br>
                        C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp;-
                        <br>
                        D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;All of the mentioned
                        <br><br>
                        <p id = "p4"></p>
                        <br>
4. What is th output of "virtual"+1+2+"python"
<br>
                        A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;vitual3python
                        <br>
                        B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;Error
                        <br>
                        C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;virtual12python
 <br>
                        D. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp;virtual python
                         <br><br>
                        <p id = "p3"></p>
                        <br>
5. 5 If y="123"what will be the the return type of type(y)?
 <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;str
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;int
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;bool
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;String
                        <br>
                        <p id = "p1"></p>
                        <br>

### Post Test

### Post Test

1. What is the output of the following code?[A]
   class customer:
   def**init**(self,id):
   self.id=str(id)
   id="2010"
   obj=customer(2567)
   print(obj.id)

      <br>
      A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;. 2567
      <br>
      B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp; Error
      <br>
      C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp; 2010
      <br>
      D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp; None
      <br>
      <p id = "p1"></p>
      <br>
   2.What is the output of following Python program?[B]
   text='Python is high-level programming language'
   words=text.split()
   l=len(words)
   print('Number of words of the text:%d'%l)
      <br>
      A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp; Error
      <br>
      B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;5
      <br>
      C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp; 6
      <br>
      D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;None of these
      <br><br>
      <p id = "p2"></p>
      <br>

3.2What is the output when following code is executed?[C]
str1="virtualpythonlab"
print(str1[6::-2])

<br>
A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;pylab
<br>
B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp; lautriv
<br>
C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp; lurv
<br>
D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;pati
<br><br>
<p id = "p4"></p>
<br>

4.  What is the output of the following code?[D]
    defchangement(str1):
    char=str1[0]
    str1=str1.replace(char,'&')
    str1=char+str1[1:]
    returnstr1
    print(changement('this is the string'))
    <br>
    A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;Syntax Error
    <br>
    B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;this is the string
    <br>
    C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;&his is &hes &tring
    <br>
    D. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp;this is &he s&tring

        <br><br>
        <p id = "p3"></p>
        <br>

### References

<p style="font-size:100%; margin-top:2%">
                        <br>
                     www.learnpython.org/en/Basic_String_Operations
