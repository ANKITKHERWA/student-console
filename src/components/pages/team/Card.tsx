import Heading from '@/components/common/Heading'
import TeamCard from '@/components/common/TeamCard'
import { some, some2, some3 } from '@/components/helper/Helper1'
import React from 'react'

function Card() {
  return (
    <>
      <div>
        <Heading title="TC List ( 2 )" className="text-xl!" />
        <div className="flex flex-wrap gap-5 mt-4 items-center">
          {some.map((Item, index) => (
            <TeamCard
              key={index}
              avatar={Item.avatar}
              name={Item.name}
              icon={Item.icon}
              gender={Item.gender}
              tag={Item.tag}
              phone={Item.phone}
              email={Item.email}
              manages={Item.manages}
              totalSalons={Item.totalSalons}
              dotclass={Item.dotclass}
              tagclass={Item.tagclass}
              ganderclass={Item.ganderclass}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Heading title="RM List ( 4 )" className="text-xl!" />
        <div className="flex flex-wrap gap-5 mt-4 items-center">
          {some2.map((Item, index) => (
            <TeamCard
              key={index}
              avatar={Item.avatar}
              name={Item.name}
              icon={Item.icon}
              gender={Item.gender}
              tag={Item.tag}
              phone={Item.phone}
              email={Item.email}
              manages={Item.manages}
              totalSalons={Item.totalSalons}
              dotclass={Item.dotclass}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Heading title="FE List ( 10 )" className="text-xl!" />
        <div className="flex flex-wrap gap-5 mt-4 items-center">
          {some3.map((Item, index) => (
            <TeamCard
              key={index}
              avatar={Item.avatar}
              name={Item.name}
              icon={Item.icon}
              gender={Item.gender}
              tag={Item.tag}
              phone={Item.phone}
              email={Item.email}
              totalSalons={Item.totalSalons}
              dotclass={Item.dotclass}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Card
