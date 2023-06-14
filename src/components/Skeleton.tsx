import React, { FC } from 'react'

import * as Animatable from 'react-native-animatable';

import { Colors, Size } from '~styles';
import { logger } from '~utils';

export interface SkeletonProps {
  height: number | string;
  width: number | string;
  mt?: number;
  mb?: number;
  borderRadius?: number;
  background?: string;
}

const fadeIn = {
  0: { opacity: 0.5 },
  1: { opacity: 1 },
}

const Skeleton: FC<SkeletonProps> = ({
  height,
  width,
  borderRadius,
  background,
}) => {
  const styles = {
    height, width, borderRadius, backgroundColor: background
  }

  return (
    <>
      <Animatable.View
        easing="ease-out"
        iterationCount="infinite"
        direction="alternate"
        animation={fadeIn}
        style={styles} />
    </>
  )
}

export default Skeleton;

Skeleton.defaultProps = {
  width: Size.l,
  height: Size.l,
  background: Colors.gray4,
  borderRadius: 2,
}