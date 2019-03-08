import React from 'react';
import Style from './Speech.less';
import { Button} from 'antd';
var audio_context;
var recorder;

class page extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            boxshadow:true,
            Type:true,
		}
    };
    componentWillUnmount() {
        clearInterval(window.timer);
    }
	componentDidMount() {
        let t=this;
        try {
            // webkit shim
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
            window.URL = window.URL || window.webkitURL;
            
            audio_context = new AudioContext;
          } catch (e) {
            alert('No web audio support in this browser!');
          }
          
          navigator.getUserMedia({audio: true}, t.startUserMedia, function(e) {
          });
    }
    startUserMedia(stream) {
        var input = audio_context.createMediaStreamSource(stream);
        
        //recorder = new Recorder(input);
      }
    SpeechIn = ()=>{
        recorder && recorder.record();
    }
    SpeechUpload = ()=>{
        recorder && recorder.stop();
        this.createDownloadLink();
        
        recorder.clear();
    }
    realityClick =() =>{
		this.setState((prevState) => ({
		    boxshadow: !prevState.boxshadow,
		}));
	}
    createDownloadLink() {
        recorder && recorder.exportWAV(function(blob) {
          var url = URL.createObjectURL(blob);
          var li = document.createElement('li');
          var au = document.createElement('audio');
          var hf = document.createElement('a');
          
          au.controls = true;
          au.src = url;
          hf.href = url;
          hf.download = new Date().toISOString() + '.wav';
          hf.innerHTML = hf.download;
          li.appendChild(au);
          li.appendChild(hf);
          let recordingslist=document.getElementById('box');
          recordingslist.appendChild(li);
        });
      }
      //人工模式点击事件
      clickType =() =>{
        this.setState({Type:true});
        clearInterval(window.timer);
      }
      //智能模式点击事件
      speechType =() =>{
          let t=this;
        this.setState({Type:false});
        clearInterval(window.timer);
        window.timer = setInterval(() => {
            const date = new Date();
            console.log(date);
            recorder && recorder.record();
            window.setTimeout(() =>{
                recorder && recorder.stop();
                console.log(recorder)
                //t.createDownloadLink();
                recorder.clear();
            },1000);

        }, 2000);
      }
	render() {
        const { boxshadow ,Type } = this.state;
		return (
			<div className={Style.IntelligentSpeech}>
				<div className={Style.IntelligentSpeechModal}>
                    <div className={Style.IntelligentSpeechTabs}>
                        <div>
                            <span>
                                <span onClick={this.realityClick}className={boxshadow? Style.real:Style.theory}>状态切换</span>
                                <span onClick={this.realityClick}className={boxshadow? Style.theory:Style.real}>语音设置</span>
                            </span>
                        </div>
                    </div>
                    {
                        boxshadow&&
                        <div className={Style.IntelligentSpeechcontent1}>
                                <div className={Style.IntelligentSpeechbox}>
                                    <div onClick={this.clickType} className={Type? Style.man:Style.speech} >
                                       <div style={{fontSize:'20px', fontWeight:'800'}}> 人工模式</div>
                                        <div>MANUAL MODEL</div>
                                    </div>
                                    <div onClick={this.speechType} className={Type? Style.speech:Style.man}>
                                       <div style={{fontSize:'20px',fontWeight:'800'}}> 智能模式</div>
                                        <div>INTELLIGENT MODE</div>
                                    </div>
                                </div>
                        </div>
                    }
                    <div id={'box'}></div>
                </div>
			</div>
		)
	}
}

export default page