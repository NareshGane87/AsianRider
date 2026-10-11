import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, ArrowUpRight, Menu, X, MapPin, CalendarDays, Users, Compass, ShieldCheck, Headphones, Sparkles } from 'lucide-react';
import './styles.css';

const tours = [
  { id: 1, country: 'JAPAN', title: 'Japan, beyond the ordinary', days: '8 days · 7 nights', price: '₹1,24,999', image: 'photo-1493976040374-85c8e12f0c0e', tag: 'Culture & discovery', description: 'Ancient temples, neon-lit streets and quiet moments beneath the cherry blossoms.' },
  { id: 2, country: 'THAILAND', title: 'The art of slowing down', days: '6 days · 5 nights', price: '₹54,999', image: 'photo-1528181304800-259b08848526', tag: 'Beach & escape', description: 'Tropical islands, local flavours and golden sunsets along the Andaman Sea.' },
  { id: 3, country: 'VIETNAM', title: 'A journey through Vietnam', days: '7 days · 6 nights', price: '₹69,999', image: 'photo-1528127269322-539801943592', tag: 'Nature & culture', description: 'Limestone bays, lantern-lit lanes and unforgettable street-food adventures.' },
  { id: 4, country: 'BALI, INDONESIA', title: 'Find your island rhythm', days: '5 days · 4 nights', price: '₹47,999', image: 'photo-1537996194471-e657df975ab4', tag: 'Wellness & nature', description: 'Jungle hideaways, sacred temples and ocean air made for a reset.' },
  { id: 5, country: 'SINGAPORE', title: 'A city made of wonder', days: '4 days · 3 nights', price: '₹42,999', image: 'photo-1525625293386-3f8f99389edd', tag: 'City break', description: 'Skyline views, lush gardens and a world of flavours in one vibrant city.' },
  { id: 6, country: 'NEPAL', title: 'Closer to the Himalayas', days: '6 days · 5 nights', price: '₹38,999', image: 'photo-1544735716-392fe2489ffa', tag: 'Mountains & trails', description: 'Mountain air, peaceful monasteries and trails with views that stay with you.' }
];
const photo = (id, w=1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [destination, setDestination] = useState('Anywhere in Asia');
  const [month, setMonth] = useState('Any month');
  const [travelers, setTravelers] = useState('2 travellers');
  const [submitted, setSubmitted] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? tours : tours.slice(0, 3);
  const goToTours = () => document.getElementById('tours')?.scrollIntoView({behavior:'smooth'});

  return <div>
    <div className="topline">THOUGHTFULLY CURATED JOURNEYS · MADE FOR THE CURIOUS</div>
    <header className="nav wrap">
      <a className="brand" href="#" aria-label="Asia Yatra home"><span className="brand-mark">A<span>Y</span></span><span>asia yatra<small>GO A LITTLE FURTHER</small></span></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#tours" onClick={()=>setMenuOpen(false)}>Destinations</a><a href="#story" onClick={()=>setMenuOpen(false)}>Our approach</a><a href="#why" onClick={()=>setMenuOpen(false)}>Why Asia Yatra</a>
        <a className="nav-cta" href="#plan" onClick={()=>setMenuOpen(false)}>Plan your trip <ArrowUpRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero">
        <img className="hero-image" src={photo('photo-1530789253388-582c481c54b0', 2200)} alt="Mountain lake and dramatic alpine scenery" />
        <div className="hero-overlay"></div>
        <div className="hero-content wrap">
          <p className="eyebrow light"><span></span> YOUR NEXT CHAPTER STARTS HERE</p>
          <h1>Asia, a world<br/>of <em>wonder.</em></h1>
          <p className="hero-sub">From hidden mountain villages to sunlit islands, find the journey that feels like yours.</p>
          <button className="button button-light" onClick={goToTours}>Explore journeys <ArrowRight size={17}/></button>
          <div className="hero-note"><span className="note-line"></span><span>GO BEYOND THE GUIDEBOOK</span></div>
        </div>
        <div className="hero-index"><span>01</span> / 06</div>
      </section>

      <section className="intro wrap" id="story">
        <div className="section-kicker">A DIFFERENT WAY TO DISCOVER</div>
        <div className="intro-main"><h2>Not just places.<br/><em>Perspective.</em></h2><div className="intro-copy"><p>Travel is more than the miles you cover. It’s the people you meet, the flavours you remember, and the moments that change how you see the world.</p><p>We bring the best of Asia closer with considered itineraries, trusted local experiences and room for the unexpected.</p><a className="text-link" href="#why">Get to know us <ArrowRight size={16}/></a></div></div>
      </section>

      <section className="tours-section" id="tours">
        <div className="wrap">
          <div className="section-heading"><div><div className="section-kicker">THE ASIA EDIT</div><h2>Journeys worth<br/><em>getting lost in.</em></h2></div><p>Handpicked escapes for every kind of curious soul. All you need to bring is a little wonder.</p></div>
          <div className="tour-grid">{displayed.map((tour, i)=><article className="tour-card" key={tour.id}>
            <div className="tour-image-wrap"><img src={photo(tour.image, 900)} alt={tour.country + ' travel destination'} loading="lazy"/><span className="tour-number">0{tour.id}</span><span className="tour-tag">{tour.tag}</span></div>
            <div className="tour-details"><div className="tour-country">{tour.country}</div><h3>{tour.title}</h3><p>{tour.description}</p><div className="tour-meta"><span><CalendarDays size={15}/>{tour.days}</span><span>From <strong>{tour.price}</strong></span></div><button className="tour-link" onClick={()=>{setDestination(tour.country);document.getElementById('plan')?.scrollIntoView({behavior:'smooth'});}} aria-label={'Plan trip to '+tour.country}>Explore journey <ArrowUpRight size={17}/></button></div>
          </article>)}</div>
          <div className="center"><button className="button button-outline" onClick={()=>setShowAll(!showAll)}>{showAll ? 'Show featured journeys' : 'Discover all journeys'} <ArrowRight size={17}/></button></div>
          <p className="disclaimer">Indicative starting prices per person. Final pricing depends on dates, availability and inclusions.</p>
        </div>
      </section>

      <section className="quote-band">
        <div className="quote-bg" style={{backgroundImage:`url(${photo('photo-1518548419970-58e3b4079ab2', 1800)})`}}></div><div className="quote-shade"></div>
        <div className="quote-inner wrap"><Sparkles size={22}/><p>“The best journeys don’t just take you somewhere.<br/>They bring you back a little different.”</p><span>THE ASIA YATRA PHILOSOPHY</span></div>
      </section>

      <section className="why-section wrap" id="why">
        <div className="section-kicker">THE DETAILS MAKE THE DIFFERENCE</div><div className="why-heading"><h2>Travel well.<br/><em>Feel more.</em></h2><p>Thoughtful from the first hello to the journey home. We take care of the details so you can be right where you are.</p></div>
        <div className="benefits"><div><span className="benefit-icon"><Compass/></span><h3>Made for you</h3><p>Flexible journeys shaped around your pace, passions and travel style.</p></div><div><span className="benefit-icon"><ShieldCheck/></span><h3>People we trust</h3><p>Local experts and carefully selected stays, chosen with intention.</p></div><div><span className="benefit-icon"><Headphones/></span><h3>Here when you need us</h3><p>Helpful human support before you go and along the way.</p></div></div>
      </section>

      <section className="planner" id="plan"><div className="planner-inner wrap"><div className="planner-copy"><div className="section-kicker light-kicker">LET’S MAKE IT YOURS</div><h2>Your next great<br/><em>story awaits.</em></h2><p>Tell us what you’re dreaming of. We’ll help you turn it into a journey.</p><div className="planner-promise"><MapPin size={17}/> Your trip, thoughtfully planned.</div></div>
        <form className="planner-form" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}><label>Where would you like to go?<select value={destination} onChange={e=>setDestination(e.target.value)}><option>Anywhere in Asia</option>{tours.map(t=><option key={t.id}>{t.country}</option>)}</select></label><label>When are you thinking?<select value={month} onChange={e=>setMonth(e.target.value)}>{['Any month','January – March','April – June','July – September','October – December'].map(x=><option key={x}>{x}</option>)}</select></label><label>Who’s travelling?<select value={travelers} onChange={e=>setTravelers(e.target.value)}>{['1 traveller','2 travellers','3–4 travellers','5+ travellers','Family with kids'].map(x=><option key={x}>{x}</option>)}</select></label><button className="button button-green" type="submit">Start planning <ArrowRight size={17}/></button>{submitted && <p className="form-success" role="status">Lovely choice! Your preferences are ready. Connect this form to your enquiry email or CRM to receive trip requests.</p>}</form>
      </div></section>
    </main>

    <a className="whatsapp-float"
      href="https://wa.me/919441792799?text=Hi%20Asia%20Yatra%2C%20I%27d%20like%20to%20know%20about%20your%20travel%20packages."
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat with Asia Yatra on WhatsApp" title="Chat with us on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16.02 3.2c-7.05 0-12.78 5.7-12.78 12.72 0 2.25.6 4.45 1.73 6.4L3.1 28.8l6.65-1.74a12.86 12.86 0 0 0 6.26 1.6h.01c7.04 0 12.77-5.71 12.77-12.73 0-3.4-1.33-6.6-3.74-9A12.7 12.7 0 0 0 16.02 3.2Zm0 23.3h-.01a10.6 10.6 0 0 1-5.4-1.47l-.39-.23-3.95 1.03 1.05-3.84-.25-.4a10.52 10.52 0 0 1-1.62-5.67c0-5.83 4.75-10.57 10.58-10.57 2.82 0 5.47 1.1 7.46 3.1a10.5 10.5 0 0 1 3.1 7.48c0 5.83-4.74 10.57-10.57 10.57Zm5.8-7.92c-.32-.16-1.88-.93-2.17-1.03-.29-.1-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.84-1.59-1.88-1.78-2.2-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.36-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64s1.13 3.06 1.29 3.27c.16.21 2.22 3.39 5.37 4.75.75.32 1.33.52 1.78.66.75.24 1.43.2 1.97.12.6-.09 1.88-.77 2.14-1.51.26-.74.26-1.37.18-1.51-.08-.13-.29-.21-.61-.37Z"/>
      </svg>
    </a>

    <footer><div className="wrap footer-main"><a className="brand footer-brand" href="#"><span className="brand-mark">A<span>Y</span></span><span>asia yatra<small>GO A LITTLE FURTHER</small></span></a><p>See more of the world.<br/>Bring more of it home.</p><div className="footer-links"><a href="#tours">Destinations</a><a href="#story">Our approach</a><a href="#plan">Contact</a></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Asia Yatra. All rights reserved.</span><span>Made for the curious.</span></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
