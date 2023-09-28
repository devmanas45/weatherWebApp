//---------------------Selecting all the needed tags----------------------------------------------------

const loc=document.querySelector(".city");
const temperature=document.querySelector(".temperature");
const humidity=document.querySelector(".humidity");
const wind=document.querySelector(".wind");
const searchBox=document.querySelector(".search input");
const searchButton=document.querySelector(".search button"); 
const weatherIcon=document.querySelector(".weatherIcon");   
const weather=document.querySelector(".weather");
//------------------API FETCH--------------------------------------------------------------------------
const apiKey="9b51ff8862649b8fab3c5f06f02c249e";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//--------------Function added for fetching API from open weather and manipulate the data--------------

async function myWeather(city){
    const response=await fetch(apiUrl+ city +`&appid=${apiKey}`);
    if(response.status==404){
        
        document.querySelector(".error").style.display="block";
        
        weather.style.display="none"
    }
    else{
        let data=await response.json();
        console.log(data);
        loc.innerHTML=data.name;
        temperature.innerHTML=Math.round(data.main.temp)+" °c"  ;
        humidity.innerHTML=data.main.humidity+ " %";
        wind.innerHTML=data.wind.speed+" Km/hr";
        let icon=data.weather[0].main;   
        switch(icon){
            case 'Clear':
                weatherIcon.src="clear.png";
                break;
            case 'Clouds':
                weatherIcon.src="clouds.png";
                break;
            case 'Rain':
                weatherIcon.src="rain.png";
                break;
            case 'Drizzle':
                weatherIcon.src="drizzle.png";
                break;
            case 'Mist':
                weatherIcon.src="mist.png";
                break;
            default:
                weatherIcon.src="kam.png";
                break;
        }
        weather.style.display="block";  
        document.querySelector(".error").style.display="none";
    }
    
    

}
//---------------------Adding EventListener as click----------------------------------------------
searchButton.addEventListener("click",()=>{
    myWeather(searchBox.value);
})

