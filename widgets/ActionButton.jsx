import * as React from "react";
import { Tooltip } from "./Tooltip";
let styles = require("./ActionButton.css");
export function ActionButton(props) {
    let c = props.error == null ? styles['button'] : styles['button'] + " " + styles['disabled'];
    return <Tooltip text={props.error}>
        <button className={c} onClick={props.onClick} disabled={props.error != null}>
               {props.label}
        </button>
    </Tooltip>;
}
//# sourceMappingURL=ActionButton.jsx.map