import { CURRENT_LINK } from "../actions/Actions";
const initialState = {
    currentLink: ""
};
export default function ReducerLink(state = initialState, actions) {
    switch (actions.type) {
        case CURRENT_LINK:
            // console.log("current link seen here ", actions.link);
            return {
                currentLink: actions.link
            };
        default:
            return state;
    }
}
