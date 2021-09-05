const iniState = [];

export default function seniorReducer(state = iniState, action) {
    switch (action.type) {
        case 'ADD_SENIOR':
            return [...state,action.payload];
        case 'REMOVE_SENIOR':
            return state.filter(member=>member.id !== action.payload.member.id);
        default:
            return state;

    }
}