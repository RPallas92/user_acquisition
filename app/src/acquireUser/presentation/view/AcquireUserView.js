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
import React, { Component } from 'react';

import TitleBar from '../../../application/components/TitleBar';
import Form from "react-jsonschema-form";

import Presenter from '../presenter/AcquireUserPresenter';


class AcquireUserView extends Component {
  constructor(props) {
    super(props);
    this.presenter = new Presenter(this);
    this.state = {
      user: {}
    };

    this.schema = {
        title: "User Acquisition",
        type: "object",
        required: ["title"],
        properties: {
            title: {type: "string", title: "Title", default: "A new task"},
            done: {type: "boolean", title: "Done?", default: false}
        }
    };
  }

  componentDidMount(){
    this.presenter.resume()
  }

  componentWillUnmount(){
    this.presenter.pause()
  }


  render() {
    return (
      <div>
        <TitleBar title={"New York Marathon"}/>
        <Form schema={this.schema}
            onChange={() => console.log("changed")}
            onSubmit={() =>console.log("submitted")}
            onError={() =>console.log("errors")} />
            <img src={'http://za.shadestation.com/media/thumbs/960x152/media/header_images/Shade%20Station%20originals%20bannerfw960fh152.jpg'} className="banner"/>
      </div>
    );
  }
}


export default AcquireUserView;



