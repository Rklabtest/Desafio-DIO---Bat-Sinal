import React from 'react'
import { Image } from 'react-native'
import { styles } from './BatLogoStyles'
import batlogo from '../../../assets/bat-logo.png'

interface activate { activate : boolean}
export function BatLogo(props: activate) {
  return (<>
    {!props.activate && <Image source={batlogo} style={styles.logo}></Image>}
    {props.activate && <Image source={batlogo} style={styles.smallLogo}></Image>}
  </>
  )
}