
let countriesData = [
    {
        Name: "India",
        offset: "+05:30" 
    },
    {
        Name: "Oregon",
        offset: "-08:00" 
    },
    {
        Name: "Perth",
        offset: "+08:00" 
    },
    {
        Name: "Sweden",
        offset: "+01:00" 
    }  
]

function showTimes(GMTtime){

    
    if(GMTtime)
    {
        console.log("stop: " + GMTtime.toString());
        countriesData.map((country)=> {
    
            setCountrieTime(GMTtime, country.Name, country.offset);
        })
    }
    else{
        GMTtime= moment().utc()
        countriesData.map((country)=> {
            createClock(country.Name, country.offset);
            setCountrieTime(GMTtime, country.Name, country.offset);
        })
    }
}

function getTime(changes, place) {
    let time = document.getElementById(`${place}-time`).value;
    let dat = document.getElementById(`${place}-date`).value;
    let ans = moment(dat + " " + time + changes).utc()
    showTimes(ans); 
}
  
//initialize the clock in a self-invoking function
function clock(place, time){ 
    var hour = document.getElementById(`${place}-hour`);
    var min = document.getElementById(`${place}-min`)
   
    draw();
    
    //position the hands
    function draw(){
        h = (time.hours()*30),//hours
        console.log(h);
        m = (time.minutes()*6),//minutes
        hour.style.webkitTransform = "rotate(" + h + "deg)";
        min.style.webkitTransform = "rotate(" + m + "deg)";
    } 
};

function setCountrieTime(GMTtime, countryName, offset){
    let countryTime = moment.utc(GMTtime).utcOffset(offset)
    console.log(`${countryName} time: ` + countryTime.toString());
    hr = countryTime.hours();
    hr = hr<10 ? "0"+hr : hr;
    min = countryTime.minutes();
    min = min<10 ? "0"+min : min;
    console.log(document.getElementById(`${countryName}-time`));
    document.getElementById(`${countryName}-time`).value = `${hr}:${min}`;
    let year = countryTime.year(),
    month = countryTime.month() + 1,
    date = countryTime.date();
    month = month<10 ? "0"+month : month;
    document.getElementById(`${countryName}-date`).value = `${year}-${month}-${date}`;
    clock(countryName, countryTime);
}

function createClock(country, offset){
    clockContainer = document.getElementById("myClocks");
    let countryDiv = document .createElement('div');
    countryDiv.classList.add("country");
    
    countryDiv.innerHTML += 
    `<H1>${country}</H1>
    <div class="analog">
        <div class="icon-large icon-clock">
            <div class="clock">
                <ol>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ol>
            <div id="${country}-hour" class="hour"></div>
            <div id="${country}-min" class="min"></div>
            </div>
        </div>
    </div>
    <div class="digital">
        <div class="setTime">
                <label for="time">${country} Time</label>
                <input type="time" id = "${country}-time" >
                <label for="date">${country} Date</label>
                <input type="date" id = "${country}-date" >
                <div class="btn-container">
                    <button class="setbtn" onclick="getTime('${offset}', '${country}')">SET TIME</button>
                </div>
        </div>
    </div>`;

    

    clockContainer.appendChild(countryDiv)

    console.log(clockContainer);

}


function addClock(){
    let countryName = document.getElementById("addClockName").value
    let countryOffset = document.getElementById("addClockOffset").value

    let newClock = {
        Name: countryName,
        offset: countryOffset
    }

    countriesData.push(newClock)
    createClock(countryName, countryOffset)
    GMTtime= moment().utc();
    console.log(countryOffset);
    setCountrieTime(GMTtime, countryName, countryOffset);
}