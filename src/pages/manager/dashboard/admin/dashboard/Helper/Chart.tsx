import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "01", thisYear: 5000, lastYear: 4500 },
  { month: "02", thisYear: 4200, lastYear: 4800 },
  { month: "03", thisYear: 5300, lastYear: 3900 },
  { month: "04", thisYear: 4100, lastYear: 4600 },
  { month: "05", thisYear: 6000, lastYear: 5000 },
  { month: "06", thisYear: 6300, lastYear: 4700 },
  { month: "07", thisYear: 5800, lastYear: 5200 },
  { month: "08", thisYear: 4900, lastYear: 5300 },
  { month: "09", thisYear: 5100, lastYear: 4000 },
  { month: "10", thisYear: 4200, lastYear: 5000 },
  { month: "11", thisYear: 5700, lastYear: 4600 },
  { month: "12", thisYear: 6200, lastYear: 3800 },
];

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} barSize={16} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Bar dataKey="lastYear" fill="#D3D3D3" radius={4} />
        <Bar dataKey="thisYear" fill="#007bff" radius={4} />
      </BarChart>
    </ResponsiveContainer>
  );
}
