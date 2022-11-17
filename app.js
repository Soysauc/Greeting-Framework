var g = G$("Jeremy", "Rivera");
g.greet().setLang("es").greet(true).log();

$("#login").click(function () {
  var loginGreeter = G$("Jeremy", "Rivera");
  $("#logindiv").hide();
  loginGreeter.setLang($("#lang").val()).htmlGreeting("#greeting", true).log();
});
