export function reviewReducers(
    state = {
        reviews: []
    }, action ){
        switch(action.type) {
            case 'GET_REVIEWS':
                // API call, get all reviews or top n reviews
                return {...state, reviews: [...state.reviews]};
            case 'DELLETE_REVIEW':
                // API call, delete review with action.payload.id
                // Then update delete locally in state, or GET_REVIEWS
                const currentReviews = [...state.reviews];
                const indexToDelete = currentReviews.findIndex(
                    review => review.id === action.payload.id
                );
                return {
                    reviews: [
                        ...currentReviews.slice(0, indexToDelete),
                        ...currentReviews.slice(indexToDelete + 1)
                    ]
                }
            default:
                return state;
        }
    }
