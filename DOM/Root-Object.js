function rootobject() {
    alert("Using RootObject-window");
}
window.rootobject();
alert(window.innerHeight); // inner window height
// change the background color to red
document.body.style.background = "red";

// change it back after 1 second
setTimeout(() => document.body.style.background = "", 1000);
alert(location.href); // shows current URL
if (confirm("Go to google?")) {
  location.href = "https://www.google.com"; // redirect the browser to another URL
}