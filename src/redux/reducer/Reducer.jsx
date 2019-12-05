import { API_RESPONSE, CURRENT_LINK } from "../actions/Actions";

const initialState = {
    apiObjectResponse : [ ]
}

export default function Reducer(state = initialState, actions) {
    switch (actions.type) {
        case API_RESPONSE:
            console.log("API response seen")
            return {
                apiObjectResponse : [
                    ...actions.apiObjectResponse
                ]
            };
        case CURRENT_LINK:

                return {
                    apiObjectResponse: [
                        ...state.apiObjectResponse,
                        {
                            ...actions
                        }
                    ]
                };
        default:
                return state;
    }
}
