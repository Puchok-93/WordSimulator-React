import './filter.css';

const Filter = () => {
    return (
        <div className="filter">
            <small className='filter__small-title'>Фильтр по частям речи: </small>
            <ul className="filter-list">
                <li className="filter__item">
                    <button className="filter__btn filter__btn--active" type="button">Существительные</button>
                </li>
                <li className="filter__item">
                    <button className="filter__btn" type="button">Глаголы</button>
                </li>
                <li className="filter__item">
                    <button className="filter__btn" type="button">Прилагательные</button>
                </li>
                <li className="filter__item">
                    <button className="filter__btn" type="button">Разное</button>
                </li>
            </ul>
        </div>
    );
}

export default Filter;