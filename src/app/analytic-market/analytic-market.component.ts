import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-analytic-market',
  templateUrl: './analytic-market.component.html',
  styleUrls: ['./analytic-market.component.css']
})
export class AnalyticMarketComponent implements OnInit {

  constructor() { }



  calculation = [
    {
     "title": "Spend",
     "img": "assets/up-arrow.png",
     "price":"DT 75673620.00"
    },
    {
      "title": "Recived",
      "img": "assets/down-arrow.png",
      "price":"DT 75673620.00"
    }, 
    {
      "title": "AvailableAssets",
      "img": "assets/star.png",
      "price":"DT 75673620.00"
    }
  ]

  marketUpdate = [
    {
      "No": "1",
      "name":"sachin",
      "lastPrice":"$56,7676.00",
      "change":" 1.21%",
      "MarketStatus":"assets/wind.png",
      "Action":""
    },
    {
      "No": "2",
      "name":"sachin",
      "lastPrice":"$56,7676.00",
      "change":" 1.21%",
      "MarketStatus":"assets/wind.png",
      "Action":""
    },
    {
      "No": "3",
      "name":"sachin",
      "lastPrice":"$56,7676.00",
      "change":" 1.21%",
      "MarketStatus":"assets/wind.png",
      "Action":""
    },
    {
      "No": "4",
      "name":"sachin",
      "lastPrice":"$56,7676.00",
      "change":" 1.21%",
      "MarketStatus":"assets/wind.png",
      "Action":""
    },
    {
      "No": "5",
      "name":"sachin",
      "lastPrice":"$56,7676.00",
      "change":" 1.21%",
      "MarketStatus":"assets/wind.png",
      "Action":""
    }
  ]

  ngOnInit(): void {
    this.renderChart();
  
  }

  renderChart(){
    const myChart = new Chart('bar', {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

  }

}
