import React from 'react';
import {css} from 'glamor';

export default props =>{
    let demoBtn = null;
    if(props.demo !== ""){
        demoBtn = (<a className={`waves-effect waves-light btn ${blackBack}`} target="_blank" href={props.demo}><i className="material-icons right">present_to_all</i> demo</a>);
    } 
    const githubBtn = <a className={`waves-effect waves-light btn ${blackBack}`} target="_blank" href={props.code}><i className="material-icons right">developer_mode</i> code</a>;
    
    return(
    <div style={{width: 450}} className="card col m6 s12 l4">
        <div className="card-image waves-effect waves-block waves-light">
            <img className="activator work-img" src={props.src} alt={props.alt}/>
        </div>
        <div className="card-content">
            <span style={{display: 'flex', justifyContent: 'space-between'}} className={`card-title activator ${hoverGreen}`}>{props.title}<i className="material-icons right">add</i></span>
            {githubBtn}
            {demoBtn}        
        </div>

        <div className="card-reveal">
            <span className={`card-title activator ${hoverGreen}`}>BACK</span>
            <p>{props.info}</p>
        </div>
    </div>
    );
}

const hoverGreen = css({
    transition: '.3s',
    color: 'black',
    ':hover':{
        color: '#06b700'
    }
})

const blackBack = css({
    ':hover':{
        backgroundColor: 'black'
    }
})