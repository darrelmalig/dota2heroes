import React from 'react'
import HeroAttr from './HeroAttr'

const HeroCards = ({hero}) => {

    const heroImage = "http://cdn.dota2.com/apps/dota2/images/heroes/"+hero.name.replace('npc_dota_hero_', "")+"_lg.png";

  return (
    <a href={`https://www.dota2.com/hero/${hero.localized_name.toLowerCase().replace(" ","")}`} className=" w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-1.5 h-full" target="_blank" rel="noreferrer" >
        <li className="hero-item flex flex-grow justify-start items-end w-full h-full aspect-video bg-cover bg-center rounded-sm overflow-hidden list-none group" key={hero.id} style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="hero-gradient flex items-end h-4/6 w-full px-2 py-2 opacity-0 rounded-br group-hover:opacity-100 ">
                <div className="flex flex-row gap-1 md:gap-2 items-center">
                    <HeroAttr
                        hero={hero}
                    />
                    <p className="text-white text-xs sm:text-sm font-semibold leading-tight">{hero.localized_name.toUpperCase()}</p>
                    <p className="text-slate-600 text-sm">aaa</p>
                </div>
            </div>
        </li>
    </a>
  )
}

export default HeroCards