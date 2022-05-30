import { USER_SUCESS} from '../../../Components/redux/action/actionType'
import * as api from "../../../api/api"
import {fetchSuccess,fetchUserList} from '../../../Components/redux/action/userAction'


describe("user actions",()=>{

    describe("fetchSuccess",()=>{
        it("should return fetchSuccess action obj",()=>{
            const userItem={userId: 'rahej', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com'}
            let result = fetchSuccess(userItem);
            expect(result).toStrictEqual({type: USER_SUCESS,
                payload: userItem})
        })
    })



    describe("fetchUserList  actions",()=>{
        describe("AND success fetchUserList  actions",()=>{
            it("should return thunk fetchDoctorsList  action obj",async()=>{
                let response= {data:[{userId: 'rahej', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com'}]}
                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(response))
                
                let dispatch= jest.fn();
                let actionfn=fetchUserList();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(response.data)]);

    
    
            })

        })
 
       
    })

   

   
})