$("input").number(true,2,",",".");

function celciusToFahrenheit(){
    var celciusDegree1 = Number($("#celcius-fahrenheit").val());
    var result =celciusDegree1*9/5+32;
    $(".C-F").html(celciusDegree1.toLocaleString('ID')+" Celcius = "+result.toLocaleString('ID')+" F" ); 
}
function celciusToKelvin() {
    var celciusDegree2 = Number($("#celcius-kelvin").val());
var result =celciusDegree2+273.15;
$(".C-K").html(celciusDegree2.toLocaleString('ID')+" Celcius = "+result.toLocaleString('ID')+" K" );
}
//versi 1
$(".btn").click(celciusToFahrenheit);
$("#celcius-fahrenheit").keyup(function(e){
    if (e.keyCode===13) {
celciusToFahrenheit()
    }
});
//versi 2
$("#celcius-kelvin").keyup(celciusToKelvin)


//versi 3
$("#fahrenheit-celcius").keyup(function(){
var fahrenheitDegree1 = Number($("#fahrenheit-celcius").val());
var result =(fahrenheitDegree1-32)*5/9;
$(".F-C").html(fahrenheitDegree1.toLocaleString('ID')+" Fahrenheit = "+result.toLocaleString('ID')+" C" );
})
$("#fahrenheit-kelvin").keyup(function(){
var fahrenheitDegree2 = Number($("#fahrenheit-kelvin").val());
var result =(fahrenheitDegree2-32)*5/9+ 273.15  ;
$(".F-K").html(fahrenheitDegree2.toLocaleString('ID')+" Fahrenheit = "+result.toLocaleString('ID')+" K" );
})

$("#kelvin-celcius").keyup(function(){
var kelvinDegree1 = Number($("#kelvin-celcius").val());
var result =kelvinDegree1-273.15;
$(".K-C").html(kelvinDegree1.toLocaleString('ID')+" Kelvin = "+result.toLocaleString('ID')+" C" );
})
$("#kelvin-fahrenheit").keyup(function(){
var kelvinDegree2 = Number($("#kelvin-fahrenheit").val());
var result =(kelvinDegree2-273.15)*9/5+32  ;
$(".K-F").html(kelvinDegree2.toLocaleString('ID')+" Kelvin = "+result.toLocaleString('ID')+" F" );
})