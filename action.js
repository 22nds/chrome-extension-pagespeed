'use strict';

// Get the tab URL and send it back to popup
chrome.runtime.onMessage.addListener( function ( request, sender, sendResponse ) {
    var url = document.location.href;
    console.log( url );
    sendResponse( {
        'data': url
    } );
} );