function clickFunction() {
    alert("Right click is not allowed");
  }
document.addEventListener("contextmenu", (evt) => {
    evt.preventDefault();
}, false);
