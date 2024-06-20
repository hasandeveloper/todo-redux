import { legacy_createStore as createStore} from "redux";
import todoReducer from "../Reducer/reducers";

const store = createStore(todoReducer);

export default store;
