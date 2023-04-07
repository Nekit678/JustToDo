import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import { NavbarButton } from './NavbarButton';
import { setId } from '../../redux/reducers/app-reducer';
import { getShortInfo } from './../../redux/selectors/fullInfo-selectors';
import { createList } from '../../redux/reducers/fullInfo-reducer';

export const Navbar = () => {
    const dispatch = useDispatch()
    const lists = useSelector((state: RootState) => getShortInfo(state))

    const changeList = (id: number) => {
        dispatch(setId(id))
    }

    const addList = () => {
        dispatch(createList(null))
    }

    return (
        <div className='bg-zinc-700 flex-grow flex-col items-end w-1/6'>
            {lists.map((item) => (<NavbarButton onClick={changeList} id={item.id} name={item.name} count={item.count} key={item.id}></NavbarButton>))}
            <div className='flex flex-row justify-center gap-6 w-full h-10 items-center rounded-md cursor-pointer ml-1 mr-2 text-white  hover:bg-zinc-500'>
                <button onClick={() => (addList())} className=''>Create list</button>
            </div>
        </div>
    )
}