import * as Styles from './starsRating.styled.ts'
import {Star, IconWeight} from "phosphor-react";
import React from "react";

interface IStarsRatingProps{
    initialValue: number,
    isChangeable: boolean,
    handleSetStar?: (a: number)=> void
}
function StarsRating({initialValue, isChangeable, handleSetStar} : IStarsRatingProps) {
    const [fillState, setFillState] = React.useState(initialValue)

    function changeFill(value: number){
        if(isChangeable){
            setFillState(value)

            if(handleSetStar){
                handleSetStar(value)
            }
        }
    }

    return (
        <Styles.Wrapper>
            {isChangeable && <label htmlFor="">Rating</label>}

            <Styles.StarsWrapper id={'starsWrapper'}>


                <Star onClick={()=> changeFill(1)} size={32}  weight={fillState >= 1 ? 'fill' as IconWeight : undefined} />
                <Star onClick={()=> changeFill(2)} size={32}  weight={fillState >= 2 ? 'fill' as IconWeight : undefined} />
                <Star onClick={()=> changeFill(3)} size={32}  weight={fillState >= 3 ? 'fill' as IconWeight : undefined} />
                <Star onClick={()=> changeFill(4)} size={32}  weight={fillState >= 4 ? 'fill' as IconWeight : undefined} />
                <Star onClick={()=> changeFill(5)} size={32}  weight={fillState >= 5 ? 'fill' as IconWeight : undefined} />
            </Styles.StarsWrapper>
        </Styles.Wrapper>
    );
}

export default StarsRating;