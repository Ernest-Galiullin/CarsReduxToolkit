import React from 'react'

export default function CarsItem({item}) {
  return (
    <div className="car-item">
      <div className="car-name">{`Name: ${item.name}`}</div>
      <div className="car-year">{`Year: ${item.release_year}`}</div>
      <img className="car-image" src={item.url} alt="car-img" />
    </div>
  )
}
