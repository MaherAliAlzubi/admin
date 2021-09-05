const iniState = [];

export default function internReducer(state = iniState, action) {
    switch (action.type) {
        case 'ADD_INTERN':
            return [...state,action.payload.member];
        case 'REMOVE_INTERN':
            return state.filter(member=>member.id !== action.payload.member.id);
        default:
            return state;

    }
}