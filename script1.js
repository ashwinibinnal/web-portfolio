let settingsmenu = document.querySelector(".settings-menu");
let darkbtn = document.getElementById("dark-btn");

       function menuToggle(){
        settingsmenu.classList.toggle("hide");
       }
       
    

       darkbtn.onclick = function(){
        darkbtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");


        if(localStorage.getItem("theme")=="light"){
            localStorage.setItem("theme", "dark");
        }
        else{
            localStorage.setItem("theme", "light");
        }
       }

      if( localStorage.getItem("theme") == "light"){
        darkbtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
      }

        else if( localStorage.getItem("theme") == "dark"){
            darkbtn.classList.add("dark-btn-on");
            document.body.classList.add("dark-theme");
       }
       else{
        localStorage.setItem("theme", "light");
       }