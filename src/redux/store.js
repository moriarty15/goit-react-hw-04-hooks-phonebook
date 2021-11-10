import { createStore } from "redux";

const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "contact/addContact":
      if (state.contacts.items.some((e) => e.name.includes(payload.name))) {
        alert(`${payload.name} is already in contacts`);
        return state;
      }
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [payload, ...state.contacts.items],
        },
      };
    case "contact/deleteContact":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter((item) => item.id !== payload),
        },
      };
    case "contact/filter":
      return {
        ...state,
        contacts: {
          ...state.contacts,
          filter: payload,
        },
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
