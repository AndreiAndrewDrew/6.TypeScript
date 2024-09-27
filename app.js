"use strict";
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "get";
    RequestType["POST"] = "post";
})(RequestType || (RequestType = {}));
//de fieacre data de facut enum..nu este optimal
function fetchWithAuth(url, method) {
}
//exemplu 2 analog
function fetchWithAuth2(url, method) {
}
fetchWithAuth2('s', 'get'); //get sau post..altceva da eroare
// fetchWithAuth2('s','af')//eroare
