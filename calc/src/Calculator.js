import React, { Component } from 'react';
import './Calculator.scss'


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: "",
            process: "",
            handlerArr: [],
            operlator: ""
            
        }
        this.onRowHandler.bind(this)
    }
    
    // field에서는 let, const, this를 사용할 수 없다.
    onRowHandler(e) {
        // console.log("a")
        //className을 가져와서 해당걸 동작
        console.log(e.target.innerText)
        let test=this.state.result
        test += e.target.innerText;
        // console.log(test)
        
        this.setState( {
            
            result: test
        });
        console.log(this.state)
    }

    operatorHandler(e){
        // console.log("ee")
        console.log(e.target.innerText)
        this.setState({
            process: this.state.result+e.target.innerText,
            handlerArr: [this.state.result],
            operlator: e.target.innerText,
            result: ""
        })
        console.log(this.state)
    }

    resultValue(e){
        let handlerArr = this.state.process;
        let operlator = handlerArr.charAt(handlerArr.length-1);
        console.log(e.target.innerText)
        console.log(this.state.result)
        let result = Number(this.state.handlerArr[0])+operlator+Number(this.state.result)
        let testA = Number(this.state.handlerArr[0]);
        testA = `${testA}${operlator}${Number(this.state.result)}`;
        testA = `${testA}`
        console.log(testA)
        this.setState({
            process: this.state.handlerArr[0]+operlator+this.state.result+e.target.innerText+result,
            result: Number(this.state.handlerArr[0])+operlator+Number(this.state.result)


        })
        console.log(this.state.process)
        console.log(this.state.result)
    }

    render() {
        return (
            <div className="calculator">
                <div className="Result">
                    <textarea className="process RightText" id="" cols="20" rows="1" disabled value={this.state.process}/>
                    <textarea className="result RightText" id="" cols="20" rows="1" placeholder="0" value={this.state.result} onChange={this.onRowHandler}/>
                </div>
                <table className="BtnTable">
                    <tbody>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">7</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">8</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">9</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)}className="Btn">/</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">4</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">5</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">6</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn">*</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">1</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">2</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">3</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn">-</button></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">0</button></td>
                            <td><button onClick={this.onRowHandler.bind(this)} className="Btn">.</button></td>
                            <td><button onClick={this.resultValue.bind(this)} className="Btn">=</button></td>
                            <td><button onClick={this.operatorHandler.bind(this)} className="Btn">+</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
//function Calculator(){}

export default Calculator;