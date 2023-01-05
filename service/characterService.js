import characters from "../data/characters.json" assert { type: "json" };
import {findOne, findAll , loadData as loadDataInDB} from "../repositories/characterRepository.js";

export async function loadData(){
    return await loadDataInDB(characters)
}

export async function getAll() {
    return await findAll()
}
export async function getById(id) {
    return await findOne('id', id)
}

export async function getByName(name) {
    return await findOne('name', name)
}
