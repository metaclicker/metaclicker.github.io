import * as React from "react";
import * as ReactRedux from "react-redux";
import { FixedPanel } from "../widgets/FixedPanel";
import { Clicker } from "./Clicker";
class _Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0, locations: {} };
    }
    render() {
        return <div ref="canvas" style={{ flex: "1", position: "relative" }}>
            {Object.keys(this.state.locations).map(k => {
            let l = this.state.locations[k];
            return <FixedPanel key={k} position="left" x={l.x} y={l.y}>
                    <Clicker {...this.props.clickers.filter(c => c.name == k)[0]}/>
                </FixedPanel>;
        })}
        </div>;
    }
    componentDidMount() {
        window.addEventListener('resize', () => this.measure());
        this.measure();
        this.locate(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.locate(nextProps);
    }
    measure() {
        let ref = this.refs['canvas'];
        this.setState({
            width: ref.clientWidth,
            height: ref.clientHeight,
            locations: this.state.locations
        });
    }
    locate(props) {
        let dirty = false;
        for (let c of props.clickers) {
            if (!this.state.locations[c.name]) {
                dirty = true;
                this.state.locations[c.name] = _Canvas.makeLocation(this.state);
            }
        }
        if (dirty) {
            this.setState(this.state);
        }
    }
    static makeLocation(state) {
        let l = {
            x: (state.width - Clicker.width) / 2,
            y: (state.height - Clicker.height) / 2
        };
        while (Object.keys(state.locations).filter(k => _Canvas.tooClose(l, state.locations[k])).length > 0) {
            l = {
                x: Math.random() * (state.width - Clicker.width),
                y: Math.random() * (state.height - Clicker.height)
            };
        }
        return l;
    }
    static tooClose(l1, l2) {
        return Math.abs(l1.x - l2.x) < (Clicker.width / 2) &&
            Math.abs(l1.y - l2.y) < (Clicker.height / 2);
    }
}
export let Canvas = ReactRedux.connect((s) => ({
    clickers: s.clickers,
}))(_Canvas);
//# sourceMappingURL=Canvas.jsx.map