import React from "react";

const Cobertura: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 justify-center items-center flex min-h-screen">
      <div className="container mx-auto text-center">
        {/* Título */}
        <h2 className="text-3xl font-bold text-green-600">Cobertura Disponible</h2>
        <p className="text-gray-600 mt-2">
          Explora las áreas de cobertura disponibles en Lima, Perú.
        </p>

        {/* Imagen del mapa */}
        <div className="mt-8">
          <img
            src="https://getlavado.com//wp-content/uploads/2021/10/mapa-lima-1.png" // URL del mapa estático de Lima
            alt="Cobertura en Lima, Perú"
            className="mx-auto w-[700px] max-w-5xl rounded-lg shadow-md"
          />
        </div>

        {/* Nota o mensaje adicional */}
        <p className="text-gray-500 mt-4 text-sm">
          Las áreas destacadas corresponden a las zonas cubiertas. 
          Para más información, contáctanos.
        </p>
      </div>
    </section>
  );
};

export default Cobertura;
