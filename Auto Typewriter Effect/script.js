let Text =  document.querySelector(".second-text");

const TextLoad =  ()  =>{
  setTimeout(() =>{
    Text.textContent = "Freelancer";
  },  0);
  setTimeout(() =>{
    Text.textContent = "Web Developer";
  },  4000);
  setTimeout(() =>{
    Text.textContent = "Software Developer";
  }, 8000);
};
TextLoad();

setInterval(TextLoad, 12000);