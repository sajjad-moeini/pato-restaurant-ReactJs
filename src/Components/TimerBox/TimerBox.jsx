import React, { memo } from 'react'
import './TimerBox.css'
import { useCountdown } from '../../Hooks/useCountdown'
export default memo(function TimerBox() {
  const [days, hours, minutes, seconds] = useCountdown()
  return (
    <>
      <div className="row justify-content-between">
        <div className="col-3 time-container">{days > 9 ? days : `0${days}`}
          <div className="time-title">DAYS</div>
        </div>
        <div className="col-3 time-container">{hours > 9 ? hours : `0${hours}`}
          <div className="time-title">HOURS</div>
        </div>
        <div className="col-3 time-container">{minutes > 9 ? minutes : `0${minutes}`}
          <div className="time-title">MINUTES</div>
        </div>
        <div className="col-3 time-container">{seconds > 9 ? seconds : `0${seconds}`}
          <div className="time-title">SECONDS</div>
        </div>
      </div>
    </>
  )
})
