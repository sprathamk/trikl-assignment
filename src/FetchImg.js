import React, { useEffect, useState } from 'react'
import EditableText from './EditableText';
function FetchImg() {

    const [imge, setImg] = useState([]);
    const URL = 'https://api.unsplash.com/photos/random/?client_id=tIUT1yvfXw7gY_4PsyiYCqWUMfdYtr8FipVlzYPYDoo'
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            result.json().then(json => {
                setImg(json.urls.raw);
            })
        }
        fetchData();
    }, [])

    return (
        <div className='w-full h-screen'>
            <img className="object-cover w-full h-full" src={imge} alt="An image from unspalsh API"></img>
            <EditableText />
        </div>
    )
}

export default FetchImg
