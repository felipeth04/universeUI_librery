import * as React from "react";
import PropTypes from "prop-types"
import {options} from "./constants"

export const Button = ({
    text = "hello world",
    color = "Primary",
    size = "s"
}) => {
    return (
        <button>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes)
}
