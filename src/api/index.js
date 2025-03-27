const apiUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

export async function GetApi() {
    try {
        const response = await fetch(`${apiUrl}/books`)
        const result = await response.json()
        console.log("GetApi result => ", result)
        return result
    } catch (error) {
        console.error("GET error => ", error)
    }
}

export async function RegisterApi(data) {
    try {
        const response = await fetch(`${apiUrl}/users/register`, {
            method: "POST",
            headers: {"Content-Type": "application/json"} ,
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log("Register result => ", result)
    } catch (error) {
        console.error("Register error => ", error)
    }
}

export async function LoginApi(data) {
    try {
        const response = await fetch(`${apiUrl}/users/login`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        const result = await response.json()
        console.log("Login result => ", result)
        return result.token
    } catch (error) {
        console.log("Login error => ", error)
    }
}

export async function AccountApi(token) {
    try {
        const response = await fetch(`${apiUrl}/users/me`)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}