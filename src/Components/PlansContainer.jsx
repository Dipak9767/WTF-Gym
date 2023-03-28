import React from 'react'

const PlansContainer = ({ plans }) => {
    return (
        <div className='plan-container'>
            <h1>Choose Membership</h1>
            <div className='plans'>
                {
                    plans.map((plan,idx) => (
                        <div className="plan-card">
                            
                            <div className="plan-info">
                                <p>plan {idx+1}</p>
                                <h5><img src="https://wtfup.me/assets/public/logo-final-white-1@2x.png" alt="" />{plan.plan_name}</h5>
                            </div>
                            <span className="price">${plan.plan_price}</span>
                        </div>))
                }
            </div>
        </div>
    )
}

export default PlansContainer