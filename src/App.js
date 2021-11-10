import './App.css';
import Header from './Header'
import SearchResults from './SearchResults';
import {useState} from 'react'
import Data from './Data'


function App() {
  const [modoDark, setModoDark] = useState(false);
  const [search, setSearch] = useState("");
  const [clic, setClic] = useState(false);
  const [data, setData] = useState([]);
  const [trendData, setTrendData] = useState([]);
  const [autoComData, setAutoComData] = useState([]);
  const [isTrend, setIsTrend] = useState(false)

  return (
    <div className={`App ${modoDark && `dark`}`}>
      <Header  modoDark={modoDark} setModoDark={setModoDark} search={search} setSearch={setSearch} clic={setClic} setClic={setClic} autoComData={autoComData}/>
      <SearchResults modoDark={modoDark} setModoDark={setModoDark} data={data} trendData={trendData} clic={clic} search={search} isTrend={isTrend}/>
      <Data search={search} clic={clic} setClic={setClic} setSearch={setSearch} data={data} setData={setData} setTrendData={setTrendData} setAutoComData={setAutoComData} setIsTrend={setIsTrend} />
    </div>
  );
}

export default App;
