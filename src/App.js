import './App.css';
import {useState} from 'react'
import Heroes from './Components/Heroes/Heroes';
import HeroFilter from './Components/Heroes/HeroFilter';
import Footer from './Components/Heroes/Footer';

function App() {


  const [search,setSearch] = useState('');

  const [filterAttr,setFilterAttr] = useState('');
  const [filterCmplx,setFilterCmplx] = useState('');

  return (
    <main className="App flex flex-col justify-between items-center align-top min-h-screen">
      <div className="flex flex-col items-center align-top">
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
    </div>
      <Footer />
    </main>
  );
}

export default App;
