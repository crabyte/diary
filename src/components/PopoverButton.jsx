import React, { useState } from 'react';

const PopoverButton = ({ buttonText, popoverContent }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={{ position: 'relative', display: 'inline-block'}}>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ whiteSpace: 'nowrap' }}
            >
                {buttonText}
            </button>

            {isHovered && (
                <div
                    style={{
                        whiteSpace: 'nowrap',
                        position: 'relative',

                        top: -150,

                        backgroundColor: 'white',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
                        padding: '10px',
                    }}
                >
                    {popoverContent}
                </div>
            )}
        </div>
    );
};

export default PopoverButton;