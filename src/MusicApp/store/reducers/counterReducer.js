import { INCRE} from '../actions/actionType';

const counterReducer = (times = 0, action) => {
    switch (action.type){
        case INCRE:
            return times + action.step;
        default:
            return times;
    }
}
export default counterReducer;
