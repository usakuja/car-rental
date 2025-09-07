import React from 'react';
import img from '../assets/img3.jpg';
import Navbar from './Navbar';
import FleetHighlights from './FleetHighlights';

const HeroSection = () => {
  return (
    <>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="h-screen relative">
        <img src={img} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex top-20  ">
          <h2 className="text-4xl font-bold z-10 text-black">Welcome to Car Rental</h2>
        </div>
      </section>

      {/* Cars Section */}
      <section id="about" className="bg-gray-100 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-900">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className="mb-6 text-lg leading-relaxed">
              At <strong>Car Rental</strong>, we are committed to providing you with the best car rental experience possible. Whether you’re planning a weekend getaway, a business trip, or a long vacation, our fleet of well-maintained vehicles and exceptional customer service will make your journey smooth and enjoyable.
            </p>

            <p className="mb-6 text-lg leading-relaxed">
              Here’s why thousands of customers trust us for their transportation needs:
            </p>

            <ul className="list-disc list-inside space-y-3 text-lg">
              <li><strong>Wide Selection:</strong> From compact cars to luxury SUVs, we have the perfect vehicle to fit your style and budget.</li>
              <li><strong>Competitive Pricing:</strong> Transparent rates with no hidden fees, so you know exactly what you’re paying for.</li>
              <li><strong>24/7 Customer Support:</strong> Our friendly team is available around the clock to assist you with reservations, changes, or emergencies.</li>
              <li><strong>Flexible Rental Options:</strong> Hourly, daily, or long-term rentals tailored to your schedule.</li>
              <li><strong>Easy Booking:</strong> Fast and secure online booking process with instant confirmation.</li>
              <li><strong>Safety First:</strong> All vehicles are thoroughly cleaned and regularly inspected for your safety and comfort.</li>
            </ul>
          </div>

          {/* Image or Illustration (optional) */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80"
              alt="Car rental service"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
      {/* Contact Section */}
     
         </>
  );
};

export default HeroSection;
