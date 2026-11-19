import { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, Clock3, Droplets, Hammer, House,
  MapPin, Menu, Phone, ShieldCheck, Wind, X,
} from 'lucide-react';

const phone = '+18133204600';
const services = [
  { icon: House, title: 'Roof Replacement', text: 'Upgrade your home with a durable roofing system built for Florida weather.' },
  { icon: Hammer, title: 'Roof Repairs', text: 'From persistent leaks to damaged shingles, get the problem fixed right.' },
  { icon: ShieldCheck, title: 'Roof Inspections', text: 'Know the condition of your roof with a careful, professional assessment.' },
  { icon: Droplets, title: 'Gutters & Drainage', text: 'Protect your property with effective roof drainage and gutter solutions.' },
  { icon: Wind, title: 'Storm Damage', text: 'Get help addressing wind and storm damage before small issues grow.' },
  { icon: House, title: 'Tile & Foam Roofing', text: 'Roofing solutions for different materials, structures, and property needs.' },
];
const reviews = [
  { name: 'Ana Mason', text: 'I highly recommend this roofing team for any roof work. Our tile roof had been installed wrong during the original build, which led to ongoing leaks for a long time. This crew took the time to address the issue.', tag: 'Tile roof repair' },
  { name: 'Tristan Cohen', text: 'After a severe storm caused major roof damage to my home and guest house, I needed a roofing team I could rely on. The experience made a difficult situation much easier to manage.', tag: 'Storm damage' },
  { name: 'Darrell Johns', text: 'If you want top quality roofing work, it is worth calling a company with a strong reputation. I recently had a new roof drainage and gutter system installed.', tag: 'Gutters & drainage' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: 'Roof inspection', details: '' });
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Roofing quote request - ' + form.service);
    const body = encodeURIComponent(
      'Name: ' + form.name + '\nPhone: ' + form.phone + '\nEmail: ' + form.email +
      '\nService: ' + form.service + '\nDetails: ' + form.details
    );
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
    setSent(true);
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="wrap topinner">
          <span><MapPin size={14} /> 506 E Baker St, Tampa, FL 33603</span>
          <span><Clock3 size={14} /> Mon–Fri · Opens 9:00 AM</span>
          <a href={'tel:' + phone}><Phone size={14} /> (813) 320-4600</a>
        </div>
      </div>
      <header className="header">
        <div className="wrap nav">
          <a className="brand" href="#home">
            <span className="brandmark"><House size={24} /></span>
            <span>HUNTER <b>&amp; SONS</b><small>ROOFING</small></span>
          </a>
          <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? 'open' : ''}>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>Why Hunter &amp; Sons</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            <a className="nav-cta" href="#contact">Get a free estimate <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero" id="home">
          <div className="hero-bg"></div>
          <div className="wrap hero-content">
            <div className="eyebrow"><span></span> TAMPA BAY ROOFING PROFESSIONALS</div>
            <h1>A stronger roof.<br /><em>A safer home.</em></h1>
            <p>Roofing work you can feel confident about. From repairs and inspections to complete roof replacements, count on a team focused on quality and clear communication.</p>
            <div className="hero-actions">
              <a className="btn btn-gold" href="#contact">Request an estimate <ArrowRight size={18} /></a>
              <a className="btn btn-outline" href={'tel:' + phone}><Phone size={17} /> Call (813) 320-4600</a>
            </div>
            <div className="hero-rating"><div className="stars">★★★★★</div><strong>4.9/5</strong><span>Based on 23 Google reviews</span></div>
          </div>
          <div className="hero-note"><ShieldCheck size={19} /> Your roof deserves careful attention.</div>
        </section>
        <section className="trust">
          <div className="wrap trustgrid">
            <div><strong>4.9 <span>★★★★★</span></strong><small>Google customer rating</small></div>
            <div><strong>23</strong><small>Customer reviews</small></div>
            <div><strong>Tampa, FL</strong><small>Locally based roofing team</small></div>
            <div><strong>Quality first</strong><small>Work built around your home</small></div>
          </div>
        </section>
        <section className="section services" id="services">
          <div className="wrap">
            <div className="section-head">
              <div><div className="eyebrow dark">WHAT WE DO</div><h2>Roofing solutions for<br /><em>every season.</em></h2></div>
              <p>Florida weather puts your roof to the test. Get practical roofing support to help protect your property through sun, rain, and storm season.</p>
            </div>
            <div className="service-grid">
              {services.map((s, i) => (
                <article className="service-card" key={s.title}>
                  <div className="service-icon"><s.icon size={23} /></div>
                  <span className="service-num">0{i + 1}</span>
                  <h3>{s.title}</h3><p>{s.text}</p>
                  <a href="#contact">Discuss your project <ArrowUpRight size={15} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="about" id="about">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=1200&q=85" alt="Craftsman working on a residential roof" />
          </div>
          <div className="about-copy">
            <div className="eyebrow">THE HUNTER &amp; SONS DIFFERENCE</div>
            <h2>Good work starts<br />with <em>doing it right.</em></h2>
            <p>Your roof is one of your home's most important protections. We believe roofing service should be straightforward: listen carefully, explain the work, and focus on a quality result.</p>
            <ul>
              <li><Check /> Clear, direct communication</li>
              <li><Check /> Attention to detail on every project</li>
              <li><Check /> Solutions suited to your roof and property</li>
              <li><Check /> Respect for your home and your time</li>
            </ul>
            <a className="btn btn-gold" href="#contact">Talk about your roof <ArrowRight size={17} /></a>
          </div>
        </section>
        <section className="reviews section" id="reviews">
          <div className="wrap">
            <div className="reviews-top">
              <div><div className="eyebrow dark">CUSTOMER FEEDBACK</div><h2>Trusted by homeowners<br /><em>around Tampa.</em></h2></div>
              <div className="review-score"><div className="stars">★★★★★</div><strong>4.9 <small>/ 5</small></strong><span>23 Google reviews</span></div>
            </div>
            <div className="review-grid">
              {reviews.map(r => (
                <article className="review-card" key={r.name}>
                  <div className="stars">★★★★★</div><p>“{r.text}”</p>
                  <div className="review-person">
                    <span className="avatar">{r.name.split(' ').map(x => x[0]).join('')}</span>
                    <div><strong>{r.name}</strong><small>{r.tag}</small></div>
                    <Check className="verified" />
                  </div>
                </article>
              ))}
            </div>
            <p className="review-disclaimer">These are few of the review excerpts from our customers on Google Map Business Page.</p>
          </div>
        </section>
        <section className="cta-band">
          <div className="wrap cta-inner">
            <div><div className="eyebrow">LET'S GET STARTED</div><h2>Not sure what your roof needs?</h2><p>Start with a conversation. Tell us what you're seeing and we'll help you take the next step.</p></div>
            <a className="btn btn-light" href="#contact">Request your estimate <ArrowRight size={18} /></a>
          </div>
        </section>
        <section className="contact section" id="contact">
          <div className="wrap contact-grid">
            <div className="contact-copy">
              <div className="eyebrow dark">GET IN TOUCH</div><h2>Let's talk about<br /><em>your roof.</em></h2>
              <p>Reach out to discuss a repair, inspection, replacement, or storm-related concern.</p>
              <a className="contact-line" href={'tel:' + phone}>
                <span><Phone /></span><div><small>CALL OUR TEAM</small><strong>(813) 320-4600</strong></div>
              </a>
              <a className="contact-line" href="https://maps.google.com/?q=506+E+Baker+St+Tampa+FL+33603" target="_blank" rel="noreferrer">
                <span><MapPin /></span><div><small>VISIT US</small><strong>506 E Baker St, Tampa, FL 33603</strong></div>
              </a>
              <div className="contact-line"><span><Clock3 /></span><div><small>BUSINESS HOURS</small><strong>Opens at 9:00 AM</strong></div></div>
            </div>
            <form className="quote-form" onSubmit={submit}>
              <h3>Request a free estimate</h3><p>Share a few details and we'll help you get started.</p>
              <div className="form-row">
                <label>Your name<input required name="name" value={form.name} onChange={update} placeholder="Full name" /></label>
                <label>Phone number<input required name="phone" type="tel" value={form.phone} onChange={update} placeholder="(813) 000-0000" /></label>
              </div>
              <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
              <label>What do you need help with?
                <select name="service" value={form.service} onChange={update}>
                  <option>Roof inspection</option><option>Roof repair</option><option>Roof replacement</option>
                  <option>Storm damage</option><option>Gutters &amp; drainage</option><option>Tile or foam roofing</option><option>Other</option>
                </select>
              </label>
              <label>Tell us a little more<textarea name="details" rows={4} value={form.details} onChange={update} placeholder="Describe the issue or project..." /></label>
              <button className="btn btn-gold form-submit" type="submit">Send estimate request <ArrowRight size={18} /></button>
              {sent && <small className="form-hint">Your email app should open with your request ready to send. If it doesn't, call us directly.</small>}
              <small className="form-hint">Submitting opens your email app; no information is stored on this website.</small>
            </form>
          </div>
        </section>
      </main>
      <footer>
        <div className="wrap footer-main">
          <a className="brand brand-footer" href="#home"><span className="brandmark"><House size={23} /></span><span>HUNTER <b>&amp; SONS</b><small>ROOFING</small></span></a>
          <p>Roofing solutions with care, craftsmanship, and clear communication.</p>
          <a className="footer-phone" href={'tel:' + phone}><Phone size={16} /> (813) 320-4600</a>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Hunter &amp; Sons Roofing. All rights reserved.</span><span>Tampa, Florida</span></div>
      </footer>
      <a className="mobile-call" href={'tel:' + phone}><Phone size={17} /> Call Hunter &amp; Sons</a>
    </div>
  );
}
export default App;
