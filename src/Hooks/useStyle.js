import {useSelector} from "react-redux";
import useResize from "./useResize";






const useStyle=(toggle)=>{
    const {mode,color}=useSelector(state=>state)
    const widthWin =useResize()
    const style={
        styleMode:{
            backgroundColor:mode?'#151515':'#f2f2fc',
            color:mode?'white':'black'
        },
        borer_right_img: {
            position: 'absolute',
            borderBottom: `10px solid ${color}`,
            borderRight: `10px solid ${color}`,
            width: '60px',
            height: '60px',
            bottom: '-22px',
            right: '-32px',


        },
        borer_left_img: {
            position: 'absolute',
            borderTop: `10px solid ${color}`,
            borderLeft: `10px solid ${color}`,
            width: '60px',
            height: '60px',
            top: '-25px',
            left: '-32px',


        },
        border_title_small:{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '60px',
            borderBottom: `3px solid ${color}`,
            borderRadius: `0 20px 10px 0`,
        },
        border_title_large:{
            position: 'absolute',
            bottom: -11,
            left: 0,
            width: '30px',
            borderBottom: `3px solid ${color}`,
            borderRadius: '0 20px 10px 0'
        },
        backgroundColor:{
            backgroundColor:color
        },
        color:{
            color
        },
        svgColor:{
            fill:color
        },
        styleCircle: {
            content: "",
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            top: '0',
            left: '-36px',
            backgroundColor: color,

        },
        styleLine: {
            content: "",
            position: 'absolute',
            borderLeft: `3px solid ${color}`,
            left: '19px',
            top: '38px',
            height: '93%',
        },
        styleProgress: {
            content: "",
            position: 'absolute',
            left: '0',
            top: '0',
            backgroundColor: color,
            // width: '80%',
            height: '6px',
        },
        colorText:{
            color:mode?'white':'black'
        },
        styleAnimation:{
            right:widthWin>768?toggle?-0:'-18%':toggle?0:'-66%',
        },
        styleModeAnimation:{
            backgroundColor:mode?'#fff':'#222121',
            color:mode?'black':'#fff'
        },
        styleSideBar:{
            display:widthWin<=575?toggle?'grid':'none':"grid",
            width:toggle?'100%':'25%',
            transition:'.3s ease'
        },
        styleContent:{
            width:toggle?'0':'100%',
            transition:'.3s ease',
        },
        animationTitle:{
            hidden:{
                x:'-100vw',

            },
            visible:{
                x:'0',
                transition:{duration:10,type:'spring',stiffness:'120'}
            }
        },
        animationButton:{
            hover:{
                scale: '1.2',
                transition:{repeat:10}
            }
        }

    }
    const variantTransition = {


        exit: {x:'100vw',transition:{duration: .2,when:'afterChildren'}}
    }
    return {style,color,variantTransition}
}


export default useStyle;