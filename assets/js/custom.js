$(document).ready(function () {
  $("#submitInputs").attr("disabled", true);
  $(
    '#signUpForm input[type="text"],[type="email"],[type="tel"],[type="password"]'
  ).blur(function () {
    if ($.trim($(this).val()) === "") {
      $(this).addClass("inputError");
    } else {
      $(this).removeClass("inputError");
    }
  });

  // Merchant info next button

  $("#merchantToBusiness").click(function () {
    if ($.trim($("#Name").val()) === "") {
      $("#Name").addClass("inputError");
    } else if ($.trim($("#Nid").val()) === "") {
      $("#Nid").addClass("inputError");
    } else if (
      $.trim($("#Email").val()) === "" ||
      !validateEmail($.trim($("#Email").val()))
    ) {
      $("#Email").addClass("inputError");
    } else if (
      $.trim($("#Mobile").val()) === "" ||
      $.trim($("#Mobile").val()).length < 11
    ) {
      $("#Mobile").addClass("inputError");
    } else if ($.trim($("#Pass").val()) === "") {
      $("#Pass").addClass("inputError");
    } else if ($.trim($("#PassConfirm").val()) === "") {
      $("#PassConfirm").addClass("inputError");
    } else if (
      !($.trim($("#Pass").val()) === $.trim($("#PassConfirm").val()))
    ) {
      $("#Pass").addClass("inputError");
      $("#PassConfirm").addClass("inputError");
    } else {
      $("#Pass").removeClass("inputError");
      $("#PassConfirm").removeClass("inputError");
      $("#dot2").css("background-color", "#02a69c");
      $("#title2").css("color", "#000");
      $("#marchent-info").hide();
      $("#business-info").show();
    }
  });

  // Business info next button

  $("#businessToContact").click(function () {
    if ($.trim($("#businessName").val()) === "") {
      $("#businessName").addClass("inputError");
    } else if ($.trim($("#businessType").val()) === "") {
      $("#businessType").addClass("inputError");
    } else if ($.trim($("#OfficialAddress").val()) === "") {
      $("#OfficialAddress").addClass("inputError");
    } else if ($.trim($("#PickUpAddress").val()) === "") {
      $("#PickUpAddress").addClass("inputError");
    } else {
      $("#dot3").css("background-color", "#02a69c");
      $("#title3").css("color", "#000");
      $("#business-info").hide();
      $("#contact-info").show();
    }
  });

  // Business info Back button

  $("#businessToMerchantBack").click(function () {
    $("#dot2").css("background-color", "#f3f3f3");
    $("#title2").css("color", "#f3f3f3");
    $("#business-info").hide();
    $("#marchent-info").show();
  });
  // contact info Back button

  $("#contactToBusinessBack").click(function () {
    $("#dot3").css("background-color", "#f3f3f3");
    $("#title3").css("color", "#f3f3f3");
    $("#contact-info").hide();
    $("#business-info").show();
  });

  $("input[name*='check-me']").click(function () {
    if ($("#submitInputs").is(":disabled")) {
      $("#submitInputs").attr("disabled", false);
    } else {
      $("#submitInputs").attr("disabled", true);
    }
  });

  // contact info Finish button

  $("#submitInputs").click(function (event) {
    event.preventDefault();

    if ($.trim($("#contactName").val()) === "") {
      $("#contactName").addClass("inputError");
    } else if (
      $.trim($("#contactMobile").val()) === "" ||
      $.trim($("#contactMobile").val()).length < 11
    ) {
      $("#contactMobile").addClass("inputError");
    } else if (
      $.trim($("#contactEmail").val()) === "" ||
      !validateEmail($.trim($("#contactEmail").val()))
    ) {
      $("#contactEmail").addClass("inputError");
    } else {
      $(this).unbind(event);
    }
  });
});

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

$(document).ready(function () {
  // set an element
  var now = dayjs();

  var time = dayjs(now).format("HH: mm").toString();
  var date = dayjs(now).format("dddd, MMM DD, YYYY").toString();

  $("#timeContainer").append("<span>" + time + "</span>");
  $("#dateContainer").append("<span>" + date + "</span>");

  // set a variable
});

// $("#submitInputs").click(function () {
//   alert($("#merchantName").val());
// });

/* bank-bkash-switch */

/* function paymentChange() {
  var select = document.getElementById("payment-method").value;
  if (select == "bkash") {
    $(".bkash").show();
    $(".bank").hide();
  }
  if (select == "bank") {
    $(".bkash").hide();
    $(".bank").show();
  }
} */
