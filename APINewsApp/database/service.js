const connection = require("../config/dbConfig");

connection.connect()
function getAllBreakingNews() {
    return new Promise((resolve, reject) => {
        connection.query('select * from content where topic_id=1', (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}
function getAllTechNews() {
    return new Promise((resolve, reject) => {
        connection.query('select * from content where topic_id=2', (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}

function getAllPoliticalNews() {
    return new Promise((resolve, reject) => {
        connection.query('select * from content where topic_id=3', (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}

function getAllEntertaimentNews() {
    return new Promise((resolve, reject) => {
        connection.query('select * from content where topic_id=4', (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}

function searchByName(name) {
    return new Promise((resolve, reject) => {
        connection.query(`select * from content  where title like '%${name}%' `, (error, result, fields) => {
            if (error) {
                reject(error)
            }
            resolve(result)
        })
    })
}



module.exports = {
    getAllBreakingNews: getAllBreakingNews,
    getAllTechNews: getAllTechNews,
    getAllPoliticalNews: getAllPoliticalNews,
    getAllEntertaimentNews: getAllEntertaimentNews,
    searchByName: searchByName,

}