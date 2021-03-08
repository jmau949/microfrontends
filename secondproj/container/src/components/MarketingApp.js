import { mount } from 'marketing/MarketingApp';
import React, {useRef, useEffect} from 'react';

const MarketingApp = () => {
    const ref = useRef(null);
    // when ref is defined, render into div
    useEffect(()=>{
        mount(ref.current);
    }, [])
    return <div ref={ref}>
    </div>
}

export default MarketingApp