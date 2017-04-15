import * as _ from "lodash";
export let all = [
    { type: "COMMAND", commandType: "DEVELOP", name: "Develop a new game", cost: 50 },
    { type: "COMMAND", commandType: "PLAY", name: "Play your own games", cost: 0 },
    { type: "COMMAND", commandType: "ADVERTISE", name: "Advertise on forums", cost: 5 },
];
export function reduce(s, a) {
    let newState = _.merge({}, s, {
        clicks: s.clicks - a.cost,
    });
    switch (a.commandType) {
        case "DEVELOP":
            newState.clickers.push({
                name: makeName(newState.clickers),
                players: 0
            });
            break;
        case "PLAY":
            newState.clicks += s.clickers.length;
            break;
        case "ADVERTISE":
            for (let c of newState.clickers) {
                c.players++;
            }
            break;
    }
    return newState;
}
function makeName(clickers) {
    return "Clicker Game " + (clickers.length + 1);
}
//# sourceMappingURL=commands.js.map