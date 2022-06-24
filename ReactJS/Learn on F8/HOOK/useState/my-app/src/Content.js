import {useEffect, useState} from 'react'

function Content(){
    const [title, setTitles] = useState("")

    useEffect(() => {
        console.log('Mounted')
    })

    return (
        <div>
            <input
                value={title}
                onChange = {e => e.target.value}
            />
        </div>
    )
}

export default Content