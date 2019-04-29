import { Component, OnInit,Input } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 heading = 'Quotes'

 quotes=[
   
 ]
 toogleDetails(index){
   this.quotes[index].showDescription = !this.quotes[index].showDescription;
 }
 addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.postDate = new Date(quote.postDate)
   this.quotes.push(quote)
 }
 deleteQuote(isComplete,index){
   if (isComplete){
     let toDelete = confirm(`are you sure you want to delete ${this.quotes[index].name}`)
     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
  constructor() { }

  ngOnInit() {
  }

}
