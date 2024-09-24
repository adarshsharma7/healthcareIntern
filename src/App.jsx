// src/App.jsx
import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';

function App() {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  // Add new service
  const addService = (service) => {
    setServices([...services, { ...service, id: Date.now() }]);
  };

  // Update existing service
  const updateService = (updatedService) => {
    setServices(services.map(service => service.id === updatedService.id ? updatedService : service));
  };

  // Delete service
  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  // Edit service (sets currentService)
  const editService = (id) => {
    const serviceToEdit = services.find(service => service.id === id);
    setCurrentService(serviceToEdit);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Healthcare Services Management</h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <ServiceForm 
            addService={addService} 
            updateService={updateService}
            currentService={currentService}
            setCurrentService={setCurrentService}
          />
          <ServiceList 
            services={services} 
            deleteService={deleteService} 
            editService={editService}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
