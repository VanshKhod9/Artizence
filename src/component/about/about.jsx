import React from 'react'
import './about.css'

function about() {
  return (
    <div className='about-container'>
        <div className='heading-trust'>
            <h2>Trusted by 5,000+ Companies Worldwide</h2>
        </div>
        <div className='trusts-container'>
            <img src="/google-2015 1.png" alt="" className='trust1'/>
            <img src="/Vector.png" alt="" className='trust'/>
            <img src="/Vector (1).png" alt="" className='trust2'/>
            <img src="/Vector (2).png" alt="" className='trust3'/>
            <img src="/Vector (3).png" alt="" className='trust'/>
            <img src="/Vector (4).png" alt="" className='trust4'/>
        </div>
        <div className='alltext'>
            <p className='text1'>About <span>Artizence</span></p>
            <p className='text2'>Everything you need to know about us</p>
            <p className='text3'>Founded in 2018, Artizence has quickly established itself as a leader in AI-driven business solutions. We combine deep technical expertise with industry knowledge to create transformative technologies that solve complex business challenges.</p>
            <p className='text3'>Our team of data scientists, engineers, and business strategists work collaboratively to deliver solutions that not only meet current needs but anticipate future opportunities. We believe in the power of AI to create meaningful change across industries.</p>
            <p className='text3'>Specializing in AI-driven services, we offer AI/ML Model Development, NLP, Computer Vision, Generative AI, LLM Training, and Custom Software Solutions. Our expert team leverages deep learning and advanced technology to transform ideas into impactful, intelligent solutions.</p>
            <a href="" className='text4'>Learn more</a>
        </div>
    </div>
  )
}

export default about
