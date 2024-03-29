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
    // this.CovidService.getStateDistrictWise()
    // .subscribe((resCovidData: any) => {

    //   Object.entries(resCovidData).forEach(([key, value]) => this.finalData[key] = value);
    //   console.log("final data",this.finalData);

    // }
    //   )

        this.Statedata =[
          {
            "active": "363849",
            "confirmed": "32249900",
            "deaths": "432112",
            "deltaconfirmed": "24692",
            "deltadeaths": "438",
            "deltarecovered": "36862",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "12679",
            "recovered": "31441260",
            "state": "Total",
            "statecode": "TT",
            "statenotes": ""
          },
          {
            "active": "1",
            "confirmed": "7549",
            "deaths": "129",
            "deltaconfirmed": "1",
            "deltadeaths": "0",
            "deltarecovered": "0",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "7419",
            "state": "Andaman and Nicobar Islands",
            "statecode": "AN",
            "statenotes": ""
          },
          {
            "active": "17218",
            "confirmed": "1994606",
            "deaths": "13660",
            "deltaconfirmed": "909",
            "deltadeaths": "13",
            "deltarecovered": "1543",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "1963728",
            "state": "Andhra Pradesh",
            "statecode": "AP",
            "statenotes": ""
          },
          {
            "active": "1836",
            "confirmed": "51513",
            "deaths": "252",
            "deltaconfirmed": "165",
            "deltadeaths": "0",
            "deltarecovered": "249",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "49425",
            "state": "Arunachal Pradesh",
            "statecode": "AR",
            "statenotes": "[July 25]: All numbers corresponding to Papum Pare and Captial Complex are tracked under Papum Pare district."
          },
          {
            "active": "7707",
            "confirmed": "580657",
            "deaths": "5502",
            "deltaconfirmed": "758",
            "deltadeaths": "10",
            "deltarecovered": "1014",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "1347",
            "recovered": "566101",
            "state": "Assam",
            "statecode": "AS",
            "statenotes": "[Jan 1]: 1347 cases i.e Covid +'tive patients dead for other reasons have been deducted fom active count."
          },
          {
            "active": "212",
            "confirmed": "725497",
            "deaths": "9649",
            "deltaconfirmed": "14",
            "deltadeaths": "0",
            "deltarecovered": "42",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "1",
            "recovered": "715635",
            "state": "Bihar",
            "statecode": "BR",
            "statenotes": "[June 9] : 3951 deceased cases have been reported in the bulletin after reconciliation of records by the authorities"
          },
          {
            "active": "43",
            "confirmed": "62031",
            "deaths": "811",
            "deltaconfirmed": "2",
            "deltadeaths": "0",
            "deltarecovered": "3",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "61177",
            "state": "Chandigarh",
            "statecode": "CH",
            "statenotes": ""
          },
          {
            "active": "1138",
            "confirmed": "1003814",
            "deaths": "13548",
            "deltaconfirmed": "68",
            "deltadeaths": "1",
            "deltarecovered": "224",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "989128",
            "state": "Chhattisgarh",
            "statecode": "CT",
            "statenotes": ""
          },
          {
            "active": "8",
            "confirmed": "10660",
            "deaths": "4",
            "deltaconfirmed": "2",
            "deltadeaths": "0",
            "deltarecovered": "0",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "31",
            "recovered": "10617",
            "state": "Dadra and Nagar Haveli and Daman and Diu",
            "statecode": "DN",
            "statenotes": ""
          },
          {
            "active": "467",
            "confirmed": "1437118",
            "deaths": "25069",
            "deltaconfirmed": "27",
            "deltadeaths": "0",
            "deltarecovered": "73",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "1411582",
            "state": "Delhi",
            "statecode": "DL",
            "statenotes": "[July 14]: Value for the total tests conducted has been reduced by 97008 in the state bulletin. Reason given : \"Reconciled with ICMR figures\". We have made the same change."
          },
          {
            "active": "873",
            "confirmed": "172568",
            "deaths": "3176",
            "deltaconfirmed": "62",
            "deltadeaths": "5",
            "deltarecovered": "96",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "168519",
            "state": "Goa",
            "statecode": "GA",
            "statenotes": ""
          },
          {
            "active": "184",
            "confirmed": "825196",
            "deaths": "10078",
            "deltaconfirmed": "14",
            "deltadeaths": "0",
            "deltarecovered": "13",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "814934",
            "state": "Gujarat",
            "statecode": "GJ",
            "statenotes": ""
          },
          {
            "active": "666",
            "confirmed": "770230",
            "deaths": "9660",
            "deltaconfirmed": "22",
            "deltadeaths": "2",
            "deltarecovered": "18",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "759904",
            "state": "Haryana",
            "statecode": "HR",
            "statenotes": ""
          },
          {
            "active": "2695",
            "confirmed": "210419",
            "deaths": "3535",
            "deltaconfirmed": "276",
            "deltadeaths": "3",
            "deltarecovered": "334",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "22",
            "recovered": "204167",
            "state": "Himachal Pradesh",
            "statecode": "HP",
            "statenotes": ""
          },
          {
            "active": "1229",
            "confirmed": "323499",
            "deaths": "4398",
            "deltaconfirmed": "77",
            "deltadeaths": "1",
            "deltarecovered": "135",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "317872",
            "state": "Jammu and Kashmir",
            "statecode": "JK",
            "statenotes": ""
          },
          {
            "active": "236",
            "confirmed": "347620",
            "deaths": "5131",
            "deltaconfirmed": "35",
            "deltadeaths": "0",
            "deltarecovered": "13",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "342253",
            "state": "Jharkhand",
            "statecode": "JH",
            "statenotes": ""
          },
          {
            "active": "22048",
            "confirmed": "2930529",
            "deaths": "37007",
            "deltaconfirmed": "1065",
            "deltadeaths": "28",
            "deltarecovered": "1486",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "26",
            "recovered": "2871448",
            "state": "Karnataka",
            "statecode": "KA",
            "statenotes": ""
          },
          {
            "active": "172250",
            "confirmed": "3702417",
            "deaths": "18743",
            "deltaconfirmed": "12294",
            "deltadeaths": "142",
            "deltarecovered": "18542",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "515",
            "recovered": "3510909",
            "state": "Kerala",
            "statecode": "KL",
            "statenotes": ""
          },
          {
            "active": "78",
            "confirmed": "20447",
            "deaths": "207",
            "deltaconfirmed": "0",
            "deltadeaths": "0",
            "deltarecovered": "0",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "20162",
            "state": "Ladakh",
            "statecode": "LA",
            "statenotes": ""
          },
          {
            "active": "39",
            "confirmed": "10294",
            "deaths": "51",
            "deltaconfirmed": "6",
            "deltadeaths": "0",
            "deltarecovered": "6",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "40",
            "recovered": "10164",
            "state": "Lakshadweep",
            "statecode": "LD",
            "statenotes": ""
          },
          {
            "active": "94",
            "confirmed": "792043",
            "deaths": "10515",
            "deltaconfirmed": "7",
            "deltadeaths": "1",
            "deltarecovered": "16",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "781434",
            "state": "Madhya Pradesh",
            "statecode": "MP",
            "statenotes": "[14 Oct'20]: 4469 confirmed cases and 4469 recoveries added in MP bulletin as reconciliation with private labs and hospitals\n[12 July'21] :1478 deceased cases have been added after reconciliation of deceased cases records from Home Isolation(208), Private Hospitals(762) and other districts data (508)"
          },
          {
            "active": "62452",
            "confirmed": "6396805",
            "deaths": "135139",
            "deltaconfirmed": "4145",
            "deltadeaths": "100",
            "deltarecovered": "5811",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "3470",
            "recovered": "6195744",
            "state": "Maharashtra",
            "statecode": "MH",
            "statenotes": "[Dec 16]:10,218 duplicate cases & other state cases removed from total cases.791 recovered cases also removed from total recovered cases while reconciling \n[Sep 9] :239 cases have been removed from the hospitalized figures owing to the removal of duplicates and change of addresses as per the original residence\n[Aug 15] : MH bulletin has reduced 819 confirmed cases in Mumbai and 72 confirmed cases from 'Other States' from the tally\n[Jun 16] : 1328 deceased cases have been retroactively added to MH bulletin.\n[Jun 20] : 69 deceased cases have been reduced based on state bulletin."
          },
          {
            "active": "6270",
            "confirmed": "108545",
            "deaths": "1716",
            "deltaconfirmed": "275",
            "deltadeaths": "6",
            "deltarecovered": "546",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "100559",
            "state": "Manipur",
            "statecode": "MN",
            "statenotes": "[Dec 14]:824 out of 980 recovered cases are backdated."
          },
          {
            "active": "3761",
            "confirmed": "72160",
            "deaths": "1235",
            "deltaconfirmed": "352",
            "deltadeaths": "8",
            "deltarecovered": "649",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "67164",
            "state": "Meghalaya",
            "statecode": "ML",
            "statenotes": ""
          },
          {
            "active": "8880",
            "confirmed": "48711",
            "deaths": "184",
            "deltaconfirmed": "249",
            "deltadeaths": "3",
            "deltarecovered": "954",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "39647",
            "state": "Mizoram",
            "statecode": "MZ",
            "statenotes": ""
          },
          {
            "active": "1153",
            "confirmed": "29195",
            "deaths": "605",
            "deltaconfirmed": "44",
            "deltadeaths": "4",
            "deltarecovered": "111",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "836",
            "recovered": "26601",
            "state": "Nagaland",
            "statecode": "NL",
            "statenotes": ""
          },
          {
            "active": "9020",
            "confirmed": "995433",
            "deaths": "7006",
            "deltaconfirmed": "868",
            "deltadeaths": "66",
            "deltarecovered": "1167",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "979407",
            "state": "Odisha",
            "statecode": "OR",
            "statenotes": "[July 12th] :20 non-covid deaths reported in state dashboard are included in the deceased count"
          },
          {
            "active": "892",
            "confirmed": "122331",
            "deaths": "1805",
            "deltaconfirmed": "49",
            "deltadeaths": "0",
            "deltarecovered": "86",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "119634",
            "state": "Puducherry",
            "statecode": "PY",
            "statenotes": ""
          },
          {
            "active": "557",
            "confirmed": "599972",
            "deaths": "16344",
            "deltaconfirmed": "30",
            "deltadeaths": "2",
            "deltarecovered": "48",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "583071",
            "state": "Punjab",
            "statecode": "PB",
            "statenotes": ""
          },
          {
            "active": "180",
            "confirmed": "953954",
            "deaths": "8954",
            "deltaconfirmed": "11",
            "deltadeaths": "0",
            "deltarecovered": "44",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "944820",
            "state": "Rajasthan",
            "statecode": "RJ",
            "statenotes": ""
          },
          {
            "active": "2068",
            "confirmed": "28726",
            "deaths": "361",
            "deltaconfirmed": "20",
            "deltadeaths": "0",
            "deltarecovered": "147",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "279",
            "recovered": "26018",
            "state": "Sikkim",
            "statecode": "SK",
            "statenotes": ""
          },
          {
            "active": "0",
            "confirmed": "0",
            "deaths": "0",
            "deltaconfirmed": "0",
            "deltadeaths": "0",
            "deltarecovered": "0",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "0",
            "state": "State Unassigned",
            "statecode": "UN",
            "statenotes": "MoHFW website reports that these are the 'cases that are being reassigned to states'. "
          },
          {
            "active": "20370",
            "confirmed": "2590632",
            "deaths": "34547",
            "deltaconfirmed": "1851",
            "deltadeaths": "28",
            "deltarecovered": "1911",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "2535715",
            "state": "Tamil Nadu",
            "statecode": "TN",
            "statenotes": "[June 29 2021]: TN has introduced a new district \"Mayiladuthurai\" in the bulletin and has assigned cases from Nagapattinam to the new district.\n[July 22]: 444 backdated deceased entries added to Chennai in TN bulletin.\n2 deaths cross notified to other states from Chennai and Coimbatore.\n1 patient died after turning negative for infection in Chengalpattu.\nThese cases have been added to TN deceased tally"
          },
          {
            "active": "7093",
            "confirmed": "652785",
            "deaths": "3845",
            "deltaconfirmed": "405",
            "deltadeaths": "3",
            "deltarecovered": "577",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "641847",
            "state": "Telangana",
            "statecode": "TG",
            "statenotes": "[July 27] : Telangana bulletin for the previous day is released on the next day. We will add the cases for Telangana against the date of release, as that is the convention that we are following for other states."
          },
          {
            "active": "1538",
            "confirmed": "81308",
            "deaths": "778",
            "deltaconfirmed": "52",
            "deltadeaths": "1",
            "deltarecovered": "223",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "63",
            "recovered": "78929",
            "state": "Tripura",
            "statecode": "TR",
            "statenotes": "[Aug 4]: Tripura bulletin for the previous day is released on the next day. We will add the cases for Tripura against the date of release, as that is the convention that we are following for other states."
          },
          {
            "active": "419",
            "confirmed": "1708965",
            "deaths": "22785",
            "deltaconfirmed": "17",
            "deltadeaths": "1",
            "deltarecovered": "36",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "1685761",
            "state": "Uttar Pradesh",
            "statecode": "UP",
            "statenotes": "[Jan 1]:As no bulletin was provided for 31'st Dec'20,its count has been combined with 1st Jan'21\n[Jan 9]:Due to reconcillation there are 1286 cases."
          },
          {
            "active": "342",
            "confirmed": "342606",
            "deaths": "7371",
            "deltaconfirmed": "18",
            "deltadeaths": "1",
            "deltarecovered": "54",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "6049",
            "recovered": "328844",
            "state": "Uttarakhand",
            "statecode": "UT",
            "statenotes": "[Oct 30]: Metric of capturing the testing data has switched to \"Samples Tested\" from \"Samples Collected\"\n[Jun 30th'21]:145 confirmed cases and 218 deceased cases added of previous days after reconciliation with district and ICMR portal"
          },
          {
            "active": "9832",
            "confirmed": "1539065",
            "deaths": "18312",
            "deltaconfirmed": "502",
            "deltadeaths": "9",
            "deltarecovered": "691",
            "lastupdatedtime": "13/08/2021 23:27:22",
            "migratedother": "0",
            "recovered": "1510921",
            "state": "West Bengal",
            "statecode": "WB",
            "statenotes": ""
          }
        ];
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
