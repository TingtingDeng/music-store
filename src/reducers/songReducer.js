import {actionType} from "../components/helper/consts";



const initState = {
    rawSongList: [],
}

export const songReducer = (state = initState, action) => {
    let newSongList = [...state.rawSongList]
    switch(action.type) {
        case actionType.FETCH_ALL_SONGS:
            console.log(`[reducer]${actionType.FETCH_ALL_SONGS}`, action.payload)
            return{...state, rawSongList: action.payload}

        case actionType.ADD_TO_FAV_LIST:
            console.log(`[reducer]${actionType.ADD_TO_FAV_LIST}`, action.payload)

            const favSongsList = newSongList.map(song => song.id === action.payload ? {...song, liked: !song.liked} : song)
            // const favSongsList = newSongList.map(song => {
            //     if (song.id !== action.payload) {
            //         return song
            //     }
            //     return {
            //         ...song,
            //         favorite: !song.favorite
            //     }
            // })

            return {...state, rawSongList: favSongsList}

        case actionType.ADD_TO_PLAY_LIST:
            console.log(`[reducer]${actionType.ADD_TO_PLAY_LIST}`, action.payload)
            const playSongsList = newSongList.map (song => song.id = action.payload ? {...song, selected: !song.selected} : song)

            return {...state, rawSongList: playSongsList}


        default:
            return state

    }

}