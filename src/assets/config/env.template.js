(function(window) {
  window.env = window.env || {};

  // Environment variables

  // host address for backend
  window["env"]["apiUrl"] = "${API_URL}";
})(this);
