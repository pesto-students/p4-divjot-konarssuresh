# Browser operation
What happens when we enter a url in browser and press enter

## Overview
* browser looks up IP address associated with domain
* once it has IP address, browser initiates TCP connection with the server
* browser sends HTTP request to the server
* server processess the request and sends back resonse
* browser renders the content

### How does browser finds IP address associated with particular domain
domain is part of url .ex (youtube.com is domain of https://www.youtube.com/) . 
Using domain name browser does domain lookup to find the IP address of the Url



![image](https://user-images.githubusercontent.com/29543196/180203628-b2722dee-1984-4a25-9824-53276d2b44e1.png)

### How does browser initiates TCP connection with the server
* browser sends SYN message to check if server is open for connection or not
* if server is open for connection it sends ACK(acknowlegde) message along with SYN message
* browser receives the message and is acknowledged by sending an ACK message

![image](https://user-images.githubusercontent.com/29543196/180208072-c8681758-0957-43be-8af8-0f22b425ef94.png)

* once connection is established browser will send request to server requesting some content
* The server responds back with the content requested by browser
* response might contain web pages, status code, cache-control etc

## Browser's high level structure
1. **User Interface**:- it includes address bar, forward and back button, stop, refresh, bookmark buttons etc. It includes everything apart from the area where we see the web pages requested.
2. **Browser Engine**:- it works as bridge between User interface and the rendering engine. Based on inputs from user interface it queries and manipulates render engine
3. **Rendering Engine**:- it is responsible for displaying content in the screen. If the response is html it parses the corresponding html and css files and displays the parsed content in the screen.
4. **Networking**:- it handles all kinds of internet communication. it may implement cache of retrieved document in order to reduce the traffic
5. **UI backend**:- the parsed html will be painted using UI backend. used for drawing basic widgets like combo boxes and windows.
6. **JS Enterpreter**:- it is used to parse and execute javascript code
7. **Data Storage**:- browser might have to store data locally such as cookies. Other storage mechanish is supported by browsers like localStorage, sessionStorage,WebSQL and FileSystem.

![image](https://user-images.githubusercontent.com/29543196/180218898-dd081ab0-4a3c-4522-909e-2706b3da50b4.png)

### Main flow
* once html document is received from the server. The rendering engine will start marsing the HTML elements.
* These elements are converted into DOM nodes in a tree called DOM tree (content tree)
* The render engine will parse the style data both in external css and inline style elements.
* style info along with html creates another tree called render tree
* render tree contains rectangles with color,dimensions and other properties. These are in right order to be displayed on the screen.
* after that it goes through layout process. in this process exact coordinate for each rectangle is given on where to be displayed on the screen.
* After that Painting happens . each node will be printed using UI backend 

![image](https://user-images.githubusercontent.com/29543196/180223933-f9550262-04ea-4a0f-bf8d-6465240e207a.png)

1. **HTML Parsing**:-
   * contains 2 stages Tokenization and tree construction
   * tokenization is nothing but parsing HTML input into token. In HTML token is start tag, end tag, attribute name and values
   * tokenizer recognizes the token, passes it to tree constructor and continues the process to recognize child tokens until the end of the token.
   
   ![image](https://user-images.githubusercontent.com/29543196/180229587-aa03187a-5bbd-4120-baaa-d4f437cfef0e.png)
2. **CSS Parsing**:- CSS parsing is done by bottom-up or top-down parser based on browser. Eg firefox uses top-down parser and bison uses bottom-up parser.
    CSS files is parsed into Stylesheet object
3. **Scripts**:- When the parser reaches script tag, the parsing of the document halts until the script is executed. if the script is external the script needs to be fetched from the network. Parsing is halted till the script is fetched and executed. We can add `defer` attribute to the script . with that the parsing is not halted and script is executed after parsing the document.


