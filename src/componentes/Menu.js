import {Link} from 'reac-router-dom'
import '../css/estilos.css';

export const Menu = () => {
    return (
        <div className='menu'>
            <Link className='claselink' to='/'>Home</Link>
            <Link className='claselink' to='/perrito'>Perritos</Link>
            <Link className='claselink' to='/perrito2'>Perritos2</Link>
        </div>
        )
}