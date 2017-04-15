import * as React from "react";
import { FlexPanel } from "../widgets/FlexPanel";
import { Menu } from "./Menu";
import { Canvas } from "./Canvas";
export class Game extends React.Component {
    render() {
        return <FlexPanel height="100vh">
            <Menu />
            <Canvas />
        </FlexPanel>;
    }
}
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=Game.jsx.map