### Aim

In this experiment, user will learn about the various array types in Python programming language.
To implement those data types in programs.

### Theory

 <h3>Data Types</h3>
                     Before starting with arrays you must know the concept of mutability.
An object may be classified into two categories :<br>
i. Mutable<br>
ii. Immutable<br>

Mutable are those objects whose value can be altered after assigning a particular value.
Immutable are those objects whose value can not be altered after assigning of a value.<br>
List And Dictionary are Mutable.<br>
Tuples are Immutable.<br><br>

<h3>Data Type Character</h3>
i.List Mutable<br>
ii.Tuple Immutable<br>
iii.Dictionary Mutable<br>
                    <h4>LIST</h4>It is a collection of data in which date is stored in ordered form.<br>
                    Syntax : object_name = [ elements ]<br>
                    The above mentioned syntax is of list where the elements are mentioned in square brackets.<br>
                    Example : list1 = [1, 2, 3, 4, 5]<br>
                    Syntax to print a list is :<br>
                     Syntax : print(list1)<br>
                    <h4>Tuple</h4>A tuple is a collection of data which is mostly similar to a list except that it is immutable i.e. the value once stored in a tuple cannot be changed. Though tuple allows concatenation.
                    Syntax : object_name = ( elements ) <br>
                    This is the syntax of a tuple, where elements are placed under parenthesis.<br>
                    Example : tup1 = ( 1, 'Made by Harsh', 3.34)<br>
                    The printing syntax of tuple is same as that of list.<br>
 <h4>Dictionary</h4>Dictionary is a collection of data which is not sequential like a list, thus indexing is not possible.
It consists of a key and its value.
The above syntax is for a dictionary where the elements are placed under curly brackets.<br>
Example : dict1 = {1 : "Red", 2 : "Blue", 3 : "Green"}<br>

### Procedure

<h4>Steps of simulator </h4><br>
                        <h4>Steps of simulator </h4><br>
                        1.&nbsp;Read the Simulator details.<br>
                        2.&nbsp;Enter the details and values you want to proceed with. <br>
                        3.&nbsp;Press CALCULATE to proceed<br>
                        4.&nbsp;The code wil be displayed. <br>
                        5.&nbsp;Press NEXT to see the execution of code. <br>
                        6.&nbsp;Relevant line in the code wil be highlighted. <br>
                        7.&nbsp;The local variables will be shown in the Output Panel with their values.<br>
                    
### Pre Test

    ### Pre Test

1. Q1. Suppose list1 is [31, 53, 25, 12, 36][b]
   what is min(list1) ?
   <br>
   A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;36
   <br>
   B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;53
   <br>
   C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;ERROR
   <br>
   D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;12
   <br>
   <p id = "p1"></p>
   <br>
2. Q2. Suppose list1 is [4, 5, 8], what is sum(list1) ?
   <br>
   A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp;17
   <br>
   B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;13
   <br>
   C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp;15
   <br>
   D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;Error
   <br><br>
   <p id = "p2"></p>
   <br>

3. Which of the following data types are immutable?
   <br>
   A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;Tuples
   <br>
   B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp;Sets
   <br>
   C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp;Dictionary
   <br>
   D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;Lists
   <br><br>
   <p id = "p4"></p>
   <br>
4. Which of the following commands will create a list?
   <br>
   A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;mylist=list()
   <br>
   B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;mylist=[]
   <br>
   C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;mylist = list([1, 2, 3])
   <br>
   D. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp; all of the mentioned
   <br><br>
   <p id = "p3"></p>
   <br>
5. What will be the output of following?
   tuple = (1, 2, 3, 4)
   tuple.append( (5, 6, 7) )
   print(len(tuple))
   <br>
   A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;1
   <br>
   B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;2
   <br>
   C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;5
   <br>
   D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;Error
   <br>
   <p id = "p1"></p>
   <br>

### Post Test

### Post Test

1. What will be the output of the following? [A]
   fruits = ['apples', 'guava', 'bananas']
   oranges = (4, 3)
   fruits.append(oranges)
   print(fruits)
   <br>
   A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;. ['apples', 'guava', 'bananas', (4, 3)]
   <br>
   B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp; ['apples', 'guava', 'bananas', 4, 3]
   <br>
   C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp; ['apples', 'guava', 'bananas', [4, 3]]
   <br>
   D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp; ['apples', 'guava', 'bananas'], (4, 3)
   <br>
   <p id = "p1"></p>
   <br>
2. If mylist is [0, 3, 2, 5] then,  
    what is mylist \* 2 ?c
   <br>
   A. <input type="radio" name="but2" id="rb21" onclick="click2();">&nbsp; [0, 6, 4, 10].
   <br>
   B. <input type="radio" name="but2" id="rb22" onclick="click2();">&nbsp;[0, 3, 2, 5, 0, 3]
   <br>
   C. <input type="radio" name="but2" id="rb23" onclick="click2();">&nbsp; [0, 3, 2, 5, 0, 3, 2, 5] .
   <br>
   D. <input type="radio" name="but2" id="rb24" onclick="click2();">&nbsp;[0, 3, 2, 5, 5, 3, 2, 1]
   <br><br>
   <p id = "p2"></p>
   <br>

3.What will be the output of the following ? [B]
list1= [0,2,7,4,5]
print(list1[3:0:-1])
<br>
A. <input type="radio" name="but4" id="rb41" onclick="click4();">&nbsp;Syntax error
<br>
B. <input type="radio" name="but4" id="rb42" onclick="click4();">&nbsp; [4, 7, 2]
<br>
C. <input type="radio" name="but4" id="rb43" onclick="click4();">&nbsp; [4, 7]
<br>
D. <input type="radio" name="but4" id="rb44" onclick="click4();">&nbsp;[4, 7, 2, 0]
<br><br>
<p id = "p4"></p>
<br>

4.  What will be the output?
    d1 = {"james":40, "peter":45}
    d2 = {"james":466, "peter":45}
    d1 > d2
    <br>
    A. <input type="radio" name="but3" id="rb31" onclick="click3();">&nbsp;True
    <br>
    B. <input type="radio" name="but3" id="rb32" onclick="click3();">&nbsp;False
    <br>
    C. <input type="radio" name="but3" id="rb33" onclick="click3();">&nbsp;Error
    <br>
    D. <input type="radio" name="but3" id="rb34" onclick="click3();">&nbsp;None
    <br><br>
    <p id = "p3"></p>
    <br>

### References

<p style="font-size:100%; margin-top:2%">
                        <br>
                       www.learnpython.org/en/Lists
                        www.learnpython.org/en/Dictionaries
