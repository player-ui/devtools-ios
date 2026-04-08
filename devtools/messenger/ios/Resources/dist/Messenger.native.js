"use strict";
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
var Messenger = function() {
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = function(cb, mod) {
        return function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    };
    var __export = function(target, all) {
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = function(to, from, except, desc) {
        if (from && typeof from === "object" || typeof from === "function") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var key = _step.value;
                    if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: function() {
                            return from[key];
                        },
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                };
                for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        return to;
    };
    var __toESM = function(mod, isNodeMode, target) {
        return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod);
    };
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/tiny-uid@1.1.2/node_modules/tiny-uid/index.js
    var require_tiny_uid = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/tiny-uid@1.1.2/node_modules/tiny-uid/index.js": function(exports, module) {
            "use strict";
            var generator = function(base) {
                return typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" ? function() {
                    var num = crypto.getRandomValues(new Uint8Array(1))[0];
                    return (num >= base ? num % base : num).toString(base);
                } : function() {
                    return Math.floor(Math.random() * base).toString(base);
                };
            };
            var uid2 = function() {
                var length = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 7, hex = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                return Array.from({
                    length: length
                }, generator(hex ? 16 : 36)).join("");
            };
            module.exports = uid2;
            module.exports.default = uid2;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/devtools/messenger/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        Messenger: function() {
            return Messenger;
        }
    });
    var import_tiny_uid = __toESM(require_tiny_uid());
    var internalEvents = [
        "MESSENGER_BEACON",
        "MESSENGER_DISCONNECT",
        "MESSENGER_REQUEST_LOST_EVENTS",
        "MESSENGER_EVENT_BATCH"
    ];
    var _Messenger = /*#__PURE__*/ function() {
        function _Messenger(options) {
            _class_call_check(this, _Messenger);
            this.options = options;
            /** beacon interval */ this.beaconInterval = null;
            this.id = options.id || (0, import_tiny_uid.default)();
            this.beaconIntervalMS = options.beaconIntervalMS || 1e3;
            this.beaconInterval = setInterval(this.beacon.bind(this), this.beaconIntervalMS);
            this.handleMessage = this._handleMessage.bind(this);
            this.options.addListener(this.handleMessage);
        }
        _create_class(_Messenger, [
            {
                key: "log",
                value: function log(message) {
                    if (this.options.debug) {
                        this.options.logger.log("[MESSENGER-".concat(this.id, "](").concat(this.options.context, "): ").concat(message));
                    }
                }
            },
            {
                key: "getConnection",
                value: function getConnection(id) {
                    if (!_Messenger.connections[this.id]) {
                        _Messenger.connections[this.id] = {};
                    }
                    return _Messenger.connections[this.id][id];
                }
            },
            {
                key: "addConnection",
                value: function addConnection(id) {
                    _Messenger.connections[this.id][id] = {
                        id: id,
                        messagesReceived: 0,
                        messagesSent: 0,
                        desync: false
                    };
                }
            },
            {
                key: "getEvents",
                value: function getEvents() {
                    if (!_Messenger.events[this.id]) {
                        _Messenger.events[this.id] = [];
                    }
                    return _Messenger.events[this.id];
                }
            },
            {
                key: "addEvent",
                value: function addEvent(event) {
                    var events = this.getEvents();
                    events.push(event);
                }
            },
            {
                /** generate a sequential id for each non-internal message */ key: "getTransactionID",
                value: function getTransactionID(message) {
                    if (!message.target || internalEvents.includes(message.type)) {
                        return -1;
                    }
                    if (!this.getConnection(message.target)) {
                        this.addConnection(message.target);
                    }
                    var connection = this.getConnection(message.target);
                    connection.messagesSent += 1;
                    return connection.messagesSent;
                }
            },
            {
                key: "addTransactionMetadata",
                value: function addTransactionMetadata(event) {
                    var metadata = _object_spread({
                        _messenger_: true,
                        id: this.getTransactionID(event),
                        sender: this.id,
                        timestamp: Date.now(),
                        context: this.options.context
                    }, event.target && {
                        target: event.target
                    });
                    return _object_spread({}, metadata, event);
                }
            },
            {
                /** there is no persistent layer bookkeeping connections,
     * so beacon to inform others of its presence */ key: "beacon",
                value: function beacon() {
                    this.options.sendMessage(this.addTransactionMetadata({
                        type: "MESSENGER_BEACON",
                        payload: null
                    }));
                }
            },
            {
                key: "_handleMessage",
                value: function _handleMessage(transaction) {
                    var parsed = typeof transaction === "string" ? JSON.parse(transaction) : transaction;
                    var isFromMessenger = parsed._messenger_;
                    var isFromSelf = parsed.sender === this.id;
                    var isFromSameContext = parsed.context === this.options.context;
                    var isTargetingOthers = parsed.target ? parsed.target !== this.id : false;
                    var connection = this.getConnection(parsed.sender);
                    var isKnownConnection = Boolean(connection);
                    if (!isFromMessenger || isFromSelf || isFromSameContext || isTargetingOthers || isKnownConnection && parsed.type === "MESSENGER_BEACON") {
                        return;
                    }
                    var handlers = {
                        MESSENGER_BEACON: this.handleBeaconMessage.bind(this),
                        MESSENGER_DISCONNECT: this.handleDisconnectMessage.bind(this),
                        MESSENGER_REQUEST_LOST_EVENTS: this.handleLostEventsRequest.bind(this)
                    };
                    var handler = handlers[parsed.type];
                    if (handler) {
                        handler(parsed);
                        return;
                    }
                    if (isKnownConnection) {
                        var isBatch = parsed.type === "MESSENGER_EVENT_BATCH";
                        var transactionID = isBatch ? parsed.payload.events[0].id : parsed.id;
                        var messagesReceived = connection.messagesReceived, desync = connection.desync;
                        if (transactionID > -1 && transactionID <= messagesReceived) {
                            return;
                        }
                        if (!desync && transactionID > -1 && transactionID > messagesReceived + 1) {
                            var message = {
                                type: "MESSENGER_REQUEST_LOST_EVENTS",
                                payload: {
                                    messagesReceived: messagesReceived
                                },
                                target: parsed.sender
                            };
                            this.options.sendMessage(this.addTransactionMetadata(message));
                            this.log("requesting lost messages from ".concat(parsed.context, ":").concat(parsed.sender));
                            connection.desync = true;
                            return;
                        }
                        if (isBatch) {
                            connection.desync = false;
                            connection.messagesReceived += parsed.payload.events.length;
                        } else {
                            connection.messagesReceived += 1;
                        }
                    }
                    this.options.messageCallback(parsed);
                    this.log("message received: ".concat(parsed.type));
                }
            },
            {
                key: "handleBeaconMessage",
                value: function handleBeaconMessage(parsed) {
                    var _this = this;
                    if (this.getConnection(parsed.sender)) {
                        return;
                    }
                    this.addConnection(parsed.sender);
                    var events = this.getEvents();
                    if (events.length > 0) {
                        var message = {
                            type: "MESSENGER_EVENT_BATCH",
                            payload: {
                                events: events.map(function(event) {
                                    return _this.addTransactionMetadata(event);
                                })
                            },
                            target: parsed.sender
                        };
                        this.options.sendMessage(this.addTransactionMetadata(message));
                        this.log("messages [0 - ".concat(events.length - 1, "] sent to ").concat(parsed.context, ":").concat(parsed.sender));
                        var connection = this.getConnection(parsed.sender);
                        connection.messagesSent = events.length;
                    }
                    this.log("new connection added - ".concat(parsed.context, ":").concat(parsed.sender));
                }
            },
            {
                key: "handleLostEventsRequest",
                value: function handleLostEventsRequest(parsed) {
                    var _this = this;
                    var connection = this.getConnection(parsed.sender);
                    var events = this.getEvents();
                    if (!connection || events.length === 0) {
                        return;
                    }
                    var missingEvents = events.slice(connection.messagesSent, events.length);
                    if (missingEvents.length === 0) {
                        return;
                    }
                    var message = {
                        type: "MESSENGER_EVENT_BATCH",
                        payload: {
                            events: missingEvents.map(function(event) {
                                return _this.addTransactionMetadata(event);
                            })
                        },
                        target: parsed.sender
                    };
                    this.options.sendMessage(this.addTransactionMetadata(message));
                    connection.messagesSent = events.length;
                    this.log("messages [0 - ".concat(events.length - 1, "] sent to ").concat(parsed.context, ":").concat(parsed.sender));
                }
            },
            {
                key: "handleDisconnectMessage",
                value: function handleDisconnectMessage(parsed) {
                    delete _Messenger.connections[parsed.sender];
                    this.log("disconnected - ".concat(parsed.context, ":").concat(parsed.sender));
                }
            },
            {
                key: "sendMessage",
                value: function sendMessage(message) {
                    var _this = this;
                    var parsed;
                    try {
                        parsed = typeof message === "string" ? JSON.parse(message) : message;
                    } catch (e) {
                        this.log("Failed to parse message to JSON. Message: ".concat(message));
                        return Promise.reject(e);
                    }
                    this.addEvent(parsed);
                    var target = parsed.target || null;
                    var msg = this.addTransactionMetadata(parsed);
                    var connection = target ? this.getConnection(target) : null;
                    if (connection) {
                        connection.messagesSent += 1;
                    }
                    return this.options.sendMessage(msg).catch(function() {
                        var _this_options_handleFailedMessage, _this_options;
                        (_this_options_handleFailedMessage = (_this_options = _this.options).handleFailedMessage) === null || _this_options_handleFailedMessage === void 0 ? void 0 : _this_options_handleFailedMessage.call(_this_options, msg);
                        _this.log("failed to send message: ".concat(parsed.type, " from ").concat(_this.id, " to ").concat(target || "all"));
                    });
                }
            },
            {
                key: "destroy",
                value: function destroy() {
                    var _this = this;
                    if (this.beaconInterval) {
                        clearInterval(this.beaconInterval);
                    }
                    this.options.removeListener(this.handleMessage);
                    Object.keys(_Messenger.connections).forEach(function(connection) {
                        var event = {
                            type: "MESSENGER_DISCONNECT",
                            payload: null,
                            target: connection
                        };
                        var message = _this.addTransactionMetadata(event);
                        _this.options.sendMessage(message);
                    });
                    _Messenger.reset();
                    this.log("destroyed");
                }
            }
        ], [
            {
                key: "reset",
                value: /** reset static records */ function reset() {
                    _Messenger.events = {};
                    _Messenger.connections = {};
                }
            }
        ]);
        return _Messenger;
    }();
    /** static record of events by isntance ID */ _Messenger.events = {};
    /** static connections record by instance ID */ _Messenger.connections = {};
    var Messenger = _Messenger;
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map