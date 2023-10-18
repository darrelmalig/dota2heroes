import {React,useState,useEffect} from 'react'
import './Heroes.css'
import api from '../../api/opendotaAPI'
import HeroCards from './HeroCards'

const Heroes = ({search,filterAttr}) => {
  
    const [heroes, setHeroes] = useState([]);
    const [filteredHeroes,setFilteredHeroes] = useState(heroes);
    const [dataFetched,setDataFetched] = useState(true);
    
    //useEffect for fetching data using Axios
    useEffect(() => {
  
      const fetchHeroes = async () => {
        try{
          const response = await api.get('/heroStats');
          console.log(response.data);
          setHeroes(response.data);
          setDataFetched(true);
        }catch(err){
          if(err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else {
            console.log(`Error: ${err.message}`);
          }
        }
      }
  
      fetchHeroes();
    },[]);
    
    useEffect(() => {
      const filtered = heroes.filter(hero => 
        ((hero.localized_name).toLowerCase())
        .includes(search.toLowerCase()) &&
        ((hero.primary_attr).toLowerCase())
        .includes(filterAttr.toLowerCase())
      )
      setFilteredHeroes(filtered);
    },[search,filterAttr,heroes]);
    
  return (
    <>
    <div className=" flex flex-col items-center justify-center h-auto w-full px-3">
        {dataFetched 
          ? filteredHeroes.length
            ? (
              <ul className="flex flex-row flex-wrap flex-grow align-middle justify-center w-full max-w-7xl relative py-5">
                {
                    filteredHeroes.map((hero, index) => (
                        <HeroCards
                            key={index}
                            hero={hero}
                        />
                    ))
                }
            </ul>
            )
            : search !== "" && filterAttr !== "" 
              ? (
                <p className="text-4xl font-semibold text-white p-5">No Heroes match your filter</p>
              ) 
              : <p className="text-4xl font-semibold text-white p-5">Loadingg..</p>
          :(
            <p className="text-4xl font-semibold text-white p-5">Failed to fetch Dota 2 Heroes</p>
          )
        }     
    </div>
    </>
  )
}

export default Heroes