import {React} from 'react'

const HeroFilter = ({filterAttr,setFilterAttr,filterCmplx,setFilterCmplx,search,setSearch}) => {

    const attrSelectHandler = (e) => {
        e === filterAttr ? setFilterAttr('') : setFilterAttr(e);
        console.log(e);
    }

    /*const cmplxSelectHandler = (e) => {
        e === filterCmplx ? setFilterCmplx('') : setFilterCmplx(e);
        console.log(e);
    }*/

  return (
    <div className="px-2 max-w-7xl w-full">
        <div className="flex flex-col md:flex-row gap-y-4 bg-gradient-to-r from-[#00000080] to-[#0000004d] bg-opacity-80 align-middle border-[#11111190] items-center justify-between w-full px-6 py-4 rounded-lg text-slate-400 text-md uppercase">

            <div className=" text-lg font-medium text-white">
                Filter Heroes
            </div>

            <div className="flex flex-row justify-center items-center align-middle gap-x-3">
                <div className="herogridpage_SelectorLabel_1Y7hg">
                    Attribute
                </div>
                <div className="flex flex-row">
                    <div 
                        className={`filter ${filterAttr === "str" ? "filter-selected" : ""} `} 
                        onClick={() => attrSelectHandler("str")} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png')"}} 
                    />
                    <div 
                        className={`filter ${filterAttr === "agi" ? "filter-selected" : ""} `} 
                        onClick={() => attrSelectHandler("agi")} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png')"}}
                    />
                    <div 
                        className={`filter ${filterAttr === "int" ? "filter-selected" : ""} `} 
                        onClick={() => attrSelectHandler("int")} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png')"}}
                    />
                    <div 
                        className={`filter ${filterAttr === "all" ? "filter-selected" : ""} `} 
                        onClick={() => attrSelectHandler("all")} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-uni-active.png')"}}
                    />
                </div>
            </div>

            {/*<div className="herogridpage_SpecificFilterContainer_30qnj flex flex-row justify-center items-center align-middle gap-x-3">
                <div className="herogridpage_SelectorLabel_1Y7hg">
                    Complexity
                </div>
                <div className="flex flex-row">
                    <div 
                        className={`filter ${filterCmplx == 1 || filterCmplx == 2 || filterCmplx == 3 ? "filter-selected" : ""} `} 
                        onClick={() => cmplxSelectHandler(1)} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')"}}
                    />
                    <div 
                        className={`filter ${filterCmplx == 2 || filterCmplx == 3 ? "filter-selected" : ""} `} 
                        onClick={() => cmplxSelectHandler(2)} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')"}}
                    />
                    <div 
                        className={`filter ${filterCmplx == 3 ? "filter-selected" : ""} `} 
                        onClick={() => cmplxSelectHandler(3)} 
                        style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')"}}
                    />
                </div>
            </div>*/}

            <div className="bg-[#25282A] flex flex-row items-center py-2 px-3 gap-x-3 rounded-md">
                <div className=" w-6 h-6 bg-cover bg-no-repeat" style={{backgroundImage: "url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/search.svg')"}}></div>
                
                <input 
                    type="text" 
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                    }}
                    className="bg-[#25282A] outline-none focus:bg-[#454c50] py-1 px-2 text-white"
                />
            </div>
        </div>
    </div>
  )
}

export default HeroFilter