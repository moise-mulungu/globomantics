import { useParams } from 'react-router-dom'
import House from './'

const HouseFromQuery = ({ allHouses }) => {
  const { id } = useParams()
  const house = allHouses.find((h) => h.id === parseInt(id, 10))

  if (!house) return <div>House not found</div>

  return (
    // <div>
    //   <h3>
    //     {house.country} - {house.address}
    //   </h3>
    //   <h5>
    //     {new Intl.NumberFormat('en-US', {
    //       style: 'currency',
    //       currency: 'USD',
    //     }).format(house.price)}
    //     - {house.likes} people booked this house
    //   </h5>
    //   <img src={`/images/${house.photo}.jpeg`} alt="House" />
    // </div>
    <House house={house} />
  )
}

export default HouseFromQuery
