import useThemedStyles from '@hooks/useThemeStyles';
import React from 'react';
import {
  RegisterOptions,
  useController,
  useFormContext,
} from 'react-hook-form';
import { Text, TextInput, TextInputProps, View } from 'react-native';
import styles from './PokedexTextField.styles';

type PokedexTextFieldProps = {
  fieldName: string;
  rules?: RegisterOptions;
} & TextInputProps;

const PokedexTextField = ({
  fieldName,
  rules,
  ...rest
}: PokedexTextFieldProps) => {
  const themedStyles = useThemedStyles(styles);
  const { control, register } = useFormContext();
  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    name: fieldName,
    control,
  });

  const onChangeText = (text: string) => {
    // this is to link the react-hook-form with the text input
    onChange(text);
    // and this one the one that the parent component can use
    rest?.onChangeText?.(text);
  };

  return (
    <View style={themedStyles.container}>
      <TextInput
        {...register(fieldName, rules)}
        {...rest}
        ref={ref}
        style={themedStyles.input}
        placeholderTextColor={themedStyles.colors.grayScale.medium}
        onChangeText={onChangeText}
      />
      <Text style={themedStyles.error}>{error?.message ?? ''}</Text>
    </View>
  );
};

export default PokedexTextField;
