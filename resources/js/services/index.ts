import axios from "axios"
import { reactive } from "vue"

export function useAuth() {

    const authResponse = reactive({ data: Object, errors: Object })

    const login = async (data: Object) => {
        await axios.post('/api/login', data).then(res => {
            authResponse.data = res.data.data
        }).catch(err => {
            authResponse.errors = err
        })
    }

    const logout = async () => {
        
    }

    return {
        authResponse,
        login,
        logout
    }
}