import React from 'react';
import FeedBackStore from '../stores/FeedBackStore';
import FeedBackActions from '../actions/FeedBackActions'

class FeedBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = FeedBackStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        FeedBackActions.getFeedBack(this.props.params.id);
    }
    componentDidMount() {
        FeedBackStore.listen(this.onChange);
        FeedBackActions.getFeedBack(this.props.params.id);
    }

    componentWillUnmount() {
        FeedBackStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            FeedBackActions.getFeedBack(this.props.params.id);
        }

    }

    onChange(state) {
        this.setState(state);
        $("#showContent").html(this.state.message);
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
                            <div className='panel-heading'>查看反馈报告</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>姓名</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>Email</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.email}
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

export default FeedBack;