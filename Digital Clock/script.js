  function clock(){

  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let second  = document.getElementById('second');
  let period = document.getElementById('period');
   
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let ampm = (h >= 12) ? "PM" : "AM";

    if(h > 12){
      h = h - 12;
    }

  if(true){

   h = (h < 10) ? "0" + h : h;
   m = (m < 10) ? "0" + m : m;
   s = (s < 10) ? "0" + s : s;

  }

  hours.innerHTML = h;
  minutes.innerHTML = m;
  second.innerHTML = s;
  period.innerHTML = ampm;


};

                                                  /* For updation per second */

setInterval(clock,1000);