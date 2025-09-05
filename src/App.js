import React, { useState, useEffect } from 'react';

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a dark mode preference saved
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    // Apply dark mode class to body for full page styling
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Navigation 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      {renderPage()}
      <Footer />
    </div>
  );
}

// Navigation Component
function Navigation({ currentPage, setCurrentPage, darkMode, toggleDarkMode }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <h2>Lokhand Wala Web Solutions</h2>
        </div>
        <ul className="nav-menu">
          <li className={currentPage === 'home' ? 'nav-item active' : 'nav-item'}>
            <button onClick={() => setCurrentPage('home')}>Home</button>
          </li>
          <li className={currentPage === 'services' ? 'nav-item active' : 'nav-item'}>
            <button onClick={() => setCurrentPage('services')}>Services</button>
          </li>
          <li className={currentPage === 'about' ? 'nav-item active' : 'nav-item'}>
            <button onClick={() => setCurrentPage('about')}>About</button>
          </li>
          <li className={currentPage === 'contact' ? 'nav-item active' : 'nav-item'}>
            <button onClick={() => setCurrentPage('contact')}>Contact</button>
          </li>
          <li className="nav-item">
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Digital Presence</h1>
          <p>Professional web solutions tailored to your business needs</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>We deliver projects on time without compromising quality</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💎</div>
              <h3>Quality Assurance</h3>
              <p>Rigorous testing ensures bug-free and responsive websites</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3>Support & Maintenance</h3>
              <p>Continuous support even after project completion</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Lokhand Wala Web Solutions transformed our online presence completely. Highly recommended!"</p>
              <div className="client">
                <h4>Rajesh Mehta</h4>
                <p>Mehta Enterprises</p>
              </div>
            </div>
            <div className="testimonial-card">
              <p>"Professional team with excellent technical skills. Delivered beyond our expectations."</p>
              <div className="client">
                <h4>Priya Singh</h4>
                <p>Singh Consultancy</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Services Page Component
function ServicesPage() {
  return (
    <div className="page">
      <section className="services-header">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p>We offer a comprehensive range of web solutions to help your business grow</p>
        </div>
      </section>

      <section className="services-detail">
        <div className="container">
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Custom websites and web applications built with modern technologies like React, Node.js, and more.</p>
              <ul>
                <li>Responsive Design</li>
                <li>E-commerce Solutions</li>
                <li>Content Management Systems</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>iOS and Android applications that provide seamless user experiences.</p>
              <ul>
                <li>Native iOS & Android Apps</li>
                <li>Cross-Platform Solutions</li>
                <li>UI/UX Focused Design</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>User-centered designs that enhance engagement and conversion.</p>
              <ul>
                <li>Wireframing & Prototyping</li>
                <li>User Research & Testing</li>
                <li>Brand Identity Design</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>SEO Optimization</h3>
              <p>Increase your visibility and rank higher in search results.</p>
              <ul>
                <li>Keyword Research</li>
                <li>On-Page Optimization</li>
                <li>Performance Analytics</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">☁️</div>
              <h3>Cloud Solutions</h3>
              <p>Scalable and secure cloud infrastructure for your applications.</p>
              <ul>
                <li>AWS & Azure Deployment</li>
                <li>Serverless Architecture</li>
                <li>Database Management</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>E-commerce Solutions</h3>
              <p>Complete online store development with payment integration.</p>
              <ul>
                <li>Shopping Cart Systems</li>
                <li>Payment Gateway Integration</li>
                <li>Inventory Management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// About Page Component
function AboutPage() {
  return (
    <div className="page">
      <section className="about-header">
        <div className="container">
          <h1 className="section-title">About Us</h1>
          <p>Learn about our journey, values, and the team behind Lokhand Wala Web Solutions</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Our Story</h2>
              <p>Founded in 2015, Lokhand Wala Web Solution House started as a small team of passionate developers with a vision to deliver exceptional digital experiences. Today, we've grown into a full-service web development agency serving clients across various industries.</p>
              
              <p>Our mission is to empower businesses with cutting-edge technology and innovative design that sets them apart from the competition. We believe in building long-term relationships with our clients based on trust, quality, and mutual success.</p>
              
              <h2>Our Approach</h2>
              <p>We follow a client-centric approach where we focus on understanding your business goals and challenges before proposing solutions. Our process involves:</p>
              <ul>
                <li>Thorough requirement analysis</li>
                <li>Agile development methodology</li>
                <li>Continuous client collaboration</li>
                <li>Rigorous quality assurance</li>
                <li>Post-launch support and maintenance</li>
              </ul>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h4>50+</h4>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h4>30+</h4>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Rahul Lokhand Wala</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Priya Sharma</h3>
              <p>Lead Designer</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Vikram Singh</h3>
              <p>Senior Developer</p>
            </div>
            <div className="team-member">
              <div className="member-photo"></div>
              <h3>Anjali Patel</h3>
              <p>Project Manager</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Contact Page Component with Web3Forms Integration
function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "37768777-0c46-437d-8e35-990868c3e247");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    const object = Object.fromEntries(formDataToSend);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: 'There was an error sending your message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="page">
      <section className="contact-header">
        <div className="container">
          <h1 className="section-title">Contact Us</h1>
          <p>Get in touch with us for inquiries, quotes, or collaborations</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          {submitStatus && (
            <div className={`submit-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>We're here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.</p>
              
              <div className="info-item">
                <h3>📧 Email</h3>
                <p>info@lokhandwalawebsolutions.com</p>
              </div>
              
              <div className="info-item">
                <h3>📞 Phone</h3>
                <p>+91 1234567890</p>
              </div>
              
              <div className="info-item">
                <h3>🏢 Address</h3>
                <p>123 Business Street, Mumbai, India - 400001</p>
              </div>
              
              <div className="info-item">
                <h3>🕒 Business Hours</h3>
                <p>Monday - Friday: 9AM - 6PM</p>
                <p>Saturday: 10AM - 4PM</p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>Lokhand Wala Web Solution House</h3>
            <p>Transforming ideas into digital reality through innovative web solutions.</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <span>📱</span>
              <span>💬</span>
              <span>📸</span>
              <span>👨‍💼</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Lokhand Wala Web Solution House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// CSS Styles
const styles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s, color 0.3s;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f8f9fa;
  }

  body.dark-mode {
    background-color: #1a202c;
    color: #e2e8f0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* Navigation */
  .navbar {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }

  body.dark-mode .navbar {
    background-color: #2d3748;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo h2 {
    color: #2563eb;
    font-size: 1.5rem;
  }

  .nav-menu {
    display: flex;
    list-style: none;
  }

  .nav-item {
    margin-left: 20px;
  }

  .nav-item button {
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 1rem;
    padding: 5px 10px;
    transition: color 0.3s;
  }

  body.dark-mode .nav-item button {
    color: #e2e8f0;
  }

  .nav-item.active button {
    color: #2563eb;
    font-weight: bold;
  }

  .nav-item button:hover {
    color: #2563eb;
  }

  .dark-mode-toggle {
    background: #f1f5f9;
    border-radius: 20px;
    padding: 8px 15px !important;
  }

  body.dark-mode .dark-mode-toggle {
    background: #4a5568;
    color: #e2e8f0;
  }

  /* Page Sections */
  .page {
    min-height: calc(100vh - 200px);
  }

  /* Hero Section */
  .hero {
    background: linear-gradient(rgba(37, 99, 235, 0.8), rgba(37, 99, 235, 0.8));
    background-size: cover;
    background-position: center;
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
  }

  .hero-content h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .hero-content p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .cta-button {
    background: #fff;
    color: #2563eb;
    border: none;
    padding: 12px 30px;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;
  }

  .cta-button:hover {
    background: #f0f0f0;
  }

  /* Section Titles */
  .section-title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.2rem;
    color: #2563eb;
  }

  /* Features Section */
  .features {
    padding: 80px 0;
  }

  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
  }

  .feature-card {
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
    background: #fff;
  }

  body.dark-mode .feature-card {
    background: #2d3748;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .feature-card:hover {
    transform: translateY(-10px);
  }

  .feature-icon {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  /* Testimonials */
  .testimonials {
    padding: 80px 0;
    background-color: #f1f5f9;
  }

  body.dark-mode .testimonials {
    background-color: #2d3748;
  }

  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .testimonial-card {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  body.dark-mode .testimonial-card {
    background: #4a5568;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .testimonial-card p {
    font-style: italic;
    margin-bottom: 20px;
  }

  .client h4 {
    color: #2563eb;
  }

  /* Services Page */
  .services-header, .about-header, .contact-header {
    padding: 80px 0 40px;
    text-align: center;
    background-color: #f1f5f9;
  }

  body.dark-mode .services-header, 
  body.dark-mode .about-header, 
  body.dark-mode .contact-header {
    background-color: #2d3748;
  }

  .services-detail {
    padding: 60px 0;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .service-card {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }

  body.dark-mode .service-card {
    background: #2d3748;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .service-card:hover {
    transform: translateY(-5px);
  }

  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .service-card ul {
    margin-top: 15px;
    padding-left: 20px;
  }

  .service-card li {
    margin-bottom: 8px;
  }

  /* About Page */
  .about-content {
    padding: 60px 0;
  }

  .about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
  }

  .about-text h2 {
    margin-bottom: 20px;
    color: #2563eb;
  }

  .about-text p {
    margin-bottom: 20px;
  }

  .about-text ul {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .about-text li {
    margin-bottom: 10px;
  }

  .about-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }

  .stat {
    text-align: center;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  body.dark-mode .stat {
    background: #2d3748;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .stat h4 {
    font-size: 2rem;
    color: #2563eb;
    margin-bottom: 10px;
  }

  .team-section {
    padding: 60px 0;
    background-color: #f1f5f9;
  }

  body.dark-mode .team-section {
    background-color: #2d3748;
  }

  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }

  .team-member {
    text-align: center;
    background: #fff;
    padding: 30px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  body.dark-mode .team-member {
    background: #2d3748;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .member-photo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ddd;
    margin: 0 auto 15px;
  }

  body.dark-mode .member-photo {
    background-color: #4a5568;
  }

  /* Contact Page */
  .contact-content {
    padding: 60px 0;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }

  .contact-info h2 {
    margin-bottom: 20px;
    color: #2563eb;
  }

  .info-item {
    margin-bottom: 30px;
  }

  .info-item h3 {
    margin-bottom: 10px;
  }

  .contact-form {
    background: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  body.dark-mode .contact-form {
    background: #2d3748;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
  }

  .form-group input, .form-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-family: inherit;
    background: #fff;
    color: #333;
  }

  body.dark-mode .form-group input, 
  body.dark-mode .form-group textarea {
    background: #4a5568;
    border-color: #4a5568;
    color: #e2e8f0;
  }

  .submit-button {
    background: #2563eb;
    color: #fff;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
  }

  .submit-button:disabled {
    background: #93c5fd;
    cursor: not-allowed;
  }

  .submit-message {
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .submit-message.success {
    background: #dcfce7;
    color: #166534;
    border: 1px solid #bbf7d0;
  }

  body.dark-mode .submit-message.success {
    background: #14532d;
    color: #bbf7d0;
    border: 1px solid #166534;
  }

  .submit-message.error {
    background: #fee2e2;
    color: #991b1b;
    border: 1px solid #fecaca;
  }

  body.dark-mode .submit-message.error {
    background: #7f1d1d;
    color: #fecaca;
    border: 1px solid #991b1b;
  }

  /* Footer */
  .footer {
    background: #1e293b;
    color: #fff;
    padding: 50px 0 20px;
  }

  body.dark-mode .footer {
    background: #111827;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 30px;
  }

  .footer-info h3 {
    margin-bottom: 15px;
    color: #2563eb;
  }

  .footer-links h4, .footer-social h4 {
    margin-bottom: 15px;
    color: #2563eb;
  }

  .footer-links ul {
    list-style: none;
  }

  .footer-links li {
    margin-bottom: 10px;
  }

  .footer-links a {
    color: #fff;
    text-decoration: none;
  }

  .footer-links a:hover {
    text-decoration: underline;
  }

  .social-icons {
    display: flex;
    gap: 15px;
  }

  .social-icons span {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #334155;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .nav-container {
      flex-direction: column;
    }
    
    .nav-menu {
      margin-top: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .nav-item {
      margin: 10px;
    }
    
    .hero-content h1 {
      font-size: 2rem;
    }
    
    .about-grid, .contact-grid {
      grid-template-columns: 1fr;
    }
    
    .about-stats {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 576px) {
    .nav-menu {
      flex-direction: column;
      align-items: center;
    }
    
    .nav-item {
      margin: 10px 0;
    }
    
    .hero {
      height: 70vh;
    }
    
    .services-grid, .team-grid {
      grid-template-columns: 1fr;
    }
    
    .about-stats {
      grid-template-columns: 1fr;
    }
  }
`;

// Add styles to the document
const styleSheet = document.createElement('style');
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;