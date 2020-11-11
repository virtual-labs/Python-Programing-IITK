This folder has 
### <b>Aim</b>
In this experiment the Student will be able to understand the flow of controls and types of loops used in Python programming language with the help of a iterative simulator.

### <b>Theory</b>
The execution of programming language codes is done by a compiler. A compiler is given a set of codes or rather a sequence of codes that perform a desired task. The task may or may not be repetitive but the compiler is smart enough to process it.Such repetitive code is known as a 'loop'.<br>
Loop is a sequential set of instructions which gets executed multiple times to reduce minimize the repetition of code.<br>
In Python, we have two types of loops :<br>
i. for loop<br>
ii. while loop<br>

To understand the functioning and flow of a loop, you must get familiar with the term 'block'. A block is the smallest unit in a loop which performs one particular task.<br>
<b>'For' loop :</b><br>
Syntax : for object in range(initialization, limit, update ):
<br>statements<br>
The above given syntax is of for loop where we put the object name after 'for' and the limit inside 'range( )'.<br>
Example : for a in range(4):<br>
print(a)<br>
Output : 0, 1, 2, 3, 4<br>
<b>'While' loop :</b><br>
Syntax : while expression:<br>
statements<br>
The above statement is for while loop, where the testing condition is placed after while and it is followed by the statements placed in the loop body.<br>
Example : while a < 5:<br>
print(a)<br>
Output : 0, 1, 2, 3, 4<br>

            
### <b>Procedure</b>
<h4>Steps of simulator :</h4>
                    1. Read the simulator details.<br>
                    2. Enter the values you want to proceed with.<br>
                    3. Press CALCULATE to proceed.<br>
                    4. The code will be displayed.<br>
                    5. Press NEXT to see the execution of code.<br>
                    6. Relevant line in the code will be highlighted.<br>
                    7. The local variables will be shown in the Output Panel with their values.

                    
### <b>Pre-Test</b>
<dd>1.What data type does the range() function generate?<br>
a.int<br>
b.float<br>
<b>c.list</b><br>
d.string<br></dd><br>
<dd>2.Which do we access key or the value while looping through a dictionary?<br>
a.key<br>
b.key and value in tuple format<br>
c.key and value in list format<br>
<b>d.value</b><br></dd><br>
<dd>3.Which of the following function returns a randomly selected element from range? <br>
a.choice(seq)<br>
<b>b.randrange ([start,] stop [,step])</b><br>
c.random()<br>
d.seed([x])<br></dd><br>
<dd>4.Which of the following keyword is a valid placeholder for body of the function ?<br>
a.continue<br>
b.break<br>
<b>c.pass</b><br>
d.body<br></dd><br>
<dd>5.What is the output of the following?<br>
d = {0: 'a', 1: 'b', 2: 'c'}<br>
for i in d.values():<br>
    print(i)<br>
a.0 1 2<br>
b.0 a 1 b 2 c<br>
<b>c. a b c</b><br>
d.None of the mentioned<br></dd><br>



### <b>Post-Test</b>
<dd>1.Which of the following functions will not result in an error when no arguments are passed to it? <br>
a.any()<br>
<b>b.float()</b><br>
c.max()<br>
d.divmod()<br></dd><br>
<dd>2.What is the output of the following?<br>
   for i in ''.join(reversed(list('virtual'))):<br>
    print (i)
<br>
a.v i r t u a l<br>
b.Error<br>
<b>c.l a u t r i v</b><br>
d.None of the mentioned<br></dd><br>
<dd>3.What is the output of the following?<br>
s = "virtual python lab"<br>
for i in s.split():<br>
    print (i, end=", ")
<br>
a.v, i, r, t, u, a, l, , p, y, t, h, o, n, , l, a, b<br>
<b>b.virtual, python, lab</b><br>
c.v, i, r, t, u, a, l, , p, y, t, h, o, n, , l, a, b,<br>
d.Error<br></dd><br>
<dd>4.What is the output of the following?<br>
for i in [a, b, c, d][::-1]:<br>
print (i)
<br>
a.a b c d<br>
b.Error<br>
c.None<br>
<b>d.d c b a</b><br></dd><br>
<dd>5.What is the output of the following?<br>
x = 'abcd'<br>
for i in range(len(x)):<br>
    i[x].upper()<br>
print (x)<br>
a.abcd<br>
b.ABCD<br>
<b>c.Error</b><br>
d.None of the mentioned</dd><br>


### <b>References</b>
<p style="font-size:100%; margin-top:2%">
                        www.learnpython.org/en/Loops
                        <br><br>
                    </p>

