import { useEffect, useState, useMemo } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './main-page.css'
import Header from './header'
import FeaturedHouse from './featured-house'
import SearchResults from '../search-results'
import HouseFilter from './house-filter'
import HouseFromQuery from '../house/house-from-query'

function App() {
  const [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch('/houses.json')
      const houses = await rsp.json()
      setAllHouses(houses)
    }
    fetchHouses()
  }, [])

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length)
      return allHouses[randomIndex]
    }
  }, [allHouses])

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses} />}
          ></Route>
          <Route path="/house/:id" element={<HouseFromQuery allHouses={allHouses} />}></Route>
          <Route path="/" element={<FeaturedHouse house={featuredHouse} />}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
