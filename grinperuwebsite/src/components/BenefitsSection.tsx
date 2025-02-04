import React from "react";

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: "Ahorra dinero",
      description:
        "Chau gasolina, pasajes, estacionamiento, taxis y más. ¡Te imaginas ahorrar 50 soles al mes o más! 😎",
      icon: "💵", // Puedes usar íconos SVG o de librerías como Heroicons
    },
    {
      title: "Olvídate del tráfico",
      description:
        "¡Adiós estrés! Alquila tu patín y muévete rápido, seguro y divertido. Nunca más en el tráfico por 1 hora, llega a tu destino en 30 min o menos*",
      icon: "⏰",
    },
    {
      title: "Mantenimientos ilimitados",
      description: "Si algo falla ¡Te lo cambiamos!",
      icon: "🛠️",
    },
    {
      title: "Cuida el planeta",
      description: "Reduce tu huella de CO2",
      icon: "🌱",
    },
    {
      title: "Atención personalizada",
      description: "Con solo un click",
      icon: "📱",
    },
    {
      title: "Scooters resistentes",
      description:
        "Llantas sólidas y piso reforzado, ideales para las ciclovías limeñas",
      icon: "🛴",
    },
  ];

  return (
    <div className="bg-gray-50 py-20 px-4 min-h-screen justify-center items-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600">Beneficios</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md"
          >
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <span className="text-3xl">{benefit.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 mt-2 text-center">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
