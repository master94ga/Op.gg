var servername;
var summonersname;

//Load value from storage at start of browser
chrome.runtime.onStartup.addListener(function(){
   chrome.storage.sync.get(function(items) {
    servername = items.mydata[items.yourindex].yourserver;
    summonersname = items.mydata[items.yourindex].yournickname;
  });
});

//Load value from storage on click of icon
chrome.browserAction.onClicked.addListener(function(){
   chrome.storage.sync.get(function(items) {
    servername = items.mydata[items.yourindex].yourserver;
    summonersname = items.mydata[items.yourindex].yournickname;
  });
});

//Open settings if there isn't nickname or server in storage
//If a nickname and server is on storage open the selected site
chrome.browserAction.onClicked.addListener(function(){
   chrome.storage.sync.get(function(items) {
    servername = items.mydata[items.yourindex].yourserver;
    summonersname = items.mydata[items.yourindex].yournickname;
    var selectedsite = items.yoursite;

    if ((servername == null) && (summonersname == null))
    {
        chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
          chrome.tabs.create( { "url": "settings.html" } );
          });
    }
    else if ((servername == "") || (summonersname == ""))
    {
          chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
          chrome.tabs.create( { "url": "settings.html" } );
          });
    }
    else if (selectedsite == "0")
    {
      if ((servername == "kr"))
      {
        chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.create( { "url": "http://www.op.gg/summoner/userName="+summonersname } );
        });
      }
      else
      {
        chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.create( { "url": "http://"+servername+".op.gg/summoner/userName="+summonersname } );
        });
      }
    }
    else if(selectedsite == "1")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolnexus.com/"+servername+"/search?name="+summonersname+"&region="+servername } );
      });
    }
    else if(selectedsite == "2")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolking.net/search?name="+summonersname+"&region="+servername } );
      });
    }
     else if(selectedsite == "3")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.elophant.com/league-of-legends/search?query="+summonersname+"&region="+servername } );
      });
    }
     else if(selectedsite == "4")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://quickfind.kassad.in/profile/"+servername+"/"+summonersname+"/" } );
      });
    }
     else if(selectedsite == "5")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.lolskill.net/summoner/"+servername+"/"+summonersname } );
      });
    }
     else if(selectedsite == "6")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://it.loldb.gameguyz.com/analyze/search?search_text="+summonersname+"&c_server=1_2_3_4_5_6_7_8_9_10" } );
      });
    }
    else if(selectedsite == "7")
    {
      chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
      chrome.tabs.create( { "url": "http://www.carry.gg/current/"+servername+"/"+summonersname+"/" } );
      });
    }
  });
});