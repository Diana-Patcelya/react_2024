import {useRef} from "react";

export const usePrevious = <T,>(value: T): [T | undefined, T | undefined] => {
    const currentValue = useRef<T>();
    const prevValue = useRef<T>();

    if (currentValue.current !== value) {
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }

    return [currentValue.current, prevValue.current];
};