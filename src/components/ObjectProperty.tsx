import Milliseconds from './Milliseconds';
import { useState } from 'react';

interface Props {
  propertyKey: string;
  propertyValue: string | number;
}

function ObjectProperty(props: Props) {
  const [milliseconds, setMilliseconds] = useState(
    new Date().getMilliseconds()
  );

  (function updateMilliseconds(): void {
    setInterval(() => {
      setMilliseconds(new Date().getMilliseconds());
    }, 100);
  })();

  return (
    <div className="property">
      <span className="object-key">{props.propertyKey}</span>
      <span className="equal">:</span>{' '}
      <span className={typeof props.propertyValue}>
        {typeof props.propertyValue === 'number' && props.propertyValue < 10
          ? '0' + props.propertyValue
          : props.propertyValue}
      </span>
      <span className="equal">
        {props.propertyKey === 'Seconds' ? '' : ','}
      </span>
      {props.propertyKey === 'Seconds' && (
        <Milliseconds
          milliseconds={parseInt(milliseconds.toString().substring(0, 1))}
        />
      )}
    </div>
  );
}

export default ObjectProperty;
