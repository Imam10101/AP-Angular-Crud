import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Invoice } from '../../models/invoice.model';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-add-invoice',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.css'
})
export class AddInvoiceComponent {
  invoice : Invoice= {
    invoiceId: undefined,
    invoiceNumber: '',
    invoiceDate: undefined,
    invoiceTotal: 0,
    paymentTotal: 0,
    creditTotal: 0,
    invoiceDueDate: undefined,
    paymentDate: undefined
  }
  submitted=false;

  constructor(private invoiceServoice: InvoiceService){}
    saveInvoice(): void{
      const data = {
        invoiceId: this.invoice.invoiceId,
        invoiceNumber: this.invoice.invoiceNumber,
        invoiceDate: this.invoice.invoiceDate,
        invoiceTotal: this.invoice.invoiceTotal,
        paymentTotal: this.invoice.paymentTotal,
        creditTotal: this.invoice.creditTotal,
        invoiceDueDate: this.invoice.invoiceDueDate,
        paymentDate: this.invoice.paymentDate
      }
      this.invoiceServoice.create(data)
      .subscribe({
        next: (res)=>{
          this.submitted= true;

        },
        error: (e) => console.error(e)
        
      })
      }
      newInvoice() : void{
        this.submitted = false;
        this.invoice = {
          invoiceId: undefined,
          invoiceNumber: '',
          invoiceDate: undefined,
          invoiceTotal: 0,
          paymentTotal: 0,
          creditTotal: 0,
          invoiceDueDate: undefined,
          paymentDate: undefined
        }
    }
  

}

