
import React from 'react';
import Counter from './Counter';

const StatisticsSection: React.FC = () => {
  const statistics = [
    {
      endDigit: 120,
      title: "Przeprowadzonych szkoleń",
      text: "Zrealizowane programy edukacyjne dla firm w różnych branżach."
    },
    {
      endDigit: 860,
      title: "Uczestników szkoleń",
      text: "Specjaliści, liderzy i zespoły, które zdobyły nowe kompetencje."
    },
    {
      endDigit: 310,
      title: "Godzin szkoleniowych",
      text: "Wysokiej jakości sesje prowadzone przez doświadczonych trenerów."
    },
    {
      endDigit: 85,
      title: "Firm, które nam zaufały",
      text: "Organizacje z sektora prywatnego i publicznego w całej Polsce."
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-section">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <Counter
            key={index}
            endDigit={stat.endDigit}
            title={stat.title}
            text={stat.text}
          />
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
