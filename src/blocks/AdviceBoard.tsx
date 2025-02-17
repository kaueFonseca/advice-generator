import { useEffect, useState } from 'react';
import '../style/AdviceBoard.css'
import AdviceText from './components/AdviceText';
import AdviceButton from './components/AdviceButton';

const AdviceBoard = () => {
    const [advice, setAdvice] = useState('');
    const [adviceId, setAdviceId] = useState(0);

    async function getApiText() {
        const url = 'https://api.adviceslip.com/advice';

        try {
            const response = await fetch(url);
            const data = await response.json();
            setAdvice(data.slip.advice);
            setAdviceId(data.slip.id);

        } catch (error) {
            console.log("falha ao buscar api", error)
        }
    }

    useEffect(() => {
        getApiText()
    }, [])

    return (
        <div className="container-advice">
            <div className="advice-container">

                <AdviceText
                    advice={advice}
                    adviceId={adviceId} />

                <div className='advice-container-footer'>
                    <img
                        src="src/assets/pattern-divider-desktop.svg"
                        alt="separator" />

                    <AdviceButton
                        onClick={getApiText} />

                </div>

            </div>
        </div>
    )
}

export default AdviceBoard
