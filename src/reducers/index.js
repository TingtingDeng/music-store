import {combineReducers} from "redux";
import {songReducer} from "./songReducer";
// import {messageBarReducer} from "./messageBarReducer";

export default combineReducers(
    {
        songReducer,
    //     messageBarReducer
    }
)


//返回的会是一个state，由多个reducer封装到一起的object，这里object的key和value一样了，所以简写放一个即可。但实际上是{
// songReducer:songReducer(),
//     messageBarReducer:messageBarReducer()}