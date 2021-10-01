import React,{Component} from "react";

class Calculator extends React.Component{

    constructor(props){
        super(props);
        this.state={process:"", result:0, nums:[], operators:[], currentNum:""};
    }
    numHandler(e){
        let process_value=this.state.process+""+e.target.value;
        let current_value=this.state.currentNum+""+e.target.value;
        console.log(current_value);
        this.setState({process:process_value});
        this.setState({currentNum:current_value});
    }
    operatorHandler(e){
        let process_value=this.state.process;
        let current_value=this.state.currentNum;
        let operator_value=e.target.value;
        let numsArr=this.state.nums.push(Number(current_value));
        let operatorsArr=this.state.operators.push(operator_value);
        this.setState({
            process: process_value+operator_value,
            currentNum: ""
        });
        console.log(this.state);
        console.log(numsArr);
        console.log(operatorsArr);
        // console.log(this.state.nums[0]);
        // console.log(this.state.operators[0]);
        let result = "";
        result =+ this.state.nums[this.state.nums.length-1]+this.state.operators[this.state.operators.length-1];
        console.log(result);
        // if(e.target.value = "="){
        //     this.setState({currentNum: numsArr+operatorsArr})
        // }
    }

    render(){
        return(
            <div id="calculator">
                <p><textarea name="cal_process" value={this.state.process} cols="30" rows="1"></textarea></p>
                <p><textarea name="cal_result" value={this.state.currentNum}   cols="30" rows="1"></textarea></p>
                <table>
                    <tr>
                        <td><button>%</button></td>
                        <td><button>CE</button></td>
                        <td><button>C</button></td>
                        <td><button>b</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={this.numHandler.bind(this)} value="7">7</button></td>
                        <td><button>8</button></td>
                        <td><button>9</button></td>
                        <td><button>/</button></td>
                    </tr>
                    <tr>
                        <td><button>4</button></td>
                        <td><button>5</button></td>
                        <td><button>6</button></td>
                        <td><button onClick={this.operatorHandler.bind(this)} value="*">*</button></td>
                    </tr>
                    <tr>
                        <td><button>1</button></td>
                        <td><button>2</button></td>
                        <td><button>3</button></td>
                        <td><button>-</button></td>
                    </tr>
                    <tr>
                        <td><button>~</button></td>
                        <td><button>0</button></td>
                        <td><button>.</button></td>
                        <td><button onClick={this.operatorHandler.bind(this)} value="=">=</button></td>
                    </tr>
                    <tr>
                        <td><button></button></td>
                        <td><button></button></td>
                        <td><button></button></td>
                        <td><button></button></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Calculator;