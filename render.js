// Do the friendly greeting

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
   document.getElementById('chrono_salutation').innerHTML = 'morning!';
} else if (curHr < 18) {
   document.getElementById('chrono_salutation').innerHTML = 'afternoon.';
} else {
   document.getElementById('chrono_salutation').innerHTML = 'evening.';
}


// Show the randomised content

chrome.storage.local.get(['data'], storeData => {
    let index = Math.floor(Math.random() * storeData.data.length);

    document.getElementById('productName').innerHTML = storeData.data[index][0];
    document.getElementById('productURL').href = storeData.data[index][1];
    document.getElementById('productDescription').innerHTML = storeData.data[index][2];
    document.getElementById('productCategory').innerHTML = storeData.data[index][3];
});


// Get the topsites from the browser and parse those in too
 
function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('mostVisited_div');
  var ul = popupDiv.appendChild(document.createElement('ul'));

  for (var i = 0; i < 7; i++) {
    var li = ul.appendChild(document.createElement('li'));
    var a = li.appendChild(document.createElement('a'));
    a.href = mostVisitedURLs[i].url;
    a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
    a.addEventListener('click', onAnchorClick);
  }
}
chrome.topSites.get(buildPopupDom);


// show DDG tip on search bar focus

var el = document.getElementById('searchBox');

el.onclick = function() {
    document.getElementById('ddg-tip').style.display = "block";
};
