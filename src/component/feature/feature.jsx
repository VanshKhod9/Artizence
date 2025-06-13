import React, { useState } from 'react'
import './feature.css'

function feature() {
  const blogs = [
    { img: '/blog.png'},
    { img: '/blog.png'},
    { img: '/blog.png'},
    { img: '/blog.png'},
    { img: '/blog.png'},
    { img: '/blog.png'},
  ];

  const [startIdx, setStartIdx] = useState(0);

  const handlePrev = () => {
    setStartIdx((prev) => (prev === 0 ? blogs.length - 3 : prev - 3));
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 3 >= blogs.length ? 0 : prev + 3));
  };

  return (
    <div className='feature-container'>
        <div className='feature-headline'>
            <h2>What Sets Us Apart</h2>
            <p>We don't just build models. We build meaningful creative engines. Giving you Not-so-secret reasons why <br />brands love us.</p>
        </div>
        <div className= 'feature-background'>
            <img src="/Desktop.png" alt="" />
        </div>
        <div className='image5'>
            <img src="/Frame 2300.png" alt="" />
        </div>



        <div className='project-container'>
            <div className='project-title'>
                <h2>Curated Creations: Where <span>Vision Meets Execution</span></h2>
                <p>Our portfolio reflects the fusion of artistry and intelligence. Every project is crafted to not only solve a <br />problem but to leave an impression.</p>
            </div>
            <div className='artizence-work'>
                <img src="/Section-2.png" alt="" />
                <div className='smallscreen'>
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                    <img src="/smalldesktop.png" alt="" />
                </div>
            </div>
            <div className='Row'>
                <img src="/Row.png" alt="" />
            </div>
        </div>
        <div className='insight-container'>
            <div className='insight-heading'>
                <h1>Company <br />Insight</h1>
                <p>We implement community-driven <br />programs that address the unique <br />needs of those we serve.</p>
            </div>
            <div className='insight-main'>    
                <div className='insight-main-text'>
                    <img src="/insight1.jpg" alt="" />
                    <div className='insight-text'>
                        <h4>The Future of Generative AI in Business</h4>
                        <p>Explore how generative AI is transforming business operations and creating new opportunities for innovation.Explore how generative AI is transforming business operations and creating new opportunities for innovation.</p>
                    </div>
                     </div>
            </div>
        </div>




        <div className='people-services'>

            <div className='people-headline'>
                <h2>People use Our Services</h2>
                <p>what our customers say's about us</p>
            </div>
            <div className='service-info'>
                <div>
                    <img src="/group.png" alt="" />
                    <h2>People use Our Services</h2>
                    <p>"Thanks to their software solution, the client saw a remarkable efficiency increase, allowing them to complete 14 days of manual work in just two days."</p>
                    <j>India</j>
                </div>
                <div>
                    <img src="/group.png" alt="" />
                    <h2>People use Our Services</h2>
                    <p>"Thanks to their software solution, the client saw a remarkable efficiency increase, allowing them to complete 14 days of manual work in just two days."</p>
                    <j>India</j>
                </div>
                <div>
                    <img src="/group.png" alt="" />
                    <h2>People use Our Services</h2>
                    <p>"Thanks to their software solution, the client saw a remarkable efficiency increase, allowing them to complete 14 days of manual work in just two days."</p>
                    <j>India</j>
                </div>
                
            </div>
        </div>


        <div className='blog-container'>
          <h2 className="blog-title">Our Blogs</h2>
          <p className="blog-subtitle">See more about us in our blogs.</p>
          <div className="blog-slider">
            <button className="arrow-left" onClick={handlePrev}>&lt;</button>
            <div className="blog-cards">
              {blogs.slice(startIdx, startIdx + 3).map((blog, idx) => (
                <div className="blog-card" key={startIdx + idx}>
                  <img className="blog-image" src={blog.img} alt="Blog" />
                </div>
              ))}
            </div>
            <button className="arrow-right" onClick={handleNext}>&gt;</button>
          </div>
        </div>




        <div className='contact-container'>
            <div className='contact-headline'>
                <h2>How does it actually work?</h2>
                <p>Helping you make your idea an reality can be done in simple <br />steps. You’re just 3 steps away from your reality!</p>
            </div>
            <div className='all-contact'>
                <div>
                    <p>Contact Us</p>
                    <h2>Fill out the form & schedule a call.</h2>
                    <p>Start by telling us about your vision. Fill out our quick contact form, then book a Zoom slot that works for you. Within 24 hours, our team connects to align goals and expectations.</p>
                    <button className='button1'>Schedule Your Call</button>
                </div>
                <img src="/iPhone.png" alt="" className='iphone'/>
            </div>
            <div className='all-contact1'>
                <img src="/Macbook.png" alt="" className='macbook'/>
                <div>
                    <p>Contact Us</p>
                    <h2>Fill out the form & schedule a call.</h2>
                    <p>Start by telling us about your vision. Fill out our quick contact form, then book a Zoom slot that works for you. Within 24 hours, our team connects to align goals and expectations.</p>
                    <button className='button1'>Schedule Your Call</button>
                </div>
            </div>
            <div className='all-contact2'>
                <img src="/iPhone1.png" alt="" className='iphone1'/>
                <div>
                    <p>Contact Us</p>
                    <h2>Fill out the form & schedule a call.</h2>
                    <p>Start by telling us about your vision. Fill out our quick contact form, then book a Zoom slot that works for you. Within 24 hours, our team connects to align goals and expectations.</p>
                    <button className='button1'>Schedule Your Call</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default feature
