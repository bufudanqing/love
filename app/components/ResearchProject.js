import React from 'react';
import ResearchProjectStore from '../stores/ResearchProjectStore';
import ResearchProjectActions from '../actions/ResearchProjectActions'

class ResearchProject extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchProjectStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        ResearchProjectActions.getResearchProject(this.props.params.id);
    }
    componentDidMount() {
        ResearchProjectStore.listen(this.onChange);
        ResearchProjectActions.getResearchProject(this.props.params.id);
    }

    componentWillUnmount() {
        ResearchProjectStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            ResearchProjectActions.getResearchProject(this.props.params.id);
        }

    }

    onChange(state) {
        this.setState(state);
        $("#showContent").html(this.state.summary);
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
                            <div className='panel-heading'>查看研究工程</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>标题</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>图片</label>
                                    <img width={style.width} height={style.height} src={this.state.url}/>
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

export default ResearchProject;