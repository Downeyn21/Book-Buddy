const apiUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api"

export async function GetApi() {
    try {
        const response = await fetch(`${apiUrl}/books`)
        const result = await response.json()
        console.log("GetApi result => ", result)
        return result
    } catch (error) {
        console.error(error)
    }
}