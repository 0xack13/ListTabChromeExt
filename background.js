// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
 /*
  console.log("WOWOWWOWOWO!");
  chrome.extension.getBackgroundPage().console.log('foo');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
    tabs.forEach(function(tab) {
        console.log("Tab ID: ", tab.id);
    });
*/
   chrome.windows.getAll({populate:true},function(windows){
  windows.forEach(function(window){
    window.tabs.forEach(function(tab){
      //collect all of the urls here, I will just log them instead
      console.log(tab.title, " --> ", tab.url, "\n\n");
      document.write(tab.title, "<br>", tab.url, "<br><br>");
    });
  });
}); 


//  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);
