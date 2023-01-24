# How the Web Works

"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
  
_The internet consists of clients and servers. The client (computer) sends requests to the server (web browser) in which the server sends back a response._  

## _More about clients and servers:_

1.Client: Any device that connects to the internet (i.e., phone, tablet, laptop)
2. Server: A computer that stores webpages, sites, or apps. Content from webapges gets downloaded from the server and sent to the client machine to display on the web browser.

## _Dynamics of the internet:_

_Internet Connection_: Allows the sending and recieving of data on the web.
_TCP/IP_: Transmission Control Protocol and Internet Protocol defined how data should travel across the internet.
_DNS_: Domain Name System is the website address book. The DNS finds website IP addresses in order to retrieve the actual webstie. This is because the browser needs to find which server the website lives on so it can send an HTTP request to the right place so the request can be fulfilled properly to access the website.
_HTTP_: Hypertest Transfer Protocol is an application protocol that defines a languaage for clients and servers to speak to each other.
_Component Files: Websites consists of many different files that comes in two main types_:

1. Code Files: websites built primarily with HTML, CSS, and JavaScript and other technologies.
2. Assets: A collective name for al the other things that makes up a website, such as images, mucis, video, Word documents, and PDFs.  
  
To summarize: When you type a web address into the browser, the browser searches through the Doman Name Server (DNS server) and find the real address (IP Address) that the website lives on.The browser sends an HTTP request message to the server for permission to copy the website to the client. And then the data gets sent to the internet connction of the IP address requesting the info.
Once the server approves the client's request, a message stating "200 OK" will be sent and this is clarification that the request has been approved.  
The browser then gathers it all together to complate a webpage to display for you (the client). **Request complete!**
  
## _Order of parsed component files_  

The browser parses an HTML file in a structured order as it is being displayed to the client. The browser recognizes and link elements, JavaScript files, and references to external CSS styleshets. As the browser parses througg, it generates an in-memory DOM (Document Object Model) tree from what has been parsed from the HTML document. The browser also generates a CSSOM tree and executes the JavaScript and then the visual representation is rendered to the screen for the user to see and engage with.  

## _Understanding DNS_

A DNS is recognized by its IP address - a set of numbers that represents a unique location on the web that the site can be located.  Domain Name Servers were invented to make it easier to remember a website name instead of a unique character-set of numbers. Here is a cool resource for looking up [IP addresses]("https://www.nslookup.io/website-to-ip-lookup/")

## _Packets_

Data is sent throughout the web in small "packets" - small bits of data that is sent from the server to the client. This allows for more data to be shared through multiple channels (or paths) which makes the capability of multiple users to download the same website multiple times possible. If the data was sent in one big chunk then it could only be downloaded by one user at a time!

## _Website Design and Process_

"https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like"

When building a website, it is important to document a style guide to follow. The style guide should consist of the topic the website will cover, information being presented on the subject and the actual look of the website.

A good resource to reference for design ideas is the [Firefox Photon Design System]("https://design.firefox.com/photon/introduction/principles.html").

## Pre-Planning Flow

## Sketch out your design

-Draw a rough sketch out of the website layout design. It does not have to be perfect, but it has to be a rough interpretation of how the text, images, and navbar will be displayed.

## Choosing Assets

-Gather content that will be used on the webpage such as pictures, animations, and any other type of content that will be considered.

## -text

Subjects, headings, paragraphs and bulletpoints should have a nice font flow that complements one another.

## -images

You can use search engines such as [Google Images]("https://www.google.com/imghp?gws_rd=ssl") or [Pexels]("https://www.pexels.com/") to find unlicensed multimedia content to use for your website. Utilize the license filter on these websites to ensure you are not infringing on licensed materials.

## -fonts

There are many resources for getting new fonts. A common resource for many developers is the [Google Fonts]("https://fonts.google.com/")generator that offers a variety of fonts and sizes at your disposal.

## JavaScript Basics
  
Invented by Brendan Eich in just ten days, JavaScript was created to add functionality to websites. Many other frameworkds and tools have been created with core JavaScript coding. Many browser Application Programming Interfaces (APIs) have been built into web browsers using JavaScript along with third-party APIs and frameworks. APIs allow developers to incorporate funtionality into websites from other content providers like Facebook or Twitter. frameworks can be used to accelerate the design process of HTML and CSS coding as well.

javaScript is known as the most popular modern language of the web.

## Mastering the fundamentals

Mastering the fundamentals of JavaScript will help you succeed in other languages as well, as the fundamentals of programming are generally transferrable just with syntax being a difference between programming languages.

## -Variables

Containers that store values. You declare a variable with the **let, const, or var** keywords, followed by the name the variable should beA semicolon at the end of the line represents where the statement ends.
JaveScript is case sensitive and should be checked frequently while writing code to mitigate any bugs from affecting your output.  
Variable names can be altered.  
Variables may hold values that have different data types such as a:

- String
- Number
- Boolean
- Array
- Object

## -Comments

Comments are small pieces of text that can be inserted with code but is invisible to the browser. Comments can be rendred by adding "//" before text or text in between "/**/" symbols.

## -Operators

An operator is a mathematical symbol that produces results based on two values (or variables). The same logic used in Algebra applies to how the symbols are used for programming.

## -Conditionals

A conditional is a code structure used to test if an expression is true or false.If...else statements commonly use conditionals to create an output.

## -Functions

Functions package funtionality that can be resused. Functions were created to prevent writing the same block of code repeatedly thus streamlining the efficiency of the coding process. Anything that looks like a variable name with an empty set of parenthesis to follow is usually a function.

## -Events

Real interactivity on a website requires event handlers. Event handlers tells the browser how to respond in the case the user hovers over a certain element, or clicks on something, or scrolls. Event handlers are teh direct line to how the webpage responds to the users interactions with it.
