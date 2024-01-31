import React, {useEffect, useRef} from 'react';

function UseAutoFocus() {
    const ref = useRef<HTMLInputElement | null>(null)
    useEffect(() => {
        ref.current?.focus()
    }, []);

    return (
        <input ref={ref}></input>
    );
}

export default UseAutoFocus;