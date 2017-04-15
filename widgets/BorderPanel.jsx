import * as React from "react";
export function BorderPanel(props) {
    let panelStyle = {
        width: props.width || "100%",
        height: props.height || "100%",
        padding: props.padding,
        margin: props.margin,
        borderStyle: "solid",
        borderColor: props.color || "black",
        borderWidth: props.border || "1px 1px 1px 1px",
    };
    return <div style={panelStyle}>{props.children}</div>;
}
//# sourceMappingURL=BorderPanel.jsx.map