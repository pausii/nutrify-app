/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

// eslint-disable-next-line consistent-return
const colourValue = (title, bodyValue) => {
    if (title === 'Body Mass Index (BMI)') {
        if (bodyValue >= 18.5 && bodyValue <= 24.9) {
            return 'text-green';
        }
        return 'text-red';
    } if (title === 'Berat Badan Ideal') {
        if (bodyValue < 25 || bodyValue > 45) {
            return 'text-red';
        }
        return 'text-green';
    }
};

function CardInfoBody({
    icon, title, bodyText, bodyValue, advice,
}) {
    return (
        <div className="w-full p-5 border-[1px] flex items-center rounded-2xl">
            <div className="mr-10 sm:mr-0">
                <div className="flex mb-4">
                    <img src={`/icons/${icon}`} alt={`Icon ${title}`} />
                    <h3 className="ml-3 text-xl sm:text-mobile-xl font-semibold text-navy">{title}</h3>
                </div>
                <div className="hidden my-0 mb-4 w-full mx-auto sm:grid place-content-center bg-white-100 px-4 py-[10px] rounded-xl">
                    <p className={`${colourValue(title, bodyValue)} text-4xl sm:text-mobile-4xl font-semibold`}>{bodyValue}</p>
                </div>
                <div>
                    <p className="text-white-500">
                        <span dangerouslySetInnerHTML={{ __html: advice.replace(bodyText, `<span class="${colourValue(title, bodyValue)} font-semibold">${bodyText}</span>`) }} />
                        {' '}
                        Kunjungi
                        halaman
                        <span className="text-navy font-semibold">
                            <Link to="/advice"> berikut.</Link>
                        </span>
                    </p>
                </div>
            </div>
            <div className="grid place-content-center bg-white-100 px-4 py-[10px] rounded-full sm:hidden">
                <p className={`${colourValue(title, bodyValue)} text-4xl sm:text-mobile-4xl font-semibold`}>{bodyValue}</p>
            </div>
        </div>
    );
}

export default CardInfoBody;
