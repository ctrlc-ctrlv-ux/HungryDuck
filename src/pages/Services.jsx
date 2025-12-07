import React from 'react';
import { PenTool, Hotel, Utensils, Music, Settings, Check } from 'lucide-react';
import './Services.css';

const Services = () => {
    return (
        <div className="services-page">
            <section className="page-header">
                <div className="container">
                    <h1 className="animate-slide-up">Our Services</h1>
                    <p className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Comprehensive solutions for every stage of your hospitality journey.
                    </p>
                </div>
            </section>

            <section className="section-padding services-list">
                <div className="container">
                    <ServiceBlock
                        title="Turnkey Hospitality Projects"
                        desc="We handle the complete lifecycle of hospitality setup — from idea → design → construction → interiors → kitchen setup → licensing → staff onboarding → go-live."
                        icon={<PenTool size={40} />}
                        features={[
                            "Concept Development", "Architecture & Interior Design", "MEP & Civil Work",
                            "Kitchen & Bar Setup", "Licensing & Compliance", "Go-live Management"
                        ]}
                    />

                    <ServiceBlock
                        title="Hotels & Resorts Development"
                        desc="From boutique hotels to large-scale resorts, we build experiences that blend comfort, ambiance, and operational excellence."
                        icon={<Hotel size={40} />}
                        features={[
                            "Space Planning", "Room & Facility Design", "Guest Experience Engineering",
                            "Back-of-house Optimization", "Pool, Spa & Landscape Design"
                        ]}
                        reverse
                    />

                    <ServiceBlock
                        title="Restaurant & Café Setup"
                        desc="We design and deliver high-performance dining spaces with optimized kitchens, modern interiors, and seamless workflows."
                        icon={<Utensils size={40} />}
                        features={[
                            "Kitchen Workflow Engineering", "F&B Concept Planning", "Interior Design",
                            "Menu Consulting", "Compliance & Food Safety Safety"
                        ]}
                    />

                    <ServiceBlock
                        title="Nightclub & Lounge Creation"
                        desc="We create high-energy entertainment spaces with premium acoustics, lighting, bar engineering, VIP zoning, and safety compliance."
                        icon={<Music size={40} />}
                        features={[
                            "Sound & Acoustics Engineering", "Lighting & Visual Design", "Bar Engineering",
                            "VIP Zoning & Crowd Flow", "Security & Safety Compliance"
                        ]}
                        reverse
                    />

                    <ServiceBlock
                        title="Operations & Maintenance"
                        desc="Our partnership doesn’t end at launch. We ensure smooth business operations through ongoing support and optimization."
                        icon={<Settings size={40} />}
                        features={[
                            "Facility & Equipment Maintenance", "Daily Operations Management", "Inventory & Vendor Coordination",
                            "Staff Hiring & Supervision", "SOP Creation & Performance Optimization"
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};

const ServiceBlock = ({ title, desc, icon, features, reverse }) => (
    <div className={`service-block glass-panel animate-fade-in ${reverse ? 'reverse' : ''}`}>
        <div className="service-img-placeholder">
            {/* Placeholder for service image/graphic */}
            <div className="service-big-icon">{icon}</div>
        </div>
        <div className="service-info">
            <h3>{title}</h3>
            <p>{desc}</p>
            <ul className="service-features">
                {features.map((feature, idx) => (
                    <li key={idx}><Check size={16} className="feature-icon" /> {feature}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default Services;
