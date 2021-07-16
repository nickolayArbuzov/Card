import {cardReducer} from "./card-reducer";
import {combineReducers, createStore} from "redux";

const rootReducer = combineReducers ({
    card: cardReducer
})

export const store = createStore(rootReducer)


export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store
