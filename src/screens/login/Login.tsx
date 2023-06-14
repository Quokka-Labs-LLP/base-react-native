import React, { useState } from 'react'

import { View, Text, TextInput } from 'react-native'

type Props = {}

const Login = (props: Props) => {
  const [email, setEmail] = useState('');
  return (
    <View>
      <Text>Login</Text>
      <TextInput
        value={email}
      />
    </View>
  )
}

export default Login