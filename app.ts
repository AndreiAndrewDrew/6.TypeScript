//Exemplu 1 de folosire a tipului 'never'
function genearteError(mesaj: string) : never{
  throw new Error(mesaj)
} 

//Ex.2
function dumpError(): never{
  // return ''; //ne da eroare
  while(true){

  }
}

//Ex3
function recursie(): never{
  return recursie()
}

//Ex.4
type paymentAction ='refund' | 'checkout' | 'reject'

function processAction(action: paymentAction){
   switch(action){
    case 'refund':
      //..ceva executam
      break;
    case 'checkout':
      //..
      break;
    case 'reject':
      //..
      break;
    default:
      const _: never = action
      throw new Error('Nu exista asa actsiune.')
   }
}

//Ex.5
function isString(x: string | number): boolean{
  if (typeof x === 'string'){
    return true;
  }else if(typeof x === 'number') {
    return false;
  }
  genearteError('sfasfjs') //functia din Ex.1 de mai sus

}