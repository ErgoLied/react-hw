const reducer = (state, action) => {
    if (action.act === '+') {
        return {...state, health: state.health + action.value};
    } else if (action.act === '-') {
        return {...state, health: state.health - action.value};
    }
    return {...state}
}

export {reducer}