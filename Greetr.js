(function (global, $) {
  var Greetr = function (firstname, lastname, language) {
    return new Greetr.init(firstname, lastname, language);
  };
  Greetr.init = function (firstname, lastname, language) {
    var self = this;
    self.firstname = firstname || "";
    self.lastname = lastname || "";
    self.language = language || "en";
  };
})(window, jQuery);
