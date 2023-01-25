import {Button} from "./Button";
import {options} from "./constants";

export default  {
    title: "Button",
    component: Button
}

const Template = (args) => <Button {...args}/>
const listTemplate = ({items, ...args}) => items.map((item,index) => <Button key={index} {...args} {...item}/>)

export const Default = () => Template.bind({})

export const Colors = listTemplate.bind({})
Colors.args = {
    items: options.colors.map(color => ({color}))
}

export const Sizes = listTemplate.bind({})
Sizes.args = {
    items: options.sizes.map(size => ({size}))
}