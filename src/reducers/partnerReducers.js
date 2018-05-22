// Partner reducers

export function partnerReducers(
    state = {
        partners: [
            {
                id: 1,
                title: 'Udacity',
                description: 'some random description text',
                url: "https://www.udacity.com/",
                img_src: "assets/img/udacity.png"
            },
            {
                id: 2,
                title: 'Coursera',
                description: 'some random description text',
                url: "https://www.coursera.org/",
                img_src: "assets/img/coursera.png"
            },
            {
                id: 3,
                title: 'Khan Academy',
                description: 'some random description text',
                url: "https://www.khanacademy.org/",
                img_src: "assets/img/khanacademy.jpg"
            },
        ]
    }, action ){
        switch (action.type) {
            case "GET_PARTNERS":
                // API call to get all registered partners
                return {...state, partners: [...state.partners]};
            case "POST_PARTNERS":
                return {partners: [...state.partners, ...action.payload]};
            case "UPDATE_PARTNER":
                let currentPartnersToUpdate = [...state.partners];
                const indexToUpdate = currentPartnersToUpdate.findIndex(
                    partner => partner.id === action.payload.id
                )

                const oldPartner = currentPartnersToUpdate[indexToUpdate];

                // create updated partner object
                const updatedPartner = {
                    ...currentPartnersToUpdate[indexToUpdate],
                    title: action.payload.title | oldPartner.title,
                    description: action.payload.description | oldPartner.description,
                    url: action.payload.url | oldPartner.url,
                    img_src: action.payload.img_src | oldPartner.img_src
                }
                return {
                    partners: [
                        ...currentPartnersToUpdate.slice(0, indexToUpdate),
                        updatedPartner,
                        ...currentPartnersToUpdate.slice(indexToUpdate+1)
                    ]
                };
            case "DELETE_PARTNER":
                const currentPartnersToDelete = [...state.partners];
                const indexToDelete = currentPartnersToDelete.findIndex(
                    partner => partner.id === action.payload.id
                )
                return {
                    partners: [
                        ...currentPartnersToDelete.slice(0, indexToDelete),
                        ...currentPartnersToDelete.slice(indexToDelete+1)
                    ]
                };
            default:
                return state;
        }
        return state;
    }