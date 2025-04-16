import React from 'react';

interface ButtonProps {
    name: string;
}

const Button: React.FC<ButtonProps> = ({ name }) => {
    return <button className='border border-[#F4EBEC] px-8 rounded-sm text-[#F4EBEC] hover:cursor-pointer'>{name}</button>;
};

export default Button;