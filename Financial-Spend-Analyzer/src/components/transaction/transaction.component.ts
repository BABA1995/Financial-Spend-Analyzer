import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FinancialService } from 'src/services/financial.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent implements OnInit {
  transaction: any;
  constructor(private financial: FinancialService) {}
  startIndex: any = 0;
  endeIndex: any = 10;
  ngOnInit(): void {}
  onClick() {
    this.financial.get().subscribe((res: any) => {
      this.transaction = res;
    });
  }
  getArrayFromNumber(length: any) {
    return new Array(length / 10);
  }
  updateIndex(pageIndex: any) {
    this.startIndex = pageIndex * 10;
    this.endeIndex = 10 + this.startIndex;
  }
}
