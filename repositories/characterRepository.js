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

export async function findOne(key, value) {
    try {
        return await CharacterModel.find({
            key: value
        })
    } catch (e) {
        console.log(e)
    }
}