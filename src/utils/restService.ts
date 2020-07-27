export const BASE_URL ="http://localhost:3001/"
export const getData = async (url: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = (await fetch(url, {method: "GET", mode: "cors"})).json()
            resolve(await data)
        } catch (e) {

            reject(e)
        }

    })
}

export const postData = async (url: string, body: any) => {
    return new Promise(async (resolve, reject) => {
        try {
            const data = (await fetch(`${BASE_URL}${url}`, {method: "POST", mode: "cors", body: JSON.stringify(body)})).json()
            resolve(await data)
        } catch (e) {
            reject(e)
        }

    })
}