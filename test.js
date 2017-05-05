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
//---------------englishI
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
//---------------englishII----------------
function EnglishIIACr(){
var grcheck = document.getElementById("EnglishIIAcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishIIAtp');
var grade = document.getElementById("EnglishIIAcr").value;
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
function EnglishIIAAtp(){
var grcheck = document.getElementById("EnglishIIAcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishIIAtp');
var please = document.getElementById("EnglishIIAcr").value;
var grade = document.getElementById("EnglishIIAgr").value;
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
//---------------englishIII------------------
function EnglishIIIACr(){
var grcheck = document.getElementById("EnglishIIIAcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishIIIAtp');
var grade = document.getElementById("EnglishIIIAcr").value;
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
function EnglishIIIAAtp(){
var grcheck = document.getElementById("EnglishIIIAcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('EnglishIIIAtp');
var please = document.getElementById("EnglishIIIAcr").value;
var grade = document.getElementById("EnglishIIIAgr").value;
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
//--------mathI-------
function MathIcr(){
var grcheck = document.getElementById("MathIcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIAtp');
var grade = document.getElementById("MathIcr").value;
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
function MathIAtp(){
var grcheck = document.getElementById("MathIcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIAtp');
var please = document.getElementById("MathIcr").value;
var grade = document.getElementById("MathIgr").value;
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
//--------mathII-------
function MathIIcr(){
var grcheck = document.getElementById("MathIIcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIIAtp');
var grade = document.getElementById("MathIIcr").value;
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
function MathIIAtp(){
var grcheck = document.getElementById("MathIIcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIIAtp');
var please = document.getElementById("MathIIcr").value;
var grade = document.getElementById("MathIIgr").value;
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
//--------mathIII-------
function MathIIcr(){
var grcheck = document.getElementById("MathIIIcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIIIAtp');
var grade = document.getElementById("MathIIIcr").value;
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
function MathIIAtp(){
var grcheck = document.getElementById("MathIIIcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('MathIIIAtp');
var please = document.getElementById("MathIIIcr").value;
var grade = document.getElementById("MathIIIgr").value;
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
//--------anatomy-------
function anacr(){
var grcheck = document.getElementById("anacr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('anatp');
var grade = document.getElementById("anacr").value;
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
function anatp(){
var grcheck = document.getElementById("anacr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('anatp');
var please = document.getElementById("anacr").value;
var grade = document.getElementById("anagr").value;
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
//--------anatomy-------
function miccr(){
var grcheck = document.getElementById("miccr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('mictp');
var grade = document.getElementById("miccr").value;
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
function mictp(){
var grcheck = document.getElementById("miccr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('mictp');
var please = document.getElementById("miccr").value;
var grade = document.getElementById("micgr").value;
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
//--------genetics-------
function gencr(){
var grcheck = document.getElementById("gencr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('gentp');
var grade = document.getElementById("gencr").value;
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
function gentp(){
var grcheck = document.getElementById("gencr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('gentp');
var please = document.getElementById("gencr").value;
var grade = document.getElementById("gengr").value;
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
//--------psychology-------
function psycr(){
var grcheck = document.getElementById("psycr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('psytp');
var grade = document.getElementById("psycr").value;
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
function psytp(){
var grcheck = document.getElementById("psycr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('psytp');
var please = document.getElementById("psycr").value;
var grade = document.getElementById("psygr").value;
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
//--------sociology-------
function soccr(){
var grcheck = document.getElementById("soccr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('soctp');
var grade = document.getElementById("soccr").value;
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
function soctp(){
var grcheck = document.getElementById("soccr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('soctp');
var please = document.getElementById("soccr").value;
var grade = document.getElementById("socgr").value;
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
//--------chemII-------
function chemIIcr(){
var grcheck = document.getElementById("chemIIcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemIItp');
var grade = document.getElementById("chemIIcr").value;
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
function chemIItp(){
var grcheck = document.getElementById("chemIIcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemIItp');
var please = document.getElementById("chemIIcr").value;
var grade = document.getElementById("chemIIgr").value;
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
//--------chemIII-------
function chemIIIcr(){
var grcheck = document.getElementById("chemIIIcr")
var reGPA; 
if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemIIItp');
var grade = document.getElementById("chemIIIcr").value;
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
function chemIIItp(){
var grcheck = document.getElementById("chemIIIcr")
var reGPA;

if (grcheck === null) {reGPA = 0;}
else {
var rates = document.getElementsByName('chemIIItp');
var please = document.getElementById("chemIIIcr").value;
var grade = document.getElementById("chemIIIgr").value;
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
var sum = Bio1Atp()+Chem1Atp()+physioAtp()+EnglishAAtp()+EnglishIIAAtp()+EnglishIIIAAtp()+MathIAtp()+MathIIAtp()+anatp()+mictp()+gentp()+psytp()+soctp()+chemIItp()+chemIIItp()
return sum

}

function sumgr(){
var sum = Bio1Cr()+Chem1Cr()+physioCr()+EnglishACr()+EnglishIIACr()+EnglishIIIACr()+MathIcr()+MathIIcr()+anacr()+miccr()+gencr()+psycr()+soccr()+chemIIcr()+chemIIIcr()
return sum

}

function SCIsumcr(){
var sum = Bio1Atp()+Chem1Atp()+physioAtp()+anatp()+mictp()+gentp()+psytp()+soctp()+chemIItp()+chemIIItp()
return sum

}

function SCIsumgr(){
var sum = Bio1Cr()+Chem1Cr()+physioCr()+anacr()+miccr()+gencr()+psycr()+soccr()+chemIIcr()+chemIIIcr()
return sum

}

//gpa calculation---------------------------------


document.getElementById("overall").innerHTML ="Overall GPA :" + sumcr()/sumgr();

document.getElementById("sciencegpa").innerHTML ="Science GPA :" + SCIsumcr()/SCIsumgr();



}
