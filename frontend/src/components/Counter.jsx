import { useState, useEffect } from "react";
import { Button } from "./ui/button";

function Counter() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log("Count updated:", count);
    }, [count]);

    return (
        <>
            <h3>Counter app</h3>

            <p>{count}</p>

            <Button onClick={increase}>
                Increase
            </Button>

            <Button onClick={decrease}>
                Decrease
            </Button>
        </>
    );
}

export default Counter;