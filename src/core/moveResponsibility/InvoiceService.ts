import { Invoice } from "./Invoice";

export class InvoiceService {
  calculateNetAmount(amount: string, tax: string): string {
    const invoice = new Invoice();
    invoice.grossAmount = parseInt(amount);
    invoice.taxPercentage =  parseInt(tax);
    return (invoice.grossAmount - (invoice.grossAmount * (invoice.taxPercentage / 100))).toString();
  }
}