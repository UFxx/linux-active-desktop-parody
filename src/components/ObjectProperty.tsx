interface Props {
  propertyKey: string;
  propertyValue: string | number;
  commentValue?: string;
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
        {props.propertyKey === 'WeekNumber' ? `/52` : null}
      </span>
      <span className="equal">{props.propertyKey !== 'Seconds' && ','}</span>
      {props.commentValue && (
        <span className="comment">{` // --> ${props.commentValue}`}</span>
      )}
    </div>
  );
}

export default ObjectProperty;
