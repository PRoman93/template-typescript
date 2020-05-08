import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import reducer from "./reducers/signInReducer";
import SignInReducer from "./reducers/signInReducer";
import NekoReducer from "./reducers/NekoReducer";
import PasswordForgotReducer from "./reducers/PasswordForgotReducer";
import RegistrationReducer from "./reducers/RegistrationReducer";
import SetNewPasswordReducer from "./reducers/SetNewPasswordReducer";

const rootReducer = combineReducers({
    singIn: SignInReducer,
    registration: RegistrationReducer,
    passwordForgot: PasswordForgotReducer,
    setNewPassword: SetNewPasswordReducer,
    neko: NekoReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
