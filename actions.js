import * as _ from "lodash";
import * as commands from "./commands";
export function tick() {
    return {
        type: "TICK"
    };
}
export function reduce(s, a) {
    if (typeof s === "undefined") {
        return init();
    }
    switch (a.type) {
        case "TICK":
            return _.merge({}, s, {
                clicks: s.clicks + s.clickers.map(c => c.players).reduce((x, y) => x + y, 0),
            });
        case "COMMAND":
            return commands.reduce(s, a);
        default:
            return s;
    }
}
function init() {
    return {
        clicks: 50,
        clickers: []
    };
}
//# sourceMappingURL=actions.js.map