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
class InMemoryConfigStore {

    constructor() {
        this.config = {
            appTitle: 'New York Marathon',
            primaryColor: '#000000',
            secondaryColor: '#01409C',
            acquistionSchema: {
                title: "User Acquisition",
                type: "object",
                required: ["email", "firstName", "lastName", "birthDate", "country"],
                properties: {
                    email: { type: "string", title: "Email" },
                    firstName: { type: "string", title: "First name" },
                    lastName: { type: "string", title: "Last name" },
                    birthDate: { type: "string", format: "alt-date", title: "Date of birth" },
                    country: { type: "number", title: "Country", enum: [1, 2, 3], enumNames: ["Spain", "Germany", "United States"] }
                }
            },
            bannerImage: 'http://za.shadestation.com/media/thumbs/960x152/media/header_images/Shade%20Station%20originals%20bannerfw960fh152.jpg'
        }
    }

    //getConfig :: Promise (Config)
    getConfig(configParams) {
        return Promise.resolve(this.config);
    }

}

export default InMemoryConfigStore;