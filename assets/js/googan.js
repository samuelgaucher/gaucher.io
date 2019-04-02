
// This line must be there in the <head> I suppose but it benign, and doesn't constitute a cookie itself.
// <script async src="https://www.googletagmanager.com/gtag/js?id=UA-135626636-1"></script>

// This is what Google wants us to place first thing in the <head> of each page
window.dataLayer = window.dataLayer || [];
// Now I'm writing this line which allows to disabe the tracking, when the value is set to true. I somehow have to pass the value from
// the decision made in the banner
window['ga-disable-UA-135626636-1'] = getCookie("gprivacy"); // Disable/Enable GA

function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-135626636-1');


// I will then execute this script in the <head> just after the initial line, as required.



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
    	if (c.substring(name.length, c.length) == "false"){
    		//alert("You cliked Ok! Cookies enabled.");
    		return false; // if user clicked "Ok!", cookie was set to false, so here enable GA
    	}
    	else{
    		//alert("You cliked x! Cookies disabled.");
    		return true; // if cookie exists and user clicked "x", and set to true and disable GA
    	}
    }
  }
  //alert("Cookie doesn't exist yet.");
  return true; // if cookie doesn't exist, return true (disable GA)
}