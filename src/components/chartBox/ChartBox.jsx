import { LineChartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import {ResponsiveContainer, LineChart, Line,Tooltip} from 'recharts'
import './chartBox.scss'
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  
const ChartBox = (props) => {

  return (
    <div className="chartBox" >
      <div className="boxInfo">
        <div className="title">
          <LineChartOutlined />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/" style={{color:props.color}}>
          View All
        </Link>
      </div>
      <div className="chartInfo">
        <div className="charts">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
            <Tooltip
            position={{x:10,y:-25}}
            contentStyle={{background:"transparent",border:"none"}}
            labelStyle={{display:"none"}}
            />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <h3 className="percentage" style={{color:props.percentage<0?'red':'green'}}>{props.percentage}%</h3>
          <span className="timeline">this month</span>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
