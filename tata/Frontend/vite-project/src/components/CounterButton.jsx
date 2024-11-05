import { useState } from "react";

export default function counterButton({ name }) {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount((count) => + 1)}>
            {name} is {count}
        </button>
    );
}