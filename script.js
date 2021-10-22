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

  let number = document.querySelector('.number');
  let arrImg = document.querySelectorAll('.message4 img');
  let arrayElement = [];
  for (let i = 0; i < arrImg.length; i++) {
      arrayElement.push(arrImg[i]);
      arrImg[i].addEventListener('click', function(e) {
          number.innerHTML = arrayElement.indexOf(e.target);
      });
  }

  let openTasksNumber = document.getElementById("open_tasks_number");
  openTasksNumber.onclick = function () {
    let openTasksNumber = document.getElementById("open_tasks_number");
    if (Number(openTasksNumber.innerHTML) > 0) {
      if (confirm("Are you sure you want to change the number of tasks?")) {
        document.getElementById("completed_tasks_number");
        let completedTasksNumber = document.getElementById("completed_tasks_number");
        completedTasksNumber.innerHTML = Number(completedTasksNumber.innerHTML) + 1;
        openTasksNumber.innerHTML = Number(openTasksNumber.innerHTML) - 1;
      }
    }
    else{
      alert("Number less than 0")
    }
  };
  