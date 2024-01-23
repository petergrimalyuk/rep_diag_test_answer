import {React, useEffect,useReducer,useState} from "react";
import { Bar, Doughnut, Pie } from 'react-chartjs-2';
import {datachart, optionsexample, datapie, configpie, configstacked, datastacked,ChartpieCreateData,ChartpieCreateOption, ex_data,ex_conf} from "../components/charts";
import  {useMemo} from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../constants/MOCK_DATA.json'
import {COLUMNS} from '../constants/Columns'
import ErrClassific_Mock from '../constants/Errclassific_MockData.json'
import {Errclassific_Columns} from '../constants/Errclassific_Columns'
import First_table from "../tables/first_table"
import Second_table from "../tables/second_table";

const DashBoardpage = () => {

const [databe, setData] = useState({
  labelschartbe:[""],
  labelspiebe: [""],
  labelsstackedbe: [""],
  datapiebe: [0],
  datastackedbe: [0],
  res: ""
});
console.log("DATABE : ", databe);
/*const [datingpie,setDatingpie] = useState(datapie);
const [datasetspie,setDatasetsPie] = useState(configpie.data.datasets)
const [configgingpie,setConfiggingpie] = useState(configpie);
let datasetspiee = datapie.datasets;
let datapiee = datapie;
let configpiee = configpie;*/

useEffect(() => {
  // Using fetch to fetch the api from 
  // flask server it will be redirected to proxy
  //fetch("/").
  fetch("http://127.0.0.1:5000").then((res) =>
      res.json().then((data) => {
          // Setting a data from api
          /*datasetspiee = data.datapiebe;
          datapiee.datasets = datasetspiee;
          datapiee.labels = data.labelspiebe;
          configpiee.data = datapiee;*/
          setData({
              labelschartbe:data.labelschartbe,
              labelspiebe: data.labelspiebe,
              labelsstackedbe: data.labelsstackedbe,
              datapiebe: data.datapiebe,
              datastackedbe: data.datastackedbe,
              res: data.res,
              
          });
          /*setDatasetsPie({data:databe.datapiebe});
          setDatingpie({datasets:datasetspie,
            labels:data.labelspiebe});
          setConfiggingpie({data:datingpie});
          datapie.datasets =datingpie;
          datapie.labels= databe.labelspiebe;
          configpie.data= datapie;*/
          
      })
  );
  
}, []);

const datapiee = ChartpieCreateData(databe.labelspiebe,databe.datapiebe);
const configpiee = ChartpieCreateOption(databe.datapiebe)


const columns = useMemo(() => Errclassific_Columns, [])
const data = useMemo(() => ErrClassific_Mock, [])
const sec_column = useMemo(() => COLUMNS, [])
const sec_data = useMemo(() => MOCK_DATA, [])
const sec_tableInstance = useTable({
  columns,
  data
})
    const tableInstance = useTable({
        columns,
        data
    })
    const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow} = tableInstance
    return (<>

        <div className="Dashboard-container">
        <div className="Title">
       
            <h1 id="left">Дашборд</h1>
            <h1 id="right">Модель здоровья клиента</h1>
         
            </div>
        <div className="Dashboard">
        <div class = "left-side">
        <div className="Prognoz">
          <h>Прогноз на текущий период</h>
          <div class = "Prognoz-bar">
          <h1>1000 клиентов в текущем месяце</h1>
          <div class = "container-bar">
          <Bar options={configstacked} data={datastacked} height="100%" width="100%"/>
          <div class="bar-statistics"><li> Продлят</li><li> Возможно продлят</li><li> Не продлят</li></div>
          </div>
        </div>
        </div>
        <div className="Claster"> 
        <h>Кластер</h> <br></br>
        <p>Возможно продлят {parseInt(databe.datapiebe.reduce((acc, number) => acc + number))} человек</p>
            {/* <Pie options={configpie} data={datapie} /> */}
            <div class = "graph-statistics">
            <div class = "pie-change">
            <Doughnut options={configpiee} data={datapiee} width="400" height="75"/>
            </div>
            <div class = "pie-statistics">
              <li> Нужно позвонить (200)</li>
              <li> Предоставить скидку (200)</li>
              <li> Предложить другую услугу (200)</li>

            </div>
            </div>

            <First_table></First_table>
        <div class = "hide-table"><p>Свернуть</p></div>
        </div>
        </div>  
        <div class = "right-side">
        <div className="Statistics">
          <h>Статистика за прошедший период</h>
          <div className = "Statistics-Options">
            <li>
              <p>Точность</p>
              <h>87%</h>
            </li>
            <li>
            <p>Эконом. эффект</p>
              <h>345 678 ₽</h>
            </li>
            <li>
            <p>Основные причины оттока</p>
              <div>
              <p>Высокая цена</p> <h>12%</h> <p>Расписание</p> <h>82%</h>
              </div>
            </li>
          </div>
          <div class = "Result-Communication">
            <p>Результат коммуникации</p>
          <Bar options={optionsexample} data={datachart}  />
            <div class = "Result-bar-communication">
            <li> Нужно позвонить</li>
              <li> Предоставить скидку</li>
            </div>
          </div>
          <div className="Err-classifications">
        <h>Ошибочные классификации</h>
        <p>234 человека перестали использовать по неизвестным алгоритму причинам</p>
     <Second_table></Second_table>
      </div>
        </div>
        
        </div>
        </div>
     
        <div>
          <h2>s={databe.res}</h2>
        </div>
        </div>
        </>
    )
}

export {DashBoardpage}

/**/