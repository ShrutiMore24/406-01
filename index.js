
let countriesList=[];
countries.map((ele)=>{
    // console.log(ele);
    countriesList.push(ele.toLowerCase());
})
// console.log(countries);
let totalCountriesLine=document. getElementById('totalCountriesLine');
console.log( totalCountriesLine);
totalCountriesLine.innerText=`Total Number of countries are ${ countriesList.length}`

function StrartWithWord() {
    let outputdiv=document.getElementById('outputdiv');
    outputdiv.innerHTML="";
    let input=document.getElementById('inputData').value;
    let changeInputEventListener=document.getElementById('inputData');
    changeInputEventListener.setAttribute("onkeyup","StrartWithWord()");

    // console.log(input);
    let count=0;
    for(let i=0;i<countriesList.length;i++){
       let result=countriesList[i].startsWith(input.toLowerCase());
    //    console.log(result);

        if(input==""){
            console.log('hello');
            outputdiv.innerHTML = `
                <div class="emptyInputBox">
                <h1>Plaese Enter any word</h1>
                </div>
                `
                let searchingResultLine=document.getElementById('searchingResult');
                searchingResultLine.innerHTML="";
                //style="color:red;margine:3rem; height:20vh;
        }


        else{
            if(result==true){
                count++;
                // console.log(data);
                outputdiv.innerHTML += `
                <div class="countriesCard">
                <p>${countries[i]}</p>
                </div>
                `
                let searchingResultLine=document.getElementById('searchingResult');
                searchingResultLine.innerHTML=`<p>Countries Start with <span style="color:red;">"${input}"</span> are<span style="color:lime;"> ${count}</span></p>`;
               }
        }
       
    }
    console.log(count);
    
}




function searchWithAnyWord(){

    let outputdiv=document.getElementById('outputdiv');
    outputdiv.innerHTML="";
    let input=document.getElementById('inputData').value;
    let changeInputEventListener=document.getElementById('inputData');
    changeInputEventListener.setAttribute("onkeyup"," searchWithAnyWord()");
    // console.log(input);
    let count=0;
    for(let i=0;i<countriesList.length;i++){
       let result=countriesList[i].includes(input.toLowerCase());
    //    console.log(result);

        if(input==""){
            console.log('hello');
            outputdiv.innerHTML = `
                <div class="emptyInputBox">
                <h1 >Plaese Enter any word</h1>
                </div>
                `
                //style="color:red;margine:3rem; height:20vh;
        }


        else{
            if(result==true){
                count++;
                // console.log(data);
                outputdiv.innerHTML += `
                <div class="countriesCard">
                <p>${countries[i]}</p>
                </div>
                `
               }
        }
       
    }
    console.log(count);
    
    let searchingResultLine=document.getElementById('searchingResult');
    searchingResultLine.innerHTML=`<p>Countries Start with <span style="color:red;">"${input}"</span> are<span style="color:lime;"> ${count}</span></p>`;

}