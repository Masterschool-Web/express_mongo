import {UserModel} from "../models/user.js"

export async function findByUsername(username) {
    try {
        return await UserModel.findOne({username: username})
    } catch (e) {
        console.log(e)
    }
    return null
}

export async function createUser(username, password, firstName = null, lastName = null) {
    let userDocument = new UserModel({
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
    })
    try {
        await userDocument.save()
        return true
    }  catch (e) {
        console.log(e)
    }
    return null
}
