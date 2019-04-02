
// make if condition involving verifying the existence of the gprivacy cookie. If it exists, don't show up the banner

$(document).ready(function(){

	if (getCookie("gprivacy") == "cookie not found") { // Then show the banner
	    setTimeout(function () {
	        $("#cookieConsent").fadeIn(200);
	     }, 1000);
	    $(".cookieConsentOK").click(function() {
	        $("#cookieConsent").fadeOut(200);location.reload();setCookie("gprivacy", "false", 365);
	    }); 
	    $("#closeCookieConsent").click(function() {
	        $("#cookieConsent").fadeOut(200);setCookie("gprivacy", "true", 30);
	    }); 
	}
	else{
		return 0;
	}
}); 



// To set the cookie saying you accepted the cookies or not (https://www.w3schools.com/js/js_cookies.asp)
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires;// + ";path=/";
}


// To go check if a cookie exists, and if yes, what is its value
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "cookie not found";
}