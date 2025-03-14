"use client";

import React, { useState } from 'react'
import styles from "@/styles/KeyLocations.module.css";

const cityData = [
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    description:
      'An international financial centre with developed infrastructure and 0% corporate tax for most businesses',
    link: '#',
    // Примерные координаты (top/left) для маркера на карте
    style: { top: '54%', left: '58%' },
  },
  {
    id: 'abu-dhabi',
    name: 'Abu Dhabi',
    country: 'UAE',
    description:
      'The capital of UAE, known for its cultural sites and rapidly growing business landscape',
    link: '#',
    style: { top: '72%', left: '52%' },
  },
  {
    id: 'muscat',
    name: 'Muscat',
    country: 'Oman',
    description:
      'A port city with a focus on trade, tourism, and a business-friendly environment',
    link: '#',
    style: { top: '70%', left: '66%' },
  },
  {
    id: 'doha',
    name: 'Doha',
    country: 'Qatar',
    description:
      'A rapidly developing city with modern infrastructure and growing investment opportunities',
    link: '#',
    style: { top: '48%', left: '42.8%' },
  },
  {
    id: 'riyadh',
    name: 'Riyadh',
    country: 'Saudi Arabia',
    description:
      'The financial and administrative capital of Saudi Arabia, actively diversifying its economy',
    link: '#',
    style: { top: '68%', left: '30%' },
  },
]

export default function KeyLocations() {
  const [selectedCity, setSelectedCity] = useState(null)

  const handleCityClick = (city) => {
    // Если уже выбран тот же город, можно закрыть карточку повторным нажатием
    if (selectedCity && selectedCity.id === city.id) {
      setSelectedCity(null)
    } else {
      setSelectedCity(city)
    }
  }

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
          {/* Фон карты – можно заменить на свой SVG или PNG */}
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
              style={city.style}
              onClick={() => handleCityClick(city)}
            >
              <span>{city.name}</span>
              <div className={styles.markerPointer}></div>
            </div>
          ))}

          {/* Появляющаяся карточка при клике на город */}
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

        {/* Блоки с дополнительной информацией внизу */}
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
  )
}
