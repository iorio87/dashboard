import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../featuredInfo/FeaturedInfo'
import {userData} from '../../dummydata.js'
import './home.scss'

function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title='Estadisticas de Usuario' grid dataKey='Active User'/>
    </div>
  )
}

export default Home