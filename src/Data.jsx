import React from 'react'
import { useEffect, useState } from 'react';



const Data = ({search, clic, setClic, setSearch, data, setData, setTrendData, setAutoComData, setIsTrend}) => {

    

    const apiKey = "GK2VCiPXD0HjcHI7a76JPqcRLLQRp46q";
    const limit = 20

    const trendPetition = async () => {
        const result = await fetch(`https://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&limit=${limit}`)
        const data = await result.json();
        setData(data.data)
    }

    useEffect(() => {trendPetition()}, [])

    const searchPetition = async () => {
        const result = await fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&limit=${limit}&api_key=${apiKey}`);
        const data = await result.json();
            setData(data.data)
            setSearch("")
            setClic(false)
            setIsTrend(true)
            
    }

    useEffect(() => { if (clic === true) {searchPetition()} }, [clic])

    const autComPetition = async () => {
        const result = await fetch(`https://api.giphy.com/v1/gifs/search/tags?q=${search}&limit=5&api_key=${apiKey}`);
        const data = await result.json();
        setAutoComData(data.data);
    }

    useEffect(() => {autComPetition()}, [search])

    return (
        <div>
            
        </div>
    )
}

export default Data;