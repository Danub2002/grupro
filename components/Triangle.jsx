// src/Triangle.js
import React from 'react';

const Triangle = ({ color = 'blue-500' }) => {
  return (
    <div className={`w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-${color}`}></div>
  );
};

export default Triangle;
