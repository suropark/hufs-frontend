import React from 'react';
import Header from '../Header/Header'
import Quick from '../Quick/Quick'
import Footer from '../Footer/Footer'

function Board() {

    return (
        <div>
            <Header />
            <Quick />
            <div className="Map">
                <div className="Map-left" >
                    <div className="navi" >
                        <span>Navigator</span>
                    </div>
                    <div className="content" >
                        <div id="seoul">
                            <span>Seoul</span>
                            <span>맛집공간</span>
                            <span>주거공간</span>
                        </div>
                        <div id="global">
                            <span>Global</span>
                            <span>맛집공간</span>
                            <span>주거공간</span>
                        </div>
                    </div>
                </div>
                <div className="up-down" />
                <div className="Map-main" >
                    <div className="Mini-map"> map 연동 </div>

                    <div className="Map-board">클릭시 게시판 띄움</div>


                </div>

            </div>
            <Footer />
        </div >
    )
}

export default Board;