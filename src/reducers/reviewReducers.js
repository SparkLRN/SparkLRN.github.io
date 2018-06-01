export function reviewReducers(
    state = {
        reviews: [
            {
                id: 1,
                profile: {
                    name: "Beth Yang",
                    photo: "http://uploads.webflow.com/5a7d94ae2dbf1b0001dc27df/5a7ec4ebee248c0001380b3e_team-5.jpg",
                    role: "Electrical Engineering Student, JKUAT"
                },
                review: "With Spark, I am able to set learning milestones, and watch myself achieve them. Whats more, I get feedback on what worked and what failed along the journey",
                rating: 5
            },
            {
                id: 2,
                profile: {
                    name: "Charlie Lee",
                    photo: "http://uploads.webflow.com/5a7d94ae2dbf1b0001dc27df/5a7f05f8c7942700013316bc_team-7.jpg",
                    role: "Developer, Microsoft"
                },
                review: "Spark has continually guided me in my learning, leaving me to focus on the learning and not how I am learning",
                rating: 5
            }
        ]
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
