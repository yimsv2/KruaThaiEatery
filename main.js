
//-----function to load a banner 
function getData(){
  var base = "https://script.google.com/macros/s/AKfycbz3rYnOEI8xLkO7yKxuF8UK-E1xWONyDCq0KpBSKLbpRoP_eIasaPTJRIqURZFQLHZh/exec";
  fetch(base)
  .then(res=>res.json())
  .then( data => {
      if (data.length > 0) {
        bannerLinks = data;
        var bannerActive = bannerLinks.filter((banner)=>{
            return banner[2] == "Active"
        })
      document.getElementById("banner").setAttribute("src",bannerActive[0][1]);
      document.getElementById("callBanner").click();
      }
      else{
        console.error("No data retrieved")
      }
  })
  .catch(error => console.error(error))
  }
 
  //Function to show gallery pictures in modal
  let photos = document.querySelectorAll(".gallery-photo");
  photos.forEach((photo)=>{
     photo.addEventListener("click", modalPhoto);
  })
 
  function modalPhoto(e){
    let link = e.target.src;
    document.getElementById("callPhotoModal").click();
    document.getElementById("photoModal").setAttribute("src",link);
  }

  //Function to show Menu after clicking Hamburger icon
  document.getElementById("hamburger").addEventListener("click", showMenu);
  document.getElementById("menuclose").addEventListener("click", closeMenu);
  
  
  function showMenu(){
    document.getElementById("hamburger").style.display = "none";
    document.querySelector(".nav-links2").style.display ="flex";
    document.getElementById("menuclose").style.display = "flex";

    setTimeout(()=>{
    document.querySelector(".nav-links2").style.display ="none";
    document.getElementById("menuclose").style.display = "none";
    document.getElementById("hamburger").style.display = "flex";
    }, 5000)
  }
  function closeMenu(){
    document.querySelector(".nav-links2").style.display ="none";
    document.getElementById("menuclose").style.display = "none";
    document.getElementById("hamburger").style.display ="flex";
  }



  // Function to select food menu
    let buttons = document.querySelectorAll("input[type=button]");
    buttons.forEach((button)=>{
        button.addEventListener("click",showCategory)
    })
    function showCategory(e){
        let target = e.target.name;
        let allsections = document.querySelectorAll(".menu");
        target==""? clickBtnAll():"";
        target=="all"? showAll(): showTarget(target);

        function clickBtnAll(){
          document.getElementById("btnAll").click();
        }
        function showAll(){
            allsections.forEach((section)=>{
                section.style.display = "flex";
            })
        }
        function showTarget(target){
             allsections.forEach((section)=>{
                section.style.display = "none";
            })
            document.getElementById(target).style.display = "flex";
        }
    }