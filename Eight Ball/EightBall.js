import { useState } from 'react';
import './EightBall.css';

const EightBall = ({ answers }) => {

    const getRandNum = () => Math.floor(Math.random() * answers.length);
    const [ color_, setColor ] = useState('black');
    const [ msg, setMessage ] = useState('Think of a Question');
    const getAnswer = () => {
        const { msg, color } = answers[getRandNum(answers.length)];
        console.log(msg, color)
        setColor(color);
        setMessage(msg);
    };

    return (
        <div className="EightBall" style={{ backgroundColor: color_ }} onClick={() => getAnswer()}>
            <p className="EightBall-text"
             style={{ color: (color_ === 'goldenrod')? 'black' : 'white' }}
             unselectable="on">
                {msg}
            </p>
        </div>
    );
};

export default EightBall;