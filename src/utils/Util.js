/**
 * Created by wadeforever on 2017/5/5.
 */
import moment from 'moment'
export default class Util {
    static isUndefined(value) {
        return typeof value === 'undefined';
    }

    static isDefined(value) {
        return typeof value !== 'undefined';
    }

    static isObject(value) {
        // http://jsperf.com/isobject4
        return value !== null && typeof value === 'object';
    }

    static isString(value) {
        return typeof value === 'string';
    }

    static isNumber(value) {
        return typeof value === 'number';
    }

    static isDate(value) {
        return toString.call(value) === '[object Date]';
    }

    static isFunction(value) {
        return typeof value === 'function';
    }

    static isRegExp(value) {
        return toString.call(value) === '[object RegExp]';
    }

    static isBoolean(value) {
        return typeof value === 'boolean';
    }

    static isElement(node) {
        return !!(node &&
            (node.nodeName  // we are a direct element
                || (node.prop && node.attr && node.find)));  // we have an on and find method part of jQuery API
    }

    static isArray = Array.isArray

    /**
     * 数字转字符串
     */
    static numToString(num) {
        if (Util.isNumber(num)) {
            return num + '';
        } else {
            return num;
        }
    }

    /**
     * 获取年份
     */
    static getAllYear(num) {
        let year = new Date().getFullYear();
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr.push({
                value: year - i,
                text: year - i
            })
        }
        return arr;
    }

    /**
     * moment时间转成0点
     */
    static momentFirstTime(date) {
        date.set({ 'month': 0, 'date': 1, 'hour': 0, 'minute': 0, 'second': 0, 'millisecond': 0 });
        return date;
    }


    /**
     * 时间转时间戳
     */
    static getTime(date) {
        let time = new Date(date.toString()).getTime();
        return time;
    }

    /***
   * @columns 表格的columns属性
   * @returns {number} table宽度
   */

  
}
