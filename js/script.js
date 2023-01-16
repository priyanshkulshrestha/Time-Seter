function showTimes(GMTtime){

    if(GMTtime)
    {
        console.log("now stop: " + GMTtime.toString());
    }
    else{
        GMTtime= moment().utc()
    }
    
    // INDIAN
    let indianTime = moment.utc(GMTtime).utcOffset('+05:30')
    console.log("indian time: " + indianTime.toString());
    hr = indianTime.hours();
    meredian = hr>=12 ? "PM" : "AM";
    hr = (hr > 12 ? hr%12 : hr);
    hr = hr<10 ? "0"+hr : hr;

    min = indianTime.minutes();
    min = min<10 ? "0"+min : min;
    document.getElementById("india-time").value = `${hr}:${min} ${meredian}`;
    document.getElementById("india-date").value = indianTime.format('MMM D, YYYY');
    clock("india", indianTime)


    // OREGON
    let oregonTime = moment.utc(GMTtime).utcOffset('-08:00');
    console.log("Oregon time: " + oregonTime.toString());
    hr = oregonTime.hours();
    meredian = hr>=12 ? "PM" : "AM";
    hr = (hr > 12 ? hr%12 : hr);
    hr = hr<10 ? "0"+hr : hr;
    min = oregonTime.minutes();
    min = min<10 ? "0"+min : min;
    document.getElementById("Oregon-time").value = `${hr}:${min} ${meredian}`;
    document.getElementById("Oregon-date").value = oregonTime.format('MMM D, YYYY');
    clock("Oregon", oregonTime)

    // PERTH
    let perthTime = moment.utc(GMTtime).utcOffset('+08:00')
    console.log("Perth time: " + perthTime.toString());
    hr = perthTime.hours();
    meredian = hr>=12 ? "PM" : "AM";
    hr = (hr > 12 ? hr%12 : hr);
    hr = hr<10 ? "0"+hr : hr;
    min = perthTime.minutes();
    min = min<10 ? "0"+min : min;
    document.getElementById("Perth-time").value = `${hr}:${min} ${meredian}`;
    document.getElementById("Perth-date").value = perthTime.format('MMM D, YYYY');
    clock("Perth", perthTime)

    // SWEDEN
    let swedenTime =  moment.utc(GMTtime).utcOffset('+01:00')
    console.log("Sweden time: " + swedenTime.toString());
    hr = swedenTime.hours();
    meredian = hr>=12 ? "PM" : "AM";
    hr = (hr > 12 ? hr%12 : hr);
    hr = hr<10 ? "0"+hr : hr;
    min = swedenTime.minutes();
    min = min<10 ? "0"+min : min;
    document.getElementById("Sweden-time").value = `${hr}:${min} ${meredian}`;
    document.getElementById("Sweden-date").value = swedenTime.format('MMM D, YYYY');
    clock("Sweden", swedenTime)
}


function getTime(changes, place, tzone = 'iso') {
    console.log(changes);
    let time = document.getElementById(`${place}-time`).value;
    let dat = document.getElementById(`${place}-date`).value;

    console.log(time + " " + dat);

    let ans = moment(dat + " " + time + changes).utc()
    console.log("date & time: ",ans);

    showTimes(ans);
}

window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  //initialize the clock in a self-invoking function
  function clock(place, time){ 
      var hour = document.getElementById(`${place}-hour`),
          min = document.getElementById(`${place}-min`),
          sec = document.getElementById(`${place}-sec`);
          console.log(hour, min, sec);
      //set up a loop
      // (function loop(){
          // requestAnimFrame(loop);
          draw();
      // })();
      //position the hands
      function draw(){
        //   var nowDate = new Date();//now
          console.log("dfhakjsf "+time.toString());
          
          var now = time._d
              then = new Date(),//midnight
              diffInMil = (now.getTime() - then.getTime()),// difference in milliseconds
              h = (diffInMil/(1000*60*60)),//hours
              m = (h*60),//minutes
              s = (m*60);//seconds
              console.log(now);
          //rotate the hands accordingly
          sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
          hour.style.webkitTransform = "rotate(" + (h * 30 + (h / 2) + 10) + "deg)";
          min.style.webkitTransform = "rotate(" + (m * 6 + 109) + "deg)";
      } 
  };