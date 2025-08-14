import { View, Text } from 'react-native'

import { styles } from './HomeStyles'
import { BatLogo } from '../../components/BatLogo/BatLogo'
import { BatFormInputs } from '../../components/BatFormInputs/BatFormInputs'
import { BatButton } from '../../components/BatButton/BatButton'
import { useState } from 'react'

export function Home() {
  
  const [activate, setActivate] = useState(false)

  return (
    <View style={styles.homeContainer}>
      {!activate && <>
        <View style={styles.logoContainer}>
          <BatLogo activate={activate}/>
        </View>
      
        <View style={styles.activateButton}>
          <BatButton activate={activate} setActivate={setActivate}/>
        </View> 
      </>
        }

      {activate && <>
        <View style={styles.smallLogoContainer}>
          <BatLogo activate={activate}/>
        </View>
        <View style={styles.inputsContainer}>
          <BatFormInputs />
        </View> 
      </>}

    </View>
  )
}