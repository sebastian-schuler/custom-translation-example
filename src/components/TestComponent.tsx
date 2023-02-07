import { useTranslation } from '../hooks/useTranslation';

const TestComponent = () => {
    
    const T = useTranslation();

    return (
        <div>
            <p>{T.description}</p>
            <p>{T.from_x_to_y(1, 10)}</p>
        </div>
    )
}

export default TestComponent