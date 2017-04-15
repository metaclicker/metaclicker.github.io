import * as React from "react";
export function FixedPanel(props) {
    var panelStyle = {
        width: props.width || "auto",
        height: props.height || "auto",
        position: "absolute",
        top: props.y,
    };
    if (props.position == "left") {
        panelStyle.left = props.x;
    }
    else {
        panelStyle.right = props.x;
    }
    return <div style={panelStyle}>
        {props.children}
    </div>;
}
//# sourceMappingURL=FixedPanel.jsx.map