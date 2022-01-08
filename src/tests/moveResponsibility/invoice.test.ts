import { InvoiceService } from "../../core/moveResponsibility/InvoiceService";

describe('The Invoice Service', ()=>{
  it('calculates net amount', ()=>{
    const invoiceService = new InvoiceService();
    const result = invoiceService.calculateNetAmount("100", "10");
    expect(result).toBe("90");
  })
})