$(function () {
  $("#btnapple").click(function (e) {
    $("#btnapple i").toggleClass("fa-apple");
    $("#btnapple i").toggleClass("fa-heart");
  });
  $("#btnsubmit").click(function (e) {
    $("#btnsubmit i").toggleClass("fa-apple").toggleClass("fa-spinner fa-spin");
  });
  $("#btnsubmit2").click(function (e) {
    $("#btnsubmit2 i")
      .toggleClass("fa-apple")
      .toggleClass("fa-spinner fa-spin");
  });
  $("#btngetjoke").click(function (e) {
    $("#joke_content").empty();

    $("#btngetjoke i")
      .toggleClass("fa-download")
      .toggleClass("fa-spinner fa-spin");

    var url = "https://sv443.net/jokeapi/v2/joke/Programming";

    $.get(url, function (joke) {
      if (joke.type == "single") {
        $("#joke_content").text(joke.joke);
      } else {
        $ul = $("#joke_content").append("<ul>");
        $ul
          .append($("<li>", { text: joke.setup }))
          .append($("<li>", { text: joke.delivery }));
      }
      $("#btngetjoke i")
        .toggleClass("fa-download")
        .toggleClass("fa-spinner fa-spin");
    });
  });

  /**
   * fungsi ini membuat semua element html input akan menjadi input number
   * sebaiknya selector adalah class atau id.
   * eg: $(".inputnumber")
   * untuk element seperti ini:
   *  <input type="text" id="bmi-weight" class="form-control inputnumber" 
   *    placeholder="Berat badan saya" aria-label="Nama Email">
   */
  $("input").number(true, 2, ",", ".");
});



/**
 * nama function harus berupa kata kerja
 * bmiConverter adalah kata benda
 * nama fungsi yang disarankan: calculateBMI() atau analyzeBMI()
 */
function bmiConverter() {
  var berat = Number($("#bmi-weight").val()); //kg
  var tinggi = Number($("#bmi-height").val()); //cm
  var tinggi2 = tinggi / 100; //merubah satuan tinggi dari cm ke m

  var bmi = berat / Math.pow(tinggi2, 2);
  var bmi2 = bmi.toFixed(2).toLocaleString("ID"); //membatasi bilangan dibelakang koma menjadi 2 digit

  var kondisi =
    `berat badan anda adalah ${berat} , ` +
    `dan nilai bmi anda adalah ${bmi2} . Dengan nilai bmi tersebut, berat badan anda termasuk `;
  if (bmi2 < 18.5) {
    kondisi += `dibawah normal`;
  } else if (bmi2 > 18.5 && bmi2 < 25) {
    kondisi += ` normal`;
  } else if (bmi2 >= 25 && bmi2 < 30) {
    kondisi += `overweight`;
  } else if (bmi2 >= 30 && bmi2 < 35) {
    kondisi += `obesitas kelas 1`;
  } else if (bmi2 >= 35 && bmi2 < 40) {
    kondisi += `obesitas kelas 2`;
  } else if (bmi2 >= 40) {
    kondisi += `obesitas kelas 3`;
  }
  $(".result").html(kondisi);
}
$("#bmi-proccess").click(bmiConverter);
