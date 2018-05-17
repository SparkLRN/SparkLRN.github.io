/*
Returns array of Partner objects.
[{id: id, title: "", description: "", url:"", img_src: "" }, {...}, ...]
*/
export function getPartners (){
    return {
        type: "GET_PARTNERS"
    }
}

/*
@param partners: array of Partner objects.
[{id: id, title: "", description: "", url:"", img_src: "" }, {...}, ...]
*/
export function postPartners(partners){
    return {
        type: "POST_PARTNERS",
        payload: partners
    }
}

/*
@param updates: Partner updates object.
{id: id, title: "", description: "", url:"", img_src: "" }
*/
export function updatePartner(updates){
    return {
        type: "UPDATE_PARTNER",
        payload: updates
    }
}

/*
@param partner: Partner object.
{id: id, title: ""}
*/
export function deletePartner(partner){
    return {
        type: "DELETE_PARTNER",
        payload: partner
    }
}
