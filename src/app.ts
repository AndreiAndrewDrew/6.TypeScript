class Resp<D, E> {
  data?: D;
  error?: E;

  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data;
    }
    if (error) {
      this.error = error;
    }
  }
}

const res = new Resp<string, number>('data') 

//Ex.2
class HTTPResp extends Resp<string, number>{
  code: number;

  setCode(code: number){
    this.code = code;
  }
}

const res2 = new HTTPResp()
res2.