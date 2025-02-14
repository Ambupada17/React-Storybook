import React from 'react'
import { Button } from '@chakra-ui/react'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } }
}

const Template =  args => <Button {...args} />

export const Success = Template.bind({})
Success.args = {
  colorScheme: 'green',
  children: 'Success'
}

export const Danger = Template.bind({})
Danger.args = {
  colorScheme: 'red',
  children: 'Danger'
}

// export const Success = () => <Button variantColor = 'green'>Success</Button>
// export const Danger = () => <Button variantColor = 'red'>Danger</Button>