
//IIFE
(function(){


   // Named Fuction
    function Start()
    {
       console.log('%cApp Started', "color:red; font-size: 24px;"); 
       let clickMeButton = document.getElementById("clickMeButton");
       clickMeButton.addEventListener("click", clickBtn, false);

    //    if(clickMeButton)
    //    {
    //        console.log(clickMeButton);
    //    }
       let buttons = document.getElementsByTagName("button");

       if (buttons)
       {
           for (const button of buttons) {
               console.log(button);
           }
           //console.log(buttons);
       }

       let buttonsQuery = document.querySelectorAll("button");
       
       if (buttonsQuery)
       {
           for (let index = 0; index < buttonsQuery.length; index++) {
               const element = buttonsQuery[index];
               console.log(buttonsQuery[index]);
               
           }
       }

       let helloWorld = document.getElementsByTagName("h1")[0].textContent;
       console.log(helloWorld);
       let mainInnerHTML = document.getElementsByTagName("main")[0].innerHTML;
       console.log(mainInnerHTML);
       

    //    if(buttonsQuery)
    //    {
    //        buttonsQuery.forEach(butt => {
    //            console.log(butt);
    //        });
    //    }

    //    let clickMeButtons = document.getElementsByName("myBtn");
    //    if(clickMeButtons)
    //    {
    //        console.log(clickMeButtons);
    //    }

    //    let documentlocation = document.location;
    //    let documentURL = document.URL;
    //    let documentreferrer = document.referrer;
    //    console.log(documentlocation);
    //    console.log(documentURL);
    //    console.log(documentreferrer);
    }
    


    window.addEventListener("load", Start);
})();

function clickBtn(){
    console.log("Stop Clicking Me");
}