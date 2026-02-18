import { useState, useEffect } from 'react'
import './Countdown.css'

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const launchDate = new Date('2026-03-01T00:00:00').getTime()

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = launchDate - now

            if (distance < 0) {
                clearInterval(timer)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            } else {
                setTimeLeft({
                    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((distance % (1000 * 60)) / 1000)
                })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="countdown fade-in-up">
            <div className="container">
                <div className="countdown-card glass-card">
                    <h2 className="countdown-heading">The Future Arrives In</h2>
                    <div className="countdown-timer">
                        <div className="time-unit">
                            <div className="time-box">
                                <span className="time-value">{String(timeLeft.days).padStart(2, '0')}</span>
                            </div>
                            <span className="time-label">Days</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="time-unit">
                            <div className="time-box">
                                <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
                            </div>
                            <span className="time-label">Hours</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="time-unit">
                            <div className="time-box">
                                <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
                            </div>
                            <span className="time-label">Mins</span>
                        </div>
                        <div className="timer-separator">:</div>
                        <div className="time-unit">
                            <div className="time-box">
                                <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
                            </div>
                            <span className="time-label">Secs</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Countdown
