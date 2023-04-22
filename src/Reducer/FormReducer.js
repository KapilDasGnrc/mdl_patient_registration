const FormReducer = (state, action) => {
    console.log('State Action: ' + JSON.stringify(action));

    switch (action.type) {
        case "HANDLE_INPUT_TEXT":
            return {
                ...state,
                [action.field]: action.payload,
            };

        case "HANDLE_TOGGLE_CHECKBOX":
            return {
                ...state,
                isChecked: !state.isChecked,
            };

        case "RESET":
            return action.state;

        default:
            return state;
    }
}

export default FormReducer;