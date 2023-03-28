import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Filter from '../Components/Filter'
import GymsContainer from '../Components/GymsContainer'
import { GymContext } from '../Context'

const Home = () => {

  const [allGyms, setAllGyms] = useState([])
  const [cities, setCities] = useState([])
  const [gyms, setGyms] = useState([])
  const { setTerms } = useContext(GymContext)

  const filterByCity = (city) => {
    if (city === 'All') {
      setGyms(allGyms)
      return;
    }
    const data = allGyms.filter((item) => item.city.toUpperCase() === city.toUpperCase())
    setGyms(data)
  }

  const fetchGyms = async () => {
    try {
      const res = await axios.get('https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231')
      setAllGyms(res.data.data)
      setGyms(res.data.data)
      setTerms(res.data.terms)

      const citiesResponse = await axios.get('https://devapi.wtfup.me/gym/places')
      setCities(citiesResponse.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchGyms()
  }, [])

  return (
    <div className='home-container'>
      <Filter cities={cities} filterByCity={filterByCity} />
      <GymsContainer gyms={gyms} />
    </div>
  )
}

export default Home