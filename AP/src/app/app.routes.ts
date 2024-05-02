import { Routes } from '@angular/router';
import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceDetailsComponent } from './components/invoice-details/invoice-details.component';
import { AddInvoiceComponent } from './components/add-invoice/add-invoice.component';

export const routes: Routes = [
    {path:'', redirectTo:'invoices', pathMatch:'full'},
    {path:'invoices', component: InvoiceListComponent},
    {path:'invoices', component:InvoiceDetailsComponent},
    {path: 'invoice', component: AddInvoiceComponent}
];
