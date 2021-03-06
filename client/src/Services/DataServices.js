import jwt from 'jsonwebtoken'

export const getAllConutries = async () => {
    return await fetch(`/api/getAllCountry`)
        .then((res) => res.json())

}

export const getConutryByName = async (counrtyName) => {
    return await fetch(`/api/getCountryByName?counrtyName=${counrtyName}`)
        .then((res) => res.json())
}

export const getCountryListByStringArray = async (counrtyNameList) => {
    return await fetch(`/api/getListOfCountry?conutryNames=${counrtyNameList}`)
        .then((res) => res.json())
}

export const userLogin = async (loginUser) => {
    return await fetch(`/userapi/login`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ email: loginUser.email, password: loginUser.password })
    })
        .then((res) => res.json())
}

export const userRegisteration = async (userInfo) => {
    return await fetch(`/userapi/register`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(
            {
                name: userInfo.name,
                email: userInfo.email,
                password: userInfo.password
            }
        )
    }).then((res) => res.json())
}

export const doPlay = async () => {
    const token = localStorage.getItem('token')
    return await fetch(`/gameapi/playGame`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: "GET"
    }).then((res) => res.json())
}

export const getCreditById = async (id) => {
    const token = localStorage.getItem('token')
    return await fetch(`/gameapi/getCredit?id=${id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        method: "GET"
    }).then((res) => res.json())
}

export const isAlreadyLogged = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const user = jwt.decode(token)
        if (!user) {
            return null;
        } else {
            return user;
        }
    } else {
        return null;
    }
}