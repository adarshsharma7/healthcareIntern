// src/components/ServiceList.jsx
import React from 'react';

function ServiceList({ services, deleteService, editService }) {
  return (
    <div className="w-full lg:w-2/3">
      <h2 className="text-2xl mb-4">Services List</h2>
      {services.length === 0 ? (
        <p>No services available yet.</p>
      ) : (
        <ul className="space-y-4">
          {services.map((service) => (
            <li key={service.id} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">{service.name}</h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => editService(service.id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteService(service.id)}
                    className="bg-red-600 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <p className="text-gray-600">{service.description}</p>
              <p className="text-gray-800 font-semibold">Price: ₹{service.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ServiceList;
