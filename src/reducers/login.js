const initialState = {
    islogin: false,
    email: '',
    password: ''
}

export default function loginReducer (state = initialState, action) {
    //8const user = action;
    switch (action.type) {
        case 'LOGIN::ENTRAR':
            console.log(state)
        console.log(action)

            return  {islogin: true, email: action.payload.email, password: action.payload.password}
        
        case 'LOGIN::SAIR':
            return {islogin: false, email: '', password: ''}
          
        default:
            console.log(state)
        console.log(action)
            return {islogin: state.islogin, email: state.email, password: state.password};
      }
};

