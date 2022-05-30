import React, {useEffect, useState} from 'react';

const useResize = () => {
    const[widthWin,setWidthWin]=useState(window.innerWidth)

const resizeFun=()=>{
    setWidthWin(window.innerWidth)
}

    useEffect(() => {
        window.addEventListener('resize', resizeFun)
        return () => {
            window.removeEventListener('resize', resizeFun)
        }
    }, [widthWin])


    return widthWin
};

export default useResize;