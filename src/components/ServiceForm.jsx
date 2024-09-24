// src/components/ServiceForm.jsx
import React, { useState, useEffect } from 'react';

function ServiceForm({ addService, updateService, currentService, setCurrentService }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  // Fill form when editing
  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    }
  }, [currentService]);

  // Clear form fields
  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice('');
    setCurrentService(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price) {
      alert('All fields are required');
      return;
    }

    const service = { name, description, price };

    if (currentService) {
      updateService({ ...service, id: currentService.id });
    } else {
      addService(service);
    }

    clearForm();
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 w-full lg:w-1/3 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl mb-4">{currentService ? 'Edit Service' : 'Add New Service'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Service Name</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea 
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input 
          type="number" 
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        {currentService ? 'Update Service' : 'Add Service'}
      </button>
    </form>
  );
}

export default ServiceForm;
