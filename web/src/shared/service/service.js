import apiScience from '../constants/api'

export const getNotice = async () => {
    return await apiScience.get("/consumer/science")
    .then(resp => resp.data);
}

export const getNoticeTech = async () => {
    return apiScience.get("/consumer/technology")
    .then(resp => resp.data);
}