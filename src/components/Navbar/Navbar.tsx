import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';

export const Navbar = () => {
    const lists = useSelector((state: RootState) => state.shortInfo.lists)
    console.log(lists)

    return (
        <div className='bg-zinc-700 flex-grow'>
            {lists.map((item) => (<button onClick={() => (console.log(item.id))}>{item.name} {item.count}</button>))}
        </div>
    )
}