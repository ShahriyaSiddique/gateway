$(document).ready(function () {
  $("#merchantToBusiness").click(function () {
    progress.style.animation = "kf-progress-50-p .5s linear forwards";
    bike.style.animation = "kf-bike-50-p .5s linear forwards";
    $("#marchent-info").hide();
    $("#business-info").show();
  });

  $("#businessToContact").click(function () {
    progress.style.animation = "kf-progress-100-p .5s linear forwards";
    bike.style.animation = "kf-bike-100-p .5s linear forwards";
    $("#business-info").hide();
    $("#contact-info").show();
  });

  $("#businessToMerchantBack").click(function () {
    progress.style.animation = "kf-progress-50-p-back .5s linear forwards";
    bike.style.animation = "kf-bike-50-p-back .5s linear forwards";
    $("#business-info").hide();
    $("#marchent-info").show();
  });

  $("#contactToBusinessBack").click(function () {
    progress.style.animation = "kf-progress-100-p-back .5s linear forwards";
    bike.style.animation = "kf-bike-100-p-back .5s linear forwards";
    $("#contact-info").hide();
    $("#business-info").show();
  });
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
