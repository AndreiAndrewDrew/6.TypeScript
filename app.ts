enum RequestType{
  GET = 'get',
  POST = 'post'
}
//de fieacre data de facut enum..nu este optimal


function fetchWithAuth(url: string, method: RequestType){
}

//exemplu 2 analog
function fetchWithAuth2(url: string, method: 'post' | 'get'){
}

fetchWithAuth2('s','get')//get sau post..altceva da eroare
// fetchWithAuth2('s','af')//eroare
