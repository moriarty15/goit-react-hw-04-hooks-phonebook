import { v4 as uuidv4 } from "uuid";

export const addContact = (value) => ({
    type: "contact/addContact",
    payload: {
        name: value.name,
        number: value.number,
        id: uuidv4()
    },
});

export const deleteContact = (contactId) => ({
    type: "contact/deleteContact",
    payload: contactId,
})

export const handleFilterChange = (e) => ({
    type: "contact/filter",
    payload: e.currentTarget.value    
})
