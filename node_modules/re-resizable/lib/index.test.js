var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import test from 'ava';
import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import TestUtils from 'react-dom/test-utils';
import { Resizable } from './';
var screenshot = require('avaron').screenshot;
var mouseMove = function (x, y) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousemove', true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null);
    document.dispatchEvent(event);
    return event;
};
var mouseUp = function (x, y) {
    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null);
    document.dispatchEvent(event);
    return event;
};
test.afterEach(function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var content;
    return __generator(this, function (_a) {
        ReactDOM.unmountComponentAtNode(document.body);
        content = document.querySelector('#content');
        if (!content)
            return [2 /*return*/];
        ReactDOM.unmountComponentAtNode(content);
        return [2 /*return*/];
    });
}); });
test.serial('should box width and height equal 100px', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 } }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, '100px');
        t.is(divs[0].style.height, '100px');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('should allow vh, vw relative units', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { defaultSize: { width: '100vw', height: '100vh' } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, '100vw');
        t.is(divs[0].style.height, '100vh');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('should allow vmax, vmin relative units', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { defaultSize: { width: '100vmax', height: '100vmin' } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, '100vmax');
        t.is(divs[0].style.height, '100vmin');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('should box width and height equal auto when size omitted', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, null));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, 'auto');
        t.is(divs[0].style.height, 'auto');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('should box width and height equal auto when set auto', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { defaultSize: { width: 'auto', height: 'auto' } }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, 'auto');
        t.is(divs[0].style.height, 'auto');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('Should style is applied to box', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { style: { position: 'absolute' } }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.position, 'absolute');
        return [2 /*return*/];
    });
}); });
test.serial('Should custom class name be applied to box', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { className: 'custom-class-name' }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].className, 'custom-class-name');
        return [2 /*return*/];
    });
}); });
test.serial('Should use a custom wrapper element', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, headers;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { as: "header" }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        headers = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'header');
        t.is(headers.length, 1);
        return [2 /*return*/];
    });
}); });
test.serial('Should custom class name be applied to resizer', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs, node;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { handleClasses: { right: 'right-handle-class' } }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        t.is(node.getAttribute('class'), 'right-handle-class');
        return [2 /*return*/];
    });
}); });
test.serial('Should create custom span that wraps resizable divs ', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs, node;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { handleWrapperClass: "wrapper-class" }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[1]);
        t.is(node.getAttribute('class'), 'wrapper-class');
        return [2 /*return*/];
    });
}); });
test.serial('Should not render resizer when enable props all false', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { enable: {
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element) {
            return [2 /*return*/, t.fail()];
        }
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 2);
        return [2 /*return*/];
    });
}); });
test.serial('Should render one resizer when one enable props set true', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { enable: {
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 3);
        return [2 /*return*/];
    });
}); });
test.serial('Should render two resizer when two enable props set true', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { enable: {
                top: true,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 4);
        return [2 /*return*/];
    });
}); });
test.serial('Should render three resizer when three enable props set true', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { enable: {
                top: true,
                right: true,
                bottom: true,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 5);
        return [2 /*return*/];
    });
}); });
test.serial('Should only right is resizable and call onResizeStart when mousedown', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResizeStart, resizable, divs;
    return __generator(this, function (_a) {
        onResizeStart = sinon.spy();
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { onResizeStart: onResizeStart, enable: {
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 3);
        TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(divs[2]));
        t.is(onResizeStart.callCount, 1);
        t.is(onResizeStart.getCall(0).args[1], 'right');
        return [2 /*return*/];
    });
}); });
test.serial('Should only bottom is resizable and call onResizeStart when mousedown', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResizeStart, resizable, divs;
    return __generator(this, function (_a) {
        onResizeStart = sinon.spy();
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { onResizeStart: onResizeStart, enable: {
                top: false,
                right: false,
                bottom: true,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 3);
        TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(divs[2]));
        t.is(onResizeStart.callCount, 1);
        t.is(onResizeStart.getCall(0).args[1], 'bottom');
        return [2 /*return*/];
    });
}); });
test.serial('Should only bottomRight is resizable and call onResizeStart when mousedown', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResizeStart, resizable, divs;
    return __generator(this, function (_a) {
        onResizeStart = sinon.spy();
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { onResizeStart: onResizeStart, enable: {
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: true,
                bottomLeft: false,
                topLeft: false,
            } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 3);
        TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(divs[2]));
        t.is(onResizeStart.callCount, 1);
        t.is(onResizeStart.getCall(0).args[1], 'bottomRight');
        return [2 /*return*/];
    });
}); });
test.serial('Should not begin resize when onResizeStart returns false', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResizeStart, onResize, resizable, divs, previousState;
    return __generator(this, function (_a) {
        onResizeStart = function () {
            return false;
        };
        onResize = sinon.spy();
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { onResizeStart: onResizeStart, onResize: onResize }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        previousState = resizable.state.isResizing;
        TestUtils.Simulate.mouseDown(ReactDOM.findDOMNode(divs[2]));
        mouseMove(200, 220);
        t.is(onResize.callCount, 0);
        t.is(resizable.state.isResizing, previousState);
        return [2 /*return*/];
    });
}); });
test.serial('should call onResize with expected args when resize direction right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        TestUtils.Simulate.mouseUp(node);
        t.is(onResize.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof Event);
        t.is(onResize.getCall(0).args[1], 'right');
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 100);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should call onResize with expected args when resize direction bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        TestUtils.Simulate.mouseUp(node);
        t.is(onResize.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.is(onResize.getCall(0).args[1], 'bottom');
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 100);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 320);
        t.deepEqual(onResize.getCall(0).args[3], { width: 0, height: 220 });
        return [2 /*return*/];
    });
}); });
test.serial('should call onResize with expected args when resize direction bottomRight', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        TestUtils.Simulate.mouseUp(node);
        t.is(onResize.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.is(onResize.getCall(0).args[1], 'bottomRight');
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 320);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 220 });
        return [2 /*return*/];
    });
}); });
test.serial('should call onResizeStop when resize stop direction right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        mouseUp(200, 220);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResizeStop.getCall(0).args[1], 'right');
        t.deepEqual(onResizeStop.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResizeStop.getCall(0).args[2].clientHeight, 100);
        t.deepEqual(onResizeStop.getCall(0).args[3], { width: 200, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should call onResizeStop when resize stop direction bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        mouseUp(200, 220);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResizeStop.getCall(0).args[1], 'bottom');
        t.deepEqual(onResizeStop.getCall(0).args[2].clientWidth, 100);
        t.deepEqual(onResizeStop.getCall(0).args[2].clientHeight, 320);
        t.deepEqual(onResizeStop.getCall(0).args[3], { width: 0, height: 220 });
        return [2 /*return*/];
    });
}); });
test.serial('should call onResizeStop when resize stop direction bottomRight', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, style: { padding: '40px' } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        mouseUp(200, 220);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResizeStop.getCall(0).args[1], 'bottomRight');
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 320);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 220 });
        return [2 /*return*/];
    });
}); });
test.serial('should component size updated when updateSize method called', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable;
    return __generator(this, function (_a) {
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 } }), document.getElementById('content'));
        resizable.updateSize({ width: 200, height: 300 });
        t.is(resizable.state.width, 200);
        t.is(resizable.state.height, 300);
        return [2 /*return*/];
    });
}); });
test.serial('should snapped by grid value', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, grid: [10, 10] }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(12, 12);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 110);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 110);
        t.deepEqual(onResize.getCall(0).args[3], { width: 10, height: 10 });
        return [2 /*return*/];
    });
}); });
test.serial('should snapped by absolute snap value', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, snap: { x: [20, 30], y: [100] } }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(12, 12);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 100);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 30);
        t.deepEqual(onResize.getCall(0).args[3], { width: -70, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should only snap if the gap is small enough', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 40, height: 40 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, grid: [40, 40], snapGap: 10 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 40, clientY: 40 });
        mouseMove(15, 15);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 55);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 55);
        t.deepEqual(onResize.getCall(0).args[3], { width: 15, height: 15 });
        mouseMove(35, 35);
        t.deepEqual(onResize.getCall(1).args[2].clientHeight, 80);
        t.deepEqual(onResize.getCall(1).args[2].clientWidth, 80);
        t.deepEqual(onResize.getCall(1).args[3], { width: 40, height: 40 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by max width', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, maxWidth: 200, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 200);
        t.deepEqual(onResize.getCall(0).args[3], { width: 100, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by min width', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, minWidth: 50, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(-100, 0);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 50);
        t.deepEqual(onResize.getCall(0).args[3], { width: -50, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should allow 0 as minWidth', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, minWidth: 0, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(-100, 0);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 0);
        t.deepEqual(onResize.getCall(0).args[3], { width: -100, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by max height', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, maxHeight: 200, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 200);
        t.deepEqual(onResize.getCall(0).args[3], { width: 0, height: 100 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by min height', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, minHeight: 50, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, -100);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 50);
        t.deepEqual(onResize.getCall(0).args[3], { width: 0, height: -50 });
        return [2 /*return*/];
    });
}); });
test.serial('should allow 0 as minHeight', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, minHeight: 0, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, -100);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 0);
        t.deepEqual(onResize.getCall(0).args[3], { width: 0, height: -100 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked when resize to right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: true }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        mouseUp(200, 0);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 300);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 1:1 ratio when resize to right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 1 / 1 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        mouseUp(200, 0);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 300);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 2:1 ratio when resize to right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 200, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 2 / 1 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        mouseUp(200, 0);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 400);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 200);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 100 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 2:1 ratio with extra width/height when resize to right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 250, height: 150 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 2 / 1, lockAspectRatioExtraHeight: 50, lockAspectRatioExtraWidth: 50 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        mouseUp(200, 0);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 450);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 250);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 100 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked when resize to bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: true }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        mouseUp(0, 200);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 300);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 1:1 ratio when resize to bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 1 / 1 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        mouseUp(0, 200);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 300);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 300);
        t.deepEqual(onResize.getCall(0).args[3], { width: 200, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 2:1 ratio when resize to bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 200, height: 100 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 2 / 1 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        mouseUp(0, 200);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 600);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 300);
        t.deepEqual(onResize.getCall(0).args[3], { width: 400, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should aspect ratio locked with 2:1 ratio with extra width/height when resize to bottom', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 250, height: 150 }, onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop, lockAspectRatio: 2 / 1, lockAspectRatioExtraHeight: 50, lockAspectRatioExtraWidth: 50 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[4]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        mouseUp(0, 200);
        t.is(onResizeStop.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 650);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 350);
        t.deepEqual(onResize.getCall(0).args[3], { width: 400, height: 200 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by parent width', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, bounds: "parent", onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 0);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 200);
        t.deepEqual(onResize.getCall(0).args[3], { width: 100, height: 0 });
        return [2 /*return*/];
    });
}); });
test.serial('should clamped by parent height', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, onResizeStart, onResizeStop, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        onResizeStart = sinon.spy();
        onResizeStop = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, bounds: "parent", onResize: onResize, onResizeStart: onResizeStart, onResizeStop: onResizeStop }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(0, 200);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 200);
        t.deepEqual(onResize.getCall(0).args[3], { width: 0, height: 100 });
        return [2 /*return*/];
    });
}); });
test.serial('should defaultSize ignored when size set', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var resizable, divs;
    return __generator(this, function (_a) {
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, size: { width: 200, height: 300 } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        t.is(divs.length, 10);
        t.is(divs[0].style.width, '200px');
        t.is(divs[0].style.height, '300px');
        t.is(divs[0].style.position, 'relative');
        return [2 /*return*/];
    });
}); });
test.serial('should render a handleComponent for right', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var CustomComponent, resizable, divs, node, handleNode;
    return __generator(this, function (_a) {
        CustomComponent = React.createElement("div", { className: 'customHandle-right' });
        resizable = TestUtils.renderIntoDocument(React.createElement(Resizable, { handleComponent: { right: CustomComponent } }));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[3]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        handleNode = node.children[0];
        t.is(node.childElementCount, 1);
        t.is(handleNode.getAttribute('class'), 'customHandle-right');
        return [2 /*return*/];
    });
}); });
test.serial('should adjust resizing for specified scale', function (t) { return __awaiter(void 0, void 0, void 0, function () {
    var onResize, resizable, divs, node;
    return __generator(this, function (_a) {
        onResize = sinon.spy();
        resizable = ReactDOM.render(React.createElement(Resizable, { defaultSize: { width: 100, height: 100 }, onResize: onResize, style: { padding: '40px' }, scale: 0.5 }), document.getElementById('content'));
        if (!resizable || resizable instanceof Element)
            return [2 /*return*/, t.fail()];
        divs = TestUtils.scryRenderedDOMComponentsWithTag(resizable, 'div');
        node = ReactDOM.findDOMNode(divs[7]);
        if (!node || !(node instanceof HTMLDivElement))
            return [2 /*return*/, t.fail()];
        TestUtils.Simulate.mouseDown(node, { clientX: 0, clientY: 0 });
        mouseMove(200, 220);
        TestUtils.Simulate.mouseUp(node);
        t.is(onResize.callCount, 1);
        t.true(onResize.getCall(0).args[0] instanceof MouseEvent);
        t.is(onResize.getCall(0).args[1], 'bottomRight');
        t.deepEqual(onResize.getCall(0).args[2].clientWidth, 500);
        t.deepEqual(onResize.getCall(0).args[2].clientHeight, 540);
        t.deepEqual(onResize.getCall(0).args[3], { width: 400, height: 440 });
        return [2 /*return*/];
    });
}); });
