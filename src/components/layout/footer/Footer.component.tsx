import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { View } from 'react-native';
import styles from './Footer.styles';

const Footer = ({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) => {
  const themedStyles = useThemedStyles(styles);
  return <View style={themedStyles.container}>{children}</View>;
};

export default Footer;
