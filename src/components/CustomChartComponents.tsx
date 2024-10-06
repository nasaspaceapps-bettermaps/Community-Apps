import React from 'react';
import { XAxis as RechartsXAxis, YAxis as RechartsYAxis, XAxisProps, YAxisProps } from 'recharts';

export const XAxis: React.FC<XAxisProps> = ({ tickLine = false, axisLine = false, ...props }) => (
  <RechartsXAxis tickLine={tickLine} axisLine={axisLine} {...props} />
);

export const YAxis: React.FC<YAxisProps> = ({ tickLine = false, axisLine = false, ...props }) => (
  <RechartsYAxis tickLine={tickLine} axisLine={axisLine} {...props} />
);