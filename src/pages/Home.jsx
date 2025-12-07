import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Utensils, Hotel, Music, Settings, PenTool } from 'lucide-react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content container">
                    <h1 className="hero-title animate-slide-up">
                        We Design. We Build. <br />
                        <span className="text-gradient">We Launch. We Maintain.</span>
                    </h1>
                    <p className="hero-subtitle animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Creating world-class hotels, restaurants, nightclubs, and resorts — end to end.
                    </p>
                    <div className="hero-cta animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <Link to="/services" className="btn btn-primary">View Our Services</Link>
                    </div>
                </div>
                <div className="hero-background"></div>
            </section>

            {/* Intro Section */}
            <section className="section-padding intro-section">
                <div className="container text-center">
                    <div className="intro-content animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title">Who We Are</h2>
                        <p className="lead-text">
                            HungryDuck is a next-generation hospitality development company offering turnkey project execution for hotels, restaurants, cafés, nightclubs, and resorts.
                        </p>
                        <p className="intro-desc">
                            From concept and design to construction, setup, staffing, and ongoing maintenance, we deliver complete 360° hospitality solutions. We help entrepreneurs and brands launch high-performing hospitality spaces that stand out in experience, efficiency, and profitability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section-padding services-preview">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Services</h2>
                    <div className="services-grid">
                        <ServiceCard
                            icon={<PenTool size={32} />}
                            title="Turnkey Projects"
                            desc="End-to-end execution: concept → design → build → setup → launch."
                        />
                        <ServiceCard
                            icon={<Hotel size={32} />}
                            title="Hotels & Resorts"
                            desc="Boutique hotels, business hotels, luxury resorts — built for comfort."
                        />
                        <ServiceCard
                            icon={<Utensils size={32} />}
                            title="Restaurants & Cafés"
                            desc="Kitchen engineering, interiors, compliance, and menu setup."
                        />
                        <ServiceCard
                            icon={<Music size={32} />}
                            title="Nightclubs & Lounges"
                            desc="High-energy nightlife spaces with sound & light engineering."
                        />
                        <ServiceCard
                            icon={<Settings size={32} />}
                            title="Operations"
                            desc="Facility management, staffing, vendor coordination, SOPs."
                        />
                        <ServiceCard
                            icon={<CheckCircle size={32} />}
                            title="Consulting"
                            desc="Expert advice on feasibility, branding, and growth strategies."
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Us - Refactored to Grid */}
            <section className="section-padding why-choose-us">
                <div className="container">
                    <div className="text-center mb-50">
                        <h2 className="section-title">Why Choose Us?</h2>
                        <p className="section-subtitle">Building Hospitality Experiences That Last</p>
                    </div>

                    <div className="features-grid">
                        <FeatureItem
                            icon={<CheckCircle size={32} />}
                            title="Turnkey Delivery"
                            desc="One-stop solution from concept to launch."
                        />
                        <FeatureItem
                            icon={<CheckCircle size={32} />}
                            title="Cost Efficient"
                            desc="Transparent pricing and budget management."
                        />
                        <FeatureItem
                            icon={<CheckCircle size={32} />}
                            title="Expert Team"
                            desc="Industry veterans with decades of experience."
                        />
                        <FeatureItem
                            icon={<CheckCircle size={32} />}
                            title="Custom Solutions"
                            desc="Tailored designs for your unique brand."
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

const FeatureItem = ({ icon, title, desc }) => (
    <div className="feature-item">
        <div className="feature-icon">{icon}</div>
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
);

const ServiceCard = ({ icon, title, desc }) => (
    <div className="service-card">
        <div className="service-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to="/services" className="service-link">
            Learn More
        </Link>
    </div>
);

export default Home;
