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

class ConfigService {
    constructor(config, getConfig) {
        this.config = config;
        this.getConfig = getConfig;
    }

    loadConfig() {
        if (this.mustLoadConfig()) {
            const configParams = {}; //TODO
            return this.getConfig.execute(configParams)
                .then((config) => this.setConfigObject(config))
                .then(() => this.config)
        } else {
            return Promise.resolve(this.config)
        }
    }

    setConfigObject(config) {
        return Object.keys(config).forEach((key) => this.config[key] = config[key]);
    }

    mustLoadConfig() {
        //Load only if it is empty (it only has the apiUrl property)
        return Object.keys(this.config).length === 1 && this.config.constructor === Object;
    }

    getConfig() {
        return this.loadConfig();
    }
}

export default ConfigService;