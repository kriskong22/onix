function openTabs(evt, tabsName) {
     var i, tabcontent, tablinks;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
       tablinks[i].classList.remove("active");
     }
     document.getElementById(tabsName).style.display = "block";
     document.getElementById(tabsName + "-tab").classList.add("active");
     
   }
   
   document.getElementById("Activity-tab").click();
   
   function sidebar_open() {
    document.getElementById("aside").style.display = "block";
  }
  
  function sidebar_close() {
    document.getElementById("aside").style.display = "none";
  }