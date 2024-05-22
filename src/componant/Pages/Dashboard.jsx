
import CountUp from 'react-countup';
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard_main_div'>
      {/* Jai Guru dev
      radhe radhe
      har har mahadev
      jai shree ram
      jai bajrang bali */}
      <div className="dashboard_row-1_inner">

        <div className="counter_number_div_1">
          <h2>Team Income</h2>
          <div className="counter_number">
            + $<CountUp start={0} end={+540.45} duration={5} ></CountUp>
          </div>
        </div>
        <div className="counter_number_div_2">
          <h2>Refferal Income</h2>
          <div className="counter_number">
            + $<CountUp start={+200} end={+320.00} duration={5} ></CountUp>
          </div>
        </div>
        <div className="counter_number_div_3">
          <h2>Group Income</h2>
          <div className="counter_number">
            + $<CountUp start={+100} end={+740.89} duration={5} ></CountUp>
          </div>
        </div>
        <div className="counter_number_div_4">
          <h2>Total Income</h2>
          <div className="counter_number">
            + $<CountUp start={+1200} end={+5499.99} duration={5} ></CountUp>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Dashboard
