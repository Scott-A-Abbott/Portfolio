import React, { Component } from 'react';

export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth,
            open: false,
        }

        this.openNav = this.openNav.bind(this);
        this.closeNav = this.closeNav.bind(this);
        this.setWrapperRef = this.setWrapperRef.bind(this);           
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('mousedown', this.handleClickOutside);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
        window.removeEventListener('scroll', this.handleScroll);
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
      
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    }

    handleScroll = () => {
        this.setState({
            open: false
        });
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({
                open: false
            });
        }
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    openNav(){
        this.setState({
            open: true
        });
    }
    closeNav(){
        this.setState({
            open: false
        });
    }

    scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({block: "start", inline: "nearest", behavior: 'smooth'})
    }

    render(){
        const { width } = this.state;
        const isMobile = width <= 991;
        let navbar = {};

        if(isMobile){
            navbar = (
                <nav>
                    <div ref={this.setWrapperRef} className="nav-wrapper container">
                    <div onClick={() => this.scrollTo('root')} className='nav-text-name center brand-logo'>Scott Abbott</div>                    
                    <a className="button-collapse" onClick={this.openNav}><i className="material-icons">menu</i></a>
                    <ul className={`side-nav ${this.state.open ? 'visible': 'hidden' }`} tabIndex="0" onBlur={ this.closeNav }>
                        <li><a className='nav-text' onClick={this.closeNav}><i className={`material-icons left sideNavClose`}>close</i></a></li>
                        <li onClick={() => this.scrollTo('work')} className='nav-text'>Work</li>
                        <li onClick={() => this.scrollTo('about')} className='nav-text'>About</li>
                        <li onClick={() => this.scrollTo('skills')} className='nav-text'>Skills</li>
                        <li onClick={() => this.scrollTo('contact')} className='nav-text'>Contact</li>

                    </ul>
                    </div>  
                </nav>
            );
        } else {
            navbar = (
                <nav>
                    <div className="nav-wrapper container">
                    <div style={{display: 'inline-block'}} onClick={() => this.scrollTo('root')} className='nav-text-name'>Scott Abbott</div>                    
                    <div className="right hide-on-sm-and-down">
                        <div style={{display: 'inline-block'}} onClick={() => this.scrollTo('work')} className='nav-text'>Work</div>
                        <div style={{display: 'inline-block'}} onClick={() => this.scrollTo('about')} className='nav-text'>About</div>
                        <div style={{display: 'inline-block'}} onClick={() => this.scrollTo('skills')} className='nav-text'>Skills</div>
                        <div style={{display: 'inline-block'}} onClick={() =>this.scrollTo('contact')} className='nav-text'>Contact</div>

                    </div>
                </div>
                </nav>  
            );
        }

        return(
            <div className="navbar-fixed">
                {navbar}      
            </div>
        );
    }
}
