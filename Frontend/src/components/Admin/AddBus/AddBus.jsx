import React, { useState } from 'react';

const AddBusForm = () => {
  const [formData, setFormData] = useState({
    busNumber: '',
    busName: '',
    seats: '',
    pricePerSeats: '',
    source: '',
    destination: '',
    sourceTime: '',
    destinationTime: '',
    busType: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="p-4 mt-1 mb-2 max-w-6xl mx-auto bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-lg rounded-3xl">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Add New Bus</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="busNumber" className="block text-sm font-semibold text-gray-100">Bus Number</label>
            <input
              type="text"
              id="busNumber"
              name="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="busName" className="block text-sm font-semibold text-gray-100">Bus Name</label>
            <input
              type="text"
              id="busName"
              name="busName"
              value={formData.busName}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="seats" className="block text-sm font-semibold text-gray-100">Number of Seats</label>
            <input
              type="number"
              id="seats"
              name="seats"
              value={formData.seats}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="pricePerSeats" className="block text-sm font-semibold text-gray-100">Price Per Seat</label>
            <input
              type="number"
              id="pricePerSeats"
              name="pricePerSeats"
              value={formData.pricePerSeats}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-semibold text-gray-100">Source</label>
            <input
              type="text"
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="sourceTime" className="block text-sm font-semibold text-gray-100">Source Time</label>
            <input
              type="time"
              id="sourceTime"
              name="sourceTime"
              value={formData.sourceTime}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-sm font-semibold text-gray-100">Destination</label>
            <input
              type="text"
              id="destination"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="destinationTime" className="block text-sm font-semibold text-gray-100">Destination Time</label>
            <input
              type="time"
              id="destinationTime"
              name="destinationTime"
              value={formData.destinationTime}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          {/* New Bus Type Field */}
          <div>
            <label htmlFor="busType" className="block text-sm font-semibold text-gray-100">Bus Type</label>
            <select
              id="busType"
              name="busType"
              value={formData.busType}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            >
              <option value="" disabled>Select Bus Type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>

          <div className="lg:col-span-1">
            <label htmlFor="image" className="block text-sm font-semibold text-gray-100">Bus Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="mt-2 block w-full text-sm text-red-600 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Add Bus
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBusForm;
