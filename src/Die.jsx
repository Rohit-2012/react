
const Die = ({die, holdDie}) => {
  return (
    <div className={die.isHeld ? 'held die': 'die'} onClick={holdDie}>
          <h2 className="die-num">{die.value}</h2>
    </div>
  )
}

export default Die
