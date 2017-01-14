/*This Get Time UTC String For Userd with Cookie*/
var timeUTC = {
    getNow: function() {
        var date = new Date();
        return date.toUTCString();
    },
    getDay: function(day) {
        var date = new Date();
        date.setTime(date.getTime() + (day * 24 * 60 * 60 * 1000));
        return date.toUTCString();
    },
    getHour: function(hour) {
        var date = new Date();
        date.setTime(date.getTime() + (hour * 60 * 60 * 1000));
        return date.toUTCString();
    },
    getMinute: function(minute) {
        var date = new Date();
        date.setTime(date.getTime() + (minute * 60 * 1000));
        return date.toUTCString();
    },
    getSecond: function(second) {
        var date = new Date();
        date.setTime(date.getTime() + (second * 1000));
        return date.toUTCString();
    }
}

/*This JSON Editor*/
var JSON = {
    extends: function(obj1, obj2) {
        var result = {};
        for (key in obj1) {
            result[key] = obj1[key];
        }

        for (key in obj2) {
            result[key] = obj2[key];
        }

        return result;
    },
    remove: function(obj, name) {
        var result = {};
        for (key in obj) {
            if (key != name) {
                result[key] = obj[key];
            }
        }
        return result;
    }
}

/*************************************************/
var defaultVal = {
    add: {
        name: 'cookieByZEE',
        value: '',
        expires: timeUTC.getDay(1),
        path: '/'
    }
}

/*This Editor Cookies*/
var cookie = {
    //This is Function for add and update cookie
    update: function(arg) {
        arg = JSON.extends(defaultVal.add, arg);
        document.cookie = arg.name + '=' + arg.value + ';expires=' + arg.expires + ';path=' + arg.path + ';'
    },
    remove: function(name) {
        document.cookie = name + '=;expires=' + timeUTC.getSecond(3) + ';'
    },
    clear: function() {
        var ck = cookie.getJSON();
        for (key in ck) {
            cookie.remove(key);
        }
    },
    getJSON: function() {
        var result = {};
        var cookie = document.cookie;
        cookie = cookie.split(/;/g);
        for (key in cookie) {
            var ck = cookie[key].split(/=/g);
            result[ck[0].trim()] = ck[1].trim();
        }
        return result;
    },
    getCookie: document.cookie,
    getValue: function(name) {
        var ck = cookie.getJSON();
        return ck[name];
    }
}