function hello() {
  /*chrome.tabs.executeScript({
    file: 'alert.js'
  });*/ 
  chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.title, " --> ", tab.url, "\n\n");
      document.write(tab.title, "<br>", tab.url, "<br><br>");
    });
  });
}); 
};

hello();

//document.getElementById('clickme').addEventListener('click', hello);

//console = chrome.extension.getBackgroundPage().console

