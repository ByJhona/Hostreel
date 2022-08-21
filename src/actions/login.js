export function requestEntrar(email, password){
    return{
        type: "REQUEST::LOGIN",
        payload: {
            email,
            password

        }
    }
};

export function requestSair(){
    return{
        type: "REQUEST::LOGOUT"
    }
};