import { useState } from "react";

function ActivityCounter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>Completed Activities</h2>

      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      {count > 0 && (
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
      )}

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </section>
  );
}

export default ActivityCounter;
