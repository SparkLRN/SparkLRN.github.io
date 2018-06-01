/*
Returns array of Review objects.
[{id: id, profile: {}, review: "", rating: "" }, {...}, ...]
*/
export function getReviews() {
    return {
        type: "GET_REVIEWS"
    }
}

/*
@param review: Review object.
{id: id, profile: {}}
*/
export function deleteReview(review) {
    return {
        type: "DELETE_REVIEW",
        payload: review
    }
}
