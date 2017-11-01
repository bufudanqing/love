import React from 'react';
import FlowStore from '../stores/FlowStore';
import FlowActions from '../actions/FlowActions'

class Flow extends React.Component {
    constructor(props) {
        super(props);
        this.state = FlowStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        FlowActions.getFlow(this.props.params.id);
    }
    componentDidMount() {
        FlowStore.listen(this.onChange);
    }

    componentWillUnmount() {
        FlowStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
    }

    onChange(state) {
        this.setState(state);
        $("#showContent").html(this.state.content);
    }
    innerHtml(){

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
                            <div className='panel-heading'>查看流程</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.url}/>
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>名称</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.name}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>作者</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.author}
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

export default Flow;