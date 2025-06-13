import React from "react";
import { useState } from "react";
import './Faq.css';

const faqs = [
  { id: 1, q: 'How does invideo AI generate videos automatically?', a: 'Invideo AI uses generative media to craft unique visuals tailored to your prompts. With access to over 16M+ stock images and videos, it ensures every video aligns perfectly with your vision.' },
  { id: 2, q: 'What is generative media?', a: 'Generative media uses AI to create unique, custom visuals based on your prompts. Instead of relying solely on stock content, generative media can produce original videos, animations, or effects tailored to fit the exact mood or style you’re looking for, making your videos truly one-of-a-kind.' },
  { id: 3, q: 'What makes invideo AI different from other video creation tools?', a: 'Invideo AI is built to transform your unique ideas into high-quality, publish-ready videos. Unlike traditional video tools, it focuses on creative freedom, making it easy to bring your imaginative concepts to life exactly as you envision them.' },
  { id: 4, q: 'What kind of voices does your AI video generator tool provide?', a: 'You can choose from male or female human voices using our AI video generator, you can even select a language and an accent.' },
  { id: 5, q: 'Do I need to download any software to use the AI video generator by invideo AI', a: 'You can create videos directly on the InVideo web app from any browser, or choose to download the mobile app, available on the App Store and Google Play, for editing on the go.' },
];

const FAQ = () => {
    const [open, setOpen] = useState(null);
    const toggle = i => setOpen(open === i ? null : i);
  return (
    <div className="faq+consultation-container">
        <div className="y1">
            <div className="y2">
            <h2>
                FREQUENTLY ASK <span className="highlight">QUESTIONS</span>
            </h2>
            {faqs.map((f, i) => (
                <div key={f.id} className="box">
                <div onClick={() => toggle(i)} className="btn">
                    {f.q}
                    <span className="icon">{open === i ? '-' : '+'}</span>
                </div>
                {open === i && <div className="answer">{f.a}</div>}
                </div>
            ))}
            </div>
        </div>


        <div className="consultation-container">    
          <h4>Start building ideas</h4>
          <h2>Contact us now!</h2>
          <p>Discuss goals, scope & tech roadmap. Hop on a 1:1 session with our AI strategists and creative leads. We’ll understand your need</p>
          <button>Get a Free Consultation</button>
        </div>
    </div>
  );
};

export default FAQ;
