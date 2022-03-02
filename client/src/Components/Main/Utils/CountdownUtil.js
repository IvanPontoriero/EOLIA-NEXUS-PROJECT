import dayjs from 'dayjs';

export function getRemainingTimeUntilMsTimestamp(timestapmMs) {
    
    const timestampDaysJS = dayjs(timestapmMs);
    const nowDayJS = dayjs();

    if(timestampDaysJS.isBefore(nowDayJS)) {
        return {
            seconds: '00',
            minutes: '00',
            hours: '00',
            days: '00'
        }
    }

    return {
        seconds: getRemainingSeconds(nowDayJS, timestampDaysJS),
        minutes: getRemainingMinutes(nowDayJS, timestampDaysJS),
        hours: getRemainingHours(nowDayJS, timestampDaysJS),
        days: getRemainingDays(nowDayJS, timestampDaysJS)
    };
};

function getRemainingSeconds(nowDayJS, timestampDaysJS) {
    const seconds = timestampDaysJS.diff(nowDayJS, 'seconds') % 60;  // dividimos en 60 paraq obtener solo los segundos
    return padWithZeros(seconds, 2);
};

function getRemainingMinutes(nowDayJS, timestampDaysJS) {
    const minutes = timestampDaysJS.diff(nowDayJS, 'minutes') % 60;
    return padWithZeros(minutes, 2);
};

function getRemainingHours(nowDayJS, timestampDaysJS) {
    const hours = timestampDaysJS.diff(nowDayJS, 'hours') % 24;
    return padWithZeros(hours, 2);
};

function getRemainingDays(nowDayJS, timestampDaysJS) {
    const days = timestampDaysJS.diff(nowDayJS, 'days');
    return padWithZeros(days, 2);
};

function padWithZeros(num, minLength) {
    const numStr = num.toString();
    if(numStr.length >= minLength) return numStr;
    return "0".repeat(minLength - numStr.length) + numStr;
}