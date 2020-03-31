import{Car} from './cars';
import {expect,assert} from "chai";
    describe("testing",()=>{
        it("test for car milege function",()=>{
            let obj = new Car("Alto",1000)
            assert(obj.getmilege(100)).to.be(1)
        })

        it("Testing add function",()=>{

            let obj = new Car ("Alto",1000)
            expect(obj.add(10,20)).to.equals(30)
        })
    })
