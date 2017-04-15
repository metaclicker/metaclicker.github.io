import * as React from "react";
let styles = require("./Clicker.css");
export class Clicker extends React.Component {
    render() {
        return <div className={styles['oval']} style={{ height: Clicker.height, width: Clicker.width }}>
            {this.props.name}<br />
            {this.props.players} players
        </div>;
    }
}
Clicker.height = 75;
Clicker.width = 150;
//# sourceMappingURL=Clicker.jsx.map