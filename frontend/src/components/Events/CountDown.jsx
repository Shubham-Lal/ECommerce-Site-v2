import React, { useEffect, useState } from 'react';

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    function calculateTimeLeft() {
        const difference = +new Date("2023-05-15") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) & 24),
                Mins: Math.floor((difference / 1000 / 60) % 60),
                Sec: Math.floor((difference / 1000) % 60),
            }
        }

        return timeLeft;
    };

    const timerComponent = Object.keys(timeLeft).map((interval, index) => {
        if (!timeLeft[interval]) {
            return null;
        }

        return (
            <span key={index} className="text-[25px] text-[#475AD2]">
                {/* {timeLeft[interval]} : {" "} */}
                {timeLeft[interval]} {interval} {" "}
            </span>
        )
    });

    return (
        <div className="w-full text-center">
            {timerComponent.length ? timerComponent : <span className="text-[red] text-[25px]">Time's Up!</span>}
        </div>
    )
}

export default CountDown