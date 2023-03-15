import './Time.css';
import React, {useState} from 'react';

function DateTime(props) {
  var today = new Date();
  var date = new Date(props.date);
  var displayDate = '';
  var diffDay = Math.ceil(Math.abs(today.getTime() - date.getTime()) / (1000 * 3600 * 24));
  if (diffDay < 28 || ((today.getDate() >= date.getDate()) && (today.getMonth() == date.getMonth())&& (today.getFullYear() == date.getFullYear())) || ((today.getDate() <= date.getDate()) && (Math.abs(today.getMonth() - date.getMonth()) == 1))) {
    var prefix = ' дней ';
    if (diffDay <= 10 && diffDay >= 20) {
      switch (diffDay % 10) {
        case 1:
          prefix = ' день '
          break;
        case 2:
          prefix = ' дня '
          break;
        case 3:
          prefix = ' дня '
          break;
        case 4:
          prefix = ' дня '
          break;

        default:
          prefix = ' дней '
          break;
      }
    }
    displayDate = diffDay + prefix + 'назад';
  } else if (diffDay >= 365){
    var year = today.getFullYear() - date.getFullYear();
    var prefix = ' лет ';
    if (year <= 10 || year >= 20) {
      switch (year % 10) {
        case 1:
          prefix = ' год '
          break;
        case 2:
          prefix = ' года '
          break;
        case 3:
          prefix = ' года '
          break;
        case 4:
          prefix = ' года '
          break;

        default:
          prefix = ' лет '
          break;
      }
    }
    displayDate = year + prefix + 'назад';
  } else {
    var month = today.getMonth() - date.getMonth();
    if ((today.getDate() <= date.getDate()) && (Math.abs(today.getFullYear() - date.getFullYear()) == 1)) {
      month++;
    }
    if (month < 0) {
      month += 12;
    }
    var prefix = ' месяцев ';
    if (month <= 10) {
      switch (month % 10) {
        case 1:
          prefix = ' месяц '
          break;
        case 2:
          prefix = ' месяца '
          break;
        case 3:
          prefix = ' месяца '
          break;
        case 4:
          prefix = ' месяца '
          break;

        default:
          prefix = ' месяцев '
          break;
      }
    }
    displayDate = month + prefix + 'назад';
  }
  
  console.log(today.getFullYear() +' - '+ date.getFullYear() +' ___ '+ today.getMonth() +' - '+ date.getMonth() +' ___ '+ today.getDate() +' - '+ date.getDate())
  return (
    <p className="date">{displayDate}</p>
  )
}

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

function Time() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
        url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-03-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-02-03 23:16:00'
    },
    {
        url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-03 12:10:00'
    },
    {
        url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2018-01-01 16:17:00'
    },
    {
        url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
        date: '2017-12-02 05:24:00'
    },
  ]);

  return (
    <VideoList list={list} />
  );
}

export default Time;