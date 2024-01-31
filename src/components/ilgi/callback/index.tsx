import React, {useCallback, useState} from 'react';

function Index() {
    const [value, setValue] = useState<string>('');

    const handleChange= useCallback(
        (e) => {
            setValue(e.target.value)
        },
        [],
    );
    console.log(value)

    return (
        <>
            <input type={"text"} onChange={(e)=> handleChange(e)}></input>
        </>
    );
}

export default Index;