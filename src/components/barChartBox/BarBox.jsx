import "./barBox.scss";
import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

const BarBox = (props) => {
  return (
    <div className="barBox">
      <h1>{props.title}</h1>
      <div className="charts">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarBox;
