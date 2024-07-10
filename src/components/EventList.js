import React from 'react'
import styles from './EventList.module.scss';
import { Link } from 'react-router-dom'; // 링크에는 무조건 문자열을 넣어줘야함 toString

const EventList = ({ eventList }) => {

  // 📌📌loader 데이터는 로더를 선언한 페이지 밑에 있는 하위 컴포넌트 어디서든 사용 가능
  // 이벤트 하위 리스트로 존재하니 로더 사용 가능 !
  // const eventList = useLoaderData();
  // console.log('loader data :', eventList);

  const {events, list, item, content} = styles;

  return (
    <div className={events}>
      <h1>All Events</h1>
      <ul className={list}>
        {
          eventList.map(ev => (
            <li key={ev.id} className={item}>
              <Link to={ev.id.toString()}>  
                <img src={ev['img-url']} alt={ev.title} />
                <div className={content}>
                  <h2>{ev.title}</h2>
                  <time>{ev.startDate}</time>
                </div>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default EventList