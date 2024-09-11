import { useState } from 'react';
import ObjectProperty from './components/ObjectProperty';
import { months, daysOfWeek } from './storage';

function App() {
  const [seconds, setSeconds] = useState(new Date().getSeconds());

  const date = new Date();

  (function updateSeconds(): void {
    setInterval(() => {
      setSeconds(new Date().getSeconds());
    }, 1000);
  })();

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
            propertyKey="Month"
            propertyValue={`"${
              months[date.getMonth()][0]
            } (${date.getMonth()})"`}
            commentValue={months[date.getMonth()][1]}
          />
          <ObjectProperty
            propertyKey="DayOfMonth"
            propertyValue={date.getDate()}
          />
          <ObjectProperty
            propertyKey="DayOfWeek"
            propertyValue={`"${daysOfWeek[date.getDay() - 1][0]}"`}
            commentValue={daysOfWeek[date.getDay() - 1][1]}
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
