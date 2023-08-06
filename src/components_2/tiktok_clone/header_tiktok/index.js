import React from 'react';
import './index.css'
import Tippy from '@tippyjs/react/headless'

function header_tiktok() {

    return (
        <header>
            <div className='navi_tiktok'>
                <div>
                    <img src='/img/download.png' className='logo_tiktok'></img>
                </div>
                <div className='cxsearch'>
                    <input type='' placeholder='Search accounts and videos' spellCheck='false' className='search_tiktok'></input>
                    <button className='search-clear'>
                        <i className='fa fa-key'></i>
                    </button>
                    <button className='search-loadding'>
                        <i className='fa fa-spinner'></i>
                    </button>
                    
                    <button className='search-btn'>
                            <i className='fa fa-search'></i>
                    </button>
                </div>

                <div className='action'></div>
            </div>
        </header>
    )
}

export default header_tiktok;

