import { useParams } from "react-router-dom";

export default function ReadById(){
    const { id } = useParams()

    return <div>ReadById: {id}</div>
}