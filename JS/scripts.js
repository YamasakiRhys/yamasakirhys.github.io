var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
/*SPA tracking code*/
const locationChangeEventType = "Matomo-location-change";
// called on creation and every url change
function observeUrlChanges(cb) {
assertLocationChangeObserver();
window.addEventListener(locationChangeEventType, () => cb(window.location));
cb(window.location);
}
function assertLocationChangeObserver() {
const state = window;
if (state.MY_APP_locationWatchSetup) {
return;
}
state.MY_APP_locationWatchSetup = true;
let lastHref = location.href;
['popstate', 'click', 'keydown', 'keyup', 'touchstart', 'touchend', 'hashChange'].forEach((eventType) => {
window.addEventListener(eventType, () => {
requestAnimationFrame(() => {
const currentHref = location.href;
if (currentHref !== lastHref) {
lastHref = currentHref;
window.dispatchEvent(new Event(locationChangeEventType));
}
});
});
});
}
 _paq.push(['enableJSErrorTracking']); 
var currentUrl = location.href;
var newUrl = location.href;
observeUrlChanges((loc) => {
_paq.push(['setReferrerUrl', currentUrl]);
newUrl = location.href;
   _paq.push(['setCustomUrl', newUrl]);
_paq.push(['trackPageView']);
currentUrl = location.href;
});
/*SPA code end */ 
_paq.push(['enableLinkTracking']);

(function() {
var u="//usql119.spe.sony.com:1024/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
// _paq.push(['setSiteId', window.matomoSiteId]);
_paq.push(['setSiteId', '4']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
/* <!-- End Matomo Code */


function buttonPress(){ 
    console.log("test");
    console.lot(error);
}

