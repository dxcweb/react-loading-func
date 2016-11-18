/**
 * Created by dxc on 2016/11/18.
 */
import React, {Component, PropTypes} from 'react';
import react_dom from 'react-dom';
import Loadingss from './Loading/Loading'
export default class loading extends Component {
    static  show(title, options) {
        let props;
        if (typeof title == 'object') {
            props = title;
        } else {
            props = {...options, title}
        }
        // const newOptions = {};
        if (this.div == null) {
            this.div = document.createElement('div');
            document.body.appendChild(this.div);
            react_dom.render(<Loadingss {...props}/>, this.div);
        }
    }

    static  hide() {
        if (this.div != null) {
            react_dom.unmountComponentAtNode(this.div);
            this.div.parentNode.removeChild(this.div);
            this.div = null
        }
    }
}