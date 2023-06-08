import './Score.css';

interface scoreProps {
    value?: any
}


const Score = ({ value }: scoreProps) => {
    const getBorderColor = () => {
        value = value?.toFixed(1);
        if(value >= 7) return 'border-green-400';
        if(value > 4 && value < 7) return 'border-yellow-400';
        return 'border-red-400';
    };

    return (
        <span
            className={`score text-sm text-center inline-block mt-5 mx-3 py-3 px-3 border-2 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}
          >
          {value}
          </span>
    )
}

export default Score;