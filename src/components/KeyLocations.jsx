"use client";

import React, { useState, useEffect } from 'react';
import styles from "@/styles/KeyLocations.module.css";

// ✅ Хук для получения ширины экрана
function useScreenSize() {
  const [width, setWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

// ✅ Данные с адаптивными позициями
const cityData = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    description:
      'An international financial centre with developed infrastructure and 0% corporate tax for most businesses',
    link: '#',
    positions: {
      desktop: { top: '54%', left: '58%' },
      tablet: { top: '56%', left: '60%' },
      mobile: { top: '72%', left: '82%' }
    }
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'UAE',
    description:
      'The capital of UAE, known for its cultural sites and rapidly growing business landscape',
    link: '#',
    positions: {
      desktop: { top: '72%', left: '52%' },
      tablet: { top: '74%', left: '54%' },
      mobile: { top: '82%', left: '72%' }
    }
  },
  {
    id: 'muscat',
    name: 'Muscat',
    country: 'Oman',
    description:
      'A port city with a focus on trade, tourism, and a business-friendly environment',
    link: '#',
    positions: {
      desktop: { top: '70%', left: '66%' },
      tablet: { top: '72%', left: '68%' },
      mobile: { top: '90%', left: '88%' }
    }
  },
  {
    id: 'doha',
    name: 'Doha',
    country: 'Qatar',
    description:
      'A rapidly developing city with modern infrastructure and growing investment opportunities',
    link: '#',
    positions: {
      desktop: { top: '48%', left: '42.8%' },
      tablet: { top: '50%', left: '44%' },
      mobile: { top: '70%', left: '61%' }
    }
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    country: 'Saudi Arabia',
    description:
      'The financial and administrative capital of Saudi Arabia, actively diversifying its economy',
    link: '#',
    positions: {
      desktop: { top: '68%', left: '30%' },
      tablet: { top: '70%', left: '32%' },
      mobile: { top: '72%', left: '34%' }
    }
  }
];

export default function KeyLocations() {
  const [selectedCity, setSelectedCity] = useState(null);
  const screenWidth = useScreenSize();

  // ✅ Определяем адаптивные координаты
  const getResponsivePosition = (positions) => {
    if (screenWidth <= 768) return positions.mobile;
    if (screenWidth <= 1000) return positions.tablet;
    return positions.desktop;
  };

  const handleCityClick = (city) => {
    if (selectedCity && selectedCity.id === city.id) {
      setSelectedCity(null);
    } else {
      setSelectedCity(city);
    }
  };

  return (
    <section className={styles.keyLocationsSection}>
      <div className={styles.container}>
        {/* Заголовки */}
        <h2 className={styles.title}>Key locations</h2>
        <p className={styles.subtitle}>
          Explore the leading business hubs in the Middle East and their unique benefits
          for different types of businesses
        </p>

        {/* Карта + метки */}
        <div className={styles.mapWrapper}>
          <img
            src="/svg/map.svg"
            alt="Middle East Map"
            className={styles.mapImage}
          />

          {/* Метки городов */}
          {cityData.map((city) => (
            <div
              key={city.id}
              className={styles.marker}
              style={getResponsivePosition(city.positions)}
              onClick={() => handleCityClick(city)}
            >
              <span>{city.name}</span>
              <div className={styles.markerPointer}></div>
            </div>
          ))}

          {/* Карточка города */}
          <div
            className={`${styles.infoCard} ${
              selectedCity ? styles.infoCardVisible : ''
            }`}
          >
            {selectedCity && (
              <>
                <h3>{selectedCity.name}</h3>
                <p className={styles.country}>{selectedCity.country}</p>
                <p className={styles.desc}>{selectedCity.description}</p>
                <a href={selectedCity.link} className={styles.moreLink}>
                  Find out more &rarr;
                </a>
              </>
            )}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className={styles.cardsRow}>
          <div className={styles.infoCardBox}>
            <h4>Economic zones</h4>
            <p>
              Special economic zones offer preferential tax regimes, simplified
              registration procedures and integrated infrastructure for business
            </p>
          </div>
          <div className={styles.infoCardBox}>
            <h4>Innovative clusters</h4>
            <p>
              Technology parks and innovation districts are created to stimulate
              the development of modern technologies and start-ups with R&D support
            </p>
          </div>
          <div className={styles.infoCardBox}>
            <h4>Financial centers</h4>
            <p>
              International financial centres provide a full range of banking and
              financial services in compliance with international regulatory standards
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
