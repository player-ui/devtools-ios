"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var BasicDevtoolsPlugin = function() {
    var dsetAssign = function dsetAssign(obj, keys, value) {
        var merge = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
        var key = keys[keys.length - 1];
        if (!key) throw Error("Unable to assign at path containing undefined keys");
        var _acc_key2;
        var target = keys.slice(0, -1).reduce(function(acc, key2) {
            return (_acc_key2 = acc[key2]) !== null && _acc_key2 !== void 0 ? _acc_key2 : acc[key2] = {};
        }, obj);
        target[key] = deepAssign(target[key], value, merge);
    };
    var die = function die(error) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            args[_key - 1] = arguments[_key];
        }
        if (false) {
            var e = errors[error];
            var msg = typeof e === "function" ? e.apply(null, args) : e;
            throw new Error("[Immer] ".concat(msg));
        }
        throw new Error("[Immer] minified error nr: ".concat(error, ". Full error at: https://bit.ly/3cXEKWf"));
    };
    var isDraft = function isDraft(value) {
        return !!value && !!value[DRAFT_STATE];
    };
    var isDraftable = function isDraftable(value) {
        var _value_constructor;
        if (!value) return false;
        return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_value_constructor = value.constructor) === null || _value_constructor === void 0 ? void 0 : _value_constructor[DRAFTABLE]) || isMap(value) || isSet(value);
    };
    var isPlainObject = function isPlainObject(value) {
        if (!value || typeof value !== "object") return false;
        var proto = getPrototypeOf(value);
        if (proto === null) {
            return true;
        }
        var Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
        if (Ctor === Object) return true;
        return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
    };
    var each = function each(obj, iter) {
        if (getArchtype(obj) === 0) {
            Reflect.ownKeys(obj).forEach(function(key) {
                iter(key, obj[key], obj);
            });
        } else {
            obj.forEach(function(entry, index) {
                return iter(index, entry, obj);
            });
        }
    };
    var getArchtype = function getArchtype(thing) {
        var state = thing[DRAFT_STATE];
        return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
    };
    var has = function has(thing, prop) {
        return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
    };
    var set = function set(thing, propOrOldValue, value) {
        var t = getArchtype(thing);
        if (t === 2) thing.set(propOrOldValue, value);
        else if (t === 3) {
            thing.add(value);
        } else thing[propOrOldValue] = value;
    };
    var is = function is(x, y) {
        if (x === y) {
            return x !== 0 || 1 / x === 1 / y;
        } else {
            return x !== x && y !== y;
        }
    };
    var isMap = function isMap(target) {
        return _instanceof(target, Map);
    };
    var isSet = function isSet(target) {
        return _instanceof(target, Set);
    };
    var latest = function latest(state) {
        return state.copy_ || state.base_;
    };
    var shallowCopy = function shallowCopy(base, strict) {
        if (isMap(base)) {
            return new Map(base);
        }
        if (isSet(base)) {
            return new Set(base);
        }
        if (Array.isArray(base)) return Array.prototype.slice.call(base);
        var isPlain = isPlainObject(base);
        if (strict === true || strict === "class_only" && !isPlain) {
            var descriptors = Object.getOwnPropertyDescriptors(base);
            delete descriptors[DRAFT_STATE];
            var keys = Reflect.ownKeys(descriptors);
            for(var i = 0; i < keys.length; i++){
                var key = keys[i];
                var desc = descriptors[key];
                if (desc.writable === false) {
                    desc.writable = true;
                    desc.configurable = true;
                }
                if (desc.get || desc.set) descriptors[key] = {
                    configurable: true,
                    writable: true,
                    // could live with !!desc.set as well here...
                    enumerable: desc.enumerable,
                    value: base[key]
                };
            }
            return Object.create(getPrototypeOf(base), descriptors);
        } else {
            var proto = getPrototypeOf(base);
            if (proto !== null && isPlain) {
                return _object_spread({}, base);
            }
            var obj = Object.create(proto);
            return Object.assign(obj, base);
        }
    };
    var dontMutateFrozenCollections = function dontMutateFrozenCollections() {
        die(2);
    };
    var isFrozen = function isFrozen(obj) {
        return Object.isFrozen(obj);
    };
    var getPlugin = function getPlugin(pluginKey) {
        var plugin = plugins[pluginKey];
        if (!plugin) {
            die(0, pluginKey);
        }
        return plugin;
    };
    var getCurrentScope = function getCurrentScope() {
        return currentScope;
    };
    var createScope = function createScope(parent_, immer_) {
        return {
            drafts_: [],
            parent_: parent_,
            immer_: immer_,
            // Whenever the modified draft contains a draft from another scope, we
            // need to prevent auto-freezing so the unowned draft can be finalized.
            canAutoFreeze_: true,
            unfinalizedDrafts_: 0
        };
    };
    var usePatchesInScope = function usePatchesInScope(scope, patchListener) {
        if (patchListener) {
            getPlugin("Patches");
            scope.patches_ = [];
            scope.inversePatches_ = [];
            scope.patchListener_ = patchListener;
        }
    };
    var revokeScope = function revokeScope(scope) {
        leaveScope(scope);
        scope.drafts_.forEach(revokeDraft);
        scope.drafts_ = null;
    };
    var leaveScope = function leaveScope(scope) {
        if (scope === currentScope) {
            currentScope = scope.parent_;
        }
    };
    var enterScope = function enterScope(immer2) {
        return currentScope = createScope(currentScope, immer2);
    };
    var revokeDraft = function revokeDraft(draft) {
        var state = draft[DRAFT_STATE];
        if (state.type_ === 0 || state.type_ === 1) state.revoke_();
        else state.revoked_ = true;
    };
    var processResult = function processResult(result, scope) {
        scope.unfinalizedDrafts_ = scope.drafts_.length;
        var baseDraft = scope.drafts_[0];
        var isReplaced = result !== void 0 && result !== baseDraft;
        if (isReplaced) {
            if (baseDraft[DRAFT_STATE].modified_) {
                revokeScope(scope);
                die(4);
            }
            if (isDraftable(result)) {
                result = finalize(scope, result);
                if (!scope.parent_) maybeFreeze(scope, result);
            }
            if (scope.patches_) {
                getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
            }
        } else {
            result = finalize(scope, baseDraft, []);
        }
        revokeScope(scope);
        if (scope.patches_) {
            scope.patchListener_(scope.patches_, scope.inversePatches_);
        }
        return result !== NOTHING ? result : void 0;
    };
    var finalize = function finalize(rootScope, value, path) {
        if (isFrozen(value)) return value;
        var state = value[DRAFT_STATE];
        if (!state) {
            each(value, function(key, childValue) {
                return finalizeProperty(rootScope, state, value, key, childValue, path);
            });
            return value;
        }
        if (state.scope_ !== rootScope) return value;
        if (!state.modified_) {
            maybeFreeze(rootScope, state.base_, true);
            return state.base_;
        }
        if (!state.finalized_) {
            state.finalized_ = true;
            state.scope_.unfinalizedDrafts_--;
            var result = state.copy_;
            var resultEach = result;
            var isSet2 = false;
            if (state.type_ === 3) {
                resultEach = new Set(result);
                result.clear();
                isSet2 = true;
            }
            each(resultEach, function(key, childValue) {
                return finalizeProperty(rootScope, state, result, key, childValue, path, isSet2);
            });
            maybeFreeze(rootScope, result, false);
            if (path && rootScope.patches_) {
                getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
            }
        }
        return state.copy_;
    };
    var finalizeProperty = function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
        if (false) die(5);
        if (isDraft(childValue)) {
            var path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
            !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
            var res = finalize(rootScope, childValue, path);
            set(targetObject, prop, res);
            if (isDraft(res)) {
                rootScope.canAutoFreeze_ = false;
            } else return;
        } else if (targetIsSet) {
            targetObject.add(childValue);
        }
        if (isDraftable(childValue) && !isFrozen(childValue)) {
            if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
                return;
            }
            finalize(rootScope, childValue);
            if ((!parentState || !parentState.scope_.parent_) && (typeof prop === "undefined" ? "undefined" : _type_of(prop)) !== "symbol" && (isMap(targetObject) ? targetObject.has(prop) : Object.prototype.propertyIsEnumerable.call(targetObject, prop))) maybeFreeze(rootScope, childValue);
        }
    };
    var maybeFreeze = function maybeFreeze(scope, value) {
        var deep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
            freeze(value, deep);
        }
    };
    var createProxyProxy = function createProxyProxy(base, parent) {
        var isArray = Array.isArray(base);
        var state = {
            type_: isArray ? 1 : 0,
            // Track which produce call this is associated with.
            scope_: parent ? parent.scope_ : getCurrentScope(),
            // True for both shallow and deep changes.
            modified_: false,
            // Used during finalization.
            finalized_: false,
            // Track which properties have been assigned (true) or deleted (false).
            assigned_: {},
            // The parent draft state.
            parent_: parent,
            // The base state.
            base_: base,
            // The base proxy.
            draft_: null,
            // set below
            // The base copy with any updated values.
            copy_: null,
            // Called by the `produce` function.
            revoke_: null,
            isManual_: false
        };
        var target = state;
        var traps = objectTraps;
        if (isArray) {
            target = [
                state
            ];
            traps = arrayTraps;
        }
        var _Proxy_revocable = Proxy.revocable(target, traps), revoke = _Proxy_revocable.revoke, proxy = _Proxy_revocable.proxy;
        state.draft_ = proxy;
        state.revoke_ = revoke;
        return proxy;
    };
    var peek = function peek(draft, prop) {
        var state = draft[DRAFT_STATE];
        var source = state ? latest(state) : draft;
        return source[prop];
    };
    var readPropFromProto = function readPropFromProto(state, source, prop) {
        var // This is a very special case, if the prop is a getter defined by the
        // prototype, we should invoke it with the draft as context!
        _desc_get;
        var desc = getDescriptorFromProto(source, prop);
        return desc ? "value" in desc ? desc.value : (_desc_get = desc.get) === null || _desc_get === void 0 ? void 0 : _desc_get.call(state.draft_) : void 0;
    };
    var getDescriptorFromProto = function getDescriptorFromProto(source, prop) {
        if (!(prop in source)) return void 0;
        var proto = getPrototypeOf(source);
        while(proto){
            var desc = Object.getOwnPropertyDescriptor(proto, prop);
            if (desc) return desc;
            proto = getPrototypeOf(proto);
        }
        return void 0;
    };
    var prepareCopy = function prepareCopy(state) {
        if (!state.copy_) {
            state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
        }
    };
    var createProxy = function createProxy(value, parent) {
        var draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
        var scope = parent ? parent.scope_ : getCurrentScope();
        scope.drafts_.push(draft);
        return draft;
    };
    var current = function current(value) {
        if (!isDraft(value)) die(10, value);
        return currentImpl(value);
    };
    var find = function find(iter, tar, key) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = iter.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                key = _step.value;
                if (dequal(key, tar)) return key;
            }
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
    };
    var generateUUID = function generateUUID() {
        var d = /* @__PURE__ */ new Date().getTime();
        var d2 = typeof performance !== "undefined" && performance.now && performance.now() * 1e3 || 0;
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
            var r = Math.random() * 16;
            if (d > 0) {
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === "x" ? r : r & 3 | 8).toString(16);
        });
    };
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
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
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/devtools/plugins/basic/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        BasicDevtoolsPlugin: function() {
            return BasicDevtoolsPlugin;
        }
    });
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-devtools+basic-plugin-content@0.0.0/node_modules/@player-devtools/basic-plugin-content/dist/index.mjs
    var PLUGIN_ID = "player-ui-basic-devtools-plugin";
    var INTERACTIONS = {
        EVALUATE_EXPRESSION: "evaluate-expression",
        OVERRIDE_FLOW: "override-flow"
    };
    var flow_default = {
        id: "player-ui-basic-devtools-plugin",
        views: [
            {
                id: "Config",
                type: "stacked-view",
                header: {
                    asset: {
                        id: "Config-header",
                        type: "navigation",
                        values: [
                            {
                                asset: {
                                    id: "Config-header-values-0",
                                    type: "action",
                                    value: "Config",
                                    label: {
                                        asset: {
                                            id: "Config-header-values-0-label",
                                            type: "text",
                                            value: "Config"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Config-header-values-1",
                                    type: "action",
                                    value: "Flow",
                                    label: {
                                        asset: {
                                            id: "Config-header-values-1-label",
                                            type: "text",
                                            value: "Flow"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Config-header-values-2",
                                    type: "action",
                                    value: "Logs",
                                    label: {
                                        asset: {
                                            id: "Config-header-values-2-label",
                                            type: "text",
                                            value: "Logs"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Config-header-values-3",
                                    type: "action",
                                    value: "Console",
                                    label: {
                                        asset: {
                                            id: "Config-header-values-3-label",
                                            type: "text",
                                            value: "Console"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Config-header-values-4",
                                    type: "action",
                                    value: "Editor",
                                    label: {
                                        asset: {
                                            id: "Config-header-values-4-label",
                                            type: "text",
                                            value: "Editor"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                main: {
                    asset: {
                        id: "Config-main",
                        type: "object-inspector",
                        binding: "playerConfig",
                        label: {
                            asset: {
                                id: "Config-main-label",
                                type: "text",
                                value: "Config"
                            }
                        }
                    }
                }
            },
            {
                id: "Flow",
                type: "stacked-view",
                header: {
                    asset: {
                        id: "Flow-header",
                        type: "navigation",
                        values: [
                            {
                                asset: {
                                    id: "Flow-header-values-0",
                                    type: "action",
                                    value: "Config",
                                    label: {
                                        asset: {
                                            id: "Flow-header-values-0-label",
                                            type: "text",
                                            value: "Config"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Flow-header-values-1",
                                    type: "action",
                                    value: "Flow",
                                    label: {
                                        asset: {
                                            id: "Flow-header-values-1-label",
                                            type: "text",
                                            value: "Flow"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Flow-header-values-2",
                                    type: "action",
                                    value: "Logs",
                                    label: {
                                        asset: {
                                            id: "Flow-header-values-2-label",
                                            type: "text",
                                            value: "Logs"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Flow-header-values-3",
                                    type: "action",
                                    value: "Console",
                                    label: {
                                        asset: {
                                            id: "Flow-header-values-3-label",
                                            type: "text",
                                            value: "Console"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Flow-header-values-4",
                                    type: "action",
                                    value: "Editor",
                                    label: {
                                        asset: {
                                            id: "Flow-header-values-4-label",
                                            type: "text",
                                            value: "Editor"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                main: {
                    asset: {
                        id: "Flow-main",
                        type: "object-inspector",
                        filter: true,
                        binding: "flow",
                        label: {
                            asset: {
                                id: "Flow-main-label",
                                type: "text",
                                value: "Flow"
                            }
                        }
                    }
                },
                footer: {
                    asset: {
                        id: "Flow-footer",
                        type: "copy-to-clipboard",
                        binding: "flow",
                        label: {
                            asset: {
                                id: "Flow-footer-label",
                                type: "text",
                                value: "Copy flow to the clipboard"
                            }
                        }
                    }
                }
            },
            {
                id: "Logs",
                type: "stacked-view",
                header: {
                    asset: {
                        id: "Logs-header",
                        type: "navigation",
                        values: [
                            {
                                asset: {
                                    id: "Logs-header-values-0",
                                    type: "action",
                                    value: "Config",
                                    label: {
                                        asset: {
                                            id: "Logs-header-values-0-label",
                                            type: "text",
                                            value: "Config"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Logs-header-values-1",
                                    type: "action",
                                    value: "Flow",
                                    label: {
                                        asset: {
                                            id: "Logs-header-values-1-label",
                                            type: "text",
                                            value: "Flow"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Logs-header-values-2",
                                    type: "action",
                                    value: "Logs",
                                    label: {
                                        asset: {
                                            id: "Logs-header-values-2-label",
                                            type: "text",
                                            value: "Logs"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Logs-header-values-3",
                                    type: "action",
                                    value: "Console",
                                    label: {
                                        asset: {
                                            id: "Logs-header-values-3-label",
                                            type: "text",
                                            value: "Console"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Logs-header-values-4",
                                    type: "action",
                                    value: "Editor",
                                    label: {
                                        asset: {
                                            id: "Logs-header-values-4-label",
                                            type: "text",
                                            value: "Editor"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                main: {
                    asset: {
                        id: "Logs-main",
                        type: "table",
                        binding: "logs"
                    }
                }
            },
            {
                id: "Console",
                type: "stacked-view",
                header: {
                    asset: {
                        id: "Console-header",
                        type: "navigation",
                        values: [
                            {
                                asset: {
                                    id: "Console-header-values-0",
                                    type: "action",
                                    value: "Config",
                                    label: {
                                        asset: {
                                            id: "Console-header-values-0-label",
                                            type: "text",
                                            value: "Config"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Console-header-values-1",
                                    type: "action",
                                    value: "Flow",
                                    label: {
                                        asset: {
                                            id: "Console-header-values-1-label",
                                            type: "text",
                                            value: "Flow"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Console-header-values-2",
                                    type: "action",
                                    value: "Logs",
                                    label: {
                                        asset: {
                                            id: "Console-header-values-2-label",
                                            type: "text",
                                            value: "Logs"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Console-header-values-3",
                                    type: "action",
                                    value: "Console",
                                    label: {
                                        asset: {
                                            id: "Console-header-values-3-label",
                                            type: "text",
                                            value: "Console"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Console-header-values-4",
                                    type: "action",
                                    value: "Editor",
                                    label: {
                                        asset: {
                                            id: "Console-header-values-4-label",
                                            type: "text",
                                            value: "Editor"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                main: {
                    asset: {
                        id: "Console-main",
                        type: "console",
                        exp: " publish('evaluate-expression', {{expression}}) ",
                        binding: "history"
                    }
                }
            },
            {
                id: "Editor",
                type: "stacked-view",
                header: {
                    asset: {
                        id: "Editor-header",
                        type: "navigation",
                        values: [
                            {
                                asset: {
                                    id: "Editor-header-values-0",
                                    type: "action",
                                    value: "Config",
                                    label: {
                                        asset: {
                                            id: "Editor-header-values-0-label",
                                            type: "text",
                                            value: "Config"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Editor-header-values-1",
                                    type: "action",
                                    value: "Flow",
                                    label: {
                                        asset: {
                                            id: "Editor-header-values-1-label",
                                            type: "text",
                                            value: "Flow"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Editor-header-values-2",
                                    type: "action",
                                    value: "Logs",
                                    label: {
                                        asset: {
                                            id: "Editor-header-values-2-label",
                                            type: "text",
                                            value: "Logs"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Editor-header-values-3",
                                    type: "action",
                                    value: "Console",
                                    label: {
                                        asset: {
                                            id: "Editor-header-values-3-label",
                                            type: "text",
                                            value: "Console"
                                        }
                                    }
                                }
                            },
                            {
                                asset: {
                                    id: "Editor-header-values-4",
                                    type: "action",
                                    value: "Editor",
                                    label: {
                                        asset: {
                                            id: "Editor-header-values-4-label",
                                            type: "text",
                                            value: "Editor"
                                        }
                                    }
                                }
                            }
                        ]
                    }
                },
                main: {
                    asset: {
                        id: "Editor-main",
                        type: "code-editor",
                        binding: "flow",
                        exp: " publish('override-flow', {{code}}) "
                    }
                }
            }
        ],
        navigation: {
            BEGIN: "Plugin",
            Plugin: {
                startState: "CONFIG",
                CONFIG: {
                    state_type: "VIEW",
                    ref: "Config",
                    transitions: {
                        Config: "CONFIG",
                        Flow: "FLOW",
                        Logs: "LOGS",
                        Console: "CONSOLE",
                        Editor: "EDITOR"
                    }
                },
                FLOW: {
                    state_type: "VIEW",
                    ref: "Flow",
                    transitions: {
                        Config: "CONFIG",
                        Flow: "FLOW",
                        Logs: "LOGS",
                        Console: "CONSOLE",
                        Editor: "EDITOR"
                    }
                },
                LOGS: {
                    state_type: "VIEW",
                    ref: "Logs",
                    transitions: {
                        Config: "CONFIG",
                        Flow: "FLOW",
                        Logs: "LOGS",
                        Console: "CONSOLE",
                        Editor: "EDITOR"
                    }
                },
                CONSOLE: {
                    state_type: "VIEW",
                    ref: "Console",
                    transitions: {
                        Config: "CONFIG",
                        Flow: "FLOW",
                        Logs: "LOGS",
                        Console: "CONSOLE",
                        Editor: "EDITOR"
                    }
                },
                EDITOR: {
                    state_type: "VIEW",
                    ref: "Editor",
                    transitions: {
                        Config: "CONFIG",
                        Flow: "FLOW",
                        Logs: "LOGS",
                        Console: "CONSOLE",
                        Editor: "EDITOR"
                    }
                }
            }
        },
        schema: {
            ROOT: {
                playerConfig: {
                    type: "RecordType"
                },
                flow: {
                    type: "RecordType"
                },
                expression: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                code: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                history: {
                    type: "historyType",
                    isArray: true
                },
                logs: {
                    type: "logsType",
                    isArray: true
                }
            },
            logsType: {
                id: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                time: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                type: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                message: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                severity: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                binding: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                from: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                to: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                state: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                error: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                outcome: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                metricType: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                }
            },
            historyType: {
                id: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                expression: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                result: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                },
                severity: {
                    type: "StringType",
                    default: "",
                    validation: [
                        {
                            type: "string"
                        }
                    ],
                    format: {
                        type: "string"
                    }
                }
            }
        },
        data: {
            expression: "",
            flow: {},
            history: [],
            logs: [],
            playerConfig: {}
        }
    };
    var PLUGIN_VERSION = true ? "0.12.1--canary.8.547" : "unstamped";
    var BasicPluginData = {
        id: PLUGIN_ID,
        name: "Standard Devtools",
        description: "Standard Player UI Devtools",
        version: PLUGIN_VERSION,
        flow: flow_default
    };
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-devtools+utils@0.0.0/node_modules/@player-devtools/utils/dist/index.mjs
    function deepAssign(target, source) {
        var merge = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
        if (Array.isArray(target) && Array.isArray(source)) {
            while(!merge && target.length > source.length)target.pop();
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = source.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), index = _step_value[0], item = _step_value[1];
                    target[index] = deepAssign(target[index], item, merge);
                }
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
        } else if (target && typeof target === "object" && source && typeof source === "object") {
            var record = target;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            if (!merge) try {
                for(var _iterator1 = Object.keys(target)[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var key = _step1.value;
                    if (!(key in source)) delete record[key];
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
            var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
            try {
                for(var _iterator2 = Object.entries(source)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var _step_value1 = _sliced_to_array(_step2.value, 2), key1 = _step_value1[0], item1 = _step_value1[1];
                    record[key1] = deepAssign(record[key1], item1, merge);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                        _iterator2.return();
                    }
                } finally{
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        } else {
            return source;
        }
        return target;
    }
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/immer@10.1.3/node_modules/immer/dist/immer.mjs
    var NOTHING = Symbol.for("immer-nothing");
    var DRAFTABLE = Symbol.for("immer-draftable");
    var DRAFT_STATE = Symbol.for("immer-state");
    var getPrototypeOf = Object.getPrototypeOf;
    var objectCtorString = Object.prototype.constructor.toString();
    function freeze(obj) {
        var deep = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
        if (getArchtype(obj) > 1) {
            Object.defineProperties(obj, {
                set: {
                    value: dontMutateFrozenCollections
                },
                add: {
                    value: dontMutateFrozenCollections
                },
                clear: {
                    value: dontMutateFrozenCollections
                },
                delete: {
                    value: dontMutateFrozenCollections
                }
            });
        }
        Object.freeze(obj);
        if (deep) Object.values(obj).forEach(function(value) {
            return freeze(value, true);
        });
        return obj;
    }
    var plugins = {};
    var currentScope;
    var objectTraps = {
        get: function get(state, prop) {
            if (prop === DRAFT_STATE) return state;
            var source = latest(state);
            if (!has(source, prop)) {
                return readPropFromProto(state, source, prop);
            }
            var value = source[prop];
            if (state.finalized_ || !isDraftable(value)) {
                return value;
            }
            if (value === peek(state.base_, prop)) {
                prepareCopy(state);
                return state.copy_[prop] = createProxy(value, state);
            }
            return value;
        },
        has: function has(state, prop) {
            return prop in latest(state);
        },
        ownKeys: function ownKeys(state) {
            return Reflect.ownKeys(latest(state));
        },
        set: function set(state, prop, value) {
            var _desc;
            var desc = getDescriptorFromProto(latest(state), prop);
            if ((_desc = desc) === null || _desc === void 0 ? void 0 : _desc.set) {
                desc.set.call(state.draft_, value);
                return true;
            }
            if (!state.modified_) {
                var _current2;
                var current2 = peek(latest(state), prop);
                var currentState = (_current2 = current2) === null || _current2 === void 0 ? void 0 : _current2[DRAFT_STATE];
                if (currentState && currentState.base_ === value) {
                    state.copy_[prop] = value;
                    state.assigned_[prop] = false;
                    return true;
                }
                if (is(value, current2) && (value !== void 0 || has(state.base_, prop))) return true;
                prepareCopy(state);
                markChanged(state);
            }
            if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
            (value !== void 0 || prop in state.copy_) || // special case: NaN
            Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
            state.copy_[prop] = value;
            state.assigned_[prop] = true;
            return true;
        },
        deleteProperty: function deleteProperty(state, prop) {
            if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
                state.assigned_[prop] = false;
                prepareCopy(state);
                markChanged(state);
            } else {
                delete state.assigned_[prop];
            }
            if (state.copy_) {
                delete state.copy_[prop];
            }
            return true;
        },
        // Note: We never coerce `desc.value` into an Immer draft, because we can't make
        // the same guarantee in ES5 mode.
        getOwnPropertyDescriptor: function getOwnPropertyDescriptor(state, prop) {
            var owner = latest(state);
            var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
            if (!desc) return desc;
            return {
                writable: true,
                configurable: state.type_ !== 1 || prop !== "length",
                enumerable: desc.enumerable,
                value: owner[prop]
            };
        },
        defineProperty: function defineProperty() {
            die(11);
        },
        getPrototypeOf: function getPrototypeOf1(state) {
            return getPrototypeOf(state.base_);
        },
        setPrototypeOf: function setPrototypeOf() {
            die(12);
        }
    };
    var arrayTraps = {};
    each(objectTraps, function(key, fn) {
        arrayTraps[key] = function() {
            arguments[0] = arguments[0][0];
            return fn.apply(this, arguments);
        };
    });
    arrayTraps.deleteProperty = function(state, prop) {
        if (false) die(13);
        return arrayTraps.set.call(this, state, prop, void 0);
    };
    arrayTraps.set = function(state, prop, value) {
        if (false) die(14);
        return objectTraps.set.call(this, state[0], prop, value, state[0]);
    };
    function markChanged(state) {
        if (!state.modified_) {
            state.modified_ = true;
            if (state.parent_) {
                markChanged(state.parent_);
            }
        }
    }
    var Immer2 = /*#__PURE__*/ function() {
        function Immer2(config) {
            var _this = this;
            _class_call_check(this, Immer2);
            var _config, _config1;
            this.autoFreeze_ = true;
            this.useStrictShallowCopy_ = false;
            this.produce = function(base, recipe, patchListener) {
                if (typeof base === "function" && typeof recipe !== "function") {
                    var defaultBase = recipe;
                    recipe = base;
                    var self = _this;
                    return function curriedProduce() {
                        var base2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : defaultBase;
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            args[_key - 1] = arguments[_key];
                        }
                        var _this = this;
                        var _recipe;
                        return self.produce(base2, function(draft) {
                            return (_recipe = recipe).call.apply(_recipe, [
                                _this,
                                draft
                            ].concat(_to_consumable_array(args)));
                        });
                    };
                }
                if (typeof recipe !== "function") die(6);
                if (patchListener !== void 0 && typeof patchListener !== "function") die(7);
                var result;
                if (isDraftable(base)) {
                    var scope = enterScope(_this);
                    var proxy = createProxy(base, void 0);
                    var hasError = true;
                    try {
                        result = recipe(proxy);
                        hasError = false;
                    } finally{
                        if (hasError) revokeScope(scope);
                        else leaveScope(scope);
                    }
                    usePatchesInScope(scope, patchListener);
                    return processResult(result, scope);
                } else if (!base || typeof base !== "object") {
                    result = recipe(base);
                    if (result === void 0) result = base;
                    if (result === NOTHING) result = void 0;
                    if (_this.autoFreeze_) freeze(result, true);
                    if (patchListener) {
                        var p = [];
                        var ip = [];
                        getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
                        patchListener(p, ip);
                    }
                    return result;
                } else die(1, base);
            };
            this.produceWithPatches = function(base, recipe) {
                if (typeof base === "function") {
                    return function(state) {
                        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                            args[_key - 1] = arguments[_key];
                        }
                        return _this.produceWithPatches(state, function(draft) {
                            return base.apply(void 0, [
                                draft
                            ].concat(_to_consumable_array(args)));
                        });
                    };
                }
                var patches, inversePatches;
                var result = _this.produce(base, recipe, function(p, ip) {
                    patches = p;
                    inversePatches = ip;
                });
                return [
                    result,
                    patches,
                    inversePatches
                ];
            };
            if (typeof ((_config = config) === null || _config === void 0 ? void 0 : _config.autoFreeze) === "boolean") this.setAutoFreeze(config.autoFreeze);
            if (typeof ((_config1 = config) === null || _config1 === void 0 ? void 0 : _config1.useStrictShallowCopy) === "boolean") this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        }
        _create_class(Immer2, [
            {
                key: "createDraft",
                value: function createDraft(base) {
                    if (!isDraftable(base)) die(8);
                    if (isDraft(base)) base = current(base);
                    var scope = enterScope(this);
                    var proxy = createProxy(base, void 0);
                    proxy[DRAFT_STATE].isManual_ = true;
                    leaveScope(scope);
                    return proxy;
                }
            },
            {
                key: "finishDraft",
                value: function finishDraft(draft, patchListener) {
                    var state = draft && draft[DRAFT_STATE];
                    if (!state || !state.isManual_) die(9);
                    var scope = state.scope_;
                    usePatchesInScope(scope, patchListener);
                    return processResult(void 0, scope);
                }
            },
            {
                /**
     * Pass true to automatically freeze all copies created by Immer.
     *
     * By default, auto-freezing is enabled.
     */ key: "setAutoFreeze",
                value: function setAutoFreeze(value) {
                    this.autoFreeze_ = value;
                }
            },
            {
                /**
     * Pass true to enable strict shallow copy.
     *
     * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
     */ key: "setUseStrictShallowCopy",
                value: function setUseStrictShallowCopy(value) {
                    this.useStrictShallowCopy_ = value;
                }
            },
            {
                key: "applyPatches",
                value: function applyPatches(base, patches) {
                    var i;
                    for(i = patches.length - 1; i >= 0; i--){
                        var patch = patches[i];
                        if (patch.path.length === 0 && patch.op === "replace") {
                            base = patch.value;
                            break;
                        }
                    }
                    if (i > -1) {
                        patches = patches.slice(i + 1);
                    }
                    var applyPatchesImpl = getPlugin("Patches").applyPatches_;
                    if (isDraft(base)) {
                        return applyPatchesImpl(base, patches);
                    }
                    return this.produce(base, function(draft) {
                        return applyPatchesImpl(draft, patches);
                    });
                }
            }
        ]);
        return Immer2;
    }();
    function currentImpl(value) {
        if (!isDraftable(value) || isFrozen(value)) return value;
        var state = value[DRAFT_STATE];
        var copy;
        if (state) {
            if (!state.modified_) return state.base_;
            state.finalized_ = true;
            copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
        } else {
            copy = shallowCopy(value, true);
        }
        each(copy, function(key, childValue) {
            set(copy, key, currentImpl(childValue));
        });
        if (state) {
            state.finalized_ = false;
        }
        return copy;
    }
    var immer = new Immer2();
    var produce = immer.produce;
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dequal@2.0.3/node_modules/dequal/dist/index.mjs
    var has2 = Object.prototype.hasOwnProperty;
    function dequal(foo, bar) {
        var ctor, len, tmp;
        if (foo === bar) return true;
        if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
            if (ctor === Date) return foo.getTime() === bar.getTime();
            if (ctor === RegExp) return foo.toString() === bar.toString();
            if (ctor === Array) {
                if ((len = foo.length) === bar.length) {
                    while(len-- && dequal(foo[len], bar[len]));
                }
                return len === -1;
            }
            if (ctor === Set) {
                if (foo.size !== bar.size) {
                    return false;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        len = _step.value;
                        tmp = len;
                        if (tmp && typeof tmp === "object") {
                            tmp = find(bar, tmp);
                            if (!tmp) return false;
                        }
                        if (!bar.has(tmp)) return false;
                    }
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
                return true;
            }
            if (ctor === Map) {
                if (foo.size !== bar.size) {
                    return false;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = foo[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        len = _step1.value;
                        tmp = len[0];
                        if (tmp && typeof tmp === "object") {
                            tmp = find(bar, tmp);
                            if (!tmp) return false;
                        }
                        if (!dequal(len[1], bar.get(tmp))) {
                            return false;
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                            _iterator1.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                return true;
            }
            if (ctor === ArrayBuffer) {
                foo = new Uint8Array(foo);
                bar = new Uint8Array(bar);
            } else if (ctor === DataView) {
                if ((len = foo.byteLength) === bar.byteLength) {
                    while(len-- && foo.getInt8(len) === bar.getInt8(len));
                }
                return len === -1;
            }
            if (ArrayBuffer.isView(foo)) {
                if ((len = foo.byteLength) === bar.byteLength) {
                    while(len-- && foo[len] === bar[len]);
                }
                return len === -1;
            }
            if (!ctor || typeof foo === "object") {
                len = 0;
                for(ctor in foo){
                    if (has2.call(foo, ctor) && ++len && !has2.call(bar, ctor)) return false;
                    if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
                }
                return Object.keys(bar).length === len;
            }
        }
        return foo !== foo && bar !== bar;
    }
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-devtools+plugin@0.0.0/node_modules/@player-devtools/plugin/dist/index.mjs
    var useStateReducer = function(reducer2, initialState) {
        var state = initialState;
        var subscribers = /* @__PURE__ */ new Set();
        return {
            getState: function() {
                return state;
            },
            /** Subscribe to state changes; returns an unsubscribe function. */ subscribe: function subscribe(subscriber) {
                subscribers.add(subscriber);
                subscriber(state);
                return function() {
                    return subscribers.delete(subscriber);
                };
            },
            /** Dispatch an action through the reducer, then run side-effects. */ dispatch: function dispatch(action) {
                var prevState = state;
                var nextState = reducer2(prevState, action);
                if (nextState !== prevState) {
                    state = nextState;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = subscribers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var sub = _step.value;
                            sub(state);
                        }
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
            }
        };
    };
    var containsInteraction = function(interactions, interaction) {
        return interactions.filter(function(i) {
            return dequal(i, interaction);
        }).length > 0;
    };
    var reducer = function(state, transaction) {
        switch(transaction.type){
            case "PLAYER_DEVTOOLS_PLAYER_INIT":
                return produce(state, function(draft) {
                    var payload = transaction.payload;
                    dsetAssign(draft, [
                        "plugins"
                    ], payload.plugins);
                    var message = {
                        type: "PLAYER_DEVTOOLS_PLAYER_INIT",
                        payload: payload
                    };
                    draft.messages.push(message);
                });
            case "PLAYER_DEVTOOLS_PLUGIN_DATA_CHANGE":
                return produce(state, function(draft) {
                    var payload = transaction.payload;
                    if (!payload.data) return state;
                    try {
                        dsetAssign(draft, [
                            "plugins",
                            transaction.payload.pluginID,
                            "flow",
                            "data"
                        ], transaction.payload.data);
                    } catch (e) {
                        console.error("error setting data:", transaction.payload.data);
                    }
                    var message = {
                        type: "PLAYER_DEVTOOLS_PLUGIN_DATA_CHANGE",
                        payload: payload
                    };
                    draft.messages.push(message);
                });
            case "PLAYER_DEVTOOLS_PLUGIN_INTERACTION":
                return produce(state, function(draft) {
                    if (containsInteraction(draft.interactions, transaction)) return state;
                    dsetAssign(draft, [
                        "interactions"
                    ], _to_consumable_array(draft.interactions).concat([
                        transaction
                    ]));
                });
            case "PLAYER_DEVTOOLS_SELECTED_PLAYER_CHANGE":
                {
                    var playerID = transaction.payload.playerID;
                    if (!playerID) return state;
                    return produce(state, function(draft) {
                        dsetAssign(draft, [
                            "currentPlayer"
                        ], playerID);
                    });
                }
            default:
                return state;
        }
    };
    var INTERACTIONS2 = {
        PLAYER_SELECTED: "player-selected"
    };
    var PLUGIN_INACTIVE_WARNING = "The plugin has been registered, but the Player development tools are not active. If you are working in a production environment, it is recommended to remove the plugin. To activate, enable through the browser extension popup for web or configure the FlipperClient for mobile.";
    var NOOP_ID = -1;
    var genDataChangeTransaction = function(param) {
        var playerID = param.playerID, data = param.data, pluginID = param.pluginID;
        return {
            id: NOOP_ID,
            type: "PLAYER_DEVTOOLS_PLUGIN_DATA_CHANGE",
            payload: {
                pluginID: pluginID,
                data: data
            },
            sender: playerID,
            context: "player",
            target: "player",
            timestamp: Date.now(),
            _messenger_: true
        };
    };
    var INITIAL_STATE = {
        messages: [],
        plugins: {},
        interactions: [],
        currentPlayer: ""
    };
    var DevtoolsPlugin = /*#__PURE__*/ function() {
        function DevtoolsPlugin(options) {
            var _this = this;
            _class_call_check(this, DevtoolsPlugin);
            this.options = options;
            this.name = "DevtoolsPlugin";
            this.loggedWarning = false;
            this.store = useStateReducer(reducer, INITIAL_STATE);
            this.lastProcessedInteraction = 0;
            this.store.subscribe(function(param) {
                var interactions = param.interactions;
                var _interactions_length;
                if (_this.lastProcessedInteraction < ((_interactions_length = interactions.length) !== null && _interactions_length !== void 0 ? _interactions_length : 0)) {
                    interactions.slice(_this.lastProcessedInteraction).forEach(_this.processInteraction.bind(_this));
                }
            });
        }
        _create_class(DevtoolsPlugin, [
            {
                key: "pluginID",
                get: function get() {
                    return this.options.pluginData.id;
                }
            },
            {
                key: "playerID",
                get: function get() {
                    return this.options.playerID;
                }
            },
            {
                key: "registerMessenger",
                value: function registerMessenger(messenger) {
                    var lastMessageIndex = -1;
                    return this.store.subscribe(function(param) {
                        var messages = param.messages;
                        var start = lastMessageIndex + 1;
                        if (messages.length > start) {
                            var newlyAdded = messages.slice(start);
                            lastMessageIndex = messages.length - 1;
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = newlyAdded[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var msg = _step.value;
                                    messenger.sendMessage(msg);
                                }
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
                    });
                }
            },
            {
                key: "dispatchPlayerInit",
                value: function dispatchPlayerInit() {
                    var transaction = {
                        id: -1,
                        type: "PLAYER_DEVTOOLS_PLAYER_INIT",
                        payload: {
                            plugins: _define_property({}, this.pluginID, this.options.pluginData)
                        },
                        sender: this.options.playerID,
                        context: "player",
                        target: "player",
                        timestamp: Date.now(),
                        _messenger_: true
                    };
                    this.store.dispatch(transaction);
                }
            },
            {
                // By default, we'll only write to the keys defined in data -- if undefined, data will be cleared
                key: "dispatchDataUpdate",
                value: function dispatchDataUpdate(data) {
                    var _this = this;
                    var _state_plugins_this_pluginID_flow, _state_plugins_this_pluginID;
                    var state = this.store.getState();
                    var _produce = produce(this.store.getState(), function(draft) {
                        if (!data) dsetAssign(draft, [
                            "plugins",
                            _this.pluginID,
                            "flow",
                            "data"
                        ], data);
                        else Object.entries(data).forEach(function(param) {
                            var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                            dsetAssign(draft, [
                                "plugins",
                                _this.pluginID,
                                "flow",
                                "data",
                                key
                            ], value);
                        });
                    }), plugins2 = _produce.plugins;
                    var newData = plugins2[this.pluginID].flow.data;
                    if (dequal((_state_plugins_this_pluginID = state.plugins[this.pluginID]) === null || _state_plugins_this_pluginID === void 0 ? void 0 : (_state_plugins_this_pluginID_flow = _state_plugins_this_pluginID.flow) === null || _state_plugins_this_pluginID_flow === void 0 ? void 0 : _state_plugins_this_pluginID_flow.data, newData)) return;
                    var transaction = genDataChangeTransaction({
                        playerID: this.playerID,
                        pluginID: this.pluginID,
                        data: newData
                    });
                    this.store.dispatch(transaction);
                }
            },
            {
                key: "checkIfDevtoolsIsActive",
                value: function checkIfDevtoolsIsActive() {
                    var isActive = this.options.handler.checkIfDevtoolsIsActive();
                    if (!isActive && !this.loggedWarning) {
                        var _this_options_handler_log, _this_options_handler;
                        (_this_options_handler_log = (_this_options_handler = this.options.handler).log) === null || _this_options_handler_log === void 0 ? void 0 : _this_options_handler_log.call(_this_options_handler, PLUGIN_INACTIVE_WARNING);
                        this.loggedWarning = true;
                    }
                    return isActive;
                }
            },
            {
                key: "processInteraction",
                value: function processInteraction(interaction) {
                    this.options.handler.processInteraction(interaction);
                    var _interaction_payload = interaction.payload, type = _interaction_payload.type, payload = _interaction_payload.payload;
                    if (type === INTERACTIONS2.PLAYER_SELECTED && payload) {
                        this.store.dispatch({
                            id: -1,
                            type: "PLAYER_DEVTOOLS_SELECTED_PLAYER_CHANGE",
                            payload: {
                                playerID: payload
                            },
                            sender: this.playerID,
                            context: "player",
                            target: this.playerID,
                            timestamp: Date.now(),
                            _messenger_: true
                        });
                    }
                    this.lastProcessedInteraction += 1;
                }
            },
            {
                key: "apply",
                value: function apply(player) {
                    if (!this.checkIfDevtoolsIsActive()) return;
                    this.dispatchPlayerInit();
                }
            }
        ]);
        return DevtoolsPlugin;
    }();
    // ../../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/devtools/plugins/basic/core/src/plugin.ts
    var BasicDevtoolsPlugin = /*#__PURE__*/ function(DevtoolsPlugin) {
        _inherits(BasicDevtoolsPlugin, DevtoolsPlugin);
        var _super = _create_super(BasicDevtoolsPlugin);
        function BasicDevtoolsPlugin(options) {
            _class_call_check(this, BasicDevtoolsPlugin);
            var _this;
            _this = _super.call(this, _object_spread_props(_object_spread({}, options), {
                pluginData: BasicPluginData
            }));
            _this.name = "BasicDevtoolsPlugin";
            _this.data = {};
            _this.playerConfig = {};
            _this.logs = [];
            return _this;
        }
        _create_class(BasicDevtoolsPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    this.logger = new WeakRef(player.logger);
                    if (!this.checkIfDevtoolsIsActive()) return;
                    this.options.pluginData.flow.data.playerConfig = {
                        version: player.getVersion(),
                        plugins: player.getPlugins().map(function(plugin) {
                            return plugin.name;
                        })
                    };
                    _get(_get_prototype_of(BasicDevtoolsPlugin.prototype), "apply", this).call(this, player);
                    this.playerConfig = {
                        version: player.getVersion(),
                        plugins: player.getPlugins().map(function(plugin) {
                            return plugin.name;
                        })
                    };
                    this.dispatchDataUpdate({
                        playerConfig: this.playerConfig
                    });
                    player.hooks.dataController.tap(this.name, function(dataController) {
                        dataController.hooks.onUpdate.tap(_this.name, function(updates) {
                            _this.data = produce(_this.data, function(draft) {
                                updates.forEach(function(param) {
                                    var binding = param.binding, newValue = param.newValue;
                                    dsetAssign(draft, [
                                        "data"
                                    ].concat(_to_consumable_array(binding.asArray())), newValue);
                                });
                            });
                            _this.dispatchDataUpdate({
                                data: _this.data
                            });
                        });
                    });
                    player.logger.hooks.log.tap(this.name, function(severity, message) {
                        _this.logs = _to_consumable_array(_this.logs).concat([
                            {
                                severity: severity,
                                message: message
                            }
                        ]);
                        _this.dispatchDataUpdate({
                            logs: _this.logs
                        });
                    });
                    player.hooks.onStart.tap(this.name, function(f) {
                        _this.flow = JSON.parse(JSON.stringify(f));
                        _this.dispatchDataUpdate({
                            flow: _this.flow
                        });
                    });
                    player.hooks.view.tap(this.name, function(view) {
                        _this.view = new WeakRef(view);
                    });
                    player.hooks.expressionEvaluator.tap(this.name, function(evaluator) {
                        _this.expressionEvaluator = new WeakRef(evaluator);
                    });
                    this.overrideFlow = player.start.bind(player);
                }
            },
            {
                key: "evaluateExpression",
                value: function evaluateExpression(expression) {
                    var _this_expressionEvaluator;
                    var evaluator = (_this_expressionEvaluator = this.expressionEvaluator) === null || _this_expressionEvaluator === void 0 ? void 0 : _this_expressionEvaluator.deref();
                    if (!evaluator) {
                        return {
                            id: generateUUID(),
                            severity: "error",
                            result: "Expression evaluator not available",
                            expression: expression
                        };
                    }
                    try {
                        evaluator.hooks.onError.intercept({
                            call: function(error) {
                                throw error;
                            }
                        });
                        var evaluatorResult = evaluator.evaluate(expression);
                        return {
                            id: generateUUID(),
                            result: evaluatorResult,
                            expression: expression
                        };
                    } catch (error) {
                        var message = _instanceof(error, Error) ? error.message : String(error !== null && error !== void 0 ? error : "Something went wrong");
                        return {
                            id: generateUUID(),
                            severity: "error",
                            result: message,
                            expression: expression
                        };
                    }
                }
            },
            {
                key: "processInteraction",
                value: function processInteraction(interaction) {
                    _get(_get_prototype_of(BasicDevtoolsPlugin.prototype), "processInteraction", this).call(this, interaction);
                    var _interaction_payload = interaction.payload, type = _interaction_payload.type, payload = _interaction_payload.payload;
                    if (type === INTERACTIONS.EVALUATE_EXPRESSION && this.expressionEvaluator && payload) {
                        var _this_store_getState_plugins_this_pluginID_flow_data, _this_store_getState_plugins_this_pluginID_flow, _this_store_getState_plugins_this_pluginID, _this_store_getState_plugins, _this_store_getState;
                        var result = this.evaluateExpression(payload);
                        var current2 = ((_this_store_getState = this.store.getState()) === null || _this_store_getState === void 0 ? void 0 : (_this_store_getState_plugins = _this_store_getState.plugins) === null || _this_store_getState_plugins === void 0 ? void 0 : (_this_store_getState_plugins_this_pluginID = _this_store_getState_plugins[this.pluginID]) === null || _this_store_getState_plugins_this_pluginID === void 0 ? void 0 : (_this_store_getState_plugins_this_pluginID_flow = _this_store_getState_plugins_this_pluginID.flow) === null || _this_store_getState_plugins_this_pluginID_flow === void 0 ? void 0 : (_this_store_getState_plugins_this_pluginID_flow_data = _this_store_getState_plugins_this_pluginID_flow.data) === null || _this_store_getState_plugins_this_pluginID_flow_data === void 0 ? void 0 : _this_store_getState_plugins_this_pluginID_flow_data.history) || [];
                        this.dispatchDataUpdate({
                            history: _to_consumable_array(current2).concat([
                                result
                            ])
                        });
                        return;
                    }
                    if (type === INTERACTIONS.OVERRIDE_FLOW && payload && this.overrideFlow) {
                        var newFlow;
                        try {
                            newFlow = JSON.parse(payload);
                        } catch (e) {
                            var _this_logger_deref, _this_logger;
                            (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : (_this_logger_deref = _this_logger.deref()) === null || _this_logger_deref === void 0 ? void 0 : _this_logger_deref.error(this.name, "Error parsing new flow", e);
                        }
                        if (newFlow) {
                            this.overrideFlow(newFlow);
                        }
                        return;
                    }
                }
            }
        ]);
        return BasicDevtoolsPlugin;
    }(DevtoolsPlugin);
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map