# Understanding The Terminal

The terminal is a Linux user interface that gives you more control of navigating files and accessing information embedded within the interworkings of your operating system.

The terminal recognizes several sets of commands. The commands you tyope into the terminal are either terminal-specific or dependency-specific depending on what your goals are for using the terminal.

The most common terminal version to use is known as `bash` which stands for `born again shell` which replace the original `shell` terminal also known as `sh`.

The terminal is a very powerful tool and knowing your way around it can make you an even more efficient developer or user of your computer as it gives you access to more information about your computer than what you see on a typical base level.

You can do things like traverse through documents to see what file structures are in a directory including hidden files. You can create new files as well. You can open up any window you want from the terminal as well. Another useful feature the terminal can be used for is version control with git commands. This is very useful in the developer ecosystem and is widely used in the industry to organize and keep track of important changes to codebases.

Let's dive in!

## Getting Around the Terminal

There are a few ways to traverse through the terminal. Typing in commands such as `pwd` or `ls` can give you an idea of where you are at in the terminal and provide information about the directories you specify  in conjuction with said commands.

`pwd` stands for **Print Working Directory** running this command will let you know which directory you are currently working out of or making changes in.

`ls` is an abbreviation for **list** and will list the files within the directory you specify. For instance if you want to see what files exist inside of a folder names `cars` you can run the command `ls` and all of the files inside of the `cars` folder will display in a list.

There are several command variations you can run with the `ls` command. Such as `ls -a`. This command will list all of the hidden files within the directory you are in.

`ls` is a very powerful command and it would not hurt to do some extra research on the types of things you can do with it.

Another commonly used command is `cd` which stands for **change directory**. This command allows you to actually move from file to file. There are a few methods to mapping out which directory you want the terminal to navigate to. There's **relative paths** and **absolute paths**. A **relative path** is what you navigate to in relation to the file you are currently in. An **absolute path** is a way to naviaget in relation to the root directory.

You can use backslashes and dots to your advantage when it comes to navigating to and from different directories when referring to its path. For instance. Putting a dot in front of a slash (`./`) implies that you are trying to navigate to a file that is outside of the actual directory you currently occupy in the terminal. Adding a second . (`../`) implies that the directory you are referring to is two levels outside of your current directory.

Another note: When typing in directory, you can use Tab Completion to let the terminal finish the typing for you when referring to another directory. The terminal recognize patterns of how what you're typng closely resembles the name of a file on your system. When you press the ta key, the terminal will either auto complete the path for you or list the options you have if there are several that exist. In this case, you can keep typing and tabbing until the terminal completes the path for you.

## The terminal through the eyes of Linux

Linus is an extensionless system. What does this mean?

Usually files have an extension that specifies the type of file the content inside of the file may contain, for example, a file ending in **.png** you'd expect to contain an image. However, Linux does not recognize file extensions. Linux only recognizes what the file actually contains. You can name that picture file with any extension you like and Linux will still recognize the file as an image.

You can also ask Linux what kind of file type a directory contains by typing `file <path_name_here>` 

Linux is very case sensitive. This is because Linux recognizes every file as an independent structure. Furthermore, files can contain the same exact names but esixt in more than one directory. When using spaces in Linux, you have to be careful. This is because a space is recognize as you declaring another command or file name. There are ways to get around this. 

If a file name has a space inside of it, You out the entire file name in quotation marks and the file will be recognized as a whole. If you use a backslash in  between two words, this will be recognized as a whole pate as well.

## How to get more information about the terminal - In the Terminal

In the terminal, you can access what is called the **Manual Pages**. In the manual pages you can view a list of commands and how they can be used. In this page you will get a summary of the use case of the specified command along with the different options that come along witht he command.

This can be very useful when you're trying to figure out more creative ways to traverse the terminal and get the terminal to do exactly what you want it to do. 

When in the manual pages, you are essentially inside of another portal and you get through the pages with the `n` key. Which stands for `next`. The `n` key will take you to the next page that is filled with more beneficial information.

It can be hard to remember every single Linux command, especially as a beginner, so make good use of the manual pages when you need a refresher or some good ol' enlightment.

## Shortcuts for manipulating files in the terminal

There are a few shortcuts you can use to create new files, delete files, remove, or even copy files. Please make note of the following:

- rm - Remove file
- mkdir - Make Directory
- touch - Create blank/new file
- mv - Move file, directory
- rmdir - Remove/Delete a directory
- cp - Copy a file, directory

PS: The differencce between `rm` and `rmdir` is that `rm` removes files and `rmdir` removes directories.
