import React from "react";
import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { lastFourMonth } from "./inf";

function ChartDashbord() {
  return (
    <ResponsiveContainer width="100%" height="100%" aspect={3 / 1}>
      <AreaChart
        data={lastFourMonth}
        style={{
          width: "100%",
          height: "100%",
          marginTop: "80px",
        }}
      >
        <XAxis dataKey="name" stroke="#7b2cbf" />
        <CartesianGrid stroke="#7b2cbf" strokeDasharray="5 5" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#7b2cbf"
          fill="#7b2cbf"
          activeDot={{ r: 8 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default React.memo(ChartDashbord);
