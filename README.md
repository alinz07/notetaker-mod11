# Note Taker
<br/>

## **Link** to app deployed on heroku: https://notetaker-mod11.herokuapp.com/ 

## **Link** to video walkthrough to demonstrate app functionality: https://drive.google.com/file/d/1RqgoJq9Rtg6SPvD4Cn6zXNH8bs2z6SuA/view 
## **Link** to project repository: https://github.com/alinz07/notetaker-mod11 
<br/>

## **Motivation**
Create an application to write and save notes. Use the express package on the back end and retrieve data from a JSON file.

<br/>

## **Table of Contents**
[How and Why?](#what-problem-does-this-solve-and-how-was-a-solution-accomplished) <br/>
[Things I learned](#things-i-learned) <br/>
[What makes this project stand out?](#what-makes-this-project-stand-out) <br/>
[Challenge Criteria](#challenge-criteria)<br/>
[Screenshot of Web Application](#screenshot-of-web-application)<br/>
[How to Contribute](#how-to-contribute)<br/>
[Credits](#credits)<br/>
  
<br/>

## **What Problem does this solve and how was a solution accomplished?**
A notetake app can help organize thoughts and keep track of tasks that one needs to do. Using a server and site hosted on heroku saves money by taking advantage of their free service and saves memory from not just storing locally.
<br/>

## **Things I learned**
* When serving static files, if the server.js or public directory are not in the root directory of the project (in this app they are in the Develop dir), you have to be more specific when passing the root argument for the express.static() method.
* If you rewrite a json file that the server is reading and whose contents are being imported into your js routing file, that rewritten json file can only be accessed when you restart the server. You can, however, manipulate the json file by directly using .push/.splice/.pop on the imported object (because the json object was an array of objects). Our renderNoteList function accesses the json file and returns it's array of objects to create html. When you run this function after directly manipulating the imported object, it will correctly render the changes without having to restart the server.
<br/>

## **What makes this project stand out?**
This project's modularization makes it stand out. I have all of my note routes in one file, scripts to run my html pages, and scripts to run the server all in different, well labeled directories, and with sensical filenames. I didn't have to add much code to the starter code to get this project running, but I did have to read a lot of documentation to make tweaks that support my file structure and desired functionality. It was a fun challenge.

<br/>

## **Challenge Criteria**
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note-taking application<br/>

* WHEN I open the Note Taker<br/>
THEN I am presented with a landing page with a link to a notes page

* WHEN I click on the link to the notes page<br/>
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note???s text in the right-hand column

* WHEN I enter a new note title and the note???s text<br/>
THEN a Save icon appears in the navigation at the top of the page

* WHEN I click on the Save icon<br/>
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

* WHEN I click on an existing note in the list in the left-hand column<br/>
THEN that note appears in the right-hand column

* WHEN I click on the Write icon in the navigation at the top of the page<br/>
THEN I am presented with empty fields to enter a new note title and the note???s text in the right-hand column
<br/>

## **Screenshot of Web Application**
![gif-of-webapp](./Develop/public/assets/challenge-11.gif)
<br/>

## **How to Contribute**
Please feel free to review, refactor and submit a pull request for additional features on my github page: <br/>
https://github.com/alinz07 

### **Credits**
* Source code provided by University of Wisconsin-Milwaukee Extended Campus Full-Stack Coding Bootcamp
