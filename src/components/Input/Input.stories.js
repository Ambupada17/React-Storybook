// We have to write story in Component Story format 
import React from "react";
import Input from "./Input";

export default {
    title: 'Form/Input',
    component: Input
}

export const Small = () => <Input size="small" placeholder="Small" />
export const Medium = () => <Input size="medium" placeholder="Medium" />
export const Large = () => <Input size="large" placeholder="Large" />

Small.storyName = "Small Input"  //For renaming the story name 