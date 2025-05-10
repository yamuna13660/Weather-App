const apikey="f15321844ab2f36b607267ae86c47cfc";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const icon=document.querySelector(".weather-icon");
        const search=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        async function checkweather(city)
        {
            const response =await fetch(apiurl+  city +`&appid=${apikey}`);
            if(response.status==404)
        {
            document.querySelector(".error").style.display="block";
            document.querySelector(".card").style.height="150px";
            document.querySelector(".weather").style.display="none";
        }else{
            var data=await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
        if(data.weather[0].main=="Clouds")
        {
            icon.src="clouds.png";
        }else if(data.weather[0].main=="Clear")
        {
            icon.src="clear.png";
        }else if(data.weather[0].main=="Rain")
        {
            icon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle")
        {
            icon.src="drizzle.png";
        }else if(data.weather[0].main=="Mist")
        {
            icon.src="mist.png";
        }
        document.querySelector(".card").style.height="380px";
        document.querySelector(".weather").style.display="block";
        
        document.querySelector(".error").style.display="none";
        }
    }
        searchbtn.addEventListener("click",()=>{
            checkweather(search.value);
        })