import React from 'react'
import Jumbotron from '../components/jumbotron/index'

const Home = () => {
    return (
        <div>
            <Jumbotron title="Loperamide Diatabs" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <video style={{ background: '#000' }} width="100%" height="312px" controls="" poster="http://localhost/diatabs/images/thumbnail/20180522081009_diatabs_tvc_thumb.png" id="htmlp">
                                    <source src="http://localhost/diatabs/images/videos/Bomba_sa_tiyan.mp4" type="video/mp4" />Your browser does not support the video tag.
                            </video>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <h2 className="mb-3">Diarrhea? #BombaSaTiyan ‘yan!</h2>
                                <p className="mb-3" style={
                                    {
                                        marginTop: '0pt',
                                        marginBottom: '0pt',
                                        marginLeft: '0in',
                                        direction: 'ltr',
                                        unicodeBidi: ' embed',
                                        wordBreak: 'normal',
                                    }
                                }>Mahirap na kapag
                                        may #BombaSaTiyan!
                                        Maliban sa
                                        LBM, paminsan
                                        may sakit
                                        ng tiyan,
                                        at panghihina dahil sa
                                        dehydration. Mag-DIATABS na para sa ginhawang todo.
                                </p>
                                
                                <p style={
                                    {
                                        marginTop: '0pt',
                                        marginBottom: '0pt',
                                        marginLeft: '0in',
                                        direction: 'ltr',
                                        unicodeBidi: ' embed',
                                        wordBreak: 'normal',
                                    }
                                }>Panuorin ang masayang
                                    #BombaSaTiyan
                                    music video at ‘wag kalimutang
                                mag-DIATABS.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;