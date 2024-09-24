'use client';
import React , { useState, useEffect } from 'react';

interface TypingEffectProps {
    text: string; 
    speed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState<string>('');
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(displayedText + text.charAt(index));
                setIndex(index + 1);
            }, speed);

            return () => clearTimeout(timeout);
        }
    }, [index, text, speed, displayedText]);

    const formattedText = displayedText.split('\n').map((item, index) => (
        <React.Fragment key={index}>
            {item}
            <br />
        </React.Fragment>
    ));
    return <div>{formattedText}</div>
};

export default TypingEffect;