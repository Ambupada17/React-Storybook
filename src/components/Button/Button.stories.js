// We have to write story in Component Story format 
import React from "react";
import Button from "./Button";

export default {
    title: 'Form/Button',
    component: Button,
    args: {
        children : 'Button'
    }
}

export const Primary = () => <Button varient="primary">Primary</Button>
export const Secondary = () => <Button varient="secondary">Secondary</Button>
export const Success = () => <Button varient="success">Success</Button>
export const Danger = () => <Button varient="danger">Danger</Button>

//This mechanisim helps to reduce unique code you'll need to write and maintain for each story

const Template = args =>  <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    varient: 'primary',
    //children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    //children: 'Long Primary Args'
}

export const PrimaryB = Template.bind({})
PrimaryB.args = {
    varient: 'secondary',
    //children: 'Secondary Args'
}