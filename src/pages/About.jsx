import React from 'react';
import { Target, Eye, Star, Heart, Users, Award } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-slide-up">About Us</h1>
                    <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Transforming hospitality visions into reality since day one.
                    </p>
                </div>
            </section>

            <section className="section-padding about-intro">
                <div className="container">
                    <div className="grid-2-cols">
                        <div className="about-text animate-fade-in">
                            <h2 className="section-heading">Designing the Future of Hospitality</h2>
                            <p>
                                HungryDuck is a full-service hospitality solutions firm specializing in designing, building, and managing world-class hospitality spaces. Our turnkey delivery model removes the complexity from launching hotels, restaurants, clubs, and resorts.
                            </p>
                            <p>
                                We combine creativity with engineering, design with operational logic, and industry insight with flawless execution — helping our clients create destinations that attract and inspire.
                            </p>
                        </div>
                        <div className="about-stats glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <div className="stat-item">
                                <span className="stat-number">360°</span>
                                <span className="stat-label">Delivery Model</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100+</span>
                                <span className="stat-label">Projects Delivered</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding m-v-values">
                <div className="container">
                    <div className="cards-grid">
                        <div className="mv-card glass-panel">
                            <Target className="mv-icon" size={40} />
                            <h3>Our Mission</h3>
                            <p>
                                To empower hospitality entrepreneurs and brands by delivering innovative, efficient, and sustainable turnkey solutions that transform ideas into profitable, memorable experiences.
                            </p>
                        </div>
                        <div className="mv-card glass-panel">
                            <Eye className="mv-icon" size={40} />
                            <h3>Our Vision</h3>
                            <p>
                                To be a global leader in turnkey hospitality development, known for exceptional quality, creativity, and operational excellence.
                            </p>
                        </div>
                    </div>

                    <div className="values-section">
                        <h2 className="text-center section-heading">Our Core Values</h2>
                        <div className="values-grid">
                            <ValueItem icon={<Star size={24} />} title="Innovation" />
                            <ValueItem icon={<Award size={24} />} title="Quality" />
                            <ValueItem icon={<Heart size={24} />} title="Integrity" />
                            <ValueItem icon={<Users size={24} />} title="Collaboration" />
                            <ValueItem icon={<Target size={24} />} title="Customer-Centric" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const ValueItem = ({ icon, title }) => (
    <div className="value-item glass-panel">
        <div className="value-icon">{icon}</div>
        <span>{title}</span>
    </div>
);

export default About;
