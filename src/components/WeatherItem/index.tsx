import './styles.css';
interface Props {
  icon: string;
  title: string;
  value: string;
}
export function WeatherItem({ icon, title, value }: Props) {
  return (
    <div className='weather-item'>
      <img src={icon} alt={title} />VITE_WEATHER_APP_API=
      <span>{title}</span>
      <strong>{value}</strong>
    </div>
  )
}