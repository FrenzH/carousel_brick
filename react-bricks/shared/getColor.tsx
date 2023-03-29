import React from 'react' ; 

import { highlightTextColors , bgColors } from '../shared/colors' ; 


type propsColor = {
    name : string 
    label : string 
    value : string
} ; 

type classType = 'text' | 'bg' ; 

export default function getColor(props:propsColor , classType : classType) : string{

    let className:string ;


    if(classType==='text'){

        for(const [key, value] of Object.entries(highlightTextColors)){
            console.log(key , value )

        }


    }



    if(classType==='bg'){

    }











    return className ;
}