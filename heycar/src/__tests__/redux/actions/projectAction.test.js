import { PROJECT_SUCESS, USER_SUCESS} from '../../../Components/redux/action/actionType'
import * as api from "../../../api/api"
import {fetchSuccess,fetchProjectList} from '../../../Components/redux/action/projectAction'


describe("project actions",()=>{

    describe("fetchSuccess",()=>{
        it("should return fetchSuccess action obj",()=>{
            const projectItem={description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
            gatewayIds: ['gDJ2s'],
            image: "https://mvpmatch.co/images/logo.svg",
            industry: "IT",
            name: "Project 1",
            projectId: "bgYhx",
            rule: "Manual Selection",
            structure: "Sole proprietorship",
            userIds: ['rahej'],
            website: "https://mvpmatch.co/"}
            let result = fetchSuccess(projectItem);
            expect(result).toStrictEqual({type: PROJECT_SUCESS,
                payload: projectItem})
        })
    })

    describe("fetchProjectList  actions",()=>{
        describe("AND success fetchProjectList  actions",()=>{
            it("should return thunk fetchDoctorsList  action obj",async()=>{
                const projectItem={description: "Sit amet luctus venenatis lectus magna fringilla urna porttitor.",
            gatewayIds: ['gDJ2s'],
            image: "https://mvpmatch.co/images/logo.svg",
            industry: "IT",
            name: "Project 1",
            projectId: "bgYhx",
            rule: "Manual Selection",
            structure: "Sole proprietorship",
            userIds: ['rahej'],
            website: "https://mvpmatch.co/"}
                                let getDataSpy= jest.spyOn(api,'getData').mockImplementation(()=>
                Promise.resolve(projectItem))
                
                let dispatch= jest.fn();
                let actionfn=fetchProjectList();
                await actionfn(dispatch);
    
                expect(getDataSpy).toHaveBeenCalled();
                expect(getDataSpy).toHaveBeenCalledTimes(1);
    
                expect(dispatch).toHaveBeenCalled();
                expect(dispatch).toHaveBeenCalledTimes(1);

                expect(dispatch.mock.calls[0]).toEqual([fetchSuccess(projectItem.data)]);

    
    
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