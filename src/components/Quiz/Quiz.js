import React, {useEffect, useState} from 'react';
import './Quiz.css';

const Quiz = ({tests, testCases}) => {

    const [question, setQuestion] = useState(0);

    return (
        <section className="section">
            <h3 className="section-title">Підтвердження рівня знань</h3>
            <div className="container-test">

                <div className="test-question">
                    <p className="question-title">Питання: {question + 1}/{tests.length}</p>
                    <div className="question-text" id="question-text">
                        {tests[question].question}
                    </div>
                </div>

                <div className="test-answer">
                    <p className="answer-title">Варианты ответов:</p>
                    
                    <label className="answer-label" for="answer">
                        <input className="answer-input" type="radio" name="answer" id="" value="" />
                        <span className="answer">{tests[question].answers[0]}</span>
                    </label>
                    
                    <label className="answer-label" for="answer">
                        <input className="answer-input" type="radio" name="answer" id="" value="" />
                        <span className="answer">{tests[question].answers[1]}</span>
                    </label>
                    
                    <label className="answer-label" for="answer">
                        <input className="answer-input" type="radio" name="answer" id="" value="" />
                        <span className="answer">{tests[question].answers[2]}</span>
                    </label>
                    
                    <label className="answer-label" for="answer">
                        <input className="answer-input" type="radio" name="answer" id="" value="" />
                        <span className="answer">{tests[question].answers[3]}</span>
                    </label>

                </div>
            </div>
            <footer className="footer">
                <div className="footer-partition-left">
                    <p className="footer-text">Остаток времени: <span className="time">5:00</span></p>
                </div>
                <div className="footer-partition-right">
                    <button className="btn-prev" onClick={() => setQuestion((question + tests.length - 1) % tests.length)}><i className="fas fa-chevron-left"></i> Попереднє питання</button>
                    <button className="btn-next" onClick={() => setQuestion((question + tests.length + 1) % tests.length)}>Наступне питання <i className="fas fa-chevron-right"></i></button>
                </div>
            </footer>
        </section>
    )
}

export default Quiz;