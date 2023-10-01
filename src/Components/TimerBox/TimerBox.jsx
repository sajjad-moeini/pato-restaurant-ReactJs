import React, { memo } from 'react'
import './TimerBox.css'
import { useCountdown } from '../../Hooks/useCountdown'
export default memo(function TimerBox() {
  const [days, hours, minutes, seconds] = useCountdown()
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-3 time-container">{days}
          <div className="time-title">DAYS</div>
        </div>
        <div className="col-3 time-container">{hours}
          <div className="time-title">HOURS</div>
        </div>
        <div className="col-3 time-container">{minutes}
          <div className="time-title">MINUTES</div>
        </div>
        <div className="col-3 time-container">{seconds}
          <div className="time-title">SECONDS</div>
        </div>
      </div>
    </>
  )
})
