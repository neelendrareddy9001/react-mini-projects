import React from 'react'
import ThreeSixty from 'react-360-view'

const ProductView = () => {
    return (
        <div style={{width : '40%' , border : '2px solid black', margin: '30px', position: 'relative'}}>
            <ThreeSixty
                amount={36}
                imagePath="https://scaleflex.cloudimg.io/width/600/q35/https://scaleflex.ultrafast.io/https://scaleflex.airstore.io/demo/chair-360-36"
                fileName="chair_{index}.jpg?v1"
/>
        </div>
    )
}

export default ProductView
