import React from 'react';

export default (...extra: any) => {
  if (__DEV__) {
    console.log(...extra)
  }
  return;
}