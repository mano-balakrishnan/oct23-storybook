import PropTypes from "prop-types";
import "./TextBox.css";

function TextBox(props) {
    return (
        <input type="text" disabled={props.disabled} className={props.hasError ? "storybook-textbox-error" : ""} />
    )
}

TextBox.propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
}

export default TextBox;