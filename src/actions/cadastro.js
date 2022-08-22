export function requestCadastro(name, email, password){
    return{
        type: "REQUEST::CADASTRAR",
        payload: {
            name,
            email,
            password

        }
    }
};
