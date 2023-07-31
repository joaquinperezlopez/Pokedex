import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './PokedexTextField.styles';

type PokedexTextFieldProps = {
  label: string;
} & TextInputProps;

const PokedexTextField = ({ label, ...rest }: PokedexTextFieldProps) => {
  const themedStyles = useThemedStyles(styles);
  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.label}>{label}</Text>
      <TextInput {...rest} style={themedStyles.input} />
    </View>
  );
};

export default PokedexTextField;
