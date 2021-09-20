import React from "react";
import {IconWrapper} from './styledComponents'


const TickerMenu = ({ iconColor }) => {

    return (
        <IconWrapper>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                 width="30px" height="25px" viewBox="0 0 512.000000 512.000000"
                 preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                   fill= "#050e14"  stroke="none">
                    <path d="M125 4393 c-164 -86 -166 -300 -3 -384 36 -19 95 -19 2435 -19 2313
0 2399 1 2438 19 164 76 166 298 3 382 -36 19 -95 19 -2440 19 -2169 -1 -2406
-2 -2433 -17z"/>
                    <path d="M149 2766 c-60 -21 -100 -56 -125 -110 -52 -112 -10 -231 100 -282
l51 -24 2385 0 2385 0 51 24 c113 52 154 174 96 287 -29 57 -70 92 -131 109
-24 6 -848 10 -2406 10 -1911 -1 -2377 -3 -2406 -14z"/>
                    <path d="M125 1121 c-104 -47 -153 -174 -106 -276 19 -43 78 -100 118 -116 33
-12 4813 -12 4846 0 40 16 99 73 118 116 47 102 -2 229 -106 276 -38 18 -140
19 -2435 19 -2295 0 -2397 -1 -2435 -19z"/>
                </g>
            </svg>
        </IconWrapper>
    )
}

export default TickerMenu;


