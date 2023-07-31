import globalStyles from '@styles/global';
import { StyleSheet } from 'react-native';
import { MainTheme } from '../../theme/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MainTheme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerContainer: {
    ...globalStyles.defaultGap,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  buttonsContainer: {
    gap: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '80%'
  }
});
