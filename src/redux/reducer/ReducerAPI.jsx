import { API_RESPONSE } from "../actions/Actions";

const initialState = {
    apiObjectResponse: []
};

export default function ReducerAPI(state = initialState, actions) {
    switch (actions.type) {
        case API_RESPONSE:
            // console.log("API response seen : ",{
            //     apiObjectResponse : [
            //         ...actions.apiObjectResponse
            //     ]
            // });
            return {
                apiObjectResponse: [...actions.apiObjectResponse]
            };
        default:
            return state;
    }
}
