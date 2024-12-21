import React, { useEffect, useState } from 'react'
import http from './api'

const UseAxios = ({ url, method, data = null }) => {
    const [resp, setResp] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const axiosParams = {
        method: method,
        url: url,
        data: data
    }
    const fetchData = async () => {
        try {
            // console.log('the url', url)
          //  console.log('the data in axios beofre sending request', data)
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

    // useEffect(() => {
    //     fetchData()
    // }, [url,method,data])

    return { resp, error, loading, fetchData }
}
export default UseAxios