import { Component, OnInit, OnChanges, AfterContentChecked } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dist-graph',
  templateUrl: './dist-graph.component.html',
  styleUrls: ['./dist-graph.component.scss']
})
export class DistGraphComponent implements OnInit,OnChanges,AfterContentChecked {

  constructor(private Router : Router) { }
  public pieChartforDistrict: GoogleChartInterface;
  executed = false;
  ngOnChanges(){

  }
  ngOnInit(): void {
    console.log('this.Dist')
  }
  console = console;
  distObject : any;
  Confirmed;
  Active;
  Recovered;
  Deaths;
  Dist;
  showDistrictGraph(){
    // let distObject = JSON.parse(localStorage.getItem('distObject'));
    // // console.log('distObject 1',distObject);
    // this.Confirmed = Number(distObject.confirmed);
    // this.Active = Number(distObject.active);
    // this.Recovered = Number(distObject.recovered);
    // this.Deaths = Number(distObject.deaths);
    // this.Dist = JSON.parse(localStorage.getItem('district'));
    // console.log('Dist',Dist)

    // this.pieChartforDistrict = {
    //   chartType: 'ColumnChart',
    //   dataTable: [
    //     ['Category', 'Confirmed','Active','Recovered','Deaths'],
    //     ['Covid-19 chart', Confirmed,Active,Recovered,Deaths],
    //   ],
    //   options: {'title': Dist,
    //           'width': 700,
    //           'height': 600},
    //   //firstRowIsData: true,
    //   // options: {'title': 'India Corona updates'},

    // };
  }

  ngAfterContentChecked(): void{
    this.distObject = JSON.parse(localStorage.getItem('distObject'));
    // console.log('distObject 1',distObject);
    this.Confirmed = Number(this.distObject.confirmed);
    this.Active = Number(this.distObject.active);
    this.Recovered = Number(this.distObject.recovered);
    this.Deaths = Number(this.distObject.deceased);
    this.Dist = JSON.parse(localStorage.getItem('district'));
    console.log('this.Dist',this.Dist)
    this.single = [
      {
        "name": "Confirmed",
        "value": this.distObject.confirmed,
      },
      {
        "name": "Active",
        "value": this.distObject.active,
      },
      {
        "name": "Recovered",
        "value": this.distObject.recovered,
      },
      {
        "name": "Deaths",
        "value": this.distObject.deceased,
      }
    ];
  }
//********************************************************************* */

disObject(){
  console.log('disObject',JSON.parse(localStorage.getItem('distObject')))
  return this.disObject;
}
view: any[] = [500, 600];
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
//xAxisLabel = 'Country';
showYAxisLabel = true;
yAxisLabel = 'No of cases';
timeline = true;
colorScheme = {
  domain: ['blue', 'orange', 'green', 'red']
};

showLabels = true;
public single = [];

//************************************************************************* */

}
