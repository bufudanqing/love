import React from 'react';
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12 ' >
                            <h4 className='lead'>
                                    数元信安 © 2017.5 Dmisec
                            </h4>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;