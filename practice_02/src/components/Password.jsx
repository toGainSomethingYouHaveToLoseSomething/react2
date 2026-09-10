import React, { useState } from 'react'


export default function From() {

    const [isShow, setIsShow] = useState(false)

    function handleClick(){
        if(isShow) setIsShow(false)
        else setIsShow(true)
    }

    return (
        <div>
            <h1>type password</h1>

            <div>
                <input
                    type={isShow ? 'text' : 'password'}
                    className='inp'
                    placeholder='password'
                />
                <button
                    onClick={handleClick}
                >
                    {isShow ? 'hide' : 'show'}
                </button>
            </div>

        </div>


    )
}
