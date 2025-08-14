import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  homeContainer: {
    width: '100%',
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 30,
    flex: 1,
    backgroundColor: '#e6e6fa',
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  logoContainer: {
    width: 150,
    height: 150,
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: '50%',
    boxShadow: '0px 0px 0 3px rgb(229, 191, 60)',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  smallLogoContainer: {
    width: 60,
    height: 60,
    marginBottom: 30,
    borderColor: '#000',
    borderWidth: 4,
    borderRadius: '50%',
    boxShadow: '0px 0px 0 1px rgb(229, 191, 60)',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  activateButton: {
    width: '90%',
    marginBottom: 40
  },
  inputsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
})