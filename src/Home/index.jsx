/* eslint no-undef: 0 */
/* eslint arrow-parens: 0 */
import React from 'react';
import {enquireScreen} from 'enquire-js';

import Banner3 from './Banner3';
import Feature1 from './Feature1';
import Content13 from './Content13';
import Feature8 from './Feature8';
import Content9 from './Content9';
import Content10 from './Content10';
import {
    Banner30DataSource,
    Feature10DataSource,
    Content130DataSource,
    Feature80DataSource,
    Content90DataSource,
    Content100DataSource,
} from './data.source';
import './less/antMotionStyle.less';
import WrappedRegistrationForm from "../biaodan";

let isMobile;
enquireScreen((b) => {
    isMobile = b;
});

const {location} = window;

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile,
            show: !location.port, // 如果不是 dva 2.0 请删除
        };
    }

    componentDidMount() {
        // 适配手机屏幕;
        enquireScreen((b) => {
            this.setState({isMobile: !!b});
        });
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        /* 如果不是 dva 2.0 请删除 start */
        if (location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
        /* 如果不是 dva 2.0 请删除 end */
    }

    render() {
        const children = [
            <Banner3
                id="Banner3_0"
                key="Banner3_0"
                dataSource={Banner30DataSource}
                isMobile={this.state.isMobile}
            />,
            <Feature1
                id="Feature1_0"
                key="Feature1_0"
                dataSource={Feature10DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content13
                id="Content13_0"
                key="Content13_0"
                dataSource={Content130DataSource}
                isMobile={this.state.isMobile}
            />,
            <Feature8
                id="Feature8_0"
                key="Feature8_0"
                dataSource={Feature80DataSource}
                isMobile={this.state.isMobile}
            />,
            <Content9
                id="Content9_0"
                key="Content9_0"
                dataSource={Content90DataSource}
                isMobile={this.state.isMobile}
            />,

            <Content10
                id="Content10_0"
                key="Content10_0"
                dataSource={Content100DataSource}
                isMobile={this.state.isMobile}
            />,
            <WrappedRegistrationForm/>
        ];
        return (
            <div
                className="templates-wrapper"
                ref={(d) => {
                    this.dom = d;
                }}
            >
                {/* 如果不是 dva 2.0 替换成 {children} start */}
                {this.state.show && children}
                {/* 如果不是 dva 2.0 替换成 {children} end */}
            </div>
        );
    }
}
