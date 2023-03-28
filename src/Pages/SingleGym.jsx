import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import PlansContainer from '../Components/PlansContainer'
import { GymContext } from '../Context'

const SingleGym = () => {
  const { gymInfo , terms } = useContext(GymContext)
  const [plans , setPlans] = useState([])

  const fetchPlans = async () => {
    try {
      const res = await axios.post('https://devapi.wtfup.me/gym/plan?gym_id=GLKdIYAWDS2Q8')
      setPlans(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPlans()
  }, [])

  return (
    <div className='container'>
      <div className="left">
        <div className="description">
          <h3>Description</h3>
          <p>{gymInfo.description}</p>
        </div>
        <div className="facilities">
          <h3>Facilities</h3>
          <div>
            {
              gymInfo.benefits.map((item) => (
                <p>{item.name}</p>
              ))
            }
          </div>
        </div>
        <div className="terms">
          <h3>Why to choose WTF</h3>
          <div className='terms-container'>
           { 
            terms.map((term)=>(
              <div className='term-card' key={term.id}>
              <img src={term.icon} alt="" />
              <h5>{term.name}</h5>
            </div>
            ))
           
            }
          </div>
        </div>
      </div>
      <div className="right">
        <PlansContainer plans={plans}/>
      </div>
    </div>
  )
}

export default SingleGym