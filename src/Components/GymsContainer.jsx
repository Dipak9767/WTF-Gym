import React, { useContext } from 'react'
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { GymContext } from '../Context';

const GymsContainer = ({ gyms }) => {

  const { setGymInfo } = useContext(GymContext)
  const navigate = useNavigate()
  const singleGym = (gym) => {
    setGymInfo(gym)
    navigate('/gym')
  }
  return (
    <div className='gyms-container'>
      {
        gyms.map((gym) => (
          <div className="gym" key={gym.user_id}>
            <div className="logo">
              <h2>Free</h2>
            </div>
            <div className="info">
              <div className="upper" onClick={() => singleGym(gym)}>
                <h3 className='title'>{gym.gym_name}</h3>
                <div className="ratings">
                  <StarIcon style={{ fontSize: '20px' }} />
                </div>
                <p className="address">{`${gym.address1} , ${gym.address2}`}</p>
                <p className="distance">{`${gym.distance_text} , ${gym.duration_text}`}</p>
              </div>
              <div className="lower">
                <p className="price">{+gym.plan_price ? ("$" + gym.plan_price) : '$ 222 per month'}</p>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))
      }

    </div>
  )
}

export default GymsContainer