import '../../style/AdviceBoard.css'

const AdviceButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <button onClick={onClick} className="generate-advice-btn"></button>
    )
}

export default AdviceButton
