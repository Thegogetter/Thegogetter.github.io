

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9976df9127msh603f7fcec5a3646p164d8bjsnb34363082945',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};




const getWeather=(city)=>{
	cityName.innerHTML=city;
fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,options)
.then(response=>response.json())
.then(response=> {
    
    console.log(response)
    cloud_pct.innerHTML=response.cloud_pct;
	temp.innerHTML=response.temp;
	feels_like.innerHTML=response.feels_like;
	windspeed2.innerHTML=response.wind_speed;
	humidity.innerHTML=response.humidity;
	min_temp.innerHTML=response.min_temp;
	max_temp.innerHTML=response.max_temp;
	wind_speed.innerHTML=response.wind_speed;
	wind_degrees.innerHTML=response.wind_degrees;
	sunrise.innerHTML=response.sunrise;
	sunset.innerHTML=response.sunset;
	humidity2.innerHTML=response.humidity;
	

	if(city=='Shangai'){
		temps.innerHTML=response.temp;
		feels.innerHTML=response.feels_like;
		windspeeds.innerHTML=response.wind_speed;
		hums.innerHTML=response.humidity;
		mintemps.innerHTML=response.min_temp;
		maxtemps.innerHTML=response.max_temp;
		windspeeds.innerHTML=response.wind_speed;
		winddegs.innerHTML=response.wind_degrees;
		sunrises.innerHTML=response.sunrise;
		sunsets.innerHTML=response.sunset;
		cpcts.innerHTML=response.cloud_pct;
	}

	if(city=='Boston'){
		tempb.innerHTML=response.temp;
		feelb.innerHTML=response.feels_like;
		windspeedb.innerHTML=response.wind_speed;
		humb.innerHTML=response.humidity;
		mintempb.innerHTML=response.min_temp;
		maxtempb.innerHTML=response.max_temp;
		windspeedb.innerHTML=response.wind_speed;
		winddegb.innerHTML=response.wind_degrees;
		sunriseb.innerHTML=response.sunrise;
		sunsetb.innerHTML=response.sunset;
		cpctb.innerHTML=response.cloud_pct;
	}
	if(city=='Mumbai'){
		tempm.innerHTML=response.temp;
		feelm.innerHTML=response.feels_like;
		windspeedm.innerHTML=response.wind_speed;
		humm.innerHTML=response.humidity;
		mintempm.innerHTML=response.min_temp;
		maxtempm.innerHTML=response.max_temp;
		windspeedm.innerHTML=response.wind_speed;
		winddegm.innerHTML=response.wind_degrees;
		sunrisem.innerHTML=response.sunrise;
		sunsetm.innerHTML=response.sunset;
		cpctm.innerHTML=response.cloud_pct;
	}
	if(city=="Lucknow"){
		templ.innerHTML=response.temp;
		feell.innerHTML=response.feels_like;
		windspeedl.innerHTML=response.wind_speed;
		huml.innerHTML=response.humidity;
		mintempl.innerHTML=response.min_temp;
		maxtempl.innerHTML=response.max_temp;
		windspeedl.innerHTML=response.wind_speed;
		winddegl.innerHTML=response.wind_degrees;
		sunrisel.innerHTML=response.sunrise;
		sunsetl.innerHTML=response.sunset;
		cpctl.innerHTML=response.cloud_pct;
	}

})
.catch(err=>console.error(err));
}

getWeather('Shangai');
getWeather('Boston');
getWeather('Lucknow');
getWeather('Mumbai');
submit.addEventListener("click",(e)=>{
  e.preventDefault(); 
 getWeather(city.value); 
})


getWeather("Delhi");
