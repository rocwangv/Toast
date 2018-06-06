/**
 * Created by Lzzzzzq on 2017/3/14.
 */
import React from "react";
import {render} from "react-dom";
import Model from "./model";

const div = document.createElement("div");
document.body.appendChild(div);
const container = render(<Model />, div);

const Toast = function (opt) {
    if (opt.type === 'loading') {
        div.style.position = 'fixed';
        div.style.left = 0;
        div.style.top = 0;
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.zIndex = 99999;

        if (opt.typeStatus === 2) {
            div.style.display = 'none';
        } else {
            div.style.display = 'block';
        }
    }else {
        div.style = null;
    }
    opt = opt || {};
    if (opt.msg) {
        container.show(opt);
    }
};

export default Toast;
