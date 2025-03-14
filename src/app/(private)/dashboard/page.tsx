// pages/index.js
import Head from 'next/head'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ERP Dashboard</title>
        <meta name="description" content="ERP system for CNC machines" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Сайдбар */}
      <aside className={styles.sidebar}>
        <h2 className={styles.logo}>Factory ERP</h2>
        <ul className={styles.navList}>
          <li>Реальное время</li>
          <li>Станки</li>
          <li>Отчёты</li>
          <li>Диагностика</li>
        </ul>
      </aside>

      {/* Основной контент */}
      <main className={styles.main}>
        {/* Верхние карточки со статистикой */}
        <div className={styles.topStats}>
          <div className={styles.statBox}>
            <p className={styles.statTitle}>Выпущенные детали</p>
            <p className={styles.statValue}>120 тыс.</p>
          </div>
          <div className={styles.statBox}>
            <p className={styles.statTitle}>Работает станков</p>
            <p className={styles.statValue}>120</p>
          </div>
          <div className={styles.statBox}>
            <p className={styles.statTitle}>Простой станков (часы)</p>
            <p className={styles.statValue}>120</p>
          </div>
          <div className={styles.statBox}>
            <p className={styles.statTitle}>Аварии станков</p>
            <p className={styles.statValue}>120</p>
          </div>
          <div className={styles.statBox}>
            <p className={styles.statTitle}>Процент использования</p>
            <p className={styles.statValue}>60%</p>
          </div>
        </div>

        {/* График выпуска деталей */}
        <div className={styles.chartContainer}>
            <div className={styles.menuChart}>
                <h3>Выпущенные детали</h3>
                <h3>Процент брака</h3>
                <h3>Загрузка оборудования</h3>
                <h3>Время работы и простоя</h3>
            </div>  
          <div className={styles.lineChart}>
            {/* Здесь может быть ваш график (Chart.js / Recharts) */}
          </div>
        </div>

        {/* Нижний блок: две диаграммы + список задач */}
        <div className={styles.bottomRow}>
          <div className={styles.bottomChart}>
            <h3>Время работы станков в среднем</h3>
            <p className={styles.largeValue}>6 ч.</p>
            <div className={styles.barChart}>
              {/* Заглушка для бар-чарта */}
            </div>
          </div>
          <div className={styles.bottomChart}>
            <h3>Количество деталей</h3>
            <p className={styles.largeValue}>150 тыс.</p>
            <div className={styles.barChart}>
              {/* Заглушка для бар-чарта */}
            </div>
          </div>
          <div className={styles.taskList}>
            <h3>Текущая задача</h3>
            <ul>
              <li>Заказ 123123/64/000</li>
              <li>Заказ 123123/64/001</li>
              <li>Заказ 123123/64/002</li>
              <li>Заказ 123123/64/003</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}
