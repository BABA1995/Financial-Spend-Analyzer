import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialService } from 'src/services/financial.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  transaction: any;
  constructor(private financial : FinancialService) { }

  ngOnInit(): void {
  }
  onClick(){
     this.financial.get().subscribe((res:any) => {
       this.transaction = res
       console.log(this.transaction) 
     })
 

  }
}
