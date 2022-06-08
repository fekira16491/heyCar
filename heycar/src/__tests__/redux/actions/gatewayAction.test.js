import { GATEWAY_SUCESS, PROJECT_SUCESS, USER_SUCESS} from '../../../Components/redux/action/actionType'
import * as api from "../../../api/api"
import {fetchSuccess,fetchGatewayList} from '../../../Components/redux/action/gatewayAction'


describe("gateway actions",()=>{

    describe("fetchSuccess",()=>{
        it("should return fetchSuccess action obj",()=>{
            const gatewayItem={apiKey: "sk_test_6eC49HqLyjWDarjtT1zdp7dc",
            description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
            gatewayId: "i6ssp",
            name: "Gateway 1",
            secondaryApiKey: "",
            type: "Stripe"}
            let result = fetchSuccess(gatewayItem);
            expect(result).toStrictEqual({type: GATEWAY_SUCESS,
                payload: gatewayItem})
        })
    })

    describe("fetchgatewayList  actions",()=>{
        describe("AND success fetchGatewayList  actions",()=>{
            it("should return thunk fetchDoctorsList  action obj",async()=>{
                const gatewayItem={apiKey: "sk_test_6eC49HqLyjWDarjtT1zdp7dc",
                description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
                gatewayId: "i6ssp",
                name: "Gateway 1",
                secondaryApiKey: "",
                type: "Stripe"}
                                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(gatewayItem))
                
                let dispatch= jest.fn();
                let actionfn=fetchGatewayList();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(gatewayItem.data)]);

    
    
            })

        })
 



    // describe("project actions",()=>{
    //     describe("AND success fetchProject  actions",()=>{
    //         it("should return thunk fetchProject  action obj",async()=>{
    //             const reponse={description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
    //             gatewayIds: ['gDJ2s'],
    //             image: "https://mvpmatch.co/images/logo.svg",
    //             industry: "IT",
    //             name: "Project 1",
    //             projectId: "bgYhx",
    //             rule: "Manual Selection",
    //             structure: "Sole proprietorship",
    //             userIds: ['rahej'],
    //             website: "https://mvpmatch.co/"}    
                
    //             let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
    //             Promise.resolve(response))
    //             let response= {data:[{userId: 'rahej', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com'}]}

    //             let dispatch= jest.fn();
    //             let actionfn=fetchUserList();
    //             await actionfn(dispatch);
    
    //             expect(getDataSpy).toHaveBeenCalled();
    //             expect(getDataSpy).toHaveBeenCalledTimes(1);
    
    //             expect(dispatch).toHaveBeenCalled();
    //             expect(dispatch).toHaveBeenCalledTimes(1);

    //             expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(response.data)]);

    
    
    //         })

    //     })
 
       
    // })

    //  describe("fetchUserList  actions",()=>{
    //     describe("AND success fetchUserList  actions",()=>{
    //         it("should return thunk fetchDoctorsList  action obj",async()=>{
    //             let response= {data:[{description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
    //             gatewayIds: ['gDJ2s'],
    //             image: "https://mvpmatch.co/images/logo.svg",
    //             industry: "IT",
    //             name: "Project 1",
    //             projectId: "bgYhx",
    //             rule: "Manual Selection",
    //             structure: "Sole proprietorship",
    //             userIds: ['rahej'],
    //             website: "https://mvpmatch.co/"]}
    //             let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
    //             Promise.resolve(response))
                
    //             let dispatch= jest.fn();
    //             let actionfn=fetchUserList();
    //             await actionfn(dispatch);
    
    //             expect(getDataSpy).toHaveBeenCalled();
    //             expect(getDataSpy).toHaveBeenCalledTimes(1);
    
    //             expect(dispatch).toHaveBeenCalled();
    //             expect(dispatch).toHaveBeenCalledTimes(1);

    //             expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(response.data)]);

    
    
    //         })

    //     })
 
       
    // })

   

   
})
})