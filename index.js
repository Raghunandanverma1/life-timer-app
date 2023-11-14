let dateOfBirth ;

const setting_font_El = document.getElementById("setting-font")
const setting_content_El = document.getElementById("setting-content")

const dobInputEl = document.getElementById("dobInput")
const dobButtonEl = document.getElementById("dobButton")

const initial_contentEl = document.getElementById("initial-content")
const afterDobContent = document.getElementById("afterDobContent")

const yearEl = document.getElementById("years")
const monthEl = document.getElementById("months")
const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

let isDobOpen = false ;

const makeTwoDigitValue = (number) => {
return number > 9 ? number : `0${number}` ;
};

const setting_toggle = () => {
     if(isDobOpen){
        setting_content_El.classList.add("hide")
     }
     else{
        setting_content_El.classList.remove("hide")
     }

     isDobOpen = !isDobOpen

     console.log("Toggle" , isDobOpen)
};

const updateAge = () => {
   const currentDate = new Date();

   const dateDiff = currentDate - dateOfBirth ;
   console.log("dateDiff",dateDiff)

   const year = Math.floor(dateDiff/( 1000 * 365 * 24 * 60 * 60)) ;
   const month = Math.floor(dateDiff/( 1000 * 365 * 24 * 60 * 60)) %12 ;
   const days = Math.floor(dateDiff/( 1000 * 24 * 60 * 60))%30 ;
   const hours = Math.floor(dateDiff/( 1000 *  60 * 60)) %24 ;
   const minutes = Math.floor(dateDiff/( 1000 * 60)) %60 ;
   const seconds = Math.floor(dateDiff/( 1000)) %60 ;
   
   console.log({
      year, 
      month,
      days,
      hours,
      minutes,
      seconds
   })

   yearEl.innerHTML =makeTwoDigitValue(year) ;
   monthEl.innerHTML=makeTwoDigitValue(month) ;
   daysEl.innerHTML = makeTwoDigitValue(days) ;
   hoursEl.innerHTML = makeTwoDigitValue(hours) ;
   minutesEl.innerHTML = makeTwoDigitValue(minutes) ;
   secondsEl.innerHTML = makeTwoDigitValue(seconds) ;
};

const setDob = () => {
   const DobString = dobInputEl.value ;
   dateOfBirth = new Date(DobString);

   const year =localStorage.getItem("year");
 const month =localStorage.getItem("month");
 const date =localStorage.getItem("date");
 

   if(dateOfBirth){

      localStorage.setItem("year",dateOfBirth.getFullYear());
      localStorage.setItem("month",dateOfBirth.getMonth());
      localStorage.setItem("date",dateOfBirth.getDate());

      initial_contentEl.classList.add("hide")
      updateAge()
      setInterval(() => updateAge(),1000)
   }
   else{
      initial_contentEl.classList.remove("hide")
      afterDobContent.classList.add("hide")
   }
};

dobButtonEl.addEventListener("click",setDob);

setting_font_El.addEventListener("click",setting_toggle)

