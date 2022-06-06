import {useSelector} from 'react-redux'
import CarsItem from './CarsItem'
export default function CarsList() {
  const {filtredCars} = useSelector(state => state.cars)

  return (
    <div id="car-list">
      {filtredCars.map(item => (
        <CarsItem key={item.url} item={item} />
      ))}
    </div>
  )
}
