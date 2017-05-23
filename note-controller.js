window.onload = ( function() {
  function changeText(text) {
    var appDiv = document.getElementById('app');
    console.log(appDiv);
    appDiv.innerHTML = text;
    console.log(appDiv);
  }
  return {
  changeText: changeText
};
});
