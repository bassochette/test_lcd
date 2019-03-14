import * as sinon from "sinon"
import { should } from "chai"
should()

import {display, prompt} from "../src/display"
import * as displayModule from "../src/display"

describe(
    "display module",
    () => {
        it(
            "can prompt",
            async () => {
                const stub = sinon.stub(process.stdout, "write").callsFake((data: string):boolean=> {
                    data.should.eql(">")
                    return true
                })
                prompt()
                stub.restore()
            }
        )
        it(
            "can display 1234",
            () => {
                const promptStub = sinon.stub(displayModule, "prompt")
                const clearStub = sinon.stub(console, "clear")
                const stdoutSpy = sinon.spy(process.stdout, "write")
                display("1234")
                // before displaying the new data the screen is cleared
                clearStub.calledOnce.should.be.true
                // called 1 time for each line since prompt called is stubbed
                stdoutSpy.callCount.should.eql(3)
                // finally the user is prompted for a new input
                promptStub.calledOnce.should.be.true
                promptStub.restore()
                clearStub.restore()
                stdoutSpy.restore()
            }
        )
    }
)