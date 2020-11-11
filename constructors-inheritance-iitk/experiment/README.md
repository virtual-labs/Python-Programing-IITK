### Aim

In this experiment, user will learn the concepts of Constructor and Inheritance used in Python programming language.

### Theory

Inheritance is a feature that says if you define a new class giving a reference of some other class then due to inheriting property of python your new class will inherit all attributes and behavior of the parent class.
A Constructor is a special kind of method that have same name as the class in python self variable do the same. It can be used to set the values of the members of an object.

How to define constructor
Syntax:
class class_name
def __init__(self,variable1,variable2)
self.variabl1=variable1
self.variable2=variable2How to give values to objects using constructors
<br>
Syntax:
Object_name=class_name('variable values',variable values)How to call objects using constructors
<br>
Syntax:
print(Object_name.variable1)
Output: variable value.How to inherit a class
<br>
Syntax:
class class_name(parent class name)How to check whether it is inherited or not
<br>
Syntax:
Object_name = inherited_class_name('variable1,variable2')
print(Object_name.variable1)
Output: variable value.

### Procedure

 <h4>Steps of simulator </h4><br>
                        1.&nbsp;Read the Simulator details.<br>
                        2.&nbsp;Enter the desired input.<br>
                        4.&nbsp; Press CALCULATE to proceed. <br>
                        5.&nbsp;The code will be displayed <br>
                        6.&nbsp;Press NEXT to see the execution of code. <br>
                        7.&nbsp;Relevant line in the code will be highlighted.<br>
                        8.&nbsp;The local variables will be shown in the Output Panel with their values.<br>

### Pre Test

1. "Which of the following is not a type of inheritance?"

 <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Multiple
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Multi-level
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Single-level
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;Double-level
                        <br>
                        <p id = "p1"></p>
                        <br>
 2."__del__() is:"
                        <br>
                        A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp;Function
                        <br>
                        B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;Constructor
                        <br>
                        C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp;Destructor
                        <br>
                        D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;None of the mentioned
                        <br><br>
                        <p id = "p2"></p>
                        <br>
 
3.  "Benifits of inheritance are"
                        <br>
                        A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;Overriding
                        <br>
                        B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;Data Hiding
                        <br>
                        C. Reusability
                        <br>
                        D. All of these
                        <br>
                        <p id = "p4"></p>
                        <br>
4."Which of the following is disadvantage of inheritance?"
<br>
                        A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;Coupling
                        <br>
                        B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;Cohesion
                        <br>
                        C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;Both A and B
 <br>
                        D. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp;None of these
                         <br><br>
                        <p id = "p3"></p>
                        <br>
5."Python supports multiple inheritance."
 <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;True
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;False
                        <br>

### Post Test

1.  Which of the following statements is true?

    <br>
    A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;. The __init__() method is defined in the object class.
    <br>
    B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp; The __new__() method is defined in the object class.
    <br>
    C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp; By default, the __new__() method invokes the __init__ method.
    <br>
    D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp; All of the above

    <br>
    <p id = "p1"></p>
    <br>

    2.Which of the following statements is true?
    <br>
    A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp; The __new__() method automatically invokes the __init__ method
    <br>
    B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp; The __init__ method is defined in the object class
    <br>
    C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp; The __eq(other) method is defined in the object class
    <br>
    D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp; The __repr__() method is defined in the object class
    <br><br>
    <p id = "p2"></p>
    <br>

3.  Which of the following is correct?

<br>
A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp; <br>def __init__(self, personName, personAge):<br>
&nbsp;&nbsp;&nbsp;&nbsp;self.name = personName<br>
&nbsp;&nbsp;&nbsp;&nbsp;self.age = personAge 
<br>
B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp; <br>def __init__(self, personName, personAge):<br>
&nbsp;&nbsp;&nbsp;&nbsp;self.personName = personName<br>
&nbsp;&nbsp;&nbsp;&nbsp;self.personAge = personAge
<br>
C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp; Both a and b 
<br>
D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp; None of the above
<br><br>
<p id = "p4"></p>
<br>


### References

<p style="font-size:100%; margin-top:2%">
                    www.python-course.eu/python3_inheritance.php <br>
                    interactivepython.org/runestone/static/CS152f17/ClassesBasics/UserDefinedClasses.html
