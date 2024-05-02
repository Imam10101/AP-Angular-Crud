import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Invoice } from '../../models/invoice.model';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent implements OnInit {
  invoices?: Invoice[];


  constructor(private invoiceService : InvoiceService, public router: Router){
  
    console.log("Navigate");
  }
  
    ngOnInit(): void {
     this.retrieveInvoice();
    }
    retrieveInvoice():void{
      this.invoiceService.getAll()
      .subscribe({
        next:(data)=>{
          this.invoices=data;
        },
        error:(e) => console.error(e)
      })
    }
    deletecategory(InvoiceId: any): void{
      this.invoiceService.delete(InvoiceId).subscribe({
        next: (res) => {
          window.location.reload();
        },
        error: (e) => console.error(e)
      })
    }
  
  }
  