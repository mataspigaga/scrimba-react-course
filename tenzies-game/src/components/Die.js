const Die = (props) => {
  const styles = { backgroundColor: props.isHeld ? "#4CE0B3" : "white" };

  return (
    <div style={styles} onClick={props.holdDice}>
      {props.value}
    </div>
  );
};

export default Die;
