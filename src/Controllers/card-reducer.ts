export const initialState = {
    startValue: 10,
    reserveValue: 0,
    title: "Spicy seasoned seafood noodles",
    price: 2.29,
}

export const cardReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "CARD/RESERVE_PROD":    
            return {...state, startValue: (state.startValue - 1), reserveValue: (state.reserveValue + 1)}
        default:
            return state
    }
}

export const reserveProdAC = () => ({type: "CARD/RESERVE_PROD"} as const)

type InitialStateType = typeof initialState

export type ActionType = ReserveProdACType 

export type ReserveProdACType = ReturnType<typeof reserveProdAC>
