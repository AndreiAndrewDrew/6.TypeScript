interface IPayment {
  sum: number;
  from: number;
  to: number;
}

enum PaymentStatus{
    Succes = 'succes',
    Failed = 'failed'
}

interface IPaymentRequest extends IPayment {}

interface IDataSucces extends IPayment{
    databaseId: number;
}

interface IDataFailed{
    errorMessage: string;
    errorCode: number;
}

interface IResponseSucces{
    status: PaymentStatus.Succes;
    data: IDataSucces;
}

interface IResponseFailed{
    status: PaymentStatus.Failed;
    data: IDataFailed;
}
