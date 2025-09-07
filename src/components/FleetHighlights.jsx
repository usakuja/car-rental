import React from 'react';
import { Link } from 'react-router-dom';

const fleetData = [
  {
    id: 1,
    name: 'Toyota Corolla',
    image: 'https://media.istockphoto.com/id/1412133515/photo/toyota-corolla.jpg?s=612x612&w=0&k=20&c=lD7qArFDIFMgiTauLrE5yfi0Eof8D0WIwhXJanvzqTQ=',
    pricePerHour: 15,
  },
  {
    id: 2,
    name: 'Honda Civic',
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80',
    pricePerHour: 18,
  },
  {
    id: 3,
    name: 'Ford Mustang',
    image: 'https://editorial.pxcrush.net/carsales/general/editorial/2024-ford-mustang-gt-convertible-01-h2zk.jpg?width=1024&height=682',
    pricePerHour: 35,
  },
  {
    id: 4,
    name: 'Tesla Model 3',
    image: 'https://i.ytimg.com/vi/uefydJUbRhc/maxresdefault.jpg',
    pricePerHour: 50,
  },
];

const FleetHighlights = () => {
  return (
    <section id="fleet" className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
          Fleet Highlights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {fleetData.map((car) => (
           <Link
  key={car.id}
  to="/payment"
  onClick={() => localStorage.setItem('selectedCar', JSON.stringify(car))}
  className="max-w-xs mx-auto border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 block"
>
  <img
    src={car.image}
    alt={car.name}
    className="w-full h-40 object-cover rounded-t-lg mb-4"
  />
  <div className="p-4 text-center">
    <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
    <p className="text-gray-700 text-lg">
      <span className="font-bold text-green-600">${car.pricePerHour}</span> / hour
    </p>
  </div>
</Link>

          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetHighlights;
