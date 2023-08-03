import House from '../house'

const FeaturedHouse = ({ house }) => {
  if (house)
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured House</h3>
          <House house={house} />
        </div>
      </div>
    )
  return <div>No Featured house at the moment</div>
}

export default FeaturedHouse
