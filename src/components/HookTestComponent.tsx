import React, { FC } from 'react';
import {useToggle} from "../hooks/useToggle";
import {usePrevious} from "../hooks/usePrevious";


const HookTestComponent: FC = () => {
    const { toggle, handleToggle } = useToggle(false);
    const [currentValue, previousValue] = usePrevious(toggle);

    const handleClick = () => {
        handleToggle();
    };

    return (
        <div>
            <h3>Testing Custom Hooks</h3>
            <p>Current value: {toggle ? 'True' : 'False'}</p>
            <p>Previous value: {previousValue !== undefined ? (previousValue ? 'True' : 'False') : 'N/A'}</p>
            <button onClick={handleClick}>Toggle</button>
        </div>
    );
};

export default HookTestComponent;