import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FinancialService } from 'src/services/financial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
id: Number = 125678934;
myform = new FormGroup({
  amount: new FormControl(''),
  transactionDescription: new FormControl(''),
  categoryOfSpend: new FormControl('')

})
  constructor(private financial : FinancialService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    let d = new Date();
   console.log(this.myform.value);
   let data = 
    { id : this.id,
      Transaction: this.myform.value,
      date : d
     }  
   this.financial.post(data).subscribe((data:any) => {
     console.log(data)
   }, (err:any) => {
     console.log(err);
   })
  }
}
