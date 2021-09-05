const iniState = [];

export default function juniorReducer(state = iniState, action) {
    switch (action.type) {
        case 'ADD_JUNIOR':
            return [...state,action.payload];
        case 'REMOVE_JUNIOR':
            return state.filter(member=>member.id !== action.payload.member.id);
        default:
            return state;

    }
}