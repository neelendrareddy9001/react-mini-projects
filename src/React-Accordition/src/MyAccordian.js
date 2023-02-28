import React, {useState} from 'react';
import { questions } from './api';

const MyAccordian = ({question, answer}) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className='main-heading'>
                <p onClick={() => setShow(!show)}>{show? "➖" : "➕"}</p>
                {/* if show value true then display + symbol if not then show - symmbol */}
                <h3>{question}</h3>
            </div>
            { show &&  <p className="answers"> {answer} </p> }
        </>
    )
}


export default MyAccordian