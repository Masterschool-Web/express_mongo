import characters from "../data/characters.json" assert { type: "json" };
import {deleteById, find, findAll, loadData as loadDataInDB} from "../repositories/characterRepository.js";

export async function loadData(){
    return await loadDataInDB(characters)
}

export async function getAll() {
    return await findAll()
}
export async function getById(id) {
    return await find('id', id)
}

export async function getByName(name) {
    return await find('name', name)
}

export async function getByBirthMonth(month) {
    return await find('born', month)
}

export async function getByBloodType(blood) {
    return await find('blood', blood)
}

export async function removeById(id) {
    return await deleteById(id)
}