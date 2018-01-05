'use strict';

document.addEventListener( 'DOMContentLoaded', function () {

    chrome.tabs.query( {
        active: true,
        currentWindow: true
    }, function ( tabs ) {
        chrome.tabs.sendMessage( tabs[ 0 ].id, {}, function ( response ) {

            // USE RESPONSE

            // Display the URL in the popup
            var site = document.getElementById( 'site' );
            site.innerText = response.data;

            // Build the Pagespeed results page URL
            var googlePagespeedURL = 'https://developers.google.com/speed/pagespeed/insights/?tab=desktop&url=';
            var encodedPage = encodeURI( response.data );
            var url = googlePagespeedURL + encodedPage;

            // Create and add an iframe with PageSpeed results
            var iframe = document.createElement( 'iframe' );
            iframe.frameBorder = 0;
            iframe.width = '500px';
            iframe.height = '500px';
            iframe.setAttribute( 'src', url );
            document.getElementById( 'page' ).appendChild( iframe );
        } );
    } );
} );