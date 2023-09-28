import { useEffect } from 'react';

export default function Users() {
  const users = [
    {
      name: 'Имя1',
      surname: 'Фамилия1',
      thirname: 'Отчество1',
      age: 17,
      phone: '8956959595',
    },
    {
      name: 'Имя2',
      surname: 'Фамилия2',
      thirname: 'Отчество2',
      age: 17,
      phone: '8956959595',
    },
  ];

  //   const [Users, setuser]= useState([])

  //   useEffect(()=>{
  //     axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(data =>{
  //         console.log(data.data);
  //     })
  //     .catch(e=>{
  //         console.log('dfgdgfdfhdhf', e.message);
  //     })

  //   }, [])

  return (
    <>
      <div className="Users">
        {users.map((el) => (
          <>
            <div className="card" style={{ width: '22rem' }}>
              <div className="card-body">
                <h5 className="card-title">{el.name}&nbsp; {el.surname}&nbsp; {el.thirname}&nbsp;</h5>
                <p className="card-text">
                Возраст:&nbsp;{el.age}&nbsp;
                Телефон:&nbsp;{el.phone}&nbsp;
                </p>
                <a href="#" className="btn btn-success">
                  Подробнее
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
