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
    let month;
    switch(d.getMonth()){
      case 0: month = "january"
      break;
      case 1: month = "Febraury"
      break;
      case 2: month = "March"
      break;
      case 3: month = "April"
      break;
      case 4: month = "May"
      break;
      case 5: month = "June"
      break;
      case 6: month = "July"
      break;
      case 7: month = "Aug"
      break;
      case 8: month = "September"
      break;
      case 9: month = "October"
      break;
      case 10: month = "November"
      break;
      case 11: month = "December"
      break;
      default: month = "month doesn't exist"

    }
   let data = 
    { [month] : {
   customerNumber : this.id,
      Transaction: this.myform.value,
      date : d,
      payment: "debit"  }
      
     }  
   this.financial.post(data).subscribe((data:any) => {
     console.log(data)
   }, (err:any) => {
     console.log(err);
   })
  }
}
