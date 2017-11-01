import React from 'react';
import AcademicExchangeStore from '../stores/AcademicExchangeStore';
import AcademicExchangeActions from '../actions/AcademicExchangeActions'

class AcademicExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = AcademicExchangeStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        AcademicExchangeActions.getAcademicExchange(this.props.params.id);
    }
    componentDidMount() {
        AcademicExchangeStore.listen(this.onChange);
        AcademicExchangeActions.getAcademicExchange(this.props.params.id);
    }

    componentWillUnmount() {
        AcademicExchangeStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            AcademicExchangeActions.getAcademicExchange(this.props.params.id);
        }

    }

    onChange(state) {
        this.setState(state);
        $("#showContent").html(this.state.content);
    }

    render() {
        let style={
            width:"200px",
            height:"200px"
        }
        return (
            <div className='container'>
                <div className='row flipInX animated'>
                    <div className='col-sm-12'>
                        <div className='panel panel-default'>
                            <div className='panel-heading'>查看名学术交流</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.url}/>
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>标题</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>作者</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.author}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>地址</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.address}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>内容</label><br/>
                                    <div id="showContent" >
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AcademicExchange;