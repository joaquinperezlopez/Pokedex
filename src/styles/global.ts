import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  headline: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subTitle1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle2: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTitle3: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  body1: {
    fontSize: 14,
    fontWeight: '500',
  },
  body2: {
    fontSize: 12,
    fontWeight: '500',
  },
  body3: {
    fontSize: 10,
    fontWeight: '500',
  },
  caption: {
    fontSize: 8,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 3.84,
    elevation: 5,
  },
  defaultPadding: {
    padding: 10,
  },
  defaultGap: {
    gap: 8,
  },
  defaultMargin: {
    margin: 8,
  },
  verticalSpacer: {
    height: 8,
  },
  flex1: {
    flex: 1,
  },
});

export default globalStyles;
