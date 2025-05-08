import React from 'react';

interface ButtonProps {
    name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
    return <button className='border-1 px-8 rounded-sm hover:cursor-pointer'>{name}</button>;
};

export default Button;