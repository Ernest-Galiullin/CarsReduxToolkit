import {useSelector} from 'react-redux'

export default function BrandFilter(props) {
  const {selectedBrand} = useSelector(state => state.cars)

  const renderBrandOptions = ['', 'BMW', 'VW', 'Audi'].map(brandName => (
    <option key={brandName} value={brandName}>
      {brandName ? brandName : 'All'}
    </option>
  ))
  return (
    <div className="brand-filter">
      <div>Filter by Brand :</div>
      <select
        id="brand-input"
        value={selectedBrand}
        onChange={props.handleBrandChange}>
        {renderBrandOptions}
      </select>
    </div>
  )
}
