interface PaymentPersistent {
  id: number;
  sum: number;
  from: string;
  to: string;
}

type Payment = Omit<PaymentPersistent, 'id'>; //omitem cimpul "id"
type PaymentRequisits = Pick<PaymentPersistent, 'from' | 'to'>; //omitem cimpul "id"

type ExtractEx = Extract<'from' | 'to' | Payment, string>;
type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;
