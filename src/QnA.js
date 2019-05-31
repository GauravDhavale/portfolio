
import React, { Component } from 'react';

export default class QnA extends Component {

    state = { displayQnAInfo: false, QnaResponse: '', inputText: '' }

    toggleInfo = () => {
        this.setState({ displayQnAInfo: !this.state.displayQnAInfo })
    };

    handleChange = (e) => {
        this.setState({ inputText: e.target.value });
        if (e.target.value === '') {
            this.setState({ QnaResponse: '' });

        }
    };

    enterPressed = (e) => {
        console.log('code', e.keyCode)
        if (e.keyCode === 13) {
            this.fetchQnAResponse();
        }
    };

    resetFields = () => {
        document.getElementById('txtInput').value = '';
        this.setState({ QnaResponse: '' });
    }

    fetchQnAResponse = () => {

        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
            targetUrl = 'https://4ne2qam1eg.execute-api.us-east-1.amazonaws.com/prod/qna?question=' + encodeURIComponent(this.state.inputText.trim());
        console.log(targetUrl); 
        fetch(proxyUrl + targetUrl)
            .then(response => response.json())
            .then(json => this.setState({ QnaResponse: json.data })
            )
            .catch(e => {
                console.log(e);
            });
    };

    render() {
        return (
            <div>
                <p>In this QnA window, you can ask questions on different AWS topics. </p>

                <div>
                    <label className="px-2" >Question: </label>
                    <input id="txtInput" className="px-5 w-50 rounded" type="text" onKeyPress={this.enterPressed} onChange={this.handleChange} />
                </div>
                <div>
                    <button onClick={this.fetchQnAResponse} className="px-3 mt-1 rounded mr-2" >Search</button>
                    <button onClick={this.resetFields} className="px-3 mt-1 rounded" >Reset</button>
                </div>
                <div className="mt-5">
                    {
                        this.state.displayQnAInfo ?
                            (
                                <div >
                                    <p> The internal bot will scan the AWS faq resources for the best matching
                                     question and will send the response provided for that question.
                                     It uses AI internally so that even if its not the exact wording, still it will try to check with best match question.</p>
                                    <p className="text-danger">Note: Currently, It can answer your questions from EC2, S3 and IAM sections only. </p>
                                    <p>Example try What is EC2</p>
                                    <button onClick={this.toggleInfo}>Got it.</button>
                                </div>
                            ) : <button onClick={this.toggleInfo}>How it Works? </button>
                    }
                </div>
                <div className="mt-5">
                    {
                        this.state.QnaResponse !== '' ?
                            <p>{this.state.QnaResponse}</p>
                            : <p></p>
                    }
                </div>

            </div>
        );
    }
}