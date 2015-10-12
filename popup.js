document.addEventListener('DOMContentLoaded', function() {
		var link = document.getElementById('iconLink');
		link.addEventListener('click', function(e) {
            chrome.tabs.create({url : "https://www.pixlr.com/editor/"}, function(tab) {   
            });
		});
		
	});

	
	