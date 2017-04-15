import * as React from "react";
let styles = require("./Tooltip.css");
export function Tooltip(props) {
    if (props.text == null) {
        return <div>{props.children}</div>;
    }
    else {
        return <div className={styles['target']}>
            {props.children} 
            <div className={styles['tooltip']}>{props.text}</div>
        </div>;
    }
}
//# sourceMappingURL=Tooltip.jsx.map