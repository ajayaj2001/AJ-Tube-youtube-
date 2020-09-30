import React, { useState, useEffect } from 'react'
import auth from './auth'
import SearchBar from './SearchBar'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

// export class App extends Component {
//     state = { videos: [], selected: null }
//     componentDidMount() {
//         this.onTermSubmit('pubg');
//     }

//     onTermSubmit = async input => {
//         const responce = await auth.get('/search', {
//             params: {
//                 q: input
//             }
//         })
//         this.setState({
//             videos: responce.data.items,
//             selected: responce.data.items[0]
//         })
//     }
//     onVideoSelect = (video) => {
//         this.setState({ selected: video })
//     }
//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onsubmit={this.onTermSubmit} />
//                 Found:{this.state.videos.length}
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selected} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App
