import { useState } from "react";

export default function FetchScreen() {
  const [lista, setLista] = useState([]);

  async function trazerLista() {
    const url = "https://api.tvmaze.com/shows";

    // eu solicito que o servidor me envie os dados
    const consulta = await fetch(url);
    // eu converto os dados recebidos em um objeto javascript JSON
    const dados = await consulta.json();

    console.log(dados);
  }

  return (
    <div className="container">
      <h1 className="text-center">Exercício Fetch</h1>
      <button onClick={() => trazerLista}></button>
    </div>
  );
}
