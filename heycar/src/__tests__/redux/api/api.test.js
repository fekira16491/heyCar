import axios from "axios";
import {getData, postData } from "../../../api/api"


jest.mock('axios')
describe("given api call",()=>{

    describe("when get Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={userId: 'rahej', firstName: 'John', lastName: 'Doe', email: 'john.doe@email.com'};
                axios.get.mockImplementation(()=> Promise.resolve(response));
                await expect(getData('users')).resolves.toEqual(response);
            })                         
        }) 

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.get.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(getData('users')).rejects.toThrow(error);
            })
        })
    })
    
   

       

    describe("when post Data",()=>{
        describe("when success",()=>{
            it("should return success",async()=>{
                let response={data:"success"};
                axios.post.mockImplementation(()=> Promise.resolve(response));
                await expect(postData('report',{ from: "2021-0-1",
                gatewayId: undefined,
                projectId: undefined,
                to: "2021-11-31"})).resolves.toEqual(response);
            })
        })

        describe("when failure",()=>{
            it("should return failure",async()=>{
                let error="error occured";
                axios.post.mockImplementation(()=> Promise.reject(new Error(error)));
                await expect(postData('report',{})).rejects.toThrow(error);
            })
        })
    })

 
})