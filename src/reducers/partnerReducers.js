// Partner reducers

export function partnerReducers(
    state = {
        partners: []
    }, action ){
        switch (action.type) {
            case "GET_PARTNERS":
                // API call to get all registered partners
                return {...state, partners: [...state.partners]};
                break;
            case "POST_PARTNERS":
                return {partners: [...state.partners, ...action.payload]};
                break;
            case "UPDATE_PARTNER":
                const currentPartners = [...state.partners];
                const indexToUpdate = currentPartners.findIndex(
                    partner => partner.id == action.payload.id
                )

                const oldParner = currentPartners[indexToUpdate];

                // create updated partner object
                const updatedPartner = {
                    ...currentPartners[indexToUpdate],
                    title: payload.title | oldPartner.title,
                    description: payload.description | oldPartner.description,
                    url: payload.url | oldPartner.url,
                    img_src: payload.img_src | oldPartner.img_src
                }
                return {
                    partners: [
                        ...currentPartners.slice(0, indexToUpdate),
                        updatedPartner,
                        ...currentPartners.slice(indexToUpdate+1)
                    ]
                };
                break;
            case "DELETE_PARTNER":
                const currentPartners = [...state.partners];
                const indexToDelete = currentPartners.findIndex(
                    partner => partner.id == action.payload.id
                )
                return {
                    partners: [
                        ...currentPartners.slice(0, indexToDelete),
                        ...currentPartners.slice(indexToDelete+1)
                    ]
                };
                break;
        }
        return state;
    }