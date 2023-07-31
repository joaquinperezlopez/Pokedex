import globalStyles from '@styles/global';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...globalStyles.defaultPadding,
    borderWidth: 1,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
