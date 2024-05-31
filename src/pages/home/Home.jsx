import React from 'react'
import "./home.scss"
import TopBox from '../../components/topbox/Topbox'
import ChartBox from '../../components/chartBox/ChartBox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import BarBox from '../../components/barChartBox/BarBox'
import PieChart from '../../components/pieChart/PieChart'

const Home = () => {
  return (
    <div className='home'>
      <div className="box box1"><TopBox/></div>
      <div className="box box2"><ChartBox {...chartBoxUser}/></div>
      <div className="box box3"><ChartBox {...chartBoxProduct}/></div>
      <div className="box box4"><PieChart/></div>
      <div className="box box5"><ChartBox {...chartBoxRevenue}/></div>
      <div className="box box6"><ChartBox {...chartBoxConversion}/></div>
      <div className="box box7">Box7</div>
      <div className="box box8"><BarBox {...barChartBoxRevenue}/></div>
      <div className="box box9"><BarBox {...barChartBoxVisit}/></div>
    </div>
  )
}

export default Home