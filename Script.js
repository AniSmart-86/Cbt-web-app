let username="";
let selectedClass="";
let currentQuestion=0;
let answers={};
let timeLeft=1200;
let timer;
let questions=[];

/* ================= QUESTION BANK ================= */

const questionBank = {

JSS1: [
{q:"MS Word is a?",o:["Word Processor","Browser","Game","OS"],a:0},
{q:"Excel is used for?",o:["Calculations","Typing stories","Drawing","Chatting"],a:0},
{q:"HTML stands for?",o:["Hyper Text Markup Language","High Tool","Home Language","None"],a:0},
{q:"CPU means?",o:["Central Processing Unit","Computer Unit","Central Print Unit","None"],a:0},
{q:"Excel file extension?",o:[".xlsx",".docx",".html",".exe"],a:0},
{q:"Word file extension?",o:[".docx",".xlsx",".ppt",".jpg"],a:0},
{q:"Which tag creates paragraph?",o:["<p>","<img>","<h1>","<br>"],a:0},
{q:"Excel formula begins with?",o:["=","#","@","$"],a:0},
{q:"Keyboard shortcut to save?",o:["Ctrl+S","Ctrl+C","Ctrl+P","Ctrl+X"],a:0},
{q:"Spreadsheet is made of?",o:["Rows and Columns","Pages","Slides","Folders"],a:0},
{q:"HTML is used to?",o:["Structure webpage","Play music","Print file","Scan virus"],a:0},
{q:"Mouse is an?",o:["Input device","Output device","Storage","Software"],a:0},
{q:"Monitor is an?",o:["Output device","Input device","Storage","CPU"],a:0},
{q:"Which is programming language?",o:["Python","Word","Excel","HTML"],a:0},
{q:"Cell is intersection of?",o:["Row and Column","Page and Line","File and Folder","None"],a:0},
{q:"HTML tag for image?",o:["<img>","<pic>","<image>","<src>"],a:0},
{q:"Bold shortcut in Word?",o:["Ctrl+B","Ctrl+I","Ctrl+U","Ctrl+L"],a:0},
{q:"Excel worksheet contains?",o:["Cells","Slides","Pictures","Videos"],a:0},
{q:"Web browser example?",o:["Chrome","Word","Excel","PowerPoint"],a:0},
{q:"Programming means?",o:["Giving instructions to computer","Browsing","Typing","Drawing"],a:0},
{q:"Internet is?",o:["Global network","Computer","Software","Printer"],a:0},
{q:"Word is used to type?",o:["Documents","Formulas","Games","Music"],a:0},
{q:"Excel is good for?",o:["Data analysis","Typing letters","Watching videos","Gaming"],a:0},
{q:"HTML file extension?",o:[".html",".doc",".exe",".mp3"],a:0},
{q:"Which device prints?",o:["Printer","Scanner","Mouse","Keyboard"],a:0},
{q:"Website first page is?",o:["Homepage","Footer","Slide","Sheet"],a:0},
{q:"CPU is inside?",o:["System Unit","Monitor","Keyboard","Mouse"],a:0},
{q:"Cut shortcut?",o:["Ctrl+X","Ctrl+C","Ctrl+Z","Ctrl+V"],a:0},
{q:"Copy shortcut?",o:["Ctrl+C","Ctrl+X","Ctrl+P","Ctrl+S"],a:0},
{q:"Paste shortcut?",o:["Ctrl+V","Ctrl+X","Ctrl+S","Ctrl+B"],a:0}
],

JSS2: [
{q:"Define MS Word.",o:["Spreadsheet","Word Processor","Browser","OS"],a:1},
{q:"Excel is mainly used for?",o:["Typing","Calculation","Drawing","Gaming"],a:1},
{q:"HTML stands for?",o:["Hyper Text Markup Language","Home Tool","High Text","None"],a:0},
{q:"Programming means?",o:["Giving instructions","Browsing","Typing","Drawing"],a:0},
{q:"Excel formula begins with?",o:["=","#","@","$"],a:0},
{q:"Which tab contains Font group in Word?",o:["Home","Insert","View","Layout"],a:0},
{q:"SUM function is used to?",o:["Add numbers","Subtract","Multiply","Divide"],a:0},
{q:"HTML tag for heading?",o:["<h1>","<p>","<img>","<br>"],a:0},
{q:"CPU performs?",o:["Processing","Printing","Typing","Drawing"],a:0},
{q:"Excel row is identified by?",o:["Numbers","Letters","Symbols","Colors"],a:0},
{q:"Column is identified by?",o:["Letters","Numbers","Signs","Names"],a:0},
{q:"Save As is used to?",o:["Save new copy","Delete","Print","Close"],a:0},
{q:"Web design involves?",o:["Creating webpages","Typing only","Gaming","Printing"],a:0},
{q:"Shortcut for Undo?",o:["Ctrl+Z","Ctrl+Y","Ctrl+U","Ctrl+R"],a:0},
{q:"HTML link tag?",o:["<a>","<link>","<p>","<img>"],a:0},
{q:"Cell address example?",o:["A1","1A","AA","11"],a:0},
{q:"Algorithm is?",o:["Step by step solution","Virus","File","None"],a:0},
{q:"Excel average function?",o:["=AVERAGE()","=SUM()","=COUNT()","=MAX()"],a:0},
{q:"MS Word alignment option?",o:["Left","Top","Down","Center only"],a:0},
{q:"Input device example?",o:["Keyboard","Monitor","Printer","Speaker"],a:0},
{q:"Output device example?",o:["Printer","Mouse","Keyboard","Scanner"],a:0},
{q:"Insert picture tab?",o:["Insert","Home","View","Design"],a:0},
{q:"HTML creates?",o:["Webpage structure","Spreadsheet","Game","OS"],a:0},
{q:"Excel sheet contains?",o:["Worksheets","Slides","Pages","Videos"],a:0},
{q:"Programming language example?",o:["Java","Word","Excel","HTML"],a:0},
{q:"Mail Merge is used for?",o:["Bulk letters","Coding","Calculation","Drawing"],a:0},
{q:"Which is software?",o:["MS Word","Keyboard","Mouse","Printer"],a:0},
{q:"Excel maximum function?",o:["=MAX()","=SUM()","=LOW()","=ADD()"],a:0},
{q:"Web browser?",o:["Firefox","Excel","Word","Access"],a:0},
{q:"Formatting means?",o:["Changing appearance","Deleting","Closing","Saving"],a:0}
],

JSS3: [
{q:"MS Word ribbon contains?",o:["Tabs","Cells","Codes","Charts"],a:0},
{q:"SUM function is written as?",o:["=SUM(A1:A5)","SUM(A1:A5)","ADD()","TOTAL()"],a:0},
{q:"HTML tag for link?",o:["<a>","<p>","<h1>","<img>"],a:0},
{q:"Algorithm is?",o:["Step by step solution","Virus","File","None"],a:0},
{q:"CPU means?",o:["Central Processing Unit","Computer Unit","Central Print Unit","None"],a:0},
{q:"Excel COUNT function does?",o:["Counts numbers","Adds","Subtracts","Divides"],a:0},
{q:"Cell range example?",o:["A1:A10","1A:10A","AA","11"],a:0},
{q:"HTML list tag?",o:["<ul>","<img>","<p>","<h2>"],a:0},
{q:"Word header appears?",o:["Top of page","Bottom","Middle","Side"],a:0},
{q:"Excel chart shows?",o:["Graphical data","Paragraph","Image","Code"],a:0},
{q:"Programming error is called?",o:["Bug","Loop","File","CPU"],a:0},
{q:"Compiler translates?",o:["High level to machine code","Machine to human","Virus","None"],a:0},
{q:"Data type example?",o:["Integer","Folder","Browser","Sheet"],a:0},
{q:"HTML body tag contains?",o:["Visible content","Title","Meta","Script only"],a:0},
{q:"Webpage title is inside?",o:["<title>","<body>","<h1>","<div>"],a:0},
{q:"Word page orientation?",o:["Portrait","Cell","Sheet","Slide"],a:0},
{q:"Excel IF function is for?",o:["Condition","Loop","Delete","Close"],a:0},
{q:"CSS is used for?",o:["Styling","Typing","Saving","Printing"],a:0},
{q:"Loop is used to?",o:["Repeat instructions","Delete file","Browse","Compile"],a:0},
{q:"HTML attribute example?",o:["href","sum","loop","int"],a:0},
{q:"Insert table in Word?",o:["Insert tab","View","Home","Layout"],a:0},
{q:"Excel MIN function?",o:["=MIN()","=MAX()","=SUM()","=ADD()"],a:0},
{q:"Web server hosts?",o:["Website","Game","Printer","Mouse"],a:0},
{q:"Input validation ensures?",o:["Correct data","Delete","Close","Print"],a:0},
{q:"Programming variable stores?",o:["Data","Virus","File","Printer"],a:0},
{q:"HTML comment syntax?",o:["<!-- -->","//","##","**"],a:0},
{q:"Word footer appears?",o:["Bottom","Top","Center","Left"],a:0},
{q:"Spreadsheet formula example?",o:["=A1+B1","A1+B1","Add()","Sum"],a:0},
{q:"Database stores?",o:["Organized data","Games","Music","Pictures"],a:0},
{q:"Cloud storage example?",o:["Google Drive","Mouse","CPU","Printer"],a:0}
],

SSS1: [
{q:"Which is not MS Word feature?",o:["Mail Merge","Spreadsheet","Spell Check","Formatting"],a:1},
{q:"Excel cell reference B2 means?",o:["Row2 ColumnB","Column2 RowB","None","Both"],a:0},
{q:"HTML document structure starts with?",o:["<!DOCTYPE html>","<head>","<body>","<html> only"],a:0},
{q:"Programming language example?",o:["Python","Word","Excel","HTML"],a:0},
{q:"Loop is used to?",o:["Repeat instructions","Delete file","Browse","Compile"],a:0},
{q:"Excel absolute reference example?",o:["$A$1","A1","A$1","1A"],a:0},
{q:"HTML semantic tag?",o:["<section>","<font>","<big>","<center>"],a:0},
{q:"Word mail merge combines?",o:["Main doc & data","Chart & sheet","Code & tag","None"],a:0},
{q:"Excel pivot table is for?",o:["Data summary","Drawing","Typing","Coding"],a:0},
{q:"Programming debugging means?",o:["Fixing errors","Compiling","Deleting","Formatting"],a:0},
{q:"CSS stands for?",o:["Cascading Style Sheets","Computer Style System","Creative Sheet","None"],a:0},
{q:"Function in programming?",o:["Reusable block","Virus","Bug","File"],a:0},
{q:"HTML table tag?",o:["<table>","<tab>","<trr>","<tds>"],a:0},
{q:"Excel VLOOKUP searches?",o:["Vertically","Horizontally","Randomly","None"],a:0},
{q:"Word track changes?",o:["Monitors edits","Deletes file","Saves","Prints"],a:0},
{q:"Conditional statement example?",o:["if","sum","print","loop"],a:0},
{q:"Web hosting provides?",o:["Server space","Keyboard","Monitor","CPU"],a:0},
{q:"Spreadsheet sorting?",o:["Arranging data","Deleting","Closing","Formatting"],a:0},
{q:"HTML form collects?",o:["User input","Virus","Game","Music"],a:0},
{q:"Excel CONCAT function?",o:["Joins text","Adds numbers","Deletes","Counts"],a:0},
{q:"Programming syntax error?",o:["Grammar mistake","Hardware issue","Virus","None"],a:0},
{q:"CSS controls?",o:["Design","Logic","Calculation","Storage"],a:0},
{q:"Word template is?",o:["Pre-designed layout","Virus","Bug","OS"],a:0},
{q:"Excel macro automates?",o:["Tasks","Printing","Deleting","Browsing"],a:0},
{q:"HTML div is?",o:["Container","Image","Table","Link"],a:0},
{q:"Compiler output?",o:["Machine code","Word file","Excel file","None"],a:0},
{q:"Binary system uses?",o:["0 and 1","1-9","A-Z","Symbols"],a:0},
{q:"Excel chart type?",o:["Bar chart","Paragraph","Slide","Code"],a:0},
{q:"Programming array stores?",o:["Multiple values","One value","None","Virus"],a:0},
{q:"Responsive web design means?",o:["Fits all screens","Only desktop","Only phone","None"],a:0}
],

SSS2: [
{q:"Mail Merge is used for?",o:["Bulk letters","Calculation","Coding","Drawing"],a:0},
{q:"Excel IF function is used for?",o:["Conditional logic","Loop","Delete","Print"],a:0},
{q:"HTML semantic tag example?",o:["<section>","<font>","<big>","<center>"],a:0},
{q:"Compiler translates?",o:["High level to machine code","Machine to human","Virus","None"],a:0},
{q:"Data type example?",o:["Integer","Loop","Browser","Folder"],a:0},
{q:"Excel INDEX function returns?",o:["Value at position","Sum","Count","None"],a:0},
{q:"HTML meta tag is inside?",o:["<head>","<body>","<footer>","<div>"],a:0},
{q:"Word style improves?",o:["Consistency","Virus","Bug","Error"],a:0},
{q:"Programming loop types?",o:["For loop","Sum loop","If loop","Add loop"],a:0},
{q:"CSS property example?",o:["color","sum","loop","print"],a:0},
{q:"Excel HLOOKUP searches?",o:["Horizontally","Vertically","Random","None"],a:0},
{q:"Web domain example?",o:[".com",".exe",".doc",".jpg"],a:0},
{q:"HTML id attribute is?",o:["Unique","Duplicate","Random","Optional"],a:0},
{q:"Variable must be?",o:["Declared","Printed","Deleted","Closed"],a:0},
{q:"Spreadsheet filter does?",o:["Shows specific data","Deletes","Prints","Formats"],a:0},
{q:"CSS margin controls?",o:["Space outside element","Font","Color","Loop"],a:0},
{q:"Word section break?",o:["Separates layout","Deletes page","Prints","None"],a:0},
{q:"Programming output command?",o:["print","loop","if","sum"],a:0},
{q:"HTML audio tag?",o:["<audio>","<sound>","<music>","<mp3>"],a:0},
{q:"Excel ROUND function?",o:["Rounds numbers","Adds","Counts","Deletes"],a:0},
{q:"Database primary key is?",o:["Unique identifier","Duplicate","Optional","None"],a:0},
{q:"CSS flexbox used for?",o:["Layout","Calculation","Print","Delete"],a:0},
{q:"API stands for?",o:["Application Programming Interface","App Print","Advanced Print","None"],a:0},
{q:"Word hyperlink connects?",o:["Another location","Printer","Folder","CPU"],a:0},
{q:"Programming IDE example?",o:["VS Code","Word","Excel","Chrome"],a:0},
{q:"HTML video tag?",o:["<video>","<movie>","<media>","<play>"],a:0},
{q:"Excel logical operator?",o:[">","%","@","&"],a:0},
{q:"Cloud computing means?",o:["Internet-based services","Printer","Mouse","Keyboard"],a:0},
{q:"CSS padding controls?",o:["Inner space","Outer space","Font","Color"],a:0},
{q:"Recursion means?",o:["Function calling itself","Loop","Error","None"],a:0}
],

SSS3: [
{q:"Excel VLOOKUP is used to?",o:["Search vertically","Search horizontally","Delete","Print"],a:0},
{q:"HTML attribute example?",o:["href","loop","sum","int"],a:0},
{q:"Programming debugging means?",o:["Fixing errors","Compiling","Deleting","Formatting"],a:0},
{q:"Algorithm must be?",o:["Finite","Infinite","Random","None"],a:0},
{q:"Spreadsheet intersection forms?",o:["Cell","Row","Column","File"],a:0},
{q:"Excel MATCH function returns?",o:["Position","Value","Sum","None"],a:0},
{q:"HTML canvas is used for?",o:["Graphics","Typing","Saving","Delete"],a:0},
{q:"CSS grid is for?",o:["Layout","Loop","Print","Count"],a:0},
{q:"Word macro is written in?",o:["VBA","HTML","CSS","Python"],a:0},
{q:"Programming OOP stands for?",o:["Object Oriented Programming","Open Online","Output Order","None"],a:0},
{q:"Encapsulation means?",o:["Hiding data","Deleting","Printing","Loop"],a:0},
{q:"Excel nested IF?",o:["IF inside IF","Loop","Bug","Error"],a:0},
{q:"HTML responsive design uses?",o:["Media queries","Print","Delete","Loop"],a:0},
{q:"SQL is used for?",o:["Database queries","Design","Printing","Coding HTML"],a:0},
{q:"API allows?",o:["System communication","Printing","Deleting","Typing"],a:0},
{q:"Git is for?",o:["Version control","Printing","Deleting","Browsing"],a:0},
{q:"Recursion example?",o:["Factorial","Print","Sum only","None"],a:0},
{q:"Excel dashboard displays?",o:["Visual summary","Typing","Delete","Loop"],a:0},
{q:"HTML local storage stores?",o:["Browser data","Printer","CPU","Mouse"],a:0},
{q:"Cybersecurity protects?",o:["Data","Printer","Mouse","Keyboard"],a:0},
{q:"Compiler vs Interpreter difference?",o:["Execution method","Same","None","Print"],a:0},
{q:"Binary search is?",o:["Efficient search","Virus","Loop","Bug"],a:0},
{q:"Word referencing tool?",o:["Citation","Print","Delete","Loop"],a:0},
{q:"Excel Power Query?",o:["Data transformation","Printing","Delete","Loop"],a:0},
{q:"HTML ARIA improves?",o:["Accessibility","Design only","Delete","Loop"],a:0},
{q:"Cloud platform example?",o:["AWS","Mouse","Printer","CPU"],a:0},
{q:"Machine learning is?",o:["AI subset","Printer","Loop","Bug"],a:0},
{q:"Encryption secures?",o:["Data","Mouse","Printer","Monitor"],a:0},
{q:"Software testing ensures?",o:["Quality","Delete","Print","Loop"],a:0},
{q:"Full stack developer works on?",o:["Frontend and Backend","Frontend only","Backend only","None"],a:0}
]

};

/* Expand to 30 Questions Automatically */
function generateQuestions(level){
let base = questionBank[level];
questions=[];
while(questions.length<30){
questions=questions.concat(base);
}
questions=questions.slice(0,30);
}

/* ================= SYSTEM FUNCTIONS ================= */

function login(){
username=document.getElementById("username").value;
const pass=document.getElementById("password").value;

if(pass==="12345" && username!==""){
localStorage.setItem("studentName",username);
document.getElementById("loginPage").classList.add("hidden");
document.getElementById("dashboard").classList.remove("hidden");
}else{
document.getElementById("loginError").innerText="Invalid login details";
}
}

function startExam(){
selectedClass=document.getElementById("classSelect").value;
if(!selectedClass){alert("Select class");return;}

generateQuestions(selectedClass);

document.getElementById("dashboard").classList.add("hidden");
document.getElementById("examPage").classList.remove("hidden");

document.getElementById("displayName").innerText="Student: "+localStorage.getItem("studentName");
document.getElementById("displayClass").innerText="Class: "+selectedClass;

createGrid();
loadQuestion();
startTimer();
}

function createGrid(){
const grid=document.getElementById("questionGrid");
grid.innerHTML="";
questions.forEach((_,i)=>{
const btn=document.createElement("div");
btn.className="grid-btn";
btn.innerText=i+1;
btn.onclick=()=>{currentQuestion=i;loadQuestion();};
grid.appendChild(btn);
});
}

function loadQuestion(){
const q=questions[currentQuestion];
document.getElementById("questionText").innerText=
`Question ${currentQuestion+1}: ${q.q}`;

const optionsDiv=document.getElementById("options");
optionsDiv.innerHTML="";

q.o.forEach((opt,index)=>{
const div=document.createElement("div");
div.className="option";
div.innerText=opt;

if(answers[currentQuestion]==index){
div.classList.add("selected");
}

div.onclick=()=>{
answers[currentQuestion]=index;
loadQuestion();
updateGrid();
updateCount();
};

optionsDiv.appendChild(div);
});

updateGrid();
updateCount();
}

function nextQuestion(){
if(currentQuestion<questions.length-1){
currentQuestion++;
loadQuestion();
}
}

function previousQuestion(){
if(currentQuestion>0){
currentQuestion--;
loadQuestion();
}
}

function updateGrid(){
document.querySelectorAll(".grid-btn").forEach((btn,i)=>{
btn.classList.remove("answered","active");
if(answers[i]!=undefined) btn.classList.add("answered");
if(i===currentQuestion) btn.classList.add("active");
});
}

function updateCount(){
let answered=Object.keys(answers).length;
document.getElementById("answeredCount").innerText=answered;
document.getElementById("unansweredCount").innerText=30-answered;
}

function startTimer(){
timer=setInterval(()=>{
timeLeft--;
let m=Math.floor(timeLeft/60);
let s=timeLeft%60;
document.getElementById("time").innerText=
`${m}:${s<10?"0"+s:s}`;
if(timeLeft<=0) submitExam();
},1000);
}

function submitExam(){
clearInterval(timer);

let correct=0;
questions.forEach((q,i)=>{
if(answers[i]==q.a) correct++;
});

let percent=(correct/30)*100;
let name=localStorage.getItem("studentName");

document.getElementById("examPage").classList.add("hidden");
document.getElementById("resultPage").classList.remove("hidden");

if(percent>=50){
document.getElementById("finalMessage").innerHTML=
`🎉 Congratulations ${name}! You passed!`;
document.getElementById("finalMessage").className="pass";
}else{
document.getElementById("finalMessage").innerHTML=
`❌ Sorry ${name}, you did not pass.`;
document.getElementById("finalMessage").className="fail";
}

document.getElementById("scoreText").innerText=
`Score: ${percent}% (${correct}/30)
Answered: ${Object.keys(answers).length}
Unanswered: ${30-Object.keys(answers).length}`;
}

function logout(){
localStorage.clear();
location.reload();
 }
