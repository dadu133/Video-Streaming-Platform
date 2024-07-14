import React from 'react'

export default function Pricing() {
  return (
    <>
      <h2 style={{ color: '#fff', fontSize: "3rem", margin: "5rem" }}>Features and Pricing Section</h2>
      <div className='pricing-section' style={{ display: "flex", margin: '5rem' }} id='price'>
        <div className='price-card'>
          <h3>Free 0$</h3>
          <ul>
            <li>Access to our entire content library</li>
<li>Stream on 1 device at a time</li>
<li>Standard Definition (SD) quality</li>
<li>

Personalized recommendations
</li>
          </ul>
        </div>
        <div className='price-card'>
          <h3>Basic 10$</h3>
          <ul>
<li>Stream on 2 device simultaneously</li>
<li>High Definition (HD) quality</li>
<li>Download content for offline viewing</li>
          </ul>
        </div>
        <div className='price-card'>
          <h3>Advanced 50$</h3>
          
          <ul>
<li>Stream on 4 devices simultaneously</li>
<li>Ultra High Definition (UHD) and 4K quality</li>
          </ul>
        </div>
      </div>
      <div className='pricing-container2'>

        <h4>Payment Methods</h4>
        <p>We accept all major credit cards, PayPal, and other convenient payment methods. Upgrade, downgrade, or cancel your subscription anytime with no hidden fees.</p>
      </div>
    </>
  )
}
