import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

  const students = [
      { id: 1, name: "John", math: 85, chemistry: 78, physics: 92 },
      { id: 2, name: "Alice", math: 90, chemistry: 88, physics: 75 },
      { id: 3, name: "Bob", math: 78, chemistry: 82, physics: 80 },
      { id: 4, name: "Sarah", math: 92, chemistry: 95, physics: 88 },
      { id: 5, name: "David", math: 87, chemistry: 76, physics: 90 },
    ];



  return (
    <div>
      <LChart width={800} height={400} data={students} >
        <XAxis ></XAxis>
        <YAxis ></YAxis>

        <Line dataKey="math" stroke="red" />
        <Line dataKey="chemistry" stroke="green" />
        <Line dataKey="physics" stroke="yellow" />
      </LChart >
      
    </div>
  );
};

export default LineChart;