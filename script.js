

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
    //cloud_pct.innerHTML=response.cloud_pct;
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
	temp2.innerHTML=response.temp;

})
.catch(err=>console.error(err));
}

submit.addEventListener("click",(e)=>{
  e.preventDefault(); 
 getWeather(city.value); 
})


getWeather("Delhi");