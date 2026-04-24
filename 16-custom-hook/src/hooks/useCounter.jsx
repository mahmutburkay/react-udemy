import React, { useState } from 'react'

function useCounter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1)
        } else {
            alert("Minimum değere ulaşıldı.");
        }
    }
    return {
        count, increase, decrease
    }
}

export default useCounter