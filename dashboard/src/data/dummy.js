// import React from 'react';

export const colorMappingData = [
    [
      { x: 'Mon', y: 400 },
      { x: 'Tue', y: 300 },
      { x: 'Wed', y: 120 },
      { x: 'Thur', y: 170 },
      { x: 'Fri', y: 220 },
      { x: 'Sat', y: 250 },
      { x: 'Sun', y: 290 },
    ],
    ['#de6165'],
    ['#de6165'],
    ['#de6165'],
  ];
  
  export const rangeColorMapping = [
    { label: '1 to 500',
      start: '1',
      end: '500',
      colors: colorMappingData[1] },
  
  
  ];
  
  export const ColorMappingPrimaryXAxis = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    title: 'Days',
  };
  
  export const ColorMappingPrimaryYAxis = {
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
    title: 'Registered Users',
  };