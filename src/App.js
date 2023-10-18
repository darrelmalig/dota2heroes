import './App.css';
import {useState} from 'react'
import Heroes from './Components/Heroes/Heroes';
import HeroFilter from './Components/Heroes/HeroFilter';

function App() {


  const [search,setSearch] = useState('');

  const [filterAttr,setFilterAttr] = useState('');
  const [filterCmplx,setFilterCmplx] = useState('');

  return (
    <main className="App flex flex-col justify-start items-center align-top min-h-screen">
      <h2 className="text-6xl rounded-b-3xl font-medium text-white px-10 py-3 pt-10 font-agency-fb">CHOOSE YOUR HERO</h2>
      <h4 className="text-xl text-white max-w-6xl w-full mb-10 px-10">From magical tacticians to fierce brutes and cunning rogues, Dota 2's hero pool is massive and limitlessly diverse. Unleash incredible abilities and devastating ultimates on your way to victory.</h4>
      <HeroFilter
          filterAttr={filterAttr}
          setFilterAttr={setFilterAttr}
          filterCmplx={filterCmplx}
          setFilterCmplx={setFilterCmplx}
          search={search}
          setSearch={setSearch}
        />
      <Heroes
        search={search}
        filterAttr={filterAttr}
      />
    </main>
  );
}

export default App;
