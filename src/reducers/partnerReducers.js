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
                break;
            case "POST_PARTNERS":
                return {partners: [...state.partners, ...action.payload]};
                break;
            case "UPDATE_PARTNER":
                let currentPartnersToUpdate = [...state.partners];
                const indexToUpdate = currentPartnersToUpdate.findIndex(
                    partner => partner.id == action.payload.id
                )

                const oldParner = currentPartnersToUpdate[indexToUpdate];

                // create updated partner object
                const updatedPartner = {
                    ...currentPartnersToUpdate[indexToUpdate],
                    title: payload.title | oldPartner.title,
                    description: payload.description | oldPartner.description,
                    url: payload.url | oldPartner.url,
                    img_src: payload.img_src | oldPartner.img_src
                }
                return {
                    partners: [
                        ...currentPartnersToUpdate.slice(0, indexToUpdate),
                        updatedPartner,
                        ...currentPartnersToUpdate.slice(indexToUpdate+1)
                    ]
                };
                break;
            case "DELETE_PARTNER":
                const currentPartnersToDelete = [...state.partners];
                const indexToDelete = currentPartnersToDelete.findIndex(
                    partner => partner.id == action.payload.id
                )
                return {
                    partners: [
                        ...currentPartnersToDelete.slice(0, indexToDelete),
                        ...currentPartnersToDelete.slice(indexToDelete+1)
                    ]
                };
                break;
        }
        return state;
    }