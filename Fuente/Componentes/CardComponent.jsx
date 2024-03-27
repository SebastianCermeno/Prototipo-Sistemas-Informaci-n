import { Link } from "react-router-dom";

import './CardComponent.css'

function CardComponent({prompts}){
    let urlReference;
    let groupName;
    let groupDescription;
    let groupIcon;
    let iconDescript;
    if (!prompts){
        urlReference = ''
        groupName = "Default";
        groupDescription = "There was no descriptor provided for this group";
        groupIcon = "";
        iconDescript = "No Icon Provided";
    }
    else {
        groupName = prompts.name;
        groupDescription = prompts.description;
        groupIcon = prompts.icon;
        iconDescript = prompts.iconDescription
        urlReference = prompts.urlReference
    }

    return(
        <>
            <Link to={'/' + urlReference} >
                <div className='CardWrapper'>
                    <div className='CardIcon'>
                        <img className='IconData' src={groupIcon} alt={iconDescript} />
                    </div>
                    <div className='CardText'>
                        <h2 className='CardTitle'>{groupName}</h2>
                        <p className='CardContent'>{groupDescription}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default CardComponent