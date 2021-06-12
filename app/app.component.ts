import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'you';

  products = new Array<Product>();

  categoryGrouped(){
    this.products.push({name:"product 1", category:1});
    this.products.push({name:"product 2", category:2});
    this.products.push({name:"product 3", category:1});
    this.products.push({name:"product 4", category:2});
    this.products.push({name:"product 5", category:1});

    var result = this.products.reduce(function(summary, prod){
      if(summary[prod.category]){
        summary[prod.category].count++;
      }else{
        summary[prod.category] = {count:1, category: prod.category}
        summary[prod.category].count = 1;
      }
      return summary;
    }, {})

    console.log(result);

  }

  clicked(){

    var a = [1,2,3,4,5,6,7,8,9,10];


   //var total = a.reduce((sum, value) => sum + value, 1);

   var total = a.reduce(function(sum, value){
    return sum + value;
   }, 0)

   const tt = [0, 1, 2, 3].reduce(function(sum, value) {
    return sum + value;
    }, 1);

    alert(total)

  }
}

export class Product{
  name : string;
  category : number;
}
