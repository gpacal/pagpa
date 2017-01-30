function gpacalc()
{
//define valid grades and their values
var gr = new Array(9); 
var cr = new Array(9);


// define valid grades and their values

gr[0] = "A+";
cr[0] = 5;
gr[1] = "A"; 
cr[1] = 4; 
gr[2] = "A-";
cr[2] = 3.66;
gr[3] = "B+";
cr[3] = 3.33;
gr[4] = "B";
cr[4] = 3;
gr[5] = "B-";
cr[5] = 2.66;
gr[6] = "C+";
cr[6] = 2.33;
gr[7] = "C";
cr[7] = 2;
gr[8] = "C-";
cr[8] = 1.66;
gr[9] = "D";
cr[9] = 1;
gr[10] = "F";
cr[10] = 0;
// retrieve user input

function Bio1Cr(){
var grcheck = document.getElementById("biocr")
var reGPA; 


if (grcheck === null) {reGPA = 0;}
else {var rates = document.getElementsByName('bioItp');
var grade = document.getElementById("biocr").value;
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}
	reGPA = rate_value*grade;}
return reGPA;
}
function Bio1Atp(){
var reGPA; 
var grcheck = document.getElementById("biocr")
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('bioItp');
var please = document.getElementById("biocr").value;
var grade = document.getElementById("biogr").value;

var rate_value;
var y;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}

for (var xx = 0; xx < 11; xx++)
                {
                if (grade == gr[xx])
                        {
                        y =  cr[xx];
                       
                        break;
                        }
                }
reGPA = rate_value*please*y;}
return reGPA;
};

//----------------chem---------------------------------------------------------------
function Chem1Cr(){
var grcheck = document.getElementById("chemcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemItp');
var grade = document.getElementById("chemcr").value;
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}
	reGPA = rate_value*grade;}
return reGPA;
}
function Chem1Atp(){
var grcheck = document.getElementById("chemcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemItp');
var please = document.getElementById("chemcr").value;
var grade = document.getElementById("chemgr").value;
var rate_value;
var y;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}

for (var xx = 0; xx < 11; xx++)
                {
                if (grade == gr[xx])
                        {
                        y =  cr[xx];
                       
                        break;
                        }
                }
reGPA = rate_value*please*y;}
return reGPA;
};
//----------------physio------
function physioCr(){
var grcheck = document.getElementById("physiocr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('physioItp');
var grade = document.getElementById("physiocr").value;
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}
	reGPA = rate_value*grade;}
return reGPA;
}
function physioAtp(){
var grcheck = document.getElementById("physiocr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('physioItp');
var please = document.getElementById("physiocr").value;
var grade = document.getElementById("physiogr").value;
var rate_value;
var y;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}

for (var xx = 0; xx < 11; xx++)
                {
                if (grade == gr[xx])
                        {
                        y =  cr[xx];
                       
                        break;
                        }
                }
reGPA = rate_value*please*y;}
return reGPA;
};
//---------------english
function EnglishACr(){
var grcheck = document.getElementById("EnglishAcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishAtp');
var grade = document.getElementById("EnglishAcr").value;
var rate_value;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}
	reGPA = rate_value*grade;}
return reGPA;
}
function EnglishAAtp(){
var grcheck = document.getElementById("EnglishAcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishAtp');
var please = document.getElementById("EnglishAcr").value;
var grade = document.getElementById("EnglishAgr").value;
var rate_value;
var y;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        rate_value = rates[i].value;
		}}

	if(rate_value == "Semesters"){
	rate_value = 1;
	}
	else if (rate_value == "Quarters"){
	rate_value = 0.667;
	}

for (var xx = 0; xx < 11; xx++)
                {
                if (grade == gr[xx])
                        {
                        y =  cr[xx];
                       
                        break;
                        }
                }
reGPA = rate_value*please*y;}
return reGPA;
};

//sum of grades and credit----------------------------------
function sumcr(){
var sum = Bio1Atp() + Chem1Atp() + physioAtp() + EnglishAAtp()
return sum

}

function sumgr(){
var sum = Bio1Cr() + Chem1Cr() + physioCr() + EnglishACr()
return sum

}

//gpa calculation---------------------------------


document.getElementById("overall").innerHTML ="Overall GPA :" + sumcr()/sumgr();





}
