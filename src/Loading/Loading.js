/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import {Block} from 'react-speed'
import LoadingIcon from './LoadingIcon'
export  default class Loading extends Component {
    render() {
        const {ratio=1, title='数据加载中'}=this.props;
        return (
            <Block style={{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:1500}} j="c" a="c">
                <Block w={160*ratio} h={78*ratio} bc="rgba(1,1,1,0.6)" s={{borderRadius:5*ratio}} a="c" vf p={15*ratio}>
                    <Block f="1" w={30*ratio} mt={10*ratio}>
                        <LoadingIcon ratio={ratio}/>
                    </Block>
                    <Block fs={14*ratio} fc="#fff">{title}</Block>
                </Block>
            </Block>
        )
    }
}