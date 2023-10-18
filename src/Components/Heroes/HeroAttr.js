import React from 'react'
import Agility from '../../Assets/Attributes/hero_agility.png'
import Strength from '../../Assets/Attributes/hero_strength.png'
import Intelligence from '../../Assets/Attributes/hero_intelligence.png'
import Universal from '../../Assets/Attributes/hero_universal.png'

const HeroAttr = ({hero}) => {
  return (
    <>
        <img className="w-6 h-6 sm:w-7 sm:h-7" alt="attribute-icon" src= {
            hero.primary_attr === "str" 
                ? Strength 
                : hero.primary_attr === "agi" 
                    ? Agility
                    : hero.primary_attr === "int"
                        ? Intelligence
                        : Universal
        } />
    </>
  )
}

export default HeroAttr