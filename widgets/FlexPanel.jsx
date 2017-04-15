import * as React from "react";
export function FlexPanel(props) {
    let panelStyle = {
        width: props.width || "100%",
        height: props.height || "100%",
        padding: props.padding,
        margin: props.margin,
        position: "relative",
        display: "flex",
        flexDirection: props.direction || "column",
        justifyContent: props.justify || "flex-start",
        alignItems: props.align || "stretch",
    };
    return <div style={panelStyle}>
        {React.Children.map(props.children, (c) => {
        if (props.flex) {
            return <div style={{ flex: props.flex }}>{c}</div>;
        }
        else {
            return c;
        }
    })} 
    </div>;
}
//# sourceMappingURL=FlexPanel.jsx.map