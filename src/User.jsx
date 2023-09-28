import { useParams } from 'react-router-dom';
export default function User(){
    const param = useParams()
    console.log(param);
    
    return(
        <>
        <div className="One_User">
            <p>Пользователь  под номером {param.id}</p>
        </div>
        </>
    )
}