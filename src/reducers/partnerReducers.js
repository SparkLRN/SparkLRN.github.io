// Partner reducers

export function partnerReducers(
    state = {
        partners: [
            {
                id: 1,
                title: 'Khan Academy',
                description: 'some random description text',
                url: "https://www.khanacademy.org/",
                img_src: "assets/images/partners/khanacademy.jpg"
            },
            {
                id: 2,
                title: 'Udacity',
                description: 'some random description text',
                url: "https://www.udacity.com/",
                img_src: "assets/images/partners/udacity.jpg"
            },
            {
                id: 3,
                title: 'LinkedIn Learning',
                description: 'some random description text',
                url: "https://www.linkedin.com/learning/",
                img_src: "assets/images/partners/linkedin.jpg"
            },
            {
                id: 4,
                title: 'Coursera',
                description: 'some random description text',
                url: "https://www.coursera.org/",
                img_src: "assets/images/partners/coursera.jpg"
            },
            {
                id: 5,
                title: 'EDX',
                description: 'some random description text',
                url: "https://www.edx.org/",
                img_src: "assets/images/partners/edx.jpg"
            },
            {
                id: 6,
                title: 'Microsoft Virtual Academy',
                description: 'some random description text',
                url: "https://mva.microsoft.com/",
                img_src: "assets/images/partners/mva.jpg"
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