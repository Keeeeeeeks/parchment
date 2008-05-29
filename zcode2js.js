function _onFileUpload() {
  var data = $("#file-upload").get(0).files[0].getAsBinary();
  var storyBytes = [];
  for (var i = 0; i < data.length; i++)
    storyBytes.push(String.charCodeAt(data[i]));
  var storyString = ("data:text/javascript,processBase64Zcode('" +
                     encode_base64(storyBytes) +
                     "');");
  $("#js-file-download").attr("href", storyString);
  $("#post-file-upload").fadeIn();
}

function _onUrlEntry() {
  if (this.value) {
    $("#post-url-entry").fadeIn();
    var lastSlash = window.location.href.lastIndexOf("/");
    var baseUrl = window.location.href.slice(0, lastSlash);
    var finalUrl = baseUrl + "/parchment.html?story=" + escape(this.value);
    $("#play-url").attr("href", finalUrl);
    $("#play-url").text(finalUrl);
  } else {
    $("#post-url-entry").fadeOut();
  }
}

function _onStartup() {
  $("#file-upload").attr("value", "");
  $("#url-entry").attr("value", "");
  $("#file-upload").change(_onFileUpload);
  $("#url-entry").keyup(_onUrlEntry);
}

$(document).ready(_onStartup);
