/*
$(function () {


  $('[data-toggle="tooltip"]').tooltip();
});

$.urlParam = function (name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  }
  return decodeURI(results[1]) || 0;
};

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};
*/
// SUBJECT
$("#subject").change(function () {
  if ($("#subject").val() == "quote") {
    $("#device-group").removeClass("invisible");
    $("#equipment").removeClass("invisible");
    $("#device").attr("required", true);
    $("#note").removeAttr("required");
    $("#note-group label").text("Sonstige Anmerkungen");
    $("#company").attr("required", true);
    $("#company-group label").text("Firma *");
    // Adresse
    $("#street").attr("required", true);
    $("#street-group label").text("Straße *");
    $("#housenumber").attr("required", true);
    $("#housenumber-group label").text("Hausnummer *");
    $("#zipcode").attr("required", true);
    $("#zipcode-group label").text("Postleitzahl *");
    $("#city").attr("required", true);
    $("#city-group label").text("Ort *");
    // Anzahl
    $("#amount-group").removeClass("invisible");
  } else if ($("#subject").val() == "callback") {
    $("#amount-group").addClass("invisible");
    $("#device-group").addClass("invisible");
    $("#equipment").addClass("invisible");
    $("#device").removeAttr("required");
    $("#note-group label").text("Ihre Nachricht");
    $("#note").removeAttr("required");
    $("#company").attr("required", true);
    $("#company-group label").text("Firma *");
    // Adresse
    $("#street").removeAttr("required", true);
    $("#street-group label").text("Straße");
    $("#housenumber").removeAttr("required", true);
    $("#housenumber-group label").text("Hausnummer");
    $("#zipcode").removeAttr("required", true);
    $("#zipcode-group label").text("Postleitzahl");
    $("#city").removeAttr("required", true);
    $("#city-group label").text("Ort");
  } else if ($("#subject").val() == "productinfo") {
    $("#amount-group").addClass("invisible");
    $("#device-group").removeClass("invisible");
    $("#equipment").addClass("invisible");
    $("#device").attr("required", true);
    $("#note-group label").text("Ihre Fragen *");
    $("#note").attr("required", true);
    $("#company").removeAttr("required");
    $("#company-group label").text("Firma");
    $("#street").removeAttr("required", true);
    $("#street-group label").text("Straße");
    $("#housenumber").removeAttr("required", true);
    $("#housenumber-group label").text("Hausnummer");
    $("#zipcode").removeAttr("required", true);
    $("#zipcode-group label").text("Postleitzahl");
    $("#city").removeAttr("required", true);
    $("#city-group label").text("Ort");
  } else if ($("#subject").val() == "haendler") {
    $("#amount-group").addClass("invisible");
    $("#device-group").addClass("invisible");
    $("#equipment").addClass("invisible");
    $("#device").removeAttr("required");
    $("#note").removeAttr("required");
    $("#note-group label").text("Noch Fragen?");
  } else if ($("#subject").val() == "other") {
    $("#amount-group").addClass("invisible");
    $("#device-group").addClass("invisible");
    $("#equipment").addClass("invisible");
    $("#device").removeAttr("required");
    $("#company").removeAttr("required");
    $("#company-group label").text("Firma");
    $("#note-group label").text("Ihre Nachricht *");
    $("#note").attr("required", true);
    $("#street").removeAttr("required", true);
    $("#street-group label").text("Straße");
    $("#housenumber").removeAttr("required", true);
    $("#housenumber-group label").text("Hausnummer");
    $("#zipcode").removeAttr("required", true);
    $("#zipcode-group label").text("Postleitzahl");
    $("#city").removeAttr("required", true);
    $("#city-group label").text("Ort");
  }
});

// EQUIPMENT
$("#device").change(function () {
  if ($("#subject").val() == "quote") {
    // Durabook R11 equipment
    if ($("#device").val() == "r11") {
      $("#equipment").html(
        "<h6>  Optionales Zubehör</h6><div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Sunlight Readable Display' id='sr'><label class='form-check-label' for='sr'>Im Sonnenlicht lesbarer Display</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' id='i7' value='Intel Core i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='16GB RAM' id='ram16'><label class='form-check-label' for='ram16'>Mehr Arbeitsspeicher (16GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='256GB SSD' id='ssd256'><label class='form-check-label' for='ssd256'>Mehr Speicherplatz (256GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Viel Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='RJ45 Port' id='rj45'><label class='form-check-label' for='rj45'>Lan Anschluss (RJ45)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Long Life Battery' id='llbattery'><label class='form-check-label' for='llbattery'>Größerer Akku (16 Stunden Laufzeit)</label></div>"
      );
    }
    // Durabook R11L equipment
    else if ($("#device").val() == "r11l") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
<div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Sunlight Readable Display' id='sr'><label class='form-check-label' for='sr'>Im Sonnenlicht lesbarer Display</label></div>\
<div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
<div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='RJ45 Port' id='rj45'><label class='form-check-label' for='rj45'>Lan Anschluss (RJ45)</label></div>\
<div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Long Life Battery' id='llbattery'><label class='form-check-label' for='llbattery'>Größerer Akku (16 Stunden Laufzeit)</label></div>"
      );
    }
    // Durabook U11I equipment
    else if ($("#device").val() == "u11i") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Sunlight Readable Display' id='sr'><label class='form-check-label' for='sr'>Im Sonnenlicht lesbarer Display</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Intel Core i7' id='i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='16GB RAM' id='ram16'><label class='form-check-label' for='ram16'>Mehr Arbeitsspeicher (16GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='256GB SSD' id='ssd256'><label class='form-check-label' for='ssd256'>Mehr Speicherplatz (256GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Viel Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='1TB SSD' id='ssd1000'><label class='form-check-label' for='ssd1000'>Sehr viel Speicherplatz (1TB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='RS232 Serial Port' id='rs232'><label class='form-check-label' for='rs232'>Serielle Schnittstelle (RS232)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Long Life Battery' id='llbattery'><label class='form-check-label' for='llbattery'>Größerer Akku (17 Stunden Laufzeit)</label></div>"
      );
    }
    // Durabook R8 equipment
    else if ($("#device").val() == "r8") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Intel Core i7' id='i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Intel Core i7 + 16GB RAM' id='i716gb'><label class='form-check-label' for='i716gb'>Schnellerer Prozessor (Intel® Core™ i7) + 16GB Arbeitsspeicher</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='256GB SSD' id='ssd256'><label class='form-check-label' for='ssd256'>Mehr Speicherplatz (256GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Viel Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='1TB SSD' id='ssd1000'><label class='form-check-label' for='ssd1000'>Sehr viel Speicherplatz (1TB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='RS232 Serial Port' id='rs232'><label class='form-check-label' for='rs232'>Serielle Schnittstelle (RS232)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Long Life Battery' id='llbattery'><label class='form-check-label' for='llbattery'>Größerer Akku (17 Stunden Laufzeit)</label></div>"
      );
    }
    // Durabook S15AB equipment
    else if ($("#device").val() == "s15") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Sunlight Readable Display' id='srd'><label class='form-check-label' for='srd'>Sonnenlicht lesbares Display</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' value='Intel Core i7' name='checkArr[]' id='i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='16GB RAM' id='ram16'><label class='form-check-label' for='ram16'>Mehr Arbeitsspeicher (16GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='32GB RAM' id='ram32'><label class='form-check-label' for='ram32'>Viel Arbeitsspeicher (32GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Mehr Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='1TB SSD' id='ssd1000'><label class='form-check-label' for='ssd1000'>Viel Speicherplatz (1TB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='DVD Drive' id='dvd'><label class='form-check-label' for='dvd'>DVD Laufwerk</label></div>"
      );
    }
    // Durabook S14I equipment
    else if ($("#device").val() == "s14i") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Sunlight Readable Display' id='sr'><label class='form-check-label' for='sr'>Im Sonnenlicht lesbarer Display</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Intel Core i7' id='i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='16GB RAM' id='ram16'><label class='form-check-label' for='ram16'>Mehr Arbeitsspeicher (16GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='32GB RAM' id='ram32'><label class='form-check-label' for='ram32'>Viel Arbeitsspeicher (32GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Mehr Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='1TB SSD' id='ssd1000'><label class='form-check-label' for='ssd1000'>Viel Speicherplatz (1TB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='DVD Drive' id='dvd'><label class='form-check-label' for='dvd'>DVD Laufwerk</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='2. Battery' id='2battery'><label class='form-check-label' for='2battery'>2. Akku (24 Stunden Laufzeit)</label></div>"
      );
    }
    // Durabook Z14I equipment
    else if ($("#device").val() == "z14i") {
      $("#equipment").html(
        "<h6>Optionales Zubehör</h6>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='Intel Core i7' id='i7'><label class='form-check-label' for='i7'>Schnellerer Prozessor (Intel® Core™ i7)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='LTE/GPS' id='lte'><label class='form-check-label' for='lte'>LTE/GPS (mobiles Internet)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='16GB RAM' id='ram16'><label class='form-check-label' for='ram16'>Mehr Arbeitsspeicher (16GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='32GB RAM' id='ram32'><label class='form-check-label' for='ram32'>Viel Arbeitsspeicher (32GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='512GB SSD' id='ssd512'><label class='form-check-label' for='ssd512'>Mehr Speicherplatz (512GB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='1TB SSD' id='ssd1000'><label class='form-check-label' for='ssd1000'>Viel Speicherplatz (1TB)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='NVIDIA GTX 1050' id='gtx1050'><label class='form-check-label' for='gtx1050'>Grafikkarte (NVIDIA GTX 1050)</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='DVD Drive' id='dvd'><label class='form-check-label' for='dvd'>DVD Laufwerk</label></div>\
        <div class='form-check pl-5'><input class='form-check-input mr-3' type='checkbox' name='checkArr[]' value='2. Battery' id='2battery'><label class='form-check-label' for='2battery'>2. Akku (25 Stunden Laufzeit)</label></div>"
      );
    }
  }
});

$("#country").change(function () {
  if ($("#country").val() != "germany") {
    $("#vatidgroup").html(
      "<div class='form-group'><label for='vatid'>VAT-ID *</label><input id='vatid' type='text' class='form-control' name='vatid' required minlength='10' maxlength='14'></div>"
    );
  } else if ($("#country").val() == "germany") {
    $("#vatidgroup").html("");
  }
});

let searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("device")) {
  let device = searchParams.get("device");
  $("#device").val(device).trigger("change");
} else if (searchParams.has("subject")) {
  let subject = searchParams.get("subject");
  if (subject == "haendler") {
    $("#subject").val("haendler").trigger("change");
  }
}

// Newsletter Branch Select
$("#newsletter").change(function () {
  if ($(this).is(":checked")) {
    $("#branch").removeClass("invisible");
  } else {
    $("#branch").addClass("invisible");
  }
});

window.onload = function () {
  document.getElementById("email").style.display = "invisible";
};
