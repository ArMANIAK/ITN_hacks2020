import React from 'react';
import './Task.css';

const Task = () => {
    return (
        <section className="section">
            <div className="title">
                <h2 className="section-title">Підтвердження рівня знань</h2>
                <h3 className="section-info">Оберіть мову програмування або фреймворк та рівень знань.</h3>
                <p className="section-description">Вам буде запропоновано 30 питань. Час проходження тесту обмежено. Не зачиняйте вкладку браузеру, інакше прогрес буде втрачено. Чергова спроба з'явиться не раніше ніж через 4 тижні.</p>
            </div>
            <div className="container-button">
                <div className="container-lang">
                    <p className="btn-text">Мова програмування / фреймворк:</p>
                    <select name="lang">
                        <option value="PHP" className="btn">PHP</option>
                        <option value="HTML_CSS" className="btn">HTML5, CSS3</option>
                        <option value="JS" className="btn">JS</option>
                        <option value="REACT" className="btn">React</option>
                        <option value="Angular" className="btn">Angular</option>
                    </select>
                </div>
                <div className="container-prof">
                    <p className="btn-text">Рівень знань:</p>
                    <select name="level">
                        <option value="Jun" className="btn">Junior</option>
                        <option value="Mid" className="btn">Middle</option>
                        <option value="Sen" className="btn">Senior</option>
                        <option value="Lead" className="btn" id="123">Lead</option>
                    </select>
                    <a href="index_t.html" className="link">
                        <button className="btn-submit" onClick={()=> { alert('Вам доведеться найняти команду, щоб цей функціонал запрацював =)') }}>Почати</button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Task;