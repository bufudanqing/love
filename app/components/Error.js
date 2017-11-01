import React from 'react';
class Error extends React.Component {
    render() {
        var style={
            width:"100%",
            height:"100%"
        }
        var div={
            "position":"absolute",
            "width":"100%",
            "height":"100%",
            "z-index":-1
        }
        return (
                <div className={div}>
                    <img height={style.height} width={style.width} src="/error.jpg"/>
                </div>
        );
    }
}

export default Error;