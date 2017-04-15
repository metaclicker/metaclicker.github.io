import * as React from "react";
import * as ReactRedux from "react-redux";
import { FlexPanel } from "../widgets/FlexPanel";
import { HeaderText } from "../widgets/HeaderText";
function _Scores(props) {
    return <FlexPanel direction="column" padding="5px">
        <HeaderText>Clickers: {props.clickers}</HeaderText>
        <HeaderText>Players: {props.players}</HeaderText>
        <HeaderText>Clicks: {props.clicks}</HeaderText>
    </FlexPanel>;
}
export let Scores = ReactRedux.connect((s) => ({
    clicks: s.clicks,
    clickers: s.clickers.length,
    players: s.clickers.map(c => c.players).reduce((x, y) => x + y, 0)
}))(_Scores);
//# sourceMappingURL=Scores.jsx.map