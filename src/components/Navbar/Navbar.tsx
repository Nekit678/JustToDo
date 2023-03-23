import { useDispatch, useSelector } from 'react-redux/es/exports';
import { RootState } from '../../redux/store';
import { NavbarButton } from './NavbarButton';
import { setId } from '../../redux/reducers/app-reducer';

export const Navbar = () => {
    const dispatch = useDispatch()
    const lists = useSelector((state: RootState) => state.shortInfo.lists)
    console.log(lists)

    const changeList = (id:number)=>{
        dispatch(setId(id))
    }

    return (
        <div className='bg-zinc-700 flex-grow'>
            {lists.map((item) => (<NavbarButton onClick={changeList} id={item.id} name={item.name} count={item.count} key={item.id}></NavbarButton>))}
        </div>
    )
}