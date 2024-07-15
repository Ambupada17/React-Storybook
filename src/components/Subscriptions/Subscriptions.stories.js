//Writing Stories within story
//1:- Reduce the amount of code we write
//2:- If you make changes n one story it'll automatically reflect in this stories
//If I changes the primary button stories it'll changes in primary subscription stories

import React from "react";
import { Primary } from "../Button/Button.stories";
import { Large } from "../Input/Input.stories";

export default {
    title: "Form/Subscription",
};

export const PrimarySubscription = () => (
    <>
        <Primary />
        <Large />
    </>
)
