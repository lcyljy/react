import React, { Component } from 'react';
import './Calculator.scss'


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            process: "",
            handlerArr: [],
            operlator: "",
            error: "ERROR"

        }
        this.onRowHandler.bind(this)
    }

    // field에서는 let, const, this를 사용할 수 없다.
    onRowHandler(e) {
        // console.log("a")
        //className을 가져와서 해당걸 동작
        console.log(e.target.innerText)
        let test = this.state.result
        test += e.target.innerText;
        // console.log(test)

        this.setState({

            result: test
        });
        console.log(this.state)
    }

    operatorHandler(e) {
        // console.log("ee")
        console.log(e.target.innerText)
        this.setState({
            process: this.state.result + e.target.innerText,
            handlerArr: [this.state.result],
            operlator: e.target.innerText,
            result: ""
        })
        console.log(this.state)
    }

    resultValue(e) {
        let handlerArr = this.state.process;
        let operlator = handlerArr.charAt(handlerArr.length - 1);
        console.log(e.target.innerText)
        console.log(this.state.result)
        let result = eval(Number(this.state.handlerArr[0]) + operlator + Number(this.state.result))
        // const operatorFunctions = {
        //     '+': (x, y) => x + y,
        //     '-': (x, y) => x - y,
        //     '*': (x, y) => x * y,
        //     '/': (x, y) => x / y,
        // }
        // let testA = eval(Number(this.state.handlerArr[0])+operlator+Number(this.state.result))
        // console.log(testA)
        this.setState({
            process: this.state.handlerArr[0] + operlator + this.state.result + e.target.innerText + result,
            result: eval(Number(this.state.handlerArr[0]) + operlator + Number(this.state.result))
        })
        
    
        console.log(this.state.process)
        console.log(this.state.result)
        
    }
    checkResultLength(e){
        if (this.state.result.length>10){
            this.setState({
                process: this.state.error + " PLEASE PUSH C",
                result: this.state.error +"TOOLONG"
                
            })
        }
        console.log(this.state.result.length)
    }

    clearHandler() {
        this.setState({
            result: 0,
            process: 0,
            handlerArr: [],
        })
    }

    render() {
        return (
            <div className="calculator" onMouseUp={this.checkResultLength.bind(this)}>
                <div className="Result">
                    <textarea className="process" id="" cols="1" rows="1" disabled value={this.state.process} />
                    <hr />
                    <textarea className="result" id="" cols="1" rows="1" disabled value={this.state.result} onChange={this.onRowHandler} />
                </div>
                <hr />
                <table className="BtnTable">
                    <tbody>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">7</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">8</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">9</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn Oper">/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">4</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">5</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">6</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn Oper">*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">1</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">2</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">3</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn Oper">-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">.</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">0</button></td>

                            <td><button onClick={this.clearHandler.bind(this)} className="Btn ">C</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn Oper">+</button></td>
                        </tr>
                        <tr>
                            <td colspan='4'><button onClick={this.resultValue.bind(this)} className="resultBtn">=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
//function Calculator(){}

export default Calculator;