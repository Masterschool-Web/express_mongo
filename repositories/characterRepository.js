import {CharacterModel} from "../models/character.js"

export async function loadData(characters) {
    for (let character of characters) {
        let characterDocument = new CharacterModel({
            id: character.id,
            name: character.name,
            blood: character.blood,
            species: character.species,
            patronus: character.patronus,
            born: character.born,
            quote: character.quote,
            imgUrl: character.imgUrl
        })
        try {
            await characterDocument.save()
            console.log(`document created with id ${character.id}`)
        } catch (e) {
            console.log(e)
        }
    }
    return 'done'
}

export async function findAll() {
    try {
        return await CharacterModel.find()
    } catch (e) {
        console.log(e)
    }
}

export async function find(key, value) {
    try {
        if (key === 'id') {
            return await CharacterModel.find({id: value})
        } else {
            const query =  { [`${key}`]: { $regex: value, $options:'i'} };
            return await CharacterModel.find(query)
        }
    } catch (e) {
        console.log(e)
    }
}

export async function deleteById(id) {
    try {
        return await CharacterModel.findOneAndDelete({id: id})
    } catch (e) {
        console.log(e)
    }
}