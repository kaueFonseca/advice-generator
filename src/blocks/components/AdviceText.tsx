import '../../style/AdviceBoard.css'

const AdviceText = ({ advice, adviceId }: { advice: string, adviceId: number }) => {
    return (
        <div className='advice-container-header'>
            <h1 className="advice-title">advice #{adviceId}</h1>
            <p className="advice-text">{advice}</p>
        </div>
    )
}

export default AdviceText
