import React, { memo } from 'react'
import './TimerBox.css'
import { useCountdown } from '../../Hooks/useCountdown'
export default memo(function TimerBox() {
  const [days, hours, minutes, seconds] = useCountdown()
  return (
    <>
      <section className="row justify-content-between">
        <section className="col-3 time-container">{days > 9 ? days : `0${days}`}
          <section className="time-title">DAYS</section>
        </section>
        <section className="col-3 time-container">{hours > 9 ? hours : `0${hours}`}
          <section className="time-title">HOURS</section>
        </section>
        <section className="col-3 time-container">{minutes > 9 ? minutes : `0${minutes}`}
          <section className="time-title">MINUTES</section>
        </section>
        <section className="col-3 time-container">{seconds > 9 ? seconds : `0${seconds}`}
          <section className="time-title">SECONDS</section>
        </section>
      </section>
    </>
  )
})
