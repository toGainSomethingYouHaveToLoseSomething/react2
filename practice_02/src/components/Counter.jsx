import React, { useRef, useState } from 'react'

export default function Counter() {
    const [cnt, setCnt] = useState(0)

    const click_btn = useRef(null)

    const intervalId = useRef(null)

    function autoClickHandle(){
        if(intervalId.current) return

        intervalId.current = setInterval(() => {
            const click_btn_elem = click_btn.current
            click_btn_elem.click()
        }, 1000);
    }


    function stopAutoClick(){
        if(intervalId.current){
            clearInterval(intervalId.current)
        }
        intervalId.current=null
    }


    return (
        <div>

            <button 
            onClick={()=>{setCnt(cnt+1)}}
            ref={click_btn}
            >
                Clicked {cnt} times
            </button>

            <button
            onClick={()=>{setCnt(0)}}
            >
                Reset
            </button>

            <button
            onClick={autoClickHandle}
            >
                Auto Click
            </button>


            <button
                onClick={stopAutoClick}
            >
                Stop Auto Click
            </button>

        </div>
    )
}
