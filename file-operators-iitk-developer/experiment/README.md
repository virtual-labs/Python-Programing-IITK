### Aim
 In this experiment you will understand file operations.
### Theory
File operations in any programming is very essential. Files are used to save and transfer data. They can be of any form, a text file or a media file. They all serve the same purpose.
Here you will learn about the various methods of file operations in Python programming language. <br>
Python provides us with various file operations. A file can be created, edited, read and even copied.<br>

#### Creating a file
To create a file, we need an object to store the file in. Here the role of object is to create a reference of the file.<br>

Syntax :<br>
object = open('file_name', 'mode')<br>

After all the desired operations are done, you need to close the file as well. This is done to save the file without properly.<br>
Syntax :<br>
object.close()<br>

While creating or opening a file, we need to enter the mode that we want it to open in. Some of the modes are :

Name of mode	| Keywords | Syntax
:--|:--|:--|:-:
Read | r | open('file_name', 'r')
Write | w | open('file_name', 'w')
Append | a | open('file_name', 'a')

Example :<br>
a = open('file.txt', 'w')<br>
a.write("Hello!, My name is Jake.")<br>
print(a.read())<br>
a.close()<br>
Output : Hello!, My name is Jake.<br>

The above example is of creating a file and printing it.


### Objective
1. To learn about the various file operations allowed in Python programming language.
2. To implement those operations in solving a problem.

### Manual
In this lab you will learn about the file operations in Python by implementing them in creating and copying a file in the simulator.

### Procedure
1. Read the simulator details.
2. Read the problem statement.
3. Press NEXT to proceed.
4. A code will be displayed.
5. Press NEXT again to see the execution of the code.
6. Relevant line in the code will be highlighted.

### Pre Test
1. Which of the following command is used to open a file 'C: \python.txt' inappend - mode ?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;F=open('c:/python.txt','a')
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;F=open('c:\\python.txt','rw')
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;F=open('c:\python.txt','a')
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;F=open('c:\\python.txt','r+')
                        <br>
                        <p id = "p1"></p>
                        <br>

2. What does the readlines( ) method returns?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;str
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;a list of integers
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;a list of lines
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;a list of single characters a list of integers
                        <br>
                        <p id = "p1"></p>
                        <br>
3. Which one of the following is not attributes of file?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;softspaces
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;rename
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;mode
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;closed
                        <br>
                        <p id = "p1"></p>
                        <br>                           
4. Which is/are the basic I/O connections in file?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Standard Input
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Standard Output
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Standard Error
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;All of the above
                        <br>
                        <p id = "p1"></p>
                        <br>    
5. Which function is used to read all the characters?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Readchar()
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Readcharacters()
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Readall()
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;Read()
                        <br>
                        <p id = "p1"></p>
                        <br>
                        
### Post Test
1. What is the output of this program?<br>
import sys<br>
sys.stdout.write('Hello')<br>
sys.stdout.write('Python')<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Error
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;Hello
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;Python
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;Hello Python
                        <br>
                        <p id = "p1"></p>
                        <br>
2. What is the output of following code?<br>
fo = open('temp.txt', 'r')<br>
print(fo.closed)<br>
fo.close()<br>
print(fo.closed)<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;True True
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;True False
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;False True 
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;False False
                        <br>
                        <p id = "p1"></p>
                        <br>
3. What is the output of following code?<br>
number = 5.0 <br>
try:<br>
    r = 10/number<br>
    print(r)<br>
except:<br>
    print('Error Occurred')<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;Error Occurred
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;2.0
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;2.0 Error Occurred
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;None object
                        <br>
                        <p id = "p1"></p>
                        <br>
4. Which of the following functions can be used to check if a file 'Logo' exists?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;os.path.isFile(logo)
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;os.path.exists(logo)
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;os.path.isfile(logo)
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;os.isExists(logo)
                        <br>
                        <p id = "p1"></p>
                        <br>
5. Which of the following functions displays a file dialog for saving  a file?<br>
                        <br>
                        A.<input type="radio" name="but" id="rb11" onclick="click1();">&nbsp;tmp_file = asksaveasfilename()
                        <br>
                        B.<input type="radio" name="but" id="rb12" onclick="click1();">&nbsp;tmp_file = openfilename()
                        <br>
                        C.<input type="radio" name="but" id="rb13" onclick="click1();">&nbsp;tmp_file = askopenfilename()
                        <br>
                        D.<input type="radio" name="but" id="rb14" onclick="click1();">&nbsp;tmp_file = saveasfilename()
                        <br>
                        <p id = "p1"></p>
                        <br>

### References
<p style="font-size:100%; margin-top:2%">
                       en.m.wikibooks.org/wiki/Python_Programming/Files