interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus4 {
  Success = "success",
  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess4 {
  status: PaymentStatus4.Success;
  data: IDataSuccess;
}

interface IResponseFailed4 {
  status: PaymentStatus4.Failed;
  data: IDataFailed;
}

type f = (res: IResponseSuccess4 | IResponseFailed4) => number;
type Res = IResponseSuccess4 | IResponseFailed4;

//creem functia typeGuard
function isSucces(res: Res): res is IResponseSuccess4 {
  if (res.status === PaymentStatus4.Success) {
    return true;
  }
  return false;
}

function getIdFromData(res: Res): number {
    if(isSucces(res)){
        return res.data.databaseId
    }else{
        throw new Error(res.data.errorMessage)
    }
}
