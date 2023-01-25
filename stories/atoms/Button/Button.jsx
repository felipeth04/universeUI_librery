import * as React from "react";
import PropTypes from "prop-types"
import {options} from "./constants"
import "./Button.css"
import classNames from "classnames";

export const Button = ({
    text = "hello world",
    color = "Primary",
    size = "s"
}) => {
    return (
        <button className={classNames("button",{
            [`color-${color}`]: color,
            [`size-${size}`]: size
        })}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes)
}
