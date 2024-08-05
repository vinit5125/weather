var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city =  document.querySelector('#cityoutput')
var descrip =  document.querySelector('#description')
var temp =  document.querySelector('#temp')
var temp1 =  document.querySelector('#temp2')
var sea1 =  document.querySelector('#sea11')
var sea2 =  document.querySelector('#sea12')
var wind = document.querySelector('#wind')
apik="b294555786f38fa22b0504f512ca8881"

function convertion(val){
    return(val-273).toFixed(2)
}

btn.addEventListener('click',()=>{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik).then(res=> res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var tempeture = data['main']['temp']
        var ps = data['main']['pressure']
        var sea01 = data['main']['sea_level']
        var sea02 = data['main']['humidity']
        var wndspd = data['wind']['speed']
        city.innerHTML=`Weather of <span>${nameval}</span>`
        temp.innerHTML=`Temperature: <span>${convertion(tempeture)} C</span>`
        temp1.innerHTML=`Pressure: <span>${convertion(sea01)} C</span>`
        sea1.innerHTML=`Sea level: <span>${convertion(sea02)} C</span>`
        sea2.innerHTML=`humidity: <span>${convertion(ps)} C</span>`
        description.innerHTML=`Sky Conditions :<span>${descrip}<span>`
        wind.innerHTML=`Wind Speed: <span>${wndspd}km/h<span>`
    }
    )
    .catch(err => alert('you entered wrong city name'))
})