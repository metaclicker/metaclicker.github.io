import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from "react-redux";
import * as actions from "./actions";
import { Game } from "./components/Game";
let store = Redux.createStore(actions.reduce);
setInterval(() => store.dispatch(actions.tick()), 1000);
ReactDOM.render(<ReactRedux.Provider store={store}><Game /></ReactRedux.Provider>, document.getElementsByTagName("main")[0]);
if (module.hot) {
    module.hot.accept(['./actions'], () => {
        const nextRootReducer = require('./actions').reduce;
        store.replaceReducer(nextRootReducer);
    });
}
//# sourceMappingURL=index.jsx.map