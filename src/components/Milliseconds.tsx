interface Props {
  milliseconds: number;
}

function Milliseconds(props: Props) {
  return (
    <>
      <span className="number">.{props.milliseconds}</span>
    </>
  );
}

export default Milliseconds;
