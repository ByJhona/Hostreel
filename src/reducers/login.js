import { LOGAR, SAIR } from "../actions/login.js";

const initialState = {
    login: true,
}


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGAR:
            console.log(state)
            return  {login: true}
        
        case SAIR:
            console.log(state)
          return {login: false}
          
        default:
            console.log(state)
          return {login: true};
      }
};

export default loginReducer;