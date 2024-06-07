
const inputField = document.getElementById("input");
const submitField = document.getElementById("submit");
var commentbtn = document.getElementById("comment-button");
commentbtn.classList.add("active");
function CQButton(clicked) { 
    var button = document.getElementById(clicked); 
    var questionbtn = document.getElementById("question-button"); 
 
        var comment=document.getElementById("comments");
        if(questions.style.display=='none' && clicked=='question-button'){
            questions.style.display='block';
            inputQuestion.style.display='block';
            submitQuestion.style.display='block';
            comment.style.display='none';
            input.style.display='none';
            submit.style.display='none';
            errorCharMsg.style.display='none';
            inputField.value="";

           // questionbtn.style.backgroundColor="rgb(190, 192, 190)";
            // commentbtn.style.backgroundColor="white";
            questionbtn.classList.add("active");
            commentbtn.classList.remove("active");

        }
        if(clicked=='comment-button' && comments.style.display=='none'){
            questions.style.display='none';
            inputQuestion.style.display='none';
            submitQuestion.style.display='none';
            comment.style.display='block';
            input.style.display='block';
            submit.style.display='block';
            errorCharMsgQuestion.style.display='none';
            submitField.value="";
            questionbtn.classList.remove("active");
            commentbtn.classList.add("active");
            // commentbtn.style.backgroundColor="rgb(190, 192, 190)";
          //  questionbtn.style.backgroundColor="white";
        }    
} 

function notLoggedCQButton(clicked) { 
    var button = document.getElementById(clicked); 
    var questionbtn = document.getElementById("question-button"); 
 
        var comment=document.getElementById("comments");
        if(questions.style.display=='none' && clicked=='question-button'){
            questions.style.display='block';
            inputQuestion.style.display='block';
            comment.style.display='none';
            input.style.display='none';
            errorCharMsg.style.display='none';

           // questionbtn.style.backgroundColor="rgb(190, 192, 190)";
            // commentbtn.style.backgroundColor="white";
            questionbtn.classList.add("active");
            commentbtn.classList.remove("active");

        }
        if(clicked=='comment-button' && comments.style.display=='none'){
            questions.style.display='none';
            inputQuestion.style.display='none';
            comment.style.display='block';
            input.style.display='block';
            errorCharMsgQuestion.style.display='none';
            questionbtn.classList.remove("active");
            commentbtn.classList.add("active");
            // commentbtn.style.backgroundColor="rgb(190, 192, 190)";
          //  questionbtn.style.backgroundColor="white";
        }    
} 
const date = new Date();

let day = date.getDate();
let year = date.getFullYear();

// This arrangement can be altered based on how we want the date's format to appear.

const momths = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let name = momths[d.getMonth()];
let currentDate = `${name} ${day}, ${year}`;
console.log(currentDate)

const result_row = document.getElementById("comment-table");
function insert_result_comment(){
    let input = inputField.value;
    if(input.length >= 3){
        console.log(input);
        input.className='text-CQ';
        let new_row = document.createElement("tr");
        let new_td = document.createElement("td");
        var cell1 = new_row.insertCell(0);

        let new_div = document.createElement('div');
        let dateDiv = document.createElement('div');
        let userDiv = document.createElement('div');

        let alignDiv = document.createElement('div');
        let userNameDiv = document.createElement('div');
        let alignDiv2 = document.createElement('div');
        
        let replyDiv = document.createElement('a');
        replyDiv.onclick="";
        replyDiv.className="replyLink";
        replyDiv.innerHTML="Replies/Reply";
        // replyDiv.style.bottom="10px";


        new_div.className='comment-question-group';
        dateDiv.className='comment-question-dates';
        alignDiv.className="alignTextBesidePFP";
        alignDiv2.style.marginTop="10px";

        dateDiv.innerHTML="Date " + currentDate;
        userDiv.className='userCompleted';
        userDiv.style.display="inline-flex";
        
        userNameDiv.style.paddingLeft="5px";
        userNameDiv.style.display="inline";
        userNameDiv.innerHTML="Sheldon Cooper"
        alignDiv.append(userNameDiv);
        alignDiv2.append(input);
        alignDiv.style.top="5px";
        // alignDiv2.style.top="5px";
        userNameDiv.style.top="10px";
        
        new_div.appendChild(dateDiv);
        new_div.appendChild(userDiv);
        new_div.appendChild(alignDiv);
        new_div.appendChild(alignDiv2);
        new_div.appendChild(replyDiv);

        new_td.appendChild(new_div);
        cell1.appendChild(new_td);
        result_row.appendChild(new_row);
        inputField.value="";
        noComments.style.display="none";
        errorCharMsg.style.display='none';
    }
    else{
        inputField.value="";
        errorCharMsg.style.display='block';
    }
}

const inputQuestionField = document.getElementById("inputQuestion");
const result_row_question = document.getElementById("question-table");

function insert_result_question(){
    let input = inputQuestionField.value;
    if(input.length >= 10){
        input.className='text-CQ';
        let new_row = document.createElement("tr");
        let new_td = document.createElement("td");
        var cell1 = new_row.insertCell(0);

        let new_div = document.createElement('div');
        let dateDiv = document.createElement('div');
        let userDiv = document.createElement('div');

        let alignDiv = document.createElement('div');
        let userNameDiv = document.createElement('div');
        let alignDiv2 = document.createElement('div');
        
        let replyDiv = document.createElement('a');
        replyDiv.onclick="";
        replyDiv.className="replyLink";
        replyDiv.innerHTML="Replies/Reply";
        // replyDiv.style.bottom="10px";

        inputQuestionField.value="";

        new_div.className='comment-question-group';
        dateDiv.className='comment-question-dates';
        alignDiv.className="alignTextBesidePFP";
        alignDiv2.style.marginTop="10px";

        dateDiv.innerHTML="Date " + currentDate;
        userDiv.className='userCompleted';
        userDiv.style.display="inline-flex";
        
        userNameDiv.style.paddingLeft="5px";
        userNameDiv.style.display="inline";
        userNameDiv.innerHTML="Sheldon Cooper"
        alignDiv.append(userNameDiv);
        alignDiv2.append(input);
        alignDiv.style.top="5px";
        // alignDiv2.style.top="5px";
        userNameDiv.style.top="10px";
        
        new_div.appendChild(dateDiv);
        new_div.appendChild(userDiv);
        new_div.appendChild(alignDiv);
        new_div.appendChild(alignDiv2);
        new_div.appendChild(replyDiv);

        new_td.appendChild(new_div);
        cell1.appendChild(new_td);
        result_row_question.appendChild(new_row);
        noQuestions.style.display="none";

        errorCharMsgQuestion.style.display='none';

    }
    else{
        errorCharMsgQuestion.style.display='block';
        inputQuestionField.value="";
    }
    
}
function gramsToCupTest(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            if(outerUnit.innerHTML== " gram " || outerUnit.innerHTML== " grams "){
                console.log("REACHED");
                
                var conversionIs = Number(parseFloat(outerNumderDiv.innerHTML)/250).toFixed(2);
           
                outerNumderDiv.innerHTML=conversionIs;
                if(conversionIs>1){
                    newUnit=" cups ";
                }
                else{
                    newUnit=" cup ";
                } 
                outerUnit.innerHTML=newUnit;
                
            }
        }
    
    }                      
}

function cupsToGrams(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        // var checkId = "m"+i;
        // var newDiv = document.getElementById(checkId);
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            if(outerUnit.innerHTML== " cup " || outerUnit.innerHTML== " cups "){
                
                var conversionIs = Number(parseFloat(outerNumderDiv.innerHTML)*250).toFixed(2);
                outerNumderDiv.innerHTML=conversionIs;
                if(conversionIs>1){
                    newUnit=" grams ";
                }
                else{
                    newUnit=" gram ";
                } 
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}

function cupsToMl(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        // var checkId = "m"+i;
        // var newDiv = document.getElementById(checkId);
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            console.log("REACHED");

            if(outerUnit.innerHTML== " cup " || outerUnit.innerHTML== " cups "){
                console.log("REACHED");
                
                var conversionIs = Number(parseFloat(outerNumderDiv.innerHTML)*237).toFixed(2);
                outerNumderDiv.innerHTML=conversionIs;
               
                    newUnit=" mL ";
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}

function mlToCups(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){
            console.log("REACHED");

            if(outerUnit.innerHTML== " mL "){
                console.log("REACHED");
                
                var conversionIs =Number(parseFloat(outerNumderDiv.innerHTML)/237).toFixed(2);
                outerNumderDiv.innerHTML=conversionIs;
               
                if(conversionIs>1){
                    newUnit=" cups ";
                }
                else{
                    newUnit=" cup ";
                } 
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}
function lbToGrams(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){

            if(outerUnit.innerHTML== " lb "){
                console.log("REACHED");
                
                var conversionIs = Number(parseFloat(outerNumderDiv.innerHTML)*454).toFixed(2);
                outerNumderDiv.innerHTML=conversionIs;
               
                if(conversionIs>1){
                    newUnit=" grams ";
                }
                else{
                    newUnit=" gram ";
                } 
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}

function gramsToLb(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){

            if(outerUnit.innerHTML== " grams " || outerUnit.innerHTML== " gram "){
                console.log("REACHED");
                
                var conversionIs = Number((parseFloat(outerNumderDiv.innerHTML)/454).toFixed(2));
                outerNumderDiv.innerHTML=conversionIs;
               
                    newUnit=" lb ";
               
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}
function tbspToTsp(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){

            if(outerUnit.innerHTML== " tbsp "){
                console.log("REACHED");
                
                var conversionIs = Number((parseFloat(outerNumderDiv.innerHTML)*3).toFixed(2));
                outerNumderDiv.innerHTML=conversionIs;
               
                    newUnit=" tsp ";
               
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}
function tspToTbsp(textMeasurement){
    const MeasurementArr = JSON.parse(textMeasurement);
    for(var i=0; i < MeasurementArr.length; i++){
        var outerUnitId = "unit"+i;
        var outerNumderId = "number"+i;
        var outerNumderDiv = document.getElementById(outerNumderId);
        var outerUnit=document.getElementById(outerUnitId);
        console.log(outerUnitId);
       
        if(outerUnit.innerHTML!=" "){

            if(outerUnit.innerHTML== " tsp "){
                console.log("REACHED");
                
                var conversionIs = Number((parseFloat(outerNumderDiv.innerHTML)/3).toFixed(2));
                outerNumderDiv.innerHTML=conversionIs;
               
                    newUnit=" tbsp ";
               
                outerUnit.innerHTML=newUnit;
            }
        }
    }   
}




function bookmarkClicked(){
    var button = document.getElementById("clickedBookmark");
    if(button.style.display=='none'){
        bookmark.style.display='none';
        button.style.display='block';
    }
    else{
        bookmark.style.display='block';
        button.style.display='none';
    
    }
    
}

function MDropdownClicked(clicked, textMeasurement){
    // console.log(clicked);
    var button=document.getElementById(clicked);
    // const textMeasurement = '[{"number":3, "unit":" ", "ingredient":"chicken thigh", "sub":""},  {"number":20, "unit":" grams ", "ingredient":"honey","sub":[{"number":1, "unit":" cup ", "ingredient":"sugar"}]},  {"number":3, "unit":" ", "ingredient":"garlic cloves", "sub":""},  {"number":1, "unit":" teaspoon ", "ingredient":"vinegar", "sub": [{"number":10, "unit":" grams ", "ingredient":"apple cider vinegar"}]}, {"number":5, "unit":" teaspoon ", "ingredient":"vinegar", "sub":""}, {"number":7, "unit":" ounces ", "ingredient":"soy sauce", "sub":[{"number":18, "unit":" cup ", "ingredient":"rice vinegar"}]}]';
    const MeasurementArr = JSON.parse(textMeasurement);
    console.log(textMeasurement);
    for(var i=0; i<MeasurementArr.length; i++){

       
        if(MeasurementArr[i].sub!=""){

            for(var j=0;j<MeasurementArr[i].sub.length; j++){
              
                var thisNumberId="number"+i;
                var numberDiv=document.getElementById(thisNumberId);
                var thisUnitId="unit"+i;
                var unitDiv=document.getElementById(thisUnitId);
                if(clicked==MeasurementArr[i].ingredient){
                    numberDiv.innerHTML=MeasurementArr[i].number;
                    unitDiv.innerHTML=MeasurementArr[i].unit;
                    break;
                }
                if(clicked==MeasurementArr[i].sub[j].ingredient){

                    numberDiv.innerHTML=MeasurementArr[i].sub[j].number;
                    unitDiv.innerHTML=MeasurementArr[i].sub[j].unit;
                    break;
                }
            }
        }
    } 
}

function followAlongClicked(arrSize){
    console.log(arrSize);
    for(var i=0; i<arrSize; i++){
        var checkID = i + "checkbox";
        var checkButton=document.getElementById(checkID);
        checkButton.style.display='block';

    }
    var endButton = document.getElementById("endFollowButton");
    var endText = document.getElementById("endFollowText");
    endButton.style.display="block";
    endText.style.display="block";
    endToolTip.style.display="block";

    var startButton = document.getElementById("startFollowAlong");
    var startText = document.getElementById("startFollowText");
    startButton.style.display="none";
    startText.style.display="none";
    startToolTip.style.display="none";


}

function endFollowAlongClicked(arrSize){
    for(var i=0; i<arrSize; i++){
        var checkID = i + "checkbox";
        var checkButton=document.getElementById(checkID);
        checkButton.style.display='none';

    }
    var endButton = document.getElementById("endFollowButton");
    var endText = document.getElementById("endFollowText");
    endButton.style.display="none";
    endText.style.display="none";
    endToolTip.style.display="none";
    var startButton = document.getElementById("startFollowAlong");
    var startText = document.getElementById("startFollowText");
    startButton.style.display="block";
    startText.style.display="block";
    startToolTip.style.display="block";
    
    for(var i=0; i<arrSize; i++){
        let stepDiv=document.getElementById(i+"step");
        if(stepDiv.style.textDecoration=="line-through"){
            checkboxClicked(i);
        }
        let checkDiv=document.getElementById(i+"checkbox");
        checkDiv.checked=false;

    }

}
function displayReply(){
    let elem = document.getElementById("replySam");
    if(elem.style.display=="none"){
        elem.style.display="block";
        replyMj.style.display="block";
    }
    else{
        elem.style.display="none";
        replyMj.style.display="none";

    }
}

function changeStar(idIs){

    if(idIs == "1" || idIs == "2" || idIs =="3" || idIs == "4" || idIs == "5"){
        console.log("reached");
        let runFor=parseInt(idIs);
        for(var i=1; i<=runFor; i++){
            let stringId=i.toString();
            let unfilled=document.getElementById(stringId);
            if(unfilled.style.display=="block"){
                let filledId=i + "star";
    
                let filled= document.getElementById(filledId);
                unfilled.style.display="none";
                filled.style.display="block";
            }
        }
        submitRatingError.style.display="none";

        ratingButton.style.display="block"; 
    }
    else{
        console.log("reached else" + idIs);
        let parsedStar = parseInt(idIs)
        for(var i=parsedStar; i<=5; i++){
            let filledId = i + "star";
            let unfilled=document.getElementById(i.toString());
            let filled= document.getElementById(filledId);
            unfilled.style.display="block";
            filled.style.display="none";
        };
    }
}

function notLoggedChangeStar(idIs){

   
}
function notLoggedFavourite(){
    signlogMessage.style.display="block";
}

let submitting=new Boolean(false);
let submittedTimes=0;
function submitRating(){
    let count=0;

    for(var i=1; i<=5; i++){
        let unfilled=document.getElementById(i.toString());
        if(unfilled.style.display=="none"){
            count=count+1;
        }
    }
    console.log(count);
    if((submitRatingDone.style.display=="block" || submitting==true || count==0)&& submittedTimes>1){
        alredySubmittedRating.style.display="block";
        submitRatingDone.style.display="none";
        console.log("REACHED ");
    }
    if(count==0 && submitting==false){
        submitRatingError.style.display="block";
    }
    else{
        submitting=true;
        submittedTimes+=1;
        submitRatingDone.style.display="block";
        updateRecipeRating(count);

    }
    if((submitRatingDone.style.display=="block" || submitting==true)&& submittedTimes>1){
        console.log("REACHED ");

        alredySubmittedRating.style.display="block";
        submitRatingDone.style.display="none";
    }
}


function updateRecipeRating(count){
    console.log("oh");
    var counting =0;
    for(var i=1; i<=5; i++){
        let updateStarId =i+"update";
        let updateStar = document.getElementById(updateStarId);
        if(updateStar.getAttribute('src')=='assets/filledStarRating.png'){
            console.log("YAY");
            counting++;
        } 
    }

    let numberOfRatings = document.getElementById("rating");
    let numRatingArr = numberOfRatings.innerHTML.split('(');
    let numberInRating = parseInt(numRatingArr[1]);
    console.log(numberInRating);

    let newOne = (numberInRating/(numberInRating+1))*counting;
    let otherOne = (1/(numberInRating+1))*count;
    let rounded = Math.round(newOne+otherOne);
    console.log("rounded is " + rounded);
    if(rounded>counting){
        for(var i=1; i<=rounded; i++){
            let updateStarId =i+"update";
            let updateStar = document.getElementById(updateStarId);
            updateStar.src="assets/filledStarRating.png";
        }
    }
    if(rounded<counting){
        console.log("counting " + counting);

        for(var i=rounded+1; i<=5; i++){
            console.log("i " + i);

            let updateStarId =i+"update";
            let updateStar = document.getElementById(updateStarId);
            updateStar.src="assets/unfilledStarRating.png";
        }

    }
    let adding = numberInRating+1;
    numberOfRatings.innerHTML="(" +adding +")";



}

function favouritesBookmark(){
    var button = document.getElementById("clickedBookmark");
    if(button.style.display=='none'){
        bookmark.style.display='none';
        button.style.display='block';
        linkToFavourites.style.display="block";
    }
    else{
        bookmark.style.display='block';
        button.style.display='none';
        linkToFavourites.style.display="none";


    }
}

function addToFavouritesPage() {

    // var dietaryRestrictions = document.querySelectorAll('input[name="recipe-restriction[]"]:checked');
    // var selectedRestrictions = [];
    // dietaryRestrictions.forEach(function (checkbox) {
    //     selectedRestrictions.push(checkbox.value);
    // });
    // const restrictions = selectedRestrictions.join(',');

    // var categorySelect = document.getElementById('recipe-category-select');
    // var selectedOption = categorySelect.options[categorySelect.selectedIndex];

    const title = document.getElementById("viewRecipeName").text;

    var category = document.querySelector('#tagParent > div:nth-child(2)').textContent;
    if (category == "Main Dish"){
        category = "MainDishes";
    } else if (category == "Appetizer"){
        category = "Appetizers";
    } else{
        category = "Desserts";
    }

    const author = document.getElementById("recipe-author").text;
    const href = (author + title).replace(/\s+/g, '') + ".html";
    const image = document.getElementById("uploaded-image").src;

    const data = {"dietaryRestrictions":"none", "title":title, "favourites":"True", "star":"4", "category":category, "image": image, "author": author, "href":href};
    
    const url = "index_logged_in.html" +
        "?dietaryRestrictions=" + encodeURIComponent(data.dietaryRestrictions) +
        "&title=" + encodeURIComponent(data.title) +
        "&favourites=" + encodeURIComponent(data.favourites) +
        "&star=" + encodeURIComponent(data.star) +
        "&category=" + encodeURIComponent(data.category) +
        "&image=" + encodeURIComponent(data.image) +
        "&author=" + encodeURIComponent(data.author) +
        "&href=" + encodeURIComponent(data.href) + 
        "&flag=1";

        // Redirect to the constructed URL
        window.location.href = url;
}

function checkboxClicked(checkboxID){

    console.log("check clicked " + checkboxID);
    let numId = parseInt(checkboxID);
    let stepDiv = document.getElementById(numId+"step");
    let instructionDiv = document.getElementById(numId+"instruction");

    let strikeThrough=document.createElement("s");
    if(stepDiv.style.textDecoration != 'line-through'){
        stepDiv.style.textDecoration='line-through';
        instructionDiv.style.textDecoration='line-through';

    }
    else{
        stepDiv.style.textDecoration='none';
        instructionDiv.style.textDecoration='none';
    }
}

function displayReplyNone(){
    let elem = document.getElementById("replies0");
    if(elem.style.display=="none"){
        elem.style.display="block";
    }
    else{
        elem.style.display="none";
    }
}

function getProfileElement(){

    // let thisRandom = document.getElementById("profile-content");
    // console.log(thisRandom.id);
    const url = "index_logged_in.html?flag=2";
    window.location.href=url;
}