export default function WorkoutDetails({ title, load, reputation, createdAt }) {
  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load(kg): </strong>
        {load}
      </p>
      <p>
        <strong>Reputation: </strong>
        {reputation}
      </p>
      <p>{createdAt}</p>
    </div>
  );
}
