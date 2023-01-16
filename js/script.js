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
    meredian = hr>=12 ? "pm" : "am";
    hr = (hr > 12 ? hr%12 : hr);
    indianTime.set('hour', hr);
    document.getElementById("Indiantime").innerText = `${hr}:${indianTime.minutes()} ${meredian}`;
    document.getElementById("Indiandate").innerText = indianTime.format('DD-MM-YYYY');

    // OREGON
    let oregonTime = moment.utc(GMTtime).utcOffset('-08:00');
    console.log("Oregon time: " + oregonTime.toString());
    hr = oregonTime.hours();
    meredian = hr>=12 ? "pm" : "am";
    hr = (hr > 12 ? hr%12 : hr);
    oregonTime.set('hour', hr);
    document.getElementById("Oregontime").innerText = `${hr}:${oregonTime.minutes()} ${meredian}`;
    document.getElementById("Oregondate").innerText = oregonTime.format('DD-MM-YYYY');

    // PERTH
    let perthTime = moment.utc(GMTtime).utcOffset('+08:00')
    console.log("Perth time: " + perthTime.toString());
    hr = perthTime.hours();
    meredian = hr>=12 ? "pm" : "am";
    hr = (hr > 12 ? hr%12 : hr);
    perthTime.set('hour', hr);
    document.getElementById("Perthtime").innerText = `${hr}:${perthTime.minutes()} ${meredian}`;
    document.getElementById("Perthdate").innerText = perthTime.format('DD-MM-YYYY');

    // SWEDEN
    let swedenTime =  moment.utc(GMTtime).utcOffset('+01:00')
    console.log("Sweden time: " + swedenTime.toString());
    hr = swedenTime.hours();
    meredian = hr>=12 ? "pm" : "am";
    hr = (hr > 12 ? hr%12 : hr);
    swedenTime.set('hour', hr);
    document.getElementById("Swedentime").innerText = `${hr}:${swedenTime.minutes()} ${meredian}`;
    document.getElementById("Swedendate").innerText = swedenTime.format('DD-MM-YYYY');

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
  (function clock(){ 
      var hour = document.getElementById("hour"),
          min = document.getElementById("min"),
          sec = document.getElementById("sec");
      //set up a loop
      (function loop(){
          requestAnimFrame(loop);
          draw();
      })();
      //position the hands
      function draw(){
          var now = new Date(),//now
              then = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0),//midnight
              diffInMil = (now.getTime() - then.getTime()),// difference in milliseconds
              h = (diffInMil/(1000*60*60)),//hours
              m = (h*60),//minutes
              s = (m*60);//seconds
          //rotate the hands accordingly
          sec.style.webkitTransform = "rotate(" + (s * 6) + "deg)";
          hour.style.webkitTransform = "rotate(" + (h * 30 + (h / 2)) + "deg)";
          min.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
      } 
  })();