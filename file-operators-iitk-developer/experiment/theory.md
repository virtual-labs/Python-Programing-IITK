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