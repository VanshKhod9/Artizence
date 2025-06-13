import React from 'react'
import './service.css'

function service() {
  return (
    <div className='service-container'>
        <div className='service-headings'>
            <h2>Our Services</h2>
            <p>We specialize in cutting-edge AI solutions through</p>
        </div>
        <div className='service-main'>
            <div className='services'>
                <img src="/Group 79.png" alt="" className='service-logo'/>
                <h3>AI Agent Development</h3>
                <p>We build smart, scalable AI agents using SAS and custom frameworks. Designed to automate and enhance business processe</p>
            </div>
            <div className='services'>
                <img src="/Group 79-2.png" alt="" className='service-logo'/>
                <h3>Results as a Service</h3>
                <p>Get AI-powered outcomes without managing infrastructure. We deliver trained models and predictions on-demand.</p>
            </div>
            <div className='services'>
                <img src="Group 79-3.png" alt="" className='service-logo'/>
                <h3>AI Consulting</h3>
                <p>Expert guidance to plan, build, and scale AI systems. Tailored strategies for startups to enterprises.</p>
            </div>
        </div>
        <button className='service-button'>See All the Services</button>
    </div>
  )
}

export default service
