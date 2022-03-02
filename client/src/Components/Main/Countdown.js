import { useState, useEffect } from 'react';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownUtil';

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
};

const Countdown = ({ countdownTimestampMs }) => {
    const [ remainingTime, setRemainingTime ] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearTimeout(intervalId)
    }, [countdownTimestampMs])

    const updateRemainingTime = (cd) => {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(cd));
    }

    return (
        <div className='countdown-container'>
            <div className='countdown'>
                <span className='two-numbers'> {remainingTime.days}  : </span>
                <span className='two-numbers'> {remainingTime.hours}  :</span>
                <span className='two-numbers'> {remainingTime.minutes}  :</span>
                <span className='two-numbers'> {remainingTime.seconds}</span>
            </div>
        </div>
    )
};

export default Countdown;