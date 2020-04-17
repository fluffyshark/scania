import React, { useState } from 'react';
import {activeSector} from '../actions';
import {chooseIssue} from '../actions';
import {mapToggleOn} from '../actions';
import {mapToggleOff} from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import townspeople from '../img/townspeople_icon.svg';
import tax from '../img/tax_icon.svg';
import preschool from '../img/preschool_icon.svg';
import elementaryschool from '../img/elementary_school_icon.svg';
import high_school from '../img/high_school_icon.svg';
import university from '../img/university_icon.svg';
import education_cost from '../img/education_cost_icon.svg';
import graduation from '../img/graduation_icon.svg';
import income from '../img/income_icon.png';
import cost from '../img/cost_icon.png';
import annual_target from '../img/annual_target.svg';
import unemployment_icon from '../img/unemployment_icon.svg';
import pension_obligation_icon from '../img/pension_obligation_icon.svg';
import net_investment_icon from '../img/net_investment_icon.svg';
import cash_on_hand_icon from '../img/cash_on_hand_icon.svg';
import healthcare_cost_icon from '../img/healthcare_cost_icon.svg';
import sick_leave_icon from '../img/sick_leave_icon.svg';
import teacher_student_ratio_icon from '../img/teacher_student_ratio_icon.svg';
import caregiver_child_ratio_icon from '../img/caregiver_child_ratio_icon.svg';
import deaths_icon from '../img/deaths_icon.svg';
import houses_sold from '../img/houses_sold.svg';
import house_prices_icon from '../img/house_prices_icon.svg';
import million_earners_icon from '../img/million_earners_icon.svg';
import median_income_icon from '../img/medium_income_icon.svg';
import total_income_icon from '../img/total_income_icon.svg';
import moving_in_icon from '../img/moving_in_icon.svg';
import newborns_icon from '../img/newborns_icon.svg';





function Scania() {
    const dispatch = useDispatch();

    // Allows functions to call on reducer 
    const mapToogleOn = useSelector(state => state.mapToogleOn);
    
    // Allows functions to use state
    var [sector, setSector] = useState("Svalöv");

  
    
      
    
    
  
        return (
            
            
                
        <div className="mapdiv">
            
            

            

        <div className="scania_map animated fadeIn" style={mapToogleOn.mapOn}>

        
        <svg version="1.0" viewBox="0 0 60 55" xmlns="http://www.w3.org/2000/svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
 

            <g id="kommuner" className="kommun" transform="translate(-35.503 -595.16)">
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Östra Göinge")} onClick={() => dispatch(activeSector('Östra Göinge'))}>
                    <path className="k1256" d="m78.875 603 1.125-3.125 1.188-0.875 0.812 0.75-0.937 3.5 0.562 1.25 0.375-1.125 0.875-0.25 0.688 1.125-0.75 0.812 0.062 1.438 3.313-0.5-2.563 1.187-0.875 1.563-0.625 2.75-1.5 1.062-1.375 0.25-0.625 1-3.062-1-0.313-1.5-0.375-1.437 0.438-2.313v-2.562l2.437-1.75z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Bromölla")} onClick={() => dispatch(activeSector('Bromölla'))}>
                    <path className="k1272" d="m86.125 612.94 0.5 2.563-1.312 1.375-0.25 1.437 2.312 0.563 2.063-0.688 0.25-1.312 1-0.5-0.438-5.313-0.562-1.187-1.5 0.25-1.313-0.563-0.812 1.063z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Osby")} onClick={() => dispatch(activeSector('Osby'))}>
                    <path className="k1273" d="m87.75 601.62 1.438-2.563-2.75-1.125-4.125-1.187-0.438 0.562-2.625-0.812-0.812-1.188-1 0.063-0.25 1.25-1 1.625h-2.25l-1.563 0.812-2.062-0.062-2.188 0.937 1.125 1.813 3.688-0.75 0.125 0.812-0.375 1.063 1.125 0.625-0.125 1.437 1.625 0.063 2.437-1.75 1.125-0.25 1.125-3.125 1.188-0.875 0.812 0.75-0.937 3.5 0.562 1.25 0.375-1.125 0.875-0.25 0.688 1.125-0.75 0.812 0.062 1.438 3.313-0.5-0.563-1.625 0.625-2.375z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Kristianstad")} onClick={() => dispatch(activeSector('Kristianstad'))}>
                    <path className="k1290" d="m86.375 620.75 1-1.875-2.312-0.563 0.25-1.437 1.312-1.375-0.5-2.563-0.062-2.312 0.812-1.063-0.187-2.062-0.5-1.5-2.563 1.187-0.875 1.563-0.625 2.75-1.5 1.062-1.375 0.25-0.625 1-3.062-1-0.75 1.625 0.312 1.063-2.25 3.25-1.625 0.5-0.75-0.938-1.437 2.063 0.625 1.187-1.25 0.625 1.875 2.5 1.687-1.375 0.75 0.5 0.25 2.125-1 1.625 0.688 1.188 1-0.25 0.125 1.562 1.062 1.313 1.25-0.25 0.375-0.813 0.875 0.188 0.25 0.687 2.5 0.063 0.313-3.188 1.937-3.5 1.125-0.562 0.875-2.063z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Hörby")} onClick={() => dispatch(activeSector('Hörby'))}>
                    <path className="k1266" d="m66 632.25 0.813-0.688 1.562 0.125-0.187-0.875 1-0.812 2.375 0.812 1.062 0.625 1.188-1.375-0.125-1.562-1 0.25-0.688-1.188 1-1.625-0.25-2.125-0.75-0.5-1.687 1.375-1.875-2.5-1.125-0.5-1.875-0.187-0.688 0.625 0.063 1.187-1 1.125-0.625 1.375 0.187 1.813 0.438 0.875 1.375-0.125v0.687l-1.063 1.438 0.563 1.062z"/>
                </a> 
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Skurup")} onClick={() => dispatch(activeSector('Skurup'))}>
                    <path className="k1264" d="m60.125 643.31 0.5 0.625-0.187 1.25-0.563 1 0.813 0.5 0.187 1.5 2.875 0.125 1.5-1.812-0.75-1.313 0.938-1.25-0.063-2.375-2.312-0.875-1-1.75-0.625 0.313-0.188 1.25-0.437 1-0.625-0.063z"/>
                </a>    
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Sjöbo")} onClick={() => dispatch(activeSector('Sjöbo'))}>
                    <path className="k1265" d="m64.375 635.75 0.313-0.75-1.375-1.375 1.375-2.063 1.312 0.688 0.813-0.688 1.562 0.125-0.187-0.875 1-0.812 2.375 0.812 1.062 0.625-0.5 1.25 1.813 2.688 0.187 1.312-1.875 2-0.937-0.187-0.375 1.125-1.125-0.25-1 1.187-1.25 0.688-2.188 0.312-2.312-0.875-1-1.75 0.625-2.312 1.5-0.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Höör")} onClick={() => dispatch(activeSector('Höör'))}>
                    <path className="k1267" d="m59.938 627.75 1 1.75 1.437-0.125 0.188-1.313 0.812-0.437-0.187-1.813 0.625-1.375 1-1.125-0.063-1.187 0.688-0.625 0.75-1.25 0.312-2.625-2.187-0.688-0.313-1.562-1.437 0.312-0.438 1.25-1.062 0.5-0.25 1.563-2-0.063 0.625 1.813-0.25 1.125 1.312 1.062 0.688 1.438-1.063 0.312 0.063 2.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Tomelilla")} onClick={() => dispatch(activeSector('Tomelilla'))}>
                    <path className="k1270" d="m76.125 631.12 0.375-0.813 0.875 0.188 0.25 0.687v1l1.063 0.625-1.625 0.938-0.375 2.937 2.562 0.625 0.313 1.75-1.25 0.25-0.375 2.75-0.813 1.688-1.875-0.188-1.187 0.688-2.063-1.75 0.063-1-1.125-1.875 0.375-1.125 0.937 0.187 1.875-2-0.187-1.312-1.813-2.688 0.5-1.25 1.188-1.375 1.062 1.313z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Ystad")} onClick={() => dispatch(activeSector('Ystad'))}>
                    <path className="k1286" d="m77.188 648.19 2.312 0.375 0.5-0.875-1.812-2.312-0.563-0.688 0.375-1-0.875 0.063-1.875-0.188-1.187 0.688-2.063-1.75 0.063-1-1.125-1.875-1.125-0.25-1 1.187-1.25 0.688-2.188 0.312 0.063 2.375-0.938 1.25 0.75 1.313h1.375l0.938-0.563 3 0.25 1.75-0.375 1.062 0.438 2.688 2.062z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Simrisham")} onClick={() => dispatch(activeSector('Simrishamn'))}>
                    <path className="k1291" d="m82.063 635.38 0.437 2.687 1.375 1.25 0.313 2.063-0.875 1.75-1.938 2.062-1.375 2.5-1.812-2.312-0.563-0.688 0.375-1-0.875 0.063 0.813-1.688 0.375-2.75 1.25-0.25-0.313-1.75-2.562-0.625 0.375-2.937 1.625-0.938-1.063-0.625v-1l2.5 0.063 0.375 3.062z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Örkelljunga")} onClick={() => dispatch(activeSector('Örkelljunga'))}>
                    <path className="k1257" d="m54.688 610.12 0.75-1.188 1.125 0.375 2.062-2.687 1.938 0.437 1-1.312 0.75 0.5 0.437-1.125 0.125-2.438 1.813-1.125 0.125-0.875-2.063-0.125-1-1-0.937 0.813-1.063-0.125-2 1.187-1.562 1.5-1.125 1.125-2.25 2.813-0.063 1.687z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Perstorp")} onClick={() => dispatch(activeSector('Perstorp'))}>
                    <path className="k1275" d="m57.875 613.44h1.563l1.25 1 0.875-1.687v-0.875l-0.625-0.938 0.5-1.125-0.875-2.75-1.938-0.437-2.062 2.687 0.062 1.375 0.938 1.063-0.375 0.437z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Klippan")} onClick={() => dispatch(activeSector('Klippan'))}>
                    <path className="k1276" d="m56.063 618 1.75 0.125 0.312 0.625 0.688 0.187 2 0.063 0.25-1.563 1.062-0.5 0.438-1.25-0.375-0.437-0.813 0.437-0.687-1.25-1.25-1h-1.563l-0.687-1.25 0.375-0.437-0.938-1.063-0.062-1.375-1.125-0.375-0.75 1.188-1.938-1.563-1.062 0.625-2.125-0.25 0.312 1.313 1.875 1.562 0.25 2.938 1.563 1.062 0.687 1.938 0.938 0.5z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Hässleholm")} onClick={() => dispatch(activeSector('Hässleholm'))}>       
                    <path className="k1293" d="m72.688 602.88 0.375-1.063-0.125-0.812-3.688 0.75-1.125-1.813-3.312 0.75-0.125 0.875-1.813 1.125-0.125 2.438-0.437 1.125-0.75-0.5-1 1.312 0.875 2.75-0.5 1.125 0.625 0.938v0.875l-0.875 1.687 0.687 1.25 0.813-0.437 0.375 0.437 1.437-0.312 0.313 1.562 2.187 0.688-0.312 2.625-0.75 1.25 1.875 0.187 1.125 0.5 1.25-0.625-0.625-1.187 1.437-2.063 0.75 0.938 1.625-0.5 2.25-3.25-0.312-1.063 0.75-1.625-0.313-1.5-0.375-1.437 0.438-2.313v-2.562l-1.625-0.063 0.125-1.437z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Malmö")} onClick={() => dispatch(activeSector('Malmö'))}>
                    <path className="k1280" d="m47.875 637.38 0.813-0.563 1.062-0.25 0.188-0.562 0.5 0.562 0.437 0.688h0.75l0.25-0.188 0.438 0.563v1.5l-0.813 0.437 0.438 0.75-0.813 0.813h-1.375l-0.25 0.562-2.875 0.313-0.5-1.25-0.125-1.188v-0.875l0.5-0.5z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Kävlinge")} onClick={() => dispatch(activeSector('Kävlinge'))}>
                    <path className="k1261" d="m49.25 630.69 0.938-0.125 0.812 0.563 0.813-0.313 0.5 0.063 0.25-1.75 1.875-0.188 0.437-1.375-0.437-0.937-1.938 0.062-2.312-0.5-0.688 0.875h-2.5l0.125 2.375-0.312 0.25-0.375 0.5 0.375 0.688 0.75-0.375 0.312 0.687-0.312 0.5 0.437 0.188h0.625z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Burlöv")} onClick={() => dispatch(activeSector('Burlöv'))}>
                    <path className="k1231" d="m51.875 637.06 0.188-0.312-0.688-0.188-0.25-0.375 0.25-0.062h0.375l0.625-0.75-0.687-0.5-0.375-0.063-0.188 0.188v0.375l-1.187 0.125v0.5l0.5 0.562 0.437 0.688h0.75z"/>                    
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Svalöv")} onClick={() => dispatch(activeSector('Svalöv'))}>
                    <path className="k1214" d="m54.063 623.88 1.312-0.688 1.375-0.125-0.25-1.625 1.625-2.687-0.312-0.625-1.75-0.125-0.875 0.25-0.938-0.5-0.687-1.938-1.563-1.062-1 0.75-1.187 1.562 0.187 2-1.187 0.875-0.125 1.063-0.813 0.437-0.125 1 1.125 1.25-0.312 1.063 0.875 0.5 0.437-0.375 0.313 1.312 2.312 0.5 0.313-0.812-0.438-0.438v-1.125l0.875-0.625z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Staffanstorp")} onClick={() => dispatch(activeSector('Staffanstorp'))}>
                    <path className="k1230" d="m55.875 633.81 0.938 1.875 0.875 0.625 0.062 0.875-0.562 0.188-0.375-0.438-0.375 0.688-0.625-0.625-0.5-0.188-0.688 0.375-1-0.187-0.25 0.562-1.062 0.063-0.438-0.563 0.188-0.312-0.688-0.188-0.25-0.375 0.25-0.062h0.375l0.625-0.75-0.687-0.5 0.125-1.125-0.313-0.375 0.188-0.438 0.812-0.062 0.688 1.125 0.812-0.438 0.188 0.625z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Vellinge")} onClick={() => dispatch(activeSector('Vellinge'))}>
                    <path className="k1233" d="m46.688 645.75 0.375-1.063 0.125-1.062-0.25-0.813-0.313-0.812 2.875-0.313 0.25-0.562h1.375l0.875 1.687 0.75 0.125-0.187 0.25-0.125 0.5-0.75 0.75-0.875-0.5-0.563 0.063-0.25-0.125-0.5 0.062 0.188 1.438 0.25 0.437-0.75 0.313-0.813 1.187-0.937-0.687-0.813 0.187-0.375 0.188-0.125 0.375h-0.437l-0.375-0.438-0.5-0.125-1.563 0.563 1.375-2.813 0.125 0.313 0.25 1 0.75 0.312 0.625 0.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Lomma")} onClick={() => dispatch(activeSector('Lomma'))}>
                    <path className="k1262" d="m49.25 630.69 0.938-0.125 0.812 0.563 0.813-0.313 0.5 0.063-0.25 1.125-0.438 0.5 0.063 0.437-0.188 0.438 0.313 0.375-0.125 1.125-0.375-0.063-0.188 0.188v0.375l-1.187 0.125v-0.313l0.375-0.937v-0.375l-0.313-0.938-0.437-0.312-0.938-0.75z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Svedala")} onClick={() => dispatch(activeSector('Svedala'))}>
                    <path className="k1263" d="m56.375 643.62 1.938-0.063 0.937-1.125 0.5-0.625 0.438-0.375-1.5-0.375-0.563-1.312-0.687 0.187-1-2.312-0.625-0.625-0.5-0.188-0.688 0.375-1-0.187-0.25 0.562-1.062 0.063v1.5l-0.813 0.437 0.438 0.75-0.813 0.813 0.875 1.687 0.75 0.125-0.187 0.25 1.187 0.313 0.25-0.438 0.563-0.062-0.063 0.562 0.438 0.125 0.875-0.5z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Lund")} onClick={() => dispatch(activeSector('Lund'))}>
                    <path className="k1281" d="m55.875 633.81 0.938 1.875 0.875 0.625 0.062 0.875-0.562 0.188-0.375-0.438-0.375 0.688 1 2.312 0.687-0.187 0.563 1.312 1.5 0.375 0.625 0.063 0.437-1 0.188-1.25 0.625-0.313 0.625-2.312 1.5-0.125 0.187-0.75 0.313-0.75-1.375-1.375-0.813-0.25-1.75-1.438-0.875-0.125-1.062-0.625-1.5-0.375-0.75 0.125 0.125-0.812-0.375-0.563-0.938 0.25-0.625-0.812-0.312-0.063-1.875 0.188-0.25 1.75-0.25 1.125-0.438 0.5 0.063 0.437 0.812-0.062 0.688 1.125 0.812-0.438 0.188 0.625z"/>                    
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Landskrona")} onClick={() => dispatch(activeSector('Landskrona'))}>
                    <path className="k1282" d="m44.875 621.44 1.313-0.437 1 0.5 0.562 0.937 1.125 1.25-0.312 1.063 0.875 0.5 0.437-0.375 0.313 1.312-0.688 0.875h-2.5l-0.5-1.75-1.812-0.437-1.375-4.25 1.062-0.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Eslöv")} onClick={() => dispatch(activeSector('Eslöv'))}>
                    <path className="k1285" d="m59.938 627.75 1 1.75 1.437-0.125 0.188-1.313 0.812-0.437 0.438 0.875 1.375-0.125v0.687l-1.063 1.438 0.563 1.062-1.375 2.063-0.813-0.25-1.75-1.438-0.875-0.125-1.062-0.625-1.5-0.375-0.75 0.125 0.125-0.812-0.375-0.563-0.938 0.25-0.625-0.812-0.312-0.063 0.437-1.375-0.437-0.937-1.938 0.062 0.313-0.812-0.438-0.438v-1.125l0.875-0.625 0.813 0.188 1.312-0.688 1.375-0.125-0.25-1.625 1.625-2.687 0.688 0.187 0.625 1.813-0.25 1.125 1.312 1.062 0.688 1.438-1.063 0.312 0.063 2.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Trelleborg")} onClick={() => dispatch(activeSector('Trelleborg'))}>
                    <path className="k1287" d="m60.125 643.31 0.5 0.625-0.187 1.25-0.563 1 0.813 0.5 0.187 1.5-0.875 0.313-0.875 0.687-1.062 0.063-1.188 0.75-0.437-0.5-0.875 0.125-0.625-0.25-1.313-0.75-2.437-0.625-0.938 0.187h-0.625l-1.25-0.875 0.813-1.187 0.75-0.313-0.25-0.437-0.188-1.438 0.5-0.062 0.25 0.125 0.563-0.063 0.875 0.5 0.75-0.75 0.125-0.5 1.187 0.313 0.25-0.438 0.563-0.062-0.063 0.562 0.438 0.125 0.875-0.5 0.562 0.438 1.938-0.063 0.937-1.125 0.5-0.625 0.438-0.375z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Bjuv")} onClick={() => dispatch(activeSector('Bjuv'))}>
                    <path className="k1260" d="m48.813 619.94 1.187-0.875-0.187-2 1.187-1.562-1.25-1.813-0.937-0.187-0.563-0.438-1.875 0.813 0.75 2.5 0.438 1.312-0.938 0.438 1.188 1.875z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Åstorp")} onClick={() => dispatch(activeSector('Åstorp'))}>
                    <path className="k1277" d="m48.375 611.06 1.5-0.812 1.875 1.562 0.25 2.938-1 0.75-1.25-1.813-0.937-0.187-0.563-0.438-1.875 0.813-1-1.25 1.688-0.625 1.25-0.25z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Båstad")} onClick={() => dispatch(activeSector('Båstad'))}>
                    <path className="k1278" d="m43.875 603.94 2.25-0.5 1.25-1.875 1.188 0.438 0.687-2.5-1.687-1.125-1.5 0.625-1.25-0.938-1.688-0.75-1.25 0.5-1.312 1.063 0.125 1.812 1.375 0.438 1.25 1.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Helsingborg")} onClick={() => dispatch(activeSector('Helsingborg'))}>
                    <path className="k1283" d="m44.875 621.44 1.313-0.437 1 0.5 0.562 0.937 0.125-1 0.813-0.437 0.125-1.063-1 0.063-1.188-1.875 0.938-0.438-0.438-1.312-0.75-2.5-1-1.25-1.062-1.188 1-1.125-1.063-1.5-0.625-0.187-0.562 1-1.875 1.312 0.062 0.75-2.5 0.5 0.875 1 1 1.625 1.25 1.563 1 1.937 0.438 2.313 1.062-0.125z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Höganäs")} onClick={() => dispatch(activeSector('Höganäs'))}>
                    <path className="k1284" d="m37.75 607.06 0.313 1.438 0.437 2.875 0.25 0.812 2.5-0.5-0.062-0.75 1.875-1.312 0.562-1-0.875-0.313h-0.75l-0.625-1-2-1.187-2.312-1.563-1.188 0.125 1.063 0.875z"/>
                </a>
                <a href="/#" xlinkTitle="" xlinkHref="" onMouseEnter={() => setSector(sector = "Ängelholm")} onClick={() => dispatch(activeSector('Ängelholm'))}>
                    <path className="k1292" d="m51.688 609.19 1.062-0.625 0.063-1.687 2.25-2.813-1.25-1.062-4.125-0.688-1.125-0.312-1.188-0.438-1.25 1.875-2.25 0.5 1.25 1.313 0.688 1.5-0.563 1.375-1 0.687 1.063 1.5-1 1.125 1.062 1.188 1.688-0.625 1.25-0.25 0.062-0.688 1.5-0.812-0.312-1.313z"/>
                </a>
            </g>
           </svg>
           
            </div>


           

            <div className="hoverSector animated fadeIn" style={mapToogleOn.mapOn}>
                {sector}
            </div>


            <div className="issue animated fadeIn" style={mapToogleOn.issueOn}>
                
                <div className="issue__title">
                    <h2>General</h2>
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('POPULATION'))}>
                    <img src={townspeople} alt="population" className="issue__img" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('TAX_RATE'))}>
                    <img src={tax} alt="tax_rate" className="issue__img" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('UNEMPLOYMENT'))}>
                    <img src={unemployment_icon} alt="unemployment_icon" className="issue__img__small" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('PENSION_OBLIGATION'))}>
                    <img src={pension_obligation_icon} alt="pension_obligation" className="issue__img" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('HOUSES_SOLD'))}>
                    <img src={houses_sold} alt="houses_sold" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('AVERAGE_HOUSE_PRICES'))}>
                    <img src={house_prices_icon} alt="house_prices_icon" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1" id="million_earners_icon" onClick={() => dispatch(chooseIssue('MILLIONER_INCOME_EARNERS'))}>
                    <img src={million_earners_icon} alt="million_earners_icon" className="issue__img" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('MEDINAN_INCOME'))}>
                    <img src={median_income_icon} alt="median_income_icon" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1" id="total_income_icon" onClick={() => dispatch(chooseIssue('TOTAL_YEARLY_INCOME'))}>
                    <img src={total_income_icon} alt="total_income_icon" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1" id="moving_in_icon" onClick={() => dispatch(chooseIssue('IMMIGRATION'))}>
                    <img src={moving_in_icon} alt="moving_in_icon" className="issue__img_smaller" />
                </div>
                

                <div className="issue__title">
                    <h2>Education</h2>
                </div>

                <div className="issue__group-1" id="preschool" onClick={() => dispatch(chooseIssue('PRESCHOOL_STUDENTS'))}>
                    <img src={preschool} alt="preschool" className="issue__img__small"  />
                </div>
                <div className="issue__group-1" id="elementary" onClick={() => dispatch(chooseIssue('ELEMENTARY'))}>
                    <img src={elementaryschool} alt="population" className="issue__img__small" />
                </div>
                <div className="issue__group-1" id="high_school" onClick={() => dispatch(chooseIssue('JUNIOR_HIGH'))}>
                    <img src={high_school} alt="population" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1"  id="gymnasium" onClick={() => dispatch(chooseIssue('HIGH_SCHOOL'))}>
                    <img src={university} alt="population" className="issue__img__smaller"/>
                </div>
                <div className="issue__group-1" id="education_cost" onClick={() => dispatch(chooseIssue('EDUCATION_COSTS'))}>
                    <img src={education_cost} alt="education_cost" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1" id="graduation" onClick={() => dispatch(chooseIssue('NINTH_GRADUATION'))}>
                    <img src={graduation} alt="population" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('STUDENTS_PER_TEACHER'))}>
                    <img src={teacher_student_ratio_icon} alt="teacher_student_ratio_icon" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('CHILDREN_PER_CARETAKER'))}>
                    <img src={caregiver_child_ratio_icon} alt="caregiver_child_ratio_icon" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                
                <div className="issue__title">
                    <h2>Financial</h2>
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('INCOME'))}>
                    <img src={income} alt="Income" className="issue__img__smallest" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('EXPENSES'))}>
                    <img src={cost} alt="cost" className="issue__img__smallest" />
                </div>
                <div className="issue__group-1 " id="annual_target" onClick={() => dispatch(chooseIssue('ANNUAL_TARGET'))}>
                    <img src={annual_target} alt="annual_target" className="issue__img__smaller" />
                </div>
                <div className="issue__group-1">
                    <img src={net_investment_icon} alt="net_investment" className="issue__img" />
                </div>
                <div className="issue__group-1">
                    <img src={cash_on_hand_icon} alt="cash_on_hand_icon" className="issue__img__small" />
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>

                <div className="issue__title">
                    <h2>HealthCare</h2>
                </div>
                <div className="issue__group-1">
                    <img src={healthcare_cost_icon} alt="healthcare_cost_icon" className="issue__img__small" />
                </div>
                <div className="issue__group-1">
                    <img src={sick_leave_icon} alt="sick_leave_icon" className="issue__img__small" />
                </div>
                <div className="issue__group-1" onClick={() => dispatch(chooseIssue('DEATHS'))}>
                    <img src={deaths_icon} alt="sick_leave_icon" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1" id="newborns_icon" onClick={() => dispatch(chooseIssue('NEWBORNS'))}>
                    <img src={newborns_icon} alt="newborns_icon" className="issue__img_smaller" />
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
                <div className="issue__group-1">
                    
                </div>
            </div>

            <div className="map_toggle">
                <div className="map_toggle__button-1" onClick={() => dispatch(mapToggleOn())}>Map</div>
                <div className="map_toggle__button-2" onClick={() => dispatch(mapToggleOff())}>Issue</div>
            </div>
            
            



   
                    
       


            </div>
        );
    


}

export default Scania;