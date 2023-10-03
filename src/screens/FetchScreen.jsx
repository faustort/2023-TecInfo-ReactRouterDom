import { useEffect, useState } from "react";

export default function FetchScreen() {
  const [lista, setLista] = useState([]);

  function trazerLista(){
    const url = "https://api.tvmaze.com/search/shows";
  }

  return (
    <div className="container">
      <h1 className="text-center">Exercício Fetch</h1>
    </div>
  );
}
