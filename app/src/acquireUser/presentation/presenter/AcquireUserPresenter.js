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

import UserAcquisitionStoreFactory from '../../data/repository/dataSource/UserAcquisitionStoreFactory';
import UserAcquisitionRepository from '../../data/repository/UserAquisitionRepository';
import StoreUserAcquisition from '../../domain/StoreUserAcquisition';

class AcquireUserPresenter {
    constructor(view) {
        this.view = view;
        const userAcquisitionStoreFactory = new UserAcquisitionStoreFactory();
        const userAcquisitionRepository = new UserAcquisitionRepository(userAcquisitionStoreFactory);
        this.storeUserAcquistion = new StoreUserAcquisition(userAcquisitionRepository);
    }

    /*
     * Called by the view when its loaded/mounted
     */
    resume() {
        console.log("AcquireUserPresenter - resume")
    }

    /*
     * Called by the view when its unloaded/unmounted
     */
    pause() {
        console.log("AcquireUserPresenter - pause")
    }

    /*
     *  Executes the StoreUserAcquisition Use case and notifies the view with the result
     */
    storeAcquisition(acquisition) {
        return this.storeUserAcquistion.execute(acquisition)
            .then(() => this.view.showMessage('Acquisition stored'));
    }


    onFormSubmitted(acquisition) {
        return this.storeAcquisition(acquisition);
    }


}



export default AcquireUserPresenter;