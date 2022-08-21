const initialState = {
    islogin: false,
    email: '',
    password: ''
}

export default function loginReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN::ENTRAR':
            return  {islogin: state.islogin, email: state.email, password: state.password}
        
        case 'LOGIN::SAIR':
            return {islogin: state.islogin, email: '', password: ''}
          
        default:
            return {islogin: state.islogin, email: state.email, password: state.password};
      }
};

