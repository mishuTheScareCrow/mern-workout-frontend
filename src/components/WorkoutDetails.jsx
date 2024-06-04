import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutDetails({ _id, title, load, reputation, createdAt }) {
  const { dispatch } = useWorkoutsContext();
  const handleClick = async () => {
    const response = await fetch("/api/workouts/" + _id, { method: "DELETE" });

    const json = await response.json();

    if (response.ok) dispatch({ type: "DELETE_WORKOUT", payload: json });
  };
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
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
