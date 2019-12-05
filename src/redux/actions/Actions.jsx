


export const API_RESPONSE = "api_response";
export const CURRENT_LINK = "current_link";
export const currentLink = (currentLinkDetails) => {
    return { type: CURRENT_LINK, link: [currentLinkDetails] };
};
export const apiResponse =  (fetchedData) => {
    console.log("fetched data is ", { type: API_RESPONSE, apiObjectResponse : fetchedData});
    return { type: API_RESPONSE, apiObjectResponse : fetchedData};
};
