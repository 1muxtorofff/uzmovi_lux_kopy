import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import "../../assets/Style/bita-kino.css"
export default function Bittakino() {
    const data = useLocation().state
    console.log(data);    
  return (
    <div>
        <div className="fullstory">
                                <h1 className="fstory-h1">
                                    <strong>{data.name}</strong>

                                </h1>
                                <div id="fstory-film" className="block-p">
                                    <div className="row">
                                        <div className="col-sm-4 col-xs-12 fstory-poster-in">
                                            <div className="fstory-poster">
                                                <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} width={248} height={368}/>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="col-sm-8 col-xs-12">
                                            <div className="finfo">
                                                <span className="finfo-line"></span>
                                                <div className="finfo-block">
                                                    <div className="finfo-title">Nomi</div>
                                                    <div className="finfo-text">
                                                        <b>{data.original_title}</b>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="finfo">
                                                <span className="finfo-line"></span>
                                                <div className="finfo-block">
                                                    <div className="finfo-title">Janr</div>
                                                    <div className="finfo-text">
                                                        <a href="https://uzmovi.com/tarjima-kinolarri" title="Tarjima&#x20;kinolar">
                                                            <strong>Tarjima kinolar</strong>
                                                        </a>
                                                        /                                                    
                                                        <a href="https://uzmovi.com/drama" title="Drama">
                                                            <strong>Drama</strong>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                             <div className="finfo">
                                                <span className="finfo-line"></span>
                                                <div className="finfo-block">
                                                    <div className="finfo-title">Tili</div>
                                                    <div className="finfo-text">
                                                        <strong>{data.original_language}</strong>
                                                    </div>
                                                </div>
                                            </div>
                                                                                    <div className="finfo">
                                                <span className="finfo-line"></span>
                                                <div className="finfo-block">
                                                    <div className="finfo-title">Yosh chegarasi</div>
                                                    <div className="finfo-text">
                                                        <a href="https://uzmovi.com/age.html">
                                                            <img src="https://uzmovi.com/images/age/sixteen.png" className="age-img h-[29px] w-[31]" alt="Cheklangan yosh"/>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <blockquote className="quote-card dark-card">
                                    <p className='overview'>{data.overview}</p>
                                </blockquote>

        </div>                        
</div>
  )
}
