import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'PayPApplication';
  constructor(){

  }

  addActive(){
    const btn = document.querySelectorAll('.cards');
    console.log(btn);

    btn.forEach( btn => {
      btn.addEventListener( 'click', ()  => {
        document.querySelector('.active')?.classList.remove('active')
        btn.classList.add('active');
      })
    })
  }
  ngDoCheck(): void {

  
  }

  

}
