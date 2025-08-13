import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';
const cn = (...input)=>{
    return twMerge(clsx());
}
export default cn;