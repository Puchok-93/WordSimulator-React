import './mode.css';

const Mode = () => {
    return (
        <div className="mode">
            <button type="button" className="mode__btn mode__btn--active">Словарь</button>
            <button type="button" className="mode__btn">Тренажер</button>
        </div>
    );
}

export default Mode;