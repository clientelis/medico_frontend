import React, { useEffect, useState } from 'react'
import http from './api'

const UseAxios = ({ url, method }) => {
    const [resp, setResp] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const axiosParams = {
        method: method,
        url: url
    }
    const fetchData = async () => {
        try {
            console.log('fetching data')
            console.log('the url', url)
            const res = await http.request(axiosParams)
            console.log('the res', res.data)
            setResp(res.data)

        }
        catch (err) {
            setError(err)
            setLoading(false)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [url])
    return { resp, error, loading, fetchData }
}
export default UseAxios