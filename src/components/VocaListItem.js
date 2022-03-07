import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import './vocaListItem.css'
const VocaListItem = () => {
    const navigate = useNavigate();
  return (
    <div >
        <header>
        <h1>Carousel</h1>
        <button onClick={() => navigate(-1)}>Go back</button>
      </header>
      <div style={{width:530}}>

        <div className='vocaItem'>
            <div className='itemWord'>
                <div className='wrapWord'>
                    <div>
                        <a target={"_blank"} className="word">voca</a>
                    </div>
                </div>
                <div className='wrapBtn'>
                    <button className='btnListen'>
                    <Icon icon="clarity:volume-up-line" />
                    </button>
                </div>
            </div>
            <div className='itemMean'>
                <div className='contentMean'>
                    <ul className='listMean'>
                        <li className='wrapmean'>
                            <div className='meanDesc'>
                                <span className='num'>1.</span>
                                <p className='content'>보카 테스트</p>
                            </div>
                        </li>
                    </ul>
                    <div className='originSource'>
                        <span className='blind'>출처</span>
                        해커스 토익
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default VocaListItem