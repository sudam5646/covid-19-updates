import { Component } from '@angular/core';
import { CovidService } from './services/covid.service';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Router } from '@angular/router';
// import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private CovidService : CovidService,
    private Router : Router){}
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
  ngOnInit(){
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
    this.showdistrictwise = true;
    this.statename = state;
    this.firstrowadded = false;
    console.log('state',this.statename);
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
drawGraphforDistrict(distObject,dist){
  localStorage.setItem('distObject', JSON.stringify(distObject)); // Set distObject in local storage as string
  let Dist = dist + ' Corona updates';
  localStorage.setItem('district', JSON.stringify(Dist));
  this.Router.navigate(['/dist-graph']);
}

drawGraphforState(state){
  this.showdistrictwise = false;
  console.log('app',state);
  localStorage.setItem('stateObject', JSON.stringify(state)); // Set distObject in local storage as string
  // let Dist = dist + ' Corona updates';
  // localStorage.setItem('district', JSON.stringify(Dist));
  this.Router.navigate(['/state-graph']);
}


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
view: any[] = [600, 600];
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Country';
showYAxisLabel = true;
yAxisLabel = 'Sales';
timeline = true;
colorScheme = {
  domain: ['RED', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
};

showLabels = true;
public single = [
  {
    "name": "China",
    "value": 2243772
  },
  {
    "name": "USA",
    "value": 1126000
  },
  {
    "name": "Norway",
    "value": 296215
  },
  {
    "name": "Japan",
    "value": 257363
  },
  {
    "name": "Germany",
    "value": 196750
  },
  {
    "name": "France",
    "value": 204617
  }
];

//************************************************************************* */

}
