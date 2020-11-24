import React from "react";

import {
  AreaChart,
  XAxis,
  Area,
  LabelList,
  ResponsiveContainer
} from "recharts";

export default function DayGraph({dayDetail}) {

  return (
    <div style={{width: "100%", height: 300}}>
      <ResponsiveContainer>
        <AreaChart
          width={1000}
          height={200}
          data={dayDetail}
          margin={{top: 30, right: 50, left: 50, bottom: 10}}
        >
          <XAxis dataKey="dt_txt" />

          <Area type="monotone" dataKey="temp">
            <LabelList dataKey="label" position="top" />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
