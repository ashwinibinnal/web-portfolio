const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const selects = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(" form button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

 for(let select of selects){
    for (code in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = code;
        newOption.value = code;
        if(select.name==="from"&& code==="INR"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && code==="USD"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}
const updateFlag =(element)=>{
    let code=element.value;
    let countryCode=countryList[code];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}
btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let amt = document.querySelector("form input");
    let amtValue=amt.value;
    if(amtValue==="" || amtValue<1){
        amtValue=1;
        amt.value="1";
    }
   
    const secondUrl =`${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(secondUrl);
    let data= await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);
    console.log(amt);
    let finalRes = amtValue * rate;
    msg.innerText=`${amtValue} ${fromCurr.value}=  ${finalRes} ${toCurr.value}`;
    
});