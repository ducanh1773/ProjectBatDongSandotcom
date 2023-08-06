import {TYPE_LOG} from './dangnhap'

function logger(log , type = TYPE_LOG)
{
    console[type](log);

}

export default logger
