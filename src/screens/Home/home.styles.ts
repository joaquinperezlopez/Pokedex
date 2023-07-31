import globalStyles from '@styles/global';
import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...globalStyles.headline,
    color: MainTheme.colors.text,
  },
});
