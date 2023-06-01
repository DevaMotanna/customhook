import { useEffect, useState } from "react";

export function Todos() {
  const data = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </div>
  );
}

function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return data;
}
