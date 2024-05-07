import './styles.css';

export function WeatherItem({ icon, title, value }) {
  return (
    <div className='weather-item'>
      <img src={icon} alt={title} />VITE_WEATHER_APP_API=
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}