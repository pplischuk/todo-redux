import "./todoList.css";

function Todo() {
  return (
    <div className = 'wrapper'>
      <div className = 'date'>
        <div className = 'yearDayMonth'>
          <div className = 'day'>{moment().format('D')}</div>
          <div className = 'yearMonth'>
            <div>{moment().format('MMM')}</div>
            <div>{moment().format('YYYY')}</div>
          </div>
        </div>
        <div className = 'nameOfDay'>{moment().format('dddd')}</div>
      </div>
    </div>
  );
};

export default Todo;
