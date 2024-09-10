interface Props {
  propertyKey: string;
  propertyValue: string | number;
}

function ObjectProperty(props: Props) {
  return (
    <div className="property">
      <span className="object-key">{props.propertyKey}</span>
      <span className="equal">:</span>{' '}
      <span className={typeof props.propertyValue}>
        {typeof props.propertyValue === 'number' && props.propertyValue < 10
          ? '0' + props.propertyValue
          : props.propertyValue}
      </span>
      <span className="equal">{props.propertyKey !== 'Seconds' && ','}</span>
    </div>
  );
}

export default ObjectProperty;
