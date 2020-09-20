import { Component } from '@angular/core';
import { CovidService } from './services/covid.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

// import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private CovidService : CovidService,
    private Router : Router,
    public breakpointObserver: BreakpointObserver){
    }

  title = 'covid-app';
  StateDistrictdata;
  Statedata
  StateDistrictdataResponse = [];
  arrar;
  india;
  finalData = [];
  Object = Object;
  JSON = JSON;
  console = console;
  isSmallScreen;
  ngOnInit(){
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    console.log('this.isSmallScreen',this.isSmallScreen);
    this.CovidService.getStateDistrictWise()
    .subscribe((resCovidData: any) => {

      Object.entries(resCovidData).forEach(([key, value]) => this.finalData[key] = value);
      console.log("final data",this.finalData);

    }
      )
      this.CovidService.getStateWise()
      .subscribe((resCovidData: any) => {
        this.Statedata = resCovidData.statewise;
        // this.Statedata.sort((a,b) => a.confirmed.localeCompare(b.confirmed.rendered));
        this.Statedata.sort((a, b) => parseFloat(b.confirmed) - parseFloat(a.confirmed));
        this.Statedata.forEach(element => {
          if (element.state == 'Total') {
            this.india = element;
            console.log('ind',this.india);
            this.drawGraph(this.india)
          }
        });
        var removeByAttr = function(arr, attr, value){
          var i = arr.length;
          while(i--){
             if( arr[i]
                 && arr[i].hasOwnProperty(attr)
                 && (arguments.length > 2 && arr[i][attr] === value ) ){

                 arr.splice(i,1);

             }
          }
          return arr;
      }
        removeByAttr(this.Statedata, 'state', 'Total');
        removeByAttr(this.Statedata, 'state', 'State Unassigned');
      }
        )
  }
  jsonformat(state){
    console.log("state",state)
    return JSON.stringify(state);
  }
  statename = "";
  showdistrictwise = false;
  showDistrictWise(state){
    this.state_name = "";
    this.showdistrictwise = true;
    this.statename = state;
    this.firstrowadded = false;
    console.log('state',this.statename);
  }
  districtwiseshown(){
    this.showdistrictwise = false;
  }
  firstrowadded = false;
  firstrow(){
    this.firstrowadded = true;
  }

  public lineChart: GoogleChartInterface;
drawGraph(india){
  let Confirmed : Number = Number(india.confirmed);
  let Active : Number = Number(india.active);
  let Recovered : Number = Number(india.recovered);
  let Deaths : Number = Number(india.deaths);

  this.lineChart = {
    chartType: 'ColumnChart',
    dataTable: [
      ['Category', 'Confirmed','Active','Recovered','Deaths'],
      ['Covid-19 chart', Confirmed,Active,Recovered,Deaths],
      // ['Active',      200000,10],
      // ['Recovered',  200000,10],
      // ['Deaths',    700000,10]
    ],
    options: {'title': 'India Corona updates',
            'width': 700,
            'height': 600},
    //firstRowIsData: true,
    // options: {'title': 'India Corona updates'},
  };
}

showgraph = false;
public pieChartforDistrict: GoogleChartInterface;

//*************state graph************ */
  distObject : any;
  Confirmed;
  Active;
  Recovered;
  Deaths;
  Dist;
  showDistrictGraph(){}
  stateObject;
  state;
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
state_name = "";
drawGraphforState(state){
  this.statename = "";
  this.state_name = state.state;
  this.showdistrictwise = false;
  console.log('app',state);
  // let Dist = dist + ' Corona updates';
  // localStorage.setItem('district', JSON.stringify(Dist));
  this.stateObject = state;
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
//************************************* */
//***********************dist-graph******* */
distname = "";
drawGraphforDistrict(distObject,dist){
    this.distname = dist;
    this.distObject = distObject;
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
//*************************************** */

setshowgraph(){
  this.showgraph = false;
}
state_low_high = false;
confirmed_low_high = false;
deseased_low_high = false;
active_low_high = false;
recovered_low_high = false;
sortbyStatename(){
  if(!this.state_low_high){
    this.state_low_high = true;
    this.Statedata.sort((a, b) => a.state.localeCompare(b.state));
  }else{
    this.state_low_high = false;
    this.Statedata.sort((a, b) => b.state.localeCompare(a.state));
  }
}
sortbyActivecases(){
  if(!this.active_low_high){
    this.active_low_high = true;
    this.Statedata.sort((a, b) => parseFloat(b.active) - parseFloat(a.active));
  }else{
    this.active_low_high = false;
    this.Statedata.sort((a, b) => parseFloat(a.active) - parseFloat(b.active));
  }
}
sortbyConfirmedcases(){
  if(!this.confirmed_low_high){
    this.confirmed_low_high = true;
    this.Statedata.sort((a, b) => parseFloat(b.confirmed) - parseFloat(a.confirmed));
  }else{
    this.confirmed_low_high = false;
    this.Statedata.sort((a, b) => parseFloat(a.confirmed) - parseFloat(b.confirmed));
  }
}
sortbyDeseasedcases(){
  if(!this.deseased_low_high){
    this.deseased_low_high = true;
    this.Statedata.sort((a, b) => parseFloat(b.deaths) - parseFloat(a.deaths));
  }else{
    this.deseased_low_high = false;
    this.Statedata.sort((a, b) => parseFloat(a.deaths) - parseFloat(b.deaths));
  }
}
sortbyRecoveredcases(){
  if(!this.recovered_low_high){
    this.recovered_low_high = true;
    this.Statedata.sort((a, b) => parseFloat(b.recovered) - parseFloat(a.recovered));
  }else{
    this.recovered_low_high = false;
    this.Statedata.sort((a, b) => parseFloat(a.recovered) - parseFloat(b.recovered));
  }
}

//************************************************************************* */
//NgxChartsModule


//************************************************************************* */

}
