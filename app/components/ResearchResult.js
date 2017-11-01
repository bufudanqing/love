import React from 'react';
import ResearchResultStore from '../stores/ResearchResultStore';
import ResearchResultActions from '../actions/ResearchResultActions'

class ResearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = ResearchResultStore.getState();
        this.onChange = this.onChange.bind(this);
    }
    componentWillMount(){
        ResearchResultActions.getResearchResult(this.props.params.id);
    }
    componentDidMount() {
        ResearchResultStore.listen(this.onChange);
        ResearchResultActions.getResearchResult(this.props.params.id);
    }

    componentWillUnmount() {
        ResearchResultStore.unlisten(this.onChange);
        $(document.body).removeClass();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.params.id !== this.props.params.id) {
            ResearchResultActions.getResearchResult(this.props.params.id);
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
                            <div className='panel-heading'>查看研究成果</div>
                            <div className='panel-body'>
                                <div className={'form-group '}>
                                    <label className='control-label'>标题</label>
                                    <input type='text' className='form-control' ref='nameTextField' value={this.state.title}
                                    />
                                </div>
                                <div className={'form-group '}>
                                    <label className='control-label'>类型</label>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='zl' value='1' checked={this.state.type =="1"}
                                               />
                                        <label htmlFor='zl'>专利</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='rz' value='2' checked={this.state.type =="2"}
                                               />
                                        <label htmlFor='rz'>软著</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='hj' value='3' checked={this.state.type =="3"}
                                               />
                                        <label htmlFor='hj'>获奖</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='xm' value='4' checked={this.state.type =="4"}
                                               />
                                        <label htmlFor='xm'>项目</label>
                                    </div>
                                    <div className='radio radio-inline'>
                                        <input type='radio' name='type' id='lw' value='5' checked={this.state.type =="5"}
                                               />
                                        <label htmlFor='lw'>论文</label>
                                    </div>
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

export default ResearchResult;