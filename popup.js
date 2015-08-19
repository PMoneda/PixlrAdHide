document.addEventListener('DOMContentLoaded', function() {
		var link = document.getElementById('txt');
		link.addEventListener('keyup', function(e) {
			if(e.keyCode == 13){				
				chrome.tabs.getSelected(function(e){ 
					var link = createLink(e.url);
					 chrome.tabs.create({url : link}, function(tab) { 
						
					});
				});
			}
		});
		
		var codingLoveLink = document.getElementById('codingLoveLink');
		codingLoveLink.addEventListener('click', function(e) {					
			chrome.tabs.create({url : "http://thecodinglove.com/"}, function(tab) { 					
			});
			
		});
		
	});
    function createLink(url)
    {
        var postId = url;
        var postTitle = document.getElementById("txt").value;
        if (postId == null || postId == "") {
            alert("Where's the fucking URL???");
            return;
        }

        postId = postId.match(/t\/(.*)\//i);
        if (postId == null || postId.length == 0) {
            alert("Where's the fucking post number???");
            return;
        }
        if (postTitle == null || postTitle == "") {
            alert("Where's the fucking title???");
            return;
        }
        var link = "http://sotreqdev.radixeng.com.br/TCL/Home/Post?postId=" + postId[1] + "&postTitle=" + postTitle;        
        return link;
    }

    function goLink() {
        var link = document.getElementById("newLink").value;
        if (link == null || link === "") {
            alert("Where's the link????");
        }
        window.location = link;
    }