import React, { Component } from 'react'
import './dropdown.scss'
import './dropdown'

export class dropdownComponent extends Component {
    render() {
        return (
            <div className="dropdown-container">
                <h2>드롭다운 메뉴 만들기</h2>
                <div className="dropdown">
                    <a className="link" href="#title">타이틀<span className="giho" value="giho">▼</span></a>
                    <ul className="menu">
                        <li>
                            <a href="#calculator">계산기</a>
                        </li>
                        <li>
                            <a href="#dropdwon">드롭다운</a>
                        </li>
                        <li>
                            <a href="#side_nav">사이드 네비게이션</a>
                        </li>
                        <li>
                            <a href="#top_nav">탑 내비게이션</a>
                        </li>
                    </ul>
                </div>
                <hr />

                <div className="dropdown-active">
                    <a className="link" href="#title">타이틀<span className="giho">▼</span></a>
                    <ul className="menu">
                        <li>
                            <a href="#calculator">계산기</a>
                        </li>
                        <li>
                            <a href="#dropdwon">드롭다운</a>
                        </li>
                        <li>
                            <a href="#side_nav">사이드 네비게이션</a>
                        </li>
                        <li>
                            <a href="#top_nav">탑 내비게이션</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default dropdownComponent;
