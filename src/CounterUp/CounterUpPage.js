import React, {useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';

const CounterUpPage = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div style={{
               width : '100%',
               background : 'black',
               marginTop : '1000px',
               marginBottom : '300px',
               color : 'white',
               padding : '50px'
            }}>
            <h1>
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0} /> }
                +
            </h1>
            </div>
        </ScrollTrigger>
    );
};

export default CounterUpPage
