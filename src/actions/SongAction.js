import {API_URL, actionType} from "../components/helper/consts";
import axios from 'axios';

export const fetchAllSongs = () => async dispatch => {
    console.log(`[action]${actionType.FETCH_ALL_SONGS}`)
    try {
        let temp = await axios.get(API_URL)
        let {data: {data}} = temp
        console.log('temp-->', temp)
        let allSongs = data.map(song => ({...song, liked: false, playing: false, selected: false}))

        // let allSongs = data.map (song => {
        //     return {...song, liked: false, playing: false, selected: false}
        // })
        console.log('allSongs---->', allSongs)

//
        dispatch({
            type: actionType.FETCH_ALL_SONGS,
            payload: allSongs
        })
//
    } catch (error) {
        console.log(error)
    }

}


// return {
//   type: actionType.FETCH_ALL_SONGS,
//   payload: allSongs
// }
//payload:songs.map(s=>{
// return{...s,liked:false,playing:false,checked:false}
// })
//箭头函数结果为一行的时候可以去掉{}和return，但这个函数返回的是一个{}包起来的object，所以外面需要加（）
// };
// const fetchAllSongs=()=>{
// //return里面type是必须要有的，其余key根据情况list
//     return {
//       type: actionType.FETCH_ALL_SONGS,
//       payload: songs.map(s => {
//         return {...s, liked: false, playing: false, checked: false}
//       })

export const selectedSong = (id) => {
    return {
        type: actionType.ADD_TO_PLAY_LIST,
        payload: id
    };
};

export const likedSong = (id) => {
    return {
        type: actionType.ADD_TO_FAV_LIST,
        payload: id
    };
};

