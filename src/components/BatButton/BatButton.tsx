import { Pressable, Text } from 'react-native'

import { styles } from './BatButtonStyles'

interface BatButtonProps {
  activate : boolean
  setActivate : any
}
export function BatButton(props : BatButtonProps ) {

  const activateForm = () => {
    props.setActivate(true)
  }

  return (
    <Pressable onPress={activateForm} style={styles.button}>
      <Text style={styles.text}>activate bat sinal</Text>
    </Pressable>
  )
}