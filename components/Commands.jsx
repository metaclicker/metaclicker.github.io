import * as React from "react";
import * as ReactRedux from "react-redux";
import * as commands from "../commands";
import { FlexPanel } from "../widgets/FlexPanel";
import { ActionButton } from "../widgets/ActionButton";
function _Commands(props) {
    return <FlexPanel direction="column" padding="5px">
        {commands.all.map(c => <ActionButton key={c.name} label={c.name} error={props.clicks >= c.cost ? null : "requires " + c.cost + " clicks"} onClick={() => props.onCommand(c)}/>)}
    </FlexPanel>;
}
export let Commands = ReactRedux.connect((s) => ({ clicks: s.clicks }), (dispatch) => ({ onCommand: (c) => { dispatch(c); } }))(_Commands);
//# sourceMappingURL=Commands.jsx.map