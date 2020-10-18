import React, {useState} from 'react';
import './Tester.css';
import Quiz from '../Quiz/Quiz';
import Task from '../Task/Task';

const Tester = () => {

    const testCases = [
        {
            question: 'Питання 1',
            group: 'Topic 1',
            rightAnswer: 'Вірна відповідь на питання 1',
            wrongAnswer1: 'Невірна відповідь 1 на питання 1',
            wrongAnswer2: 'Невірна відповідь 2 на питання 1',
            wrongAnswer3: 'Невірна відповідь 3 на питання 1',
        },
        {
            question: 'Питання 2',
            group: 'Topic 1',
            rightAnswer: 'Вірна відповідь на питання 2',
            wrongAnswer1: 'Невірна відповідь 1 на питання 2',
            wrongAnswer2: 'Невірна відповідь 2 на питання 2',
            wrongAnswer3: 'Невірна відповідь 3 на питання 2',
        },
        {
            question: 'Питання 3',
            group: 'Topic 1',
            rightAnswer: 'Вірна відповідь на питання 3',
            wrongAnswer1: 'Невірна відповідь 1 на питання 3',
            wrongAnswer2: 'Невірна відповідь 2 на питання 3',
            wrongAnswer3: 'Невірна відповідь 3 на питання 3',
        },
        {
            question: 'Питання 4',
            group: 'Topic 2',
            rightAnswer: 'Вірна відповідь на питання 4',
            wrongAnswer1: 'Невірна відповідь 1 на питання 4',
            wrongAnswer2: 'Невірна відповідь 2 на питання 4',
            wrongAnswer3: 'Невірна відповідь 3 на питання 4',
        },
        {
            question: 'Питання 5',
            group: 'Topic 2',
            rightAnswer: 'Вірна відповідь на питання 5',
            wrongAnswer1: 'Невірна відповідь 1 на питання 5',
            wrongAnswer2: 'Невірна відповідь 2 на питання 5',
            wrongAnswer3: 'Невірна відповідь 3 на питання 5',
        },
    ];

    const mixArray = arr => {
        let newArr = arr.slice();
        for (let i = 0; i < newArr.length; i++) {
            let temp = newArr[i];
            let randomIndex = Math.floor(Math.random() * newArr.length);
            newArr[i] = newArr[randomIndex];
            newArr[randomIndex] = temp;
        }
        return newArr;
    }

    const tests = mixArray(testCases.reduce((acc, el) => {
        acc.push({question: el.question, topic: el.group, answers: mixArray([el.rightAnswer, el.wrongAnswer1, el.wrongAnswer2, el.wrongAnswer3])});
        return acc;
    }, []));

    const [testInProgress, setTestInProgress] = useState(false);

    return (
        <div>
            {
                !testInProgress ?
                    <Task /> :  
                    <Quiz testCases={testCases} tests={tests} />
            }
            <button onClick={() => setTestInProgress(true)}>Робоча кнопка</button>
        </div>
    )
    
}

export default Tester;