//
//
//
// // import {experiences} from "../Data/Data";
//
// import {useEffect, useState} from "react";
//
// const TypeWrite=({speed, arrText, loop})=>{
//     const[wordCount,setWordCount]=useState(0);
//     const[wordCurrent,setWordCurrent]=useState('')
//     const[letterCount,setLetterCount]=useState(0)
//     const[letterCurrent,setLetterCurrent]=useState('')
//     const[isDeleting,setIsDeleting]=useState(false);
//
//
//     let time;
//
//     const typeWrite=()=>{
//         if (wordCount===arrText.length){
//             setWordCount(0)
//         }
//        else {
//             setWordCurrent(arrText[wordCount])
//         }
//
//         if (isDeleting){
//             setLetterCount(letterCount-1)
//             setLetterCurrent(wordCurrent.slice(0,letterCount))
//         }else {
//             setLetterCount(letterCount+1)
//             setLetterCurrent(wordCurrent.slice(0,letterCount))
//         }
//
//
//         if (!isDeleting&&wordCurrent.length===letterCurrent.length){
//             setIsDeleting(true)
//
//         }
//          if (isDeleting&&letterCurrent.length===0) {
//             setIsDeleting(false)
//             setWordCount(wordCount+1)
//         }
//
//
//
//     }
//
//     useEffect(()=>{
//         time=setTimeout(()=>{
//             return typeWrite()
//         },speed)
//
//
//         return ()=>{
//             clearTimeout(time)
//         }
//     },[letterCount])
//
// return letterCurrent
// }
// export default TypeWrite;