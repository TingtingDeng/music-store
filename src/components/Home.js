import React, {useEffect} from 'react';
import AllSongsList from "./AllSongsList";
import FavSongsList from "./FavSongsList";
import PlaySongsList from "./PlaySongsList";
import {useDispatch} from "react-redux";
import axios from 'axios';
import {actionType, API_URL} from "./helper/consts";

import actions from '../actions';


const Home = () => {

    const dispatch = useDispatch();

    const fetchAllSongs = () => async (dispatch) => {
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



    // const fetchData = async () => {
    //     let res = await axios.get(API_URL)
    //             let {data: {data}} = res
    //             console.log('res', res)
    //             let allSongs=data.map(s => ({...s, liked: false, playing: false, selected: false}))
    //             // setRawSongList(allSongs)
    //             console.log('allSongs---->', allSongs)
    // }
    //
    // fetchData()
    //
    // useEffect(() => fetchData, [])






    return (
        <div>
            <button onClick={() =>dispatch (fetchAllSongs())}>fetch all songs</button>
            {/*<button onClick={dispatch(actions.songAction.fetchAllSongs())}>fetch all songs</button>*/}
            <AllSongsList/>
            <FavSongsList/>
            <PlaySongsList/>

        </div>
    );
};

export default Home;