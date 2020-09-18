import { Component, OnInit, OnChanges, AfterContentChecked, Input } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-state-graph',
  templateUrl: './state-graph.component.html',
  styleUrls: ['./state-graph.component.scss']
})
export class StateGraphComponent implements OnInit, OnChanges, AfterContentChecked {

  constructor(private Router : Router,
              private ActivatedRoute : ActivatedRoute) { }
  public pieChartforDistrict: GoogleChartInterface;
  executed = false;

  ngOnChanges(){
    console.log('state-graph worked ngOnChanges');
  }
  ngOnInit(): void {
    console.log('state-graph worked ngOnInit');
  }
  console = console;
  distObject : any;
  Confirmed;
  Active;
  Recovered;
  Deaths;
  Dist;
  showDistrictGraph(){}
  stateObject;
  state;
  ngAfterContentChecked(): void{

    this.stateObject = JSON.parse(localStorage.getItem('stateObject'));
    this.state = this.stateObject.state;
    console.log('this.State',this.state);
    this.single = [
      {
        "name": "Confirmed",
        "value": this.stateObject.confirmed,
      },
      {
        "name": "Active",
        "value": this.stateObject.active,
      },
      {
        "name": "Recovered",
        "value": this.stateObject.recovered,
      },
      {
        "name": "Deaths",
        "value": this.stateObject.deaths,
      }
    ];
  }
//********************************************************************* */

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
