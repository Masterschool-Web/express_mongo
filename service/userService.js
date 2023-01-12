import {createUser, findByUsername} from "../repositories/userRepository.js";

export async function login(username, password) {
    try {
        let user = await findByUsername(username);
        return user.password === password;
    } catch (e){
        console.log(e)
    }
    return false
}

export async function register(username, password, firstName = null, lastName = null){
    try {
        return await createUser(username, password, firstName, lastName)
    } catch (e){
        console.log(e)
    }
    return null
}