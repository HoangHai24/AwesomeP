import {INCRE} from './actionType';

export const incre = (step) => {
    return{
        type: INCRE,
        step
    }
}
