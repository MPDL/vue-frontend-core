import Vue from 'vue'

function Globals() {
    console.log('GLB: window.BASE_CONFIG = ', window.BASE_CONFIG)
    const DEV_MODE = window.BASE_CONFIG && window.BASE_CONFIG.devmode === true
    this.DEV_MODE = DEV_MODE
    //
    // vue-router
    //
    let router = null

    const registerRouter = $router => {
        router = $router
    }
    this.registerRouter = registerRouter
    this.getRouter = () => router
    //
    // vue-store
    //
    let store = null

    const registerStore = $store => {
        store = $store
    }
    this.registerStore = registerStore
    this.getStore = () => store
    //
    // vue-i18n
    //
    let i18n = null

    const registerI18n = $i18n => {
        i18n = $i18n
    }
    this.registerI18n = registerI18n
    this.getLocale = () => i18n.locale
    this.getI18n = () => i18n
    //
    // eventbus
    //
    const eventBus = new Vue()
    this.eventBus = eventBus

    //
    // R2D2DataHandler
    //
    // const r2 = new R2D2DataHandler()
    // this.getDataHandler = () => r2

    //
    // token handling
    //
    // this.getUserToken = () => {
    //     return store.state.userToken
    // }

    // this.setUserToken = (token = null) => {
    //     store.dispatch('setUserToken', token)
    // }

    // route handling

    const getCurrentRouterPath = () => {
        if (router) {
            return {
                raw: router.history.current.path,
                keys: router.history.current.path.split('/').filter(el => el.length > 0)
            }
        }
        return { raw: null, keys: [] }
    }
    this.getCurrentRouterPath = getCurrentRouterPath

    // constants definitions
    //
    // set the corresponding css values in App.vue and/or in the theming!
    this.CONTENT_TRANSITION_FADE_OUT_MSEC = 100
    this.CONTENT_TRANSITION_FADE_IN_MSEC = 400

    this.MODAL_FULLSCREEN = 'modal-fullscreen'

    // ++++++++++++++++++++++++++++++++++++++++
    // +++++  helpaz you will love :-)
    // ++++++++++++++++++++++++++++++++++++++++

    const getAttrFromCssContent = selector => {
        let str = $(selector).css('content')
        let data = {}
        if (typeof str === 'string' && str.substring(1, 2) === '{') {
            str = str.replace(/'/g, '"').slice(1, -1)
            str = str.split('\\').join('')
            data = JSON.parse(str)
        } else {
            console.warn('Something goes wrong in getAttrFromCssContent, selector & result is : ', selector, str)
        }
        return data
    }
    this.getAttrFromCssContent = getAttrFromCssContent

    const parseSvgAttributes = attr => {
        var res = {}
        for (var i in (attr = attr.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*,?)+\))+/g))) {
            var c = attr[i].match(/[\w\.\-]+/g)
            res[c.shift()] = c
        }
        return res
    }
    this.parseSvgAttributes = parseSvgAttributes

    const filterObjectByKeys = (obj = {}, keys) => {
        keys = _.isString(keys) ? keys.split(',') : keys
        keys = _.isArray(keys) ? keys : []
        const res = {}
        _.each(keys, key => (res[key] = obj[key]))
        return res
    }
    this.filterObjectByKeys = filterObjectByKeys

    // ++++++++++++++++++++++++++++++++++++++++
    // +++++ Form cell support
    // ++++++++++++++++++++++++++++++++++++++++

    this.setupDropdownFormCell = item => {
        // selection by value
        item.selected = _.isNil(item.selected) ? item.options[0] : item.selected
        // selection by index
        if (_.isNumber(item.selected)) {
            if (_.isPlainObject(item.options[item.selected])) {
                item.selected = item.options[item.selected].value
            } else {
                item.selected = item.options[item.selected]
            }
        }
        return item
    }

    // ++++++++++++++++++++++++++++++++++++++++

    let uidCnt = 0
    const getUid = () => `uid-${++uidCnt}`
    this.getUid = getUid
}
export default Globals
