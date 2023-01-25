import {Button} from "./Button";
import {options} from "./constants";

export default  {
    title: "Button",
    component: Button
}

export const Default = () => <Button/>

export const Colors = () =>
    options.colors.map((color,index) => {
        return <Button key={index} color={color} />
})

export const Sizes = () => options.sizes.map((size,index) => {
    return <Button key={index} size={size}/>
})