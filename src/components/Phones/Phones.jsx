import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  
  XAxis,
  YAxis,
  
  Tooltip,
} from "recharts";

import { Audio } from "react-loader-spinner";
const Phones = () => {
  const [phone, setPhone] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });

        setPhone(phoneWithFakeData);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      
       { loading && 
       <div>
         <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
         />
       </div>}
      
      <BarChart width={1200} height={400} data={phone}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
