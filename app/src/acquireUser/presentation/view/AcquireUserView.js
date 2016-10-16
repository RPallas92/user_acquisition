/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Ricardo Pallas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import './AcquireUserView.css';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import Alert from 'react-s-alert';
import Presenter from '../presenter/AcquireUserPresenter';
import config from '../../../application/config/Config';



class AcquireUserView extends Component {
  constructor(props) {
    super(props);
    this.presenter = new Presenter(this);
    this.state = {
      user: {}
    };
  }

  componentDidMount(){
    this.presenter.resume()
  }

  componentWillUnmount(){
    this.presenter.pause()
  }


  showMessage(message){
    Alert.success(message, {
        position: 'top-right',
        effect: 'slide',
        timeout: 'none'
    });
  }


  render() {
    return (
      <div>
        <Form className="acquisitionForm"
            schema={config.acquistionSchema}
            onSubmit={(data) => this.presenter.onFormSubmitted(data.formData)}>
            <div>
              <button style={{backgroundColor: config.secondaryColor, color: 'white'}} className="btn" type="submit">Submit</button>
            </div>
        </Form>
        <img role="presentation" src={config.bannerImage} className="banner"/>
        <Alert stack={{limit: 1}} />

      </div>
    );
  }
}


export default AcquireUserView;