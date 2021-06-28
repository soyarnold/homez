import { useEffect, useState } from "react";
import HomeCard from "./HomeCard";

let url =
  "https://us-real-estate.p.rapidapi.com/sold-homes?state_code=CA&city=San%20Francisco&offset=0&sort=sold_date&max_sold_days=30&price_min=1000000";

export default function UseFetch() {
  const [homeData, setHomeData] = useState(null);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "4aaa747700msh335815e686ca537p19e0edjsnfe10fcd4c086",
          "x-rapidapi-host": "us-real-estate.p.rapidapi.com",
        },
      });

      if (!res.ok) {
        console.log("status: ", res.status);
        await fetchData();
      }
      const { data } = await res.json();
      const { results } = data;
      setHomeData(results);
      const cityArray = results.map((result) => result.location.address.city);
      setCities(cityArray);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {cities.length > 0 && <HomeCard homeData={homeData} />}
    </div>
  );
}
