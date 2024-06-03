import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reputation, setReputation] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reputation };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReputation("");
      setError(null);
      console.log("New workout added", json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>
      <label>Exercise Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />

      <label>Load (in KG)</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} />

      <label>Reputation</label>
      <input type="number" onChange={(e) => setReputation(e.target.value)} value={reputation} />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}
