import React from 'react';

export default function languageReducer(state = { language: "SV" }, action) {
    switch (action.type) {
        case "SET_LANGUAGE":
            let x = {...state, language: action.setLanguage };
            return x;
            default:
                return state;
    }
}