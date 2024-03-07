let lis = document.querySelectorAll('li')

// check if LS has any color saved
if(window.localStorage.getItem('color')){
    //1) change req background
    document.body.style.backgroundColor= window.localStorage.getItem('color');
    //2) remove active class from all lis
    lis.forEach((li) => {
        li.classList.remove("active");
      });
    //3) add active to selected color
    let currentColor = `[data-color="${window.localStorage.getItem("color")}"]`
    document.querySelector(currentColor).classList.add('active')
}

// if not 
lis.forEach((li) => {
    li.addEventListener("click", (e) => {
      // console.log(e.currentTarget.dataset.color);
      // Remove Active Class From all Lis
      lis.forEach((li) => {
        li.classList.remove("active");
      });
      // Add Active Class To Current Element
      e.currentTarget.classList.add("active");
      // Add Current Color To Local Storage
      window.localStorage.setItem("color", e.currentTarget.dataset.color);
      // Change Div Background Color
      document.body.style.backgroundColor = e.currentTarget.dataset.color;
    });
  });