import { useEffect, useState } from 'react';
import ObjectProperty from './components/ObjectProperty';
import { months, daysOfWeek } from './storage';

function App() {
  const date = new Date();
  const [seconds, setSeconds] = useState(date.getSeconds());

  function getWeekNumber(date: Date): number {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart = new Date(d.getFullYear(), 0, 1);
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  }
  const weekNumber = getWeekNumber(date);

  useEffect(() => {
    const updateSeconds = setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);

    return () => {
      clearInterval(updateSeconds);
    };
  }, [seconds]);

  return (
    <div
      className="container"
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className="clock">
        <p>
          <span className="const">const</span>{' '}
          <span className="object-name">Clock</span>{' '}
          <span className="equal">=</span>{' '}
          <span className="brackets">{'{'}</span>
        </p>
        <div className="object-properties">
          <ObjectProperty
            propertyKey="Year"
            propertyValue={date.getFullYear()}
          />
          <ObjectProperty
            propertyKey="WeekNumber"
            propertyValue={weekNumber}
            commentValue={`${52 - weekNumber}`}
          />
          <ObjectProperty
            propertyKey="Month"
            propertyValue={`"${months[date.getMonth()][0]} (${
              date.getMonth() + 1
            })"`}
            commentValue={months[date.getMonth()][1]}
          />
          <ObjectProperty
            propertyKey="DayOfMonth"
            propertyValue={date.getDate()}
          />
          <ObjectProperty
            propertyKey="DayOfWeek"
            propertyValue={`"${
              date.getDay() === 0
                ? daysOfWeek[daysOfWeek.length - 1][0]
                : daysOfWeek[date.getDay() - 1][0]
            }"`}
            commentValue={
              date.getDay() === 0
                ? daysOfWeek[daysOfWeek.length - 1][1]
                : daysOfWeek[date.getDay() - 1][1]
            }
          />
          <ObjectProperty propertyKey="Hours" propertyValue={date.getHours()} />
          <ObjectProperty
            propertyKey="Minutes"
            propertyValue={date.getMinutes()}
          />
          <ObjectProperty propertyKey="Seconds" propertyValue={seconds} />
        </div>
        <p>
          <span className="brackets">{'}'};</span>
        </p>
      </div>
    </div>
  );
}

export default App;
