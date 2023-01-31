import React from 'react'
import {user} from './LocalStorage/storage'

const A = () => {
    const userData = user();
    return (
        <div>
            <h3>{userData.data.name}</h3>
            <button onClick={() => userData.update({name : 'XYZ'})}>Update Name</button>
            <button onClick={() => userData.clearAll()}>Clear Name</button>
        </div>
    )
}

export default A
