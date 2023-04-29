import { Link, LogoPart } from './Logo.styled';
import icons from '../../images/icons.svg';

const Logo = () => {
    return (
        <Link href="/">
            <svg width="40" height="35">
                <use href={`${icons}#icon-logo`}></use>
            </svg>
            <LogoPart>Finance</LogoPart>Ledger
        </Link>
    );
};

export default Logo;