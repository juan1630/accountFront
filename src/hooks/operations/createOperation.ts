import ApiRequest from "../../api/apiConect"
import { registerAmount } from "../useRegiter";

export const createOperation = async( dataOperation: registerAmount ) => {
    
    const  resp = await ApiRequest.post('/new/operation', dataOperation);
    
    if( resp.status === 201 ) {
        return resp.data;
    }
    
}