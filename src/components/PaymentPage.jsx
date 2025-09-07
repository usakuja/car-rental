import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get car from state or localStorage
  const carFromState = location.state?.car;
  const carFromStorage = localStorage.getItem('selectedCar');
  const car = carFromState || (carFromStorage && JSON.parse(carFromStorage));

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    date: '',
    time: '',
  });

  // Redirect to fleet if no car is available
  useEffect(() => {
    if (!car) {
      const timeout = setTimeout(() => navigate('/'), 3000);
      return () => clearTimeout(timeout);
    }

    // Save selected car to localStorage for persistence
    if (carFromState) {
      localStorage.setItem('selectedCar', JSON.stringify(carFromState));
    }
  }, [car, carFromState, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`✅ Booking confirmed for ${car.name}!\n\nDetails:\n${JSON.stringify(formData, null, 2)}`);
    
    // Clear localStorage
    localStorage.removeItem('selectedCar');

    // Redirect to homepage or thank-you page
    navigate('/');
  };

  if (!car) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-red-600">No car selected!</h2>
        <p className="text-gray-600">Redirecting to fleet...</p>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded shadow mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book {car.name}</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 font-semibold">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 font-semibold">Address</label>
          <textarea
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-semibold">Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Time</label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-3 rounded hover:bg-green-700 transition"
        >
          Confirm Booking & Pay
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
