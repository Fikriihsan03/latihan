$(function () {
    $("#btnapple").click(function (e) {
        $("#btnapple i").toggleClass("fa-apple")
        $("#btnapple i").toggleClass("fa-heart");
    })
    $("#btnsubmit").click(function (e) {
        $("#btnsubmit i").toggleClass("fa-apple").
            toggleClass("fa-spinner fa-spin");
    })
    $("#btnsubmit2").click(function (e) {
        $("#btnsubmit2 i").toggleClass("fa-apple").
            toggleClass("fa-spinner fa-spin");
    })
    $("#btngetjoke").click(function (e) {
        $("#joke_content").empty();

        $("#btngetjoke i").toggleClass("fa-download").
            toggleClass("fa-spinner fa-spin");

        var url = "https://sv443.net/jokeapi/v2/joke/Programming";

        $.get(url, function (joke) {
            if (joke.type == "single") {
                $("#joke_content").text(joke.joke);
            } else {
                $ul = $("#joke_content").append("<ul>");
                $ul.append($("<li>", { text: joke.setup }))
                    .append($("<li>", { text: joke.delivery }));
            }
            $("#btngetjoke i").toggleClass("fa-download").
                toggleClass("fa-spinner fa-spin");
        });
    })
})

$("input").number(true,2,",",".");
function bmiConverter (){
    var berat = Number($("#bmi-weight").val()); //kg
    var tinggi = Number($("#bmi-height").val()); //cm
    var tinggi2 = tinggi / 100;//merubah satuan tinggi dari cm ke m
    
    var bmi = berat / Math.pow(tinggi2,2);
    var bmi2 = bmi.toFixed(2);//membatasi bilangan dibelakang koma menjadi 2 digit
    
    if(bmi2 < 18.5){
        kondisi = `berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2} dan dengan nilai bmi yang tersebut, berat badan anda termasuk dibawah normal`
    }else if(bmi2 > 18.5 && bmi2 < 25){
        kondisi = `berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2}  dan dengan nilai bmi yang tersebut, berat badan anda termasuk normal`
    }else if(bmi2>=25 && bmi2<30 ) {
        kondisi = `berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2} dan dengan nilai bmi yang tersebut, berat badan anda termasuk overweight`
    }else if(bmi2 >= 30 && bmi2 <35){
        kondisi =`berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2} dan dengan nilai bmi yang tersebut, berat badan anda termasuk obesitas kelas 1`
    }else if(bmi2 >= 35 && bmi2 <40){
        kondisi =`berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2} dan dengan nilai bmi yang tersebut, berat badan anda termasuk obesitas kelas 2`
    }else if(bmi2 >= 40){
        kondisi =`berat badan anda adalah ${berat} , dan nilai bmi anda adalah ${bmi2} dan dengan nilai bmi yang tersebut, berat badan anda termasuk kelas 3`
    }
    $(".result").html(kondisi);
    $("input").val("");
};
$("#bmi-proccess").click(bmiConverter);

//--------------------ideal weight----------------------------------
function idealWeight(){
    let tinggi = Number($("#height").val());
    let gender = $('input:radio[name=gender]:checked').val();
    let rumus  = tinggi - 100
    let rumusCowok = rumus - (10/100 * rumus);
    let rumusCewek =rumus - (15/100 * rumus);   
   // console.log(gender);
    if(gender == "cowok"){
       //  alert("ini cowok")
       rekomendasi = `untuk tinggi badan laki-laki setinggi ${tinggi} cm ,berat badan ideal anda adalah ${rumusCowok}`
   }else if(gender == "cewek"){
       // alert("ini cewek")
       rekomendasi = `untuk tinggi badan perempuan setinggi ${tinggi} cm ,berat badan ideal anda adalah ${rumusCewek}`
   }
   $("#weight-result").html(rekomendasi);
}
$("#proccess").click(idealWeight);