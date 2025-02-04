import React from "react";

const PriceSection:React.FC =()=> {
    return (
      <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center text-center p-8">
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-gray-800">
        Alquila tu Grin por 1, 2 o 3 meses
        </h1>
        <p className="text-gray-600 text-3xl mt-4">
          Chapa tu plan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">Mensual</h2>
          <p className="text-gray-600 mt-2">
          Ahórrate más de 50 soles al mes en transporte. **
          </p>
          <p className="text-5xl font-bold text-gray-800 mt-4">
            S/. 139<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Hola Me llamo Ramón</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Team size: 1 developer</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Premium support: 6 months</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Free updates: 6 months</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Quiero alquilar
          </button>
        </div>
        {/* Company Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">Bimestral</h2>
          <p className="text-gray-600 mt-2">
          Aquí te ahorras S/ 39.90 en comparación al plan mensual y te regalamos 5 días gratis
          </p>
          <p className="text-5xl font-bold text-gray-800 mt-4">
            S/. 239<span className="text-lg font-normal">.90</span>
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Initial Config</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Team size: 10 developers</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Premium support: 24 months</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Free updates: 24 months</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
            Quiero alquilar
          </button>
        </div>
        {/* Enterprise Plan */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800">Trimestral</h2>
          <p className="text-gray-600 mt-2">
          Aquí te ahorras S/ 89.70 en comparación al plan mensual y te regalamos 7 días gratis
          </p>
          <p className="text-5xl font-bold text-gray-800 mt-4">
            S/. 329<span className="text-lg font-normal">/month</span>
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Individual configuration</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>No setup, or hidden fees</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Team size: 100+ developers</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Premium support: 36 months</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-green-500">✔</span>
              <span>Free updates: 36 months</span>
            </li>
          </ul>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Quiero alquilar
          </button>
        </div>
      </div>
    </div>
    )
}

export default PriceSection;