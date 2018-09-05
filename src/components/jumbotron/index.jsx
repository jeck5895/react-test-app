import React, {Component} from 'react'
import { Link } from "react-router-dom"

const styles = {
    backgroundImage:'url(http://www.diatabs.com.ph/images/banners/20180525024937_WALLPAPER-1349x300.jpg)',
    minHeight: `${300}px`,
    position: 'relative',
    borderRadius: '0px'
}

class Jumbotron extends Component {

    componentDidMount() {
        console.log(this)
    }

    render() {
        return (
            <div style={ styles } className="jumbotron">
                {/* <h1 className="display-4">{ this.props.title }</h1> */}
                {/* <img src="http://www.diatabs.com.ph/images/banners/20180607105039_diatabs-banner-1.jpg" alt="Bilis-control Diatabs" width="100%"></img> */}
                {/* <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p> */}
                {/* <hr className="my-4"/> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p> */}
                {/* <Link className="btn btn-primary" style={{ marginLeft: '45%', position: 'relative', top: '15rem' }} to="/learn-more" role="button">Learn more</Link> */}
            </div>
        );
    }
}

export default Jumbotron;