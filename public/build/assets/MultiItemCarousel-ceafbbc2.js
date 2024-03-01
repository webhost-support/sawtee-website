import{u as x,r as i,j as t}from"./app-b86f65ba.js";import{L as u,I as c}from"./inertia-chakra-link-overlay-fa65dfaf.js";import{B as d}from"./chunk-PULVB27S-40ef37d8.js";import{I as m}from"./chunk-QINAG4RG-a0760f00.js";import{S as g}from"./chunk-GOJLRND4-2cc4de57.js";const k=({slides:e,itemsToShow:a=3,className:n,spacing:p=30,...s})=>{const l=x("gray.900","whiteAlpha.900"),o=i.useRef(null);return i.useEffect(()=>{const r=o.current;Object.assign(r,{navigation:!0,injectStyles:[`
                .swiper {
                    padding-top: 65px;
                }
                .swiper-button-prev {
                    left: auto !important;
                    right: 60px !important;
                }
                .swiper-button-next,
                .swiper-button-prev {
                    top: 25px !important;
                    background-color: transparent;
                    background-size: 20px;
                    padding-inline: 8px;
                    border-radius: 5px;
                    border: 2px solid var(--color-text);
                    width: 24px !important;
                    height: 35px !important;
                }
                .swiper-button-next > svg ,
                .swiper-button-prev > svg{
                    height: 20px !important;
                    color: var(--color-text);
                }
            `]}),r.initialize()},[]),t.jsx(d,{...s,children:t.jsxs("swiper-container",{ref:o,init:"false","slides-per-view":a,"space-between":p,navigation:!0,"slides-per-group":3,centered:!0,keyboard:!0,class:"multi-item-carousel "+n,children:[e.length>=1&&e.map(r=>t.jsx("swiper-slide",{children:t.jsx(u,{pos:"relative",maxW:"140px",mx:"auto",_before:{content:"''",position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"15px",background:"rgba(0,0,0,0.3)",backgroundBlendMode:"overlay"},_hover:{_before:{background:"transparent"}},children:t.jsx(c,{title:r.title,href:r.file?`/publications/${r.file.name}`:"#",target:"_blank",children:t.jsx(m,{src:r.media?`${r.media[0].original_url}`:"",alt:r.title,title:r.title,rounded:"xl",border:"1px solid",borderColor:l,objectFit:"cover",aspectRatio:3/4,w:"140px",h:"200px"})})})},r.id)),e.length<=0&&[1,2,3,4,5,6].map(r=>t.jsx("swiper-slide",{children:t.jsx(g,{rounded:"xl",startColor:"primary.50",endColor:"primary.200",w:"140px",h:"200px",mx:"auto"})},`${r}+1`))]})})};export{k as M};
