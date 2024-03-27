import CardComponent from "./CardComponent"

function CardDeck({ groupArray }){
    return (
        <>
            <div>
                {groupArray.map((group) => (
                    <CardComponent prompts={group}></CardComponent>
                    )
                )}
            </div>
        </>
    )
}
export default CardDeck