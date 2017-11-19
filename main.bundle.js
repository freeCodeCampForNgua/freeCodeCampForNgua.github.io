webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/advanced-cal/advanced-cal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nopadding{\r\n    padding:0;\r\n}\r\n.container{\r\n    font-family: sans-serif;\r\n    background: #818181;\r\n    min-height: 680px;\r\n    padding-top:100px;\r\n    padding-bottom:50px\r\n}\r\n.cal{\r\n    background: #E0E0E0;\r\n    border-radius: 10px;\r\n    box-shadow: 5px 5px 5px #424242;\r\n}\r\n.header{\r\n    padding:10px;\r\n}\r\n.display{\r\n    background: #c3c2ab;\r\n    margin-bottom:10px;\r\n    border: solid 2px #b4b39d;\r\n    border-radius: 5px;\r\n}\r\n.display h1{\r\n    font-size: 300%;\r\n}\r\n.button_cal{\r\n    width: 90%;\r\n    height: 8%;\r\n    margin-left: 5%;\r\n    margin-bottom: 5%;\r\n    font-size: 23px;\r\n    border-radius: 10px;\r\n    background: #424242;\r\n    color: white;\r\n}\r\n.warmning{\r\n    background: #D81B60 !important;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: #AD1457;\r\n}\r\na:hover{\r\n    text-decoration: none;\r\n    color: #880E4F;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advanced-cal/advanced-cal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12 nopadding\">\n  <div class=\"col-md-3 cal\" style=\"margin-left:38%\">\n    <div class=\"col-md-12 text-center header\">\n      <h4>ELECTRONIC CALCULATOR</h4>\n    </div>\n    <div class=\"col-md-12 display\">\n      <div class=\"col-md-12\">\n        <h1 class=\"pull-right\" id='process' style=\"margin:0\">0</h1>\n      </div>\n      <div class=\"col-md-12\">\n        <h3 class=\"pull-right\" id='result' style=\"margin-top:0\">0</h3>\n      </div>\n    </div>\n    <div class=\"col-md-12 keyboard nopadding\">\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal warmning\" id='AC' value=\"AC\">AC</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal warmning\" id='CE' value=\"CE\">CE</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='divided' value=\"÷\">÷</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='multip' value=\"x\">x</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='7' value=\"7\">7</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='8' value=\"8\">8</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='9' value=\"9\">9</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='sub' value=\"-\">-</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='4' value=\"4\">4</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='5' value=\"5\">5</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='6' value=\"6\">6</button>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='add' value=\"+\">+</button>\n      </div>\n      <div class=\"col-md-9 nopadding\">\n        <div class=\"col-md-4 nopadding\">\n          <button class=\"button_cal\" id='1' value=\"1\">1</button>\n        </div>\n        <div class=\"col-md-4 nopadding\">\n          <button class=\"button_cal\" id='2' value=\"2\">2</button>\n        </div>\n        <div class=\"col-md-4 nopadding\">\n          <button class=\"button_cal\" id='3' value=\"3\">3</button>\n        </div>\n        <div class=\"col-md-8 nopadding\">\n          <button class=\"button_cal\" id='0' value=\"0\" style=\"width:96%;margin-left:2%\">0</button>\n        </div>\n        <div class=\"col-md-4 nopadding\">\n          <button class=\"button_cal\" id='dot' value=\".\">.</button>\n        </div>\n      </div>\n      <div class=\"col-md-3 nopadding\">\n        <button class=\"button_cal\" id='equal' value=\"=\" style=\"height:80px\">=</button>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-12 text-center\" style=\"margin-top:50px\">\n    <p>Cover & Coded by\n      <a href=\"https://www.linkedin.com/in/duc-trinh-hoang-556173143/\">Trịnh Hoàng Đức</a>\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/advanced-cal/advanced-cal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedCalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvancedCalComponent = /** @class */ (function () {
    function AdvancedCalComponent() {
        this.endNumber = '';
        this.afterEqual = false;
    }
    AdvancedCalComponent.prototype.ngAfterViewInit = function () {
        var controller = this;
        jQuery('.button_cal').click(function () {
            if (controller.afterEqual) {
                jQuery('#process').html('0');
                controller.afterEqual = false;
            }
            var HTML = (jQuery('#process').html() == '0') ? '' : jQuery('#process').html();
            var process = '';
            var val = jQuery(this).val();
            switch (val) {
                case '+':
                case '-':
                case 'x':
                case '÷':
                    if (controller.checkDigitalEnd(HTML)) {
                        if (HTML)
                            HTML += val;
                        else
                            HTML = jQuery('#result').text() + val;
                        controller.endNumber = '';
                    }
                    break;
                case '.':
                    if (controller.checkDigitalEnd(HTML) && controller.checkDot(controller.endNumber)) {
                        HTML += val;
                        controller.endNumber += '.';
                    }
                    break;
                case 'AC':
                case 'CE':
                    HTML = '0';
                    jQuery('#result').html('0');
                    controller.endNumber = '';
                    break;
                case '=':
                    process = controller.changePtoR(HTML);
                    controller.endNumber = '';
                    controller.afterEqual = true;
                    break;
                default:
                    controller.endNumber += val;
                    HTML += val;
                    break;
            }
            jQuery('#process').html(controller.limitChar(HTML));
            if (controller.afterEqual)
                jQuery('#result').html(eval(process));
        });
    };
    AdvancedCalComponent.prototype.limitChar = function (char) {
        var arr = char.split('');
        var n = arr.length;
        if (n < 12)
            return char;
        else
            return '...' + char.substring(n - 10, n);
    };
    AdvancedCalComponent.prototype.checkDigitalEnd = function (str) {
        var s = str.substring(str.length - 1);
        return Number.isInteger(+s);
    };
    AdvancedCalComponent.prototype.changePtoR = function (str) {
        var Arr = str.split('');
        for (var i = 0; i < Arr.length; i++) {
            if (Arr[i] == 'x')
                Arr[i] = '*';
            if (Arr[i] == '÷')
                Arr[i] = '/';
        }
        return Arr.join('');
    };
    AdvancedCalComponent.prototype.checkDot = function (str) {
        var Arr = str.split('');
        var check = 0;
        Arr.forEach(function (arr) {
            if (arr == '.')
                check++;
        });
        return (check > 0) ? false : true;
    };
    AdvancedCalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-advanced-cal',
            template: __webpack_require__("../../../../../src/app/advanced-cal/advanced-cal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advanced-cal/advanced-cal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedCalComponent);
    return AdvancedCalComponent;
}());

//# sourceMappingURL=advanced-cal.component.js.map

/***/ }),

/***/ "../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#parent-cont{\r\n    background: #80DEEA;\r\n    min-height: 680px;\r\n    padding-top: 100px;\r\n}\r\n.nopadding{\r\n    padding:0;\r\n}\r\n#container{\r\n    font-family: pacifico, serif;\r\n    width: 450px;\r\n    height: 450px;\r\n    margin: 0 auto;\r\n    border: 24px solid #FFCC80;\r\n    border-radius: 5%;\r\n    box-shadow: 10px 10px 5px #888888;\r\n    background: -webkit-radial-gradient(bottom center, circle farthest-corner, #80CBC4 0%, #004D40 100%);\r\n}\r\n.cursor{\r\n    cursor: pointer;\r\n}\r\n#begin div{\r\n    font-size:130%;\r\n}\r\n.circle_choose{\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.circle_choose:hover{\r\n    border: 2px dashed black;\r\n    border-radius: 50%;\r\n}\r\n#play>div{\r\n    width: 134px;\r\n    height: 134px;\r\n    border: 2px solid black;\r\n    text-align: center;\r\n    font-size: 40px;\r\n    padding: 37px;\r\n}\r\n#play label{\r\n    font-size:80px;\r\n    margin-top: 15px;\r\n    margin-left: 30px;\r\n}\r\n#play_again{\r\n    margin-top: 90px;\r\n    font-size: 130%;\r\n}\r\n#play_again:hover{\r\n    border: 2px dashed black;\r\n    border-radius: 50%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='parent-cont'>\n  <div id=\"container\">\n    <div class=\"col-md-12 text-center\" id=\"begin\">\n      <h1 style=\"padding-top:50px\">Would you like to be\n        <br> X or O?</h1>\n      <div class=\"col-md-12\" style=\"margin-top:20px\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-2\">\n          <div class='circle_choose cursor'>X</div>\n        </div>\n        <div class=\"col-md-2\">\n          <div class='circle_choose cursor'>O</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 nopadding\" id=\"play\" style=\"display:none\">\n      <div class=\"col-md-3 nopadding cursor\" id='00'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='01'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='02'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='10'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='11'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='12'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='20'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='21'></div>\n      <div class=\"col-md-3 nopadding cursor\" id='22'></div>\n    </div>\n    <div class=\"col-md-12 text-center\" id='result' style=\"display:none\">\n      <h1 style=\"padding-top:50px\">You Win</h1>\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4 cursor\" id=\"play_again\" (click)='playAgain()'>Play Again</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedTicTacToeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvancedTicTacToeComponent = /** @class */ (function () {
    function AdvancedTicTacToeComponent() {
        this.Arr = [];
        this.choose_you = '';
        this.choose_computer = '';
        this.result = '';
    }
    AdvancedTicTacToeComponent.prototype.ngOnInit = function () {
        this.Arr = [['', '', ''], ['', '', ''], ['', '', '']];
    };
    AdvancedTicTacToeComponent.prototype.ngAfterViewInit = function () {
        var controller = this;
        console.log(this.Arr);
        jQuery('.circle_choose').click(function () {
            controller.choose_you = jQuery(this).text();
            controller.choose_computer = (controller.choose_you == 'X') ? 'O' : 'X';
            jQuery('#begin').hide();
            jQuery('#play').fadeIn(1000);
            setTimeout(function () {
                var HTML = '<label>' + controller.choose_computer + '</label>';
                jQuery('#00').html(HTML);
                controller.Arr[0][0] = controller.choose_computer;
            }, 0);
        });
        jQuery('#play div').click(function () {
            if (jQuery(this).text() == '') {
                var HTML = '<label>' + controller.choose_you + '</label>';
                jQuery(this).html(HTML, 1000);
                var i = +(jQuery(this)[0].id + '').split('')[0];
                var j = +(jQuery(this)[0].id + '').split('')[1];
                controller.Arr[i][j] = controller.choose_you;
                if (controller.checkLose())
                    controller.result = 'You Win!';
                else {
                    i = 0;
                    j = 0;
                    var load = true;
                    while (load) {
                        if (controller.Arr[i][j] == '') {
                            controller.chooseCom(i, j);
                            break;
                        }
                        if (j < 2)
                            j++;
                        else {
                            i++;
                            j = 0;
                        }
                        if (i == 3)
                            break;
                    }
                    if (controller.checkWin())
                        controller.result = 'You Lose!';
                    if (controller.Arr[0][0] != '' && controller.Arr[0][1] != '' && controller.Arr[0][2] != ''
                        && controller.Arr[1][0] != '' && controller.Arr[1][1] != '' && controller.Arr[1][2] != ''
                        && controller.Arr[2][0] != '' && controller.Arr[2][1] != '' && controller.Arr[2][2] != '' && controller.result == '')
                        controller.result = 'Draw!';
                }
                if (controller.result != '') {
                    jQuery('#play').css('display', 'none');
                    jQuery('#result h1').html(controller.result);
                    controller.result = '';
                    jQuery('#result').fadeIn(2000);
                }
            }
        });
    };
    AdvancedTicTacToeComponent.prototype.playAgain = function () {
        var controller = this;
        jQuery('#result').css('display', 'none');
        for (var i = 0; i < 3; i++)
            for (var j = 0; j < 3; j++) {
                this.Arr[i][j] = '';
                var ID = '#' + i + '' + j;
                jQuery(ID).html('');
            }
        jQuery('#begin').fadeIn(1000);
    };
    AdvancedTicTacToeComponent.prototype.checkWin = function () {
        var controller = this;
        return (this.Arr[0][0] == controller.choose_computer && this.Arr[0][1] == controller.choose_computer && this.Arr[0][2] == controller.choose_computer) ||
            (this.Arr[0][0] == controller.choose_computer && this.Arr[1][0] == controller.choose_computer && this.Arr[2][0] == controller.choose_computer) ||
            (this.Arr[0][1] == controller.choose_computer && this.Arr[1][1] == controller.choose_computer && this.Arr[2][1] == controller.choose_computer) ||
            (this.Arr[1][0] == controller.choose_computer && this.Arr[1][1] == controller.choose_computer && this.Arr[1][2] == controller.choose_computer) ||
            (this.Arr[0][2] == controller.choose_computer && this.Arr[1][2] == controller.choose_computer && this.Arr[2][2] == controller.choose_computer) ||
            (this.Arr[2][0] == controller.choose_computer && this.Arr[2][1] == controller.choose_computer && this.Arr[2][2] == controller.choose_computer) ||
            (this.Arr[0][0] == controller.choose_computer && this.Arr[1][1] == controller.choose_computer && this.Arr[2][2] == controller.choose_computer) ||
            (this.Arr[2][0] == controller.choose_computer && this.Arr[1][1] == controller.choose_computer && this.Arr[0][2] == controller.choose_computer);
    };
    AdvancedTicTacToeComponent.prototype.checkLose = function () {
        var controller = this;
        return (this.Arr[0][0] == controller.choose_you && this.Arr[0][1] == controller.choose_you && this.Arr[0][2] == controller.choose_you) ||
            (this.Arr[0][0] == controller.choose_you && this.Arr[1][0] == controller.choose_you && this.Arr[2][0] == controller.choose_you) ||
            (this.Arr[0][1] == controller.choose_you && this.Arr[1][1] == controller.choose_you && this.Arr[2][1] == controller.choose_you) ||
            (this.Arr[1][0] == controller.choose_you && this.Arr[1][1] == controller.choose_you && this.Arr[1][2] == controller.choose_you) ||
            (this.Arr[0][2] == controller.choose_you && this.Arr[1][2] == controller.choose_you && this.Arr[2][2] == controller.choose_you) ||
            (this.Arr[2][0] == controller.choose_you && this.Arr[2][1] == controller.choose_you && this.Arr[2][2] == controller.choose_you) ||
            (this.Arr[0][0] == controller.choose_you && this.Arr[1][1] == controller.choose_you && this.Arr[2][2] == controller.choose_you) ||
            (this.Arr[2][0] == controller.choose_you && this.Arr[1][1] == controller.choose_you && this.Arr[0][2] == controller.choose_you);
    };
    AdvancedTicTacToeComponent.prototype.chooseCom = function (i, j) {
        this.Arr[i][j] = this.choose_computer;
        var ID = '#' + i + '' + j;
        jQuery(ID).html('<label>' + this.choose_computer + '</label>');
    };
    AdvancedTicTacToeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-advanced-tic-tac-toe',
            template: __webpack_require__("../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedTicTacToeComponent);
    return AdvancedTicTacToeComponent;
}());

//# sourceMappingURL=advanced-tic-tac-toe.component.js.map

/***/ }),

/***/ "../../../../../src/app/advanced-watchlock/advanced-watchlock.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nopadding{\r\n    padding:0;\r\n}\r\n.header_text{\r\n    color: white;\r\n    font-family: Pacifico, serif;\r\n    font-size: 70px;\r\n    padding: 20px;\r\n}\r\n.cursor{\r\n    cursor: pointer;\r\n}\r\n.remote label{\r\n    font-size:17px;\r\n    font-family: Pacifico, serif;\r\n}\r\n.remote p{\r\n    font-size:30px;\r\n}\r\n.remote i{\r\n    font-size: 20px;\r\n    padding-top:10px;\r\n}\r\n.Body{\r\n    color: white;\r\n}\r\n#container{\r\n    display: table;\r\n    margin: 0 auto;\r\n    border-radius: 50%;\r\n}\r\n#clock{\r\n    text-align: center;\r\n    font-family: Pacifico, serif;\r\n    padding-top: 120px; \r\n    font-size: 300%;\r\n    height: 350px;\r\n    width: 350px;\r\n    border-radius: 50%;\r\n    background: #333333;\r\n    border: 5px solid white;\r\n    /* background: linear-gradient(to bottom, rgba(116,207,122,1) 90%, rgba(254,51,50,1) 10%) */\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/advanced-watchlock/advanced-watchlock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 nopadding\" style=\"min-height:680px;background: #333333\">\n  <div class=\"header text-center\">\n    <p class=\"header_text\">FreeCodeCamp</p>\n  </div>\n  <div class=\"Body\">\n    <div class=\"remote col-md-12\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-2 text-center\" id='break_length'>\n        <div class=\"col-md-12\">\n          <div class=\"col-md-12\">\n            <label>Break Length</label>\n          </div>\n          <div class=\"col-md-4\">\n            <i class=\"fa fa-plus cursor\"></i>\n          </div>\n          <div class=\"col-md-4\">\n            <p class=\"break_now\">5</p>\n          </div>\n          <div class=\"col-md-4\">\n            <i class=\"fa fa-minus cursor\"></i>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2 text-center\" id='session_length'>\n        <div class=\"col-md-12\">\n          <div class=\"col-md-12\">\n            <label>Session Length</label>\n          </div>\n          <div class=\"col-md-4\">\n            <i class=\"fa fa-plus cursor\"></i>\n          </div>\n          <div class=\"col-md-4\">\n            <p class=\"session_now\">1</p>\n          </div>\n          <div class=\"col-md-4\">\n            <i class=\"fa fa-minus cursor\"></i>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"container\">\n      <div id='clock' class=\"col-md-12 cursor\">\n        <label>Session</label>\n        <p>1:00</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/advanced-watchlock/advanced-watchlock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedWatchlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdvancedWatchlockComponent = /** @class */ (function () {
    function AdvancedWatchlockComponent() {
    }
    AdvancedWatchlockComponent.prototype.ngOnInit = function () {
        this.break_length = 5;
        this.session_length = 1;
        this.interval;
        this.loading = false;
        var controller = this;
        jQuery('#break_length i').click(function () {
            if (this.classList[1] == 'fa-plus') {
                controller.break_length++;
            }
            else {
                if (controller.break_length != 0)
                    controller.break_length--;
            }
            ;
            jQuery('#break_length p').html('' + controller.break_length);
        });
        jQuery('#session_length i').click(function () {
            if (this.classList[1] == 'fa-plus') {
                controller.session_length++;
            }
            else {
                if (controller.session_length != 1)
                    controller.session_length--;
            }
            jQuery('#session_length p').html('' + controller.session_length);
            if (!controller.loading)
                jQuery('#clock p').html(controller.session_length + ':' + jQuery('#clock p').text().split(':')[1]);
        });
        jQuery('#clock').click(function () {
            controller.loading = !controller.loading;
            if (controller.loading) {
                var time_begin_1 = jQuery('#clock p').text();
                controller.interval = setInterval(function () {
                    var arr = jQuery('#clock p').text().split(':');
                    var minute = +arr[0];
                    var second = +arr[1];
                    minute = (second == 0) ? minute - 1 : minute;
                    second = (second == 0) ? 59 : second - 1;
                    var time_now = controller.format_show(minute) + ':' + controller.format_show(second);
                    jQuery('#clock p').html(time_now);
                    var percent = controller.Percent(time_now, time_begin_1);
                    jQuery('#clock').css('background', 'linear-gradient(to bottom, #333333 ' + percent + '%, #9CCC65 ' + (100 - percent) + '%)');
                    if (minute == 0 && second == 0)
                        clearInterval(controller.interval);
                }, 1000);
            }
            else {
                clearInterval(controller.interval);
            }
        });
    };
    AdvancedWatchlockComponent.prototype.format_show = function (number) {
        return (Math.floor(number / 10) == 0) ? ('0' + number) : ('' + number);
    };
    AdvancedWatchlockComponent.prototype.Percent = function (time_now, time_begin) {
        var arr1 = (time_now + '').split(':');
        var arr2 = (time_begin + '').split(':');
        return 100 * (+arr1[0] * 60 + (+arr1[1])) / (+arr2[0] * 60 + (+arr2[1]));
    };
    AdvancedWatchlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-advanced-watchlock',
            template: __webpack_require__("../../../../../src/app/advanced-watchlock/advanced-watchlock.component.html"),
            styles: [__webpack_require__("../../../../../src/app/advanced-watchlock/advanced-watchlock.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdvancedWatchlockComponent);
    return AdvancedWatchlockComponent;
}());

//# sourceMappingURL=advanced-watchlock.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_tribute_page_basic_tribute_page_component__ = __webpack_require__("../../../../../src/app/basic-tribute-page/basic-tribute-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_page_error_page_component__ = __webpack_require__("../../../../../src/app/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basic_ui_page_ui_page_component__ = __webpack_require__("../../../../../src/app/basic-ui-page/ui-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__intermediate_wiki_intermediate_wiki_component__ = __webpack_require__("../../../../../src/app/intermediate-wiki/intermediate-wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__intermediate_twitch_tv_intermediate_twitch_tv_component__ = __webpack_require__("../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__advanced_cal_advanced_cal_component__ = __webpack_require__("../../../../../src/app/advanced-cal/advanced-cal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__advanced_watchlock_advanced_watchlock_component__ = __webpack_require__("../../../../../src/app/advanced-watchlock/advanced-watchlock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__advanced_tic_tac_toe_advanced_tic_tac_toe_component__ = __webpack_require__("../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__simmon_game_simmon_game_component__ = __webpack_require__("../../../../../src/app/simmon-game/simmon-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routerConfig = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__main_main_component__["a" /* MainComponent */] },
    { path: 'basic/tribute-page', component: __WEBPACK_IMPORTED_MODULE_4__basic_tribute_page_basic_tribute_page_component__["a" /* BasicTributePageComponent */] },
    { path: 'basic/ui-page', component: __WEBPACK_IMPORTED_MODULE_6__basic_ui_page_ui_page_component__["a" /* UiPageComponent */] },
    { path: 'intermediate/wikipedia-page', component: __WEBPACK_IMPORTED_MODULE_7__intermediate_wiki_intermediate_wiki_component__["a" /* IntermediateWikiComponent */] },
    { path: 'intermediate/twich-tv-page', component: __WEBPACK_IMPORTED_MODULE_8__intermediate_twitch_tv_intermediate_twitch_tv_component__["a" /* IntermediateTwitchTvComponent */] },
    { path: 'advanced/calculator', component: __WEBPACK_IMPORTED_MODULE_9__advanced_cal_advanced_cal_component__["a" /* AdvancedCalComponent */] },
    { path: 'advanced/watch-lock', component: __WEBPACK_IMPORTED_MODULE_10__advanced_watchlock_advanced_watchlock_component__["a" /* AdvancedWatchlockComponent */] },
    { path: 'advanced/tic-tac-toe', component: __WEBPACK_IMPORTED_MODULE_11__advanced_tic_tac_toe_advanced_tic_tac_toe_component__["a" /* AdvancedTicTacToeComponent */] },
    { path: 'advanced/simon-game', component: __WEBPACK_IMPORTED_MODULE_12__simmon_game_simmon_game_component__["a" /* SimmonGameComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__error_page_error_page_component__["a" /* ErrorPageComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routerConfig),
                __WEBPACK_IMPORTED_MODULE_3__main_main_module__["a" /* MainModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            declarations: [],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main_module__ = __webpack_require__("../../../../../src/app/main/main.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__error_page_error_page_component__ = __webpack_require__("../../../../../src/app/error-page/error-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__basic_ui_page_ui_page_component__ = __webpack_require__("../../../../../src/app/basic-ui-page/ui-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__intermediate_wiki_intermediate_wiki_component__ = __webpack_require__("../../../../../src/app/intermediate-wiki/intermediate-wiki.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__support_component_wikipedia_comp_wikipedia_comp_component__ = __webpack_require__("../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__intermediate_twitch_tv_intermediate_twitch_tv_component__ = __webpack_require__("../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__advanced_cal_advanced_cal_component__ = __webpack_require__("../../../../../src/app/advanced-cal/advanced-cal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__advanced_watchlock_advanced_watchlock_component__ = __webpack_require__("../../../../../src/app/advanced-watchlock/advanced-watchlock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__advanced_tic_tac_toe_advanced_tic_tac_toe_component__ = __webpack_require__("../../../../../src/app/advanced-tic-tac-toe/advanced-tic-tac-toe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__simmon_game_simmon_game_component__ = __webpack_require__("../../../../../src/app/simmon-game/simmon-game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__error_page_error_page_component__["a" /* ErrorPageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__basic_ui_page_ui_page_component__["a" /* UiPageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__intermediate_wiki_intermediate_wiki_component__["a" /* IntermediateWikiComponent */],
                __WEBPACK_IMPORTED_MODULE_11__support_component_wikipedia_comp_wikipedia_comp_component__["a" /* WikiShowComponent */],
                __WEBPACK_IMPORTED_MODULE_12__intermediate_twitch_tv_intermediate_twitch_tv_component__["a" /* IntermediateTwitchTvComponent */],
                __WEBPACK_IMPORTED_MODULE_13__advanced_cal_advanced_cal_component__["a" /* AdvancedCalComponent */],
                __WEBPACK_IMPORTED_MODULE_14__advanced_watchlock_advanced_watchlock_component__["a" /* AdvancedWatchlockComponent */],
                __WEBPACK_IMPORTED_MODULE_15__advanced_tic_tac_toe_advanced_tic_tac_toe_component__["a" /* AdvancedTicTacToeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__simmon_game_simmon_game_component__["a" /* SimmonGameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__main_main_module__["a" /* MainModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
            ],
            exports: []
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/basic-tribute-page/basic-tribute-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nopadding{\r\n    padding:0;\r\n}\r\n.container{\r\n    padding: 50px;\r\n    background: white;\r\n}\r\n.Body{\r\n    background: #EEEEEE;\r\n    padding:50px;\r\n    border-radius: 1%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basic-tribute-page/basic-tribute-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 no-padding container\" style=\"padding:50px\">\n  <div class=\"col-md-1\">\n  </div>\n  <div class=\"col-md-10 Body\">\n    <div class=\"col-md-12 text-center\">\n      <h1 style=\"font-size:350%\">Dr. Norman Borlaug</h1>\n      <h3>\n        <i>The man who saved a billion lives</i>\n      </h3>\n      <div class=\"col-md-12\" style=\"background:white\">\n        <img style=\"width: 100%\" src='../../assets/Image/Norman_Borlaug.jpg'>\n        <p>Dr. Norman Borlaug, third from left, trains biologists in Mexico on how to increase wheat yields - part of his life-long\n          war on hunger.</p>\n      </div>\n    </div>\n    <div class=\"col-md-12\" style=\"padding-top:50px\">\n      <div class=\"col-md-1\">\n      </div>\n      <div class=\"col-md-9\">\n        <h3>Here's a time line of Dr. Borlaug's life:</h3>\n        <ul style=\"margin-left: 20px\">\n          <li>\n            <b>1914</b> - Born in Cresco, Iowa\n          </li>\n          <li>\n            <b>1933</b> - Leaves his family's farm to attend the University of Minnesota, thanks to a Depression era program\n            known as the \"National Youth Administration\"\n          </li>\n          <li>\n            <b>1935</b> - Has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving\n            Americans. \"I saw how food changed them\", he said. \"All of this left scars on me.\"\n          </li>\n          <li>\n            <b>1937</b> - Finishes university and takes a job in the US Forestry Service\n          </li>\n          <li>\n            <b>1938</b> - Marries wife of 69 years Margret Gibson. Gets laid off due to budget cuts. Inspired by Elvin Charles\n            Stakman, he returns to school study under Stakman, who teaches him about breeding pest-resistent plants.\n          </li>\n          <li>\n            <b>1941</b> - Tries to enroll in the military after the Pearl Harbor attack, but is rejected. Instead, the military\n            asked his lab to work on waterproof glue, DDT to control malaria, disenfectants, and other applied science.\n          </li>\n          <li>\n            <b>1942</b> - Receives a Ph.D. in Genetics and Plant Pathology\n          </li>\n          <li>\n            <b>1944</b> - Rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to\n            head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease\n            resistent wheat - including different varieties for each major climate on Earth.\n          </li>\n          <li>\n            <b>1945</b> - Discovers a way to grown wheat twice each season, doubling wheat yields\n          </li>\n          <li>\n            <b>1953</b> - crosses a short, sturdy dwarf breed of wheat with a high-yeidling American breed, creating a strain\n            that responds well to fertalizer. It goes on to provide 95% of Mexico's wheat.\n          </li>\n          <li>\n            <b>1962</b> - Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help\n            mitigate mass starvation due to a rapidly expanding population\n          </li>\n          <li>\n            <b>1970</b> - receives the Nobel Peace Prize\n          </li>\n          <li>\n            <b>1983</b> - helps seven African countries dramatically increase their maize and sorghum yields\n          </li>\n          <li>\n            <b>1984</b> - becomes a distinguished professor at Texas A&M University\n          </li>\n          <li>\n            <b>2005</b> - states \"we will have to double the world food supply by 2050.\" Argues that genetically modified crops\n            are the only way we can meet the demand, as we run out of arable land. Says that GM crops are not inherently\n            dangerous because \"we've been genetically modifying plants and animals for a long time. Long before we called\n            it science, people were selecting the best breeds.\"\n          </li>\n          <li>\n            <b>2009</b> - dies at the age of 95.\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <div class=\"col-md-1\">\n      </div>\n      <div class=\"col-md-10\" style=\"padding-left:55px\">\n        <h3>\n          \"Borlaug's life and achievement are testimony to the far-reaching contribution that one man's towering intellect, persistence\n          and scientific vision can make to human peace and progress.\"\n        </h3>\n        <h4 style=\"color:#9E9E9E\">\n          <i>-Indian Prime Minister Manmohan Singh</i>\n        </h4>\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"col-md-10\" style=\"margin-left:12%\">\n        <h3>\n          If you have time, you should read more about this incredible human being on his\n          <a href=\"https://en.wikipedia.org/wiki/Norman_Borlaug\">Wikipedia entry.</a>\n        </h3>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-12 nopadding container\" style=\"padding:50px;padding-top:0\">\n  <div class=\"col-md-1\">\n  </div>\n  <div class=\"col-md-10\" style=\"background: #EEEEEE\">\n  </div>\n  <div class=\"col-md-12 text-center\" style=\"padding:20px\">\n    Written and coded by\n    <a href=\"#\">Trịnh Hoàng Đức</a>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/basic-tribute-page/basic-tribute-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicTributePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicTributePageComponent = /** @class */ (function () {
    function BasicTributePageComponent() {
    }
    BasicTributePageComponent.prototype.ngOnInit = function () {
    };
    BasicTributePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-basic-tribute-page',
            template: __webpack_require__("../../../../../src/app/basic-tribute-page/basic-tribute-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/basic-tribute-page/basic-tribute-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicTributePageComponent);
    return BasicTributePageComponent;
}());

//# sourceMappingURL=basic-tribute-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/basic-ui-page/ui-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nopadding{\r\n    padding:0\r\n}\r\n#header{\r\n    background: #722872;\r\n    height: 100px;\r\n    position: fixed;\r\n    padding-top: 20px;\r\n    z-index: 10;\r\n}\r\n#header .col-md-10 a img{\r\n    width: 50px;\r\n}\r\na.a_header{\r\n    padding-right:10px;\r\n    padding-left:10px;\r\n    padding-top: 15px;\r\n    border-radius: 2px;\r\n    color: #9E9E9E;\r\n    text-decoration: none;\r\n}\r\na.a_header:hover{\r\n    border: #E0E0E0 1px solid;    \r\n    color: #9E9E9E;\r\n    text-decoration: none;\r\n}\r\na.a_header:focus{\r\n    color: #9E9E9E;\r\n    text-decoration: none;\r\n}\r\n.active{\r\n    background: white;\r\n}\r\na.active{\r\n    text-decoration: none;\r\n}\r\n#Body{\r\n    background:#757575;\r\n    margin-top:100px;\r\n}\r\n.Body_part{\r\n    border: solid #757575 1px;\r\n}\r\n#about{\r\n    background:#BDBDBD;\r\n    color:white;\r\n}\r\n#about .col-md-8{\r\n    padding-top:105px;\r\n    padding-left:105px;\r\n    font-size:19px;\r\n}\r\n#portfolio, #contact{\r\n    background: white;\r\n    color:#757575\r\n}\r\n#portfolio_body .col-md-6 img{\r\n    width:90%;\r\n    padding-top:5%;\r\n    border-radius: 2px;\r\n}\r\n#underBody{\r\n    background: #aaa;\r\n    color:white;\r\n}\r\n#underBody_left a{\r\n    color:#722872;\r\n}\r\n#underBody_right a div{\r\n    color:white;\r\n    border: 3px solid white;\r\n    border-radius: 50%;\r\n    padding: 8px;\r\n    font-size: 20px;\r\n    margin-left:3px;\r\n}\r\n#underBody_right a div:hover{\r\n    background: white;\r\n    color:#722872;\r\n}\r\n#footer{\r\n    background: #722872;\r\n}\r\n.nice-incon{\r\n    color: #ffffff;\r\n    border: 4px solid;\r\n    height: 40px;\r\n    width: 40px;\r\n    padding: 2px;\r\n    border-radius: 50%;\r\n    font-size: 20px;\r\n    margin-right: 5px;\r\n}\r\n.nice-incon:hover{\r\n    color: skyblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/basic-ui-page/ui-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 nopadding\" id=\"header\">\n  <div class=\"col-md-1 nopadding\">\n  </div>\n  <div class=\"col-md-10 nopadding\">\n    <a href=\"http://qlip.in\">\n      <img src='../../assets/Image/qlip-icon.png' />\n    </a>\n    <a class=\"pull-right a_header\" id=\"contact_a\" href=\"#contact\" (click)='changeScroll(\"contact\")'>\n      <h4> CONTACT </h4>\n    </a>\n    <a class=\"pull-right a_header\" id=\"portfolio_a\" href=\"#portfolio\" (click)='changeScroll(\"portfolio\")'>\n      <h4> PORTFOLIO </h4>\n    </a>\n    <a class=\"pull-right a_header active\" id='about_a' href=\"#about\" (click)='changeScroll(\"about\")'>\n      <h4> ABOUT </h4>\n    </a>\n  </div>\n</div>\n<div class=\"col-md-12 nopadding\" id=\"Body\">\n  <div class=\"col-md-1 nopadding\">\n  </div>\n  <div class=\"col-md-10 nopadding\">\n    <div class=\"col-md-12 nopadding Body_part\" id=\"about\">\n      <div class=\"col-md-8 nopadding\">\n        <div class=\"col-md-12 nopadding\">\n          Front-End Developer and UX/UI designer, with practical experience in project management, branding strategy, and creative\n          direction; devoted to functional programming and information architecture.\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"col-md-1\"></div>\n          <div class=\"col-md-9\" style=\"height:5px;background: white;margin-top:18px\">\n          </div>\n          <div class=\"col-md-1\" style=\"padding-left:5px;font-size:30px\">\n            \n          </div>\n        </div>\n        <div class=\"col-md-12 nopadding\">\n          <h3>Web Developer - User Experience Designer - Graphic Artist</h3>\n        </div>\n      </div>\n      <div class=\"col-md-4 nopadding\" style=\"margin-top:55px\">\n        <abbr title=\"Hight School First\">\n          <img src='../../assets/Image/ledung1.jpg'\n            style=\"border-radius:50%;width:65%\">\n        </abbr>\n      </div>\n      <div class=\"col-md-12\" style=\"height:40px\">\n      </div>\n    </div>\n    <div class=\"col-md-12 nopadding Body_part\" id='portfolio' style=\"text-align:center\">\n      <div class=\"col-md-12\">\n        <h2>PORTFOLIO</h2>\n      </div>\n      <div class=\"col-md-12\" id='portfolio_body'>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/ledung2.jpg'>\n        </div>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/ledung3.jpg'>\n        </div>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/huyenvit1.jpg'>\n        </div>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/huyenvit2.jpg'>\n        </div>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/hailinh1.jpg'>\n        </div>\n        <div class=\"col-md-6\">\n          <img src='../../assets/Image/hailinh2.jpg'>\n        </div>\n      </div>\n      <div class=\"col-md-12\" style=\"height:40px\">\n      </div>\n    </div>\n    <div class=\"col-md-12 nopadding Body_part\" id='contact'>\n      <div class=\"col-md-12\" style=\"text-align:center\">\n        <h2>CONTACT</h2>\n        <div class=\"hr_xin\"></div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-5\">\n          <form class=\"mui-form\">\n            <div class=\"mui-textfield mui-textfield--float-label\">\n              <input id='name' name='name' required>\n              <label for=\"name\">Name</label>\n            </div>\n            <div class=\"mui-textfield mui-textfield--float-label\">\n              <input id='email' name='email' required>\n              <label for=\"email\">Email</label>\n            </div>\n            <div class=\"mui-textfield mui-textfield--float-label\">\n              <input id='phone' name='phone' required>\n              <label for=\"phone\">Phone Number</label>\n            </div>\n            <div class=\"mui-textfield mui-textfield--float-label\">\n              <textarea rows=\"4\" required></textarea>\n              <label>Message</label>\n            </div>\n            <div>\n              <button class=\"btn btn-success\" type=\"submit\">Send</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"col-md-1\">\n        </div>\n        <div class=\"col-md-5\">\n          <p style=\"font-size:20px\">\n            Want to get in touch with me? Be it to request more info about myself or my experience, to ask for my resume, tips on how\n            to solve your sudoku, random questions about the universe and the meaning of life, or even if only for some nice\n            Fika here in stunning Toronto... just feel free to drop me a line anytime.\n            <br>\n            <br> I promise to reply A.S.A.P.\n          </p>\n          <p style=\"font-size:22px;padding-top:55px\">Note: No spam/soliciting pour moi, merci :)</p>\n        </div>\n      </div>\n      <div class=\"col-md-12\" style=\"height:40px\">\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"col-md-12 nopadding part3\" id=\"underBody\">\n  <div class=\"col-md-1 nopadding\">\n  </div>\n  <div class=\"col-md-10 nopadding text-center\">\n    <div class=\"col-md-6\" id=\"underBody_left\">\n      <h2>ABOUT THIS PAGE</h2>\n      <h3>Made with\n        <i class=\"fa fa-fw fa-coffee\"></i> and\n        <i class=\"fa fa-fw fa-music\"></i>\n        <br> by\n        <a href=\"#\">T.H.Đức</a>.\n      </h3>\n    </div>\n    <div class=\"col-md-6\" id=\"underBody_Right\">\n      <h2>AROUND THE WEB</h2>\n      <br>\n      <div class=\"col-md-4\">\n      </div>\n      <a href=\"https://www.linkedin.com/in/hallaathrad\">\n        <div class=\"col-md-1 nice-incon\">\n          <i class=\"fa fa-fw fa-linkedin\"></i>\n        </div>\n      </a>\n      <a href=\"https://github.com/hallaathrad\">\n        <div class=\"col-md-1 nice-incon\">\n          <i class=\"fa fa-fw fa-github\"></i>\n        </div>\n      </a>\n      <a href=\"https://twitter.com/hallaathrad\">\n        <div class=\"col-md-1 nice-incon\">\n          <i class=\"fa fa-fw fa-twitter\"></i>\n        </div>\n      </a>\n      <a href=\"https://www.flickr.com/photos/hallaathrad/\">\n        <div class=\"col-md-1 nice-incon\">\n          <i class=\"fa fa-fw fa-flickr\"></i>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"col-md-12\" style=\"height:40px\">\n  </div>\n</div>\n<div class=\"col-md-12 nopadding text-center\" id=\"footer\">\n  <h3 style=\"color:white\">\n    qlip © 2017. All Rights Reversed\n  </h3>\n  <div class=\"col-md-12\" style=\"height:40px\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/basic-ui-page/ui-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiPageComponent = /** @class */ (function () {
    function UiPageComponent() {
    }
    UiPageComponent.prototype.ngOnInit = function () {
        jQuery('a.a_header').click(function () {
            return false;
        });
        //Add class active when scroll
        var scroll_class = jQuery('.a_header');
        jQuery(document).scroll(function () {
            var scroll_Top = jQuery(document).scrollTop();
            for (var i = 0; i < 3; i++) {
                var id = scroll_class[i].attributes[2].value;
                var h1 = jQuery(id).offset().top - 100;
                var h2 = h1 + jQuery(id).height();
                if (scroll_Top >= h1 && scroll_Top <= h2) {
                    jQuery('.a_header').removeClass('active');
                    var ID = id + '_a';
                    jQuery(ID).addClass('active');
                    break;
                }
            }
        });
        var hr_xin = "\n      <div class='col-md-12'>\n       <div class='col-md-3' style='margin-top:18px;height:5px;background:#757575;margin-left:21%'>\n       </div>\n       <div class='col-md-3' style='margin-top:18px;height:5px;background:#757575'>\n       </div>\n      </div>\n    ";
        jQuery('.hr_xin').html(hr_xin);
    };
    UiPageComponent.prototype.changeScroll = function (Id) {
        jQuery('.a_header').removeClass('active');
        jQuery('#' + Id + '_a').addClass('active');
        console.log(jQuery('#' + Id).offset().top);
        window.scrollTo(0, jQuery('#' + Id).offset().top);
    };
    UiPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-ui-page',
            template: __webpack_require__("../../../../../src/app/basic-ui-page/ui-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/basic-ui-page/ui-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UiPageComponent);
    return UiPageComponent;
}());

//# sourceMappingURL=ui-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/entry-door/entry-door.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-body-child{\r\n    width: 250px;\r\n    border: solid 1px skyblue;\r\n    border-radius: 10px;\r\n}\r\ndiv.main-body-child>p{\r\n    font-family: fantasy;\r\n    font-size: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/entry-door/entry-door.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pull-left main-body-child text-center cursor\" [ngStyle]=\"entryStyle\">\n  <p>{{name1}}\n    <br>{{name2}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/entry-door/entry-door.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntryDoorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntryDoorComponent = /** @class */ (function () {
    function EntryDoorComponent(router) {
        this.router = router;
        this.name1 = '';
        this.name2 = '';
    }
    EntryDoorComponent.prototype.ngOnInit = function () {
        this.name1 = this.name.split(' ')[0];
        this.name2 = this.name.split(' ')[1];
        this.entryStyle = {
            'background': this.background,
            'margin': this.margin
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EntryDoorComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EntryDoorComponent.prototype, "background", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], EntryDoorComponent.prototype, "margin", void 0);
    EntryDoorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-entry-door',
            template: __webpack_require__("../../../../../src/app/entry-door/entry-door.component.html"),
            styles: [__webpack_require__("../../../../../src/app/entry-door/entry-door.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], EntryDoorComponent);
    return EntryDoorComponent;
    var _a;
}());

//# sourceMappingURL=entry-door.component.js.map

/***/ }),

/***/ "../../../../../src/app/error-page/error-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-page/error-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 text-center\">\n  <h1 style=\"margin-top: 50px\">Page not Found!</h1>  \n</div> \n"

/***/ }),

/***/ "../../../../../src/app/error-page/error-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-error-page',
            template: __webpack_require__("../../../../../src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());

//# sourceMappingURL=error-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    padding-top: 100px;\r\n    border-radius: 2%;\r\n    min-height: 670px;\r\n}\r\n\r\n.container-header {\r\n    background: #448AFF;\r\n    color: white;\r\n}\r\n\r\ndiv.ON-OFF label {\r\n    margin: 0;\r\n}\r\n\r\n.container-body {\r\n    background: #E3F2FD;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-size: 15px;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.personal {\r\n    padding-top: 20px;\r\n}\r\n\r\n.personal:hover {\r\n    background: #80CBC4;\r\n}\r\n\r\n.container-header {\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.personal div img {\r\n    width: 60px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.No-padding {\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" style=\"background: #CE93D8;\">\n  <div class=\"col-md-3\"></div>\n  <div class=\"col-md-6 container\">\n    <div class=\"col-md-12 container-header no-padding\" style=\"padding-bottom:0\">\n      <h3 class=\"pull-left\">TWITCH STREAMERS</h3>\n      <div class=\"pull-right ON-OFF\">\n        <div class=\"ALL No-padding\">\n          <input [checked]='indexRole == 0' (click)='changeDataShow(0)' id='All' type=\"radio\" name='on-off'>\n          <label (click)='changeDataShow(0)' for='All'>All</label>\n        </div>\n        <div class=\"ONLINE No-padding\">\n          <input [checked]='indexRole == 1' (click)='changeDataShow(1)' id='Online' type=\"radio\" name='on-off'>\n          <label (click)='changeDataShow(1)' for='Online'>Online</label>\n        </div>\n        <div class=\"OFFLINE No-padding\">\n          <input [checked]='indexRole == 2' (click)='changeDataShow(2)' id='Offline' type=\"radio\" name='on-off'>\n          <label (click)='changeDataShow(2)' for='Offline'>Offline</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-12 container-body\" style=\"padding:0;padding-bottom:15px\">\n      <div class=\"text-center\" *ngIf='isLoading'>\n        <i class=\"fa fa-spinner fa-spin\" style=\"font-size:150px;margin: 50px\"></i>\n      </div>\n      <div class=\"col-md-12\" *ngIf='!isLoading'>\n        <div class=\"personal col-md-12\" *ngFor='let Data of currentDatas'>\n          <div class=\"col-md-2 personal-img\">\n            <img class=\"pull-left\" src=\"{{!Data.logo ? defaultImg : Data.logo}}\">\n          </div>\n          <div class=\"col-md-6\" style=\"padding-top:15px\">\n            <a class=\"cursor\" href=\"{{Data.url}}\"> {{Data.display_name}} </a>\n          </div>\n          <div class=\"col-md-4\" style=\"padding-top:15px\">\n            <i> {{(Data.partner) ? \"Online\" : \"Offline\"}} </i>\n          </div>\n        </div>;\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntermediateTwitchTvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntermediateTwitchTvComponent = /** @class */ (function () {
    function IntermediateTwitchTvComponent(http) {
        this.http = http;
        this.datas = [];
        this.currentDatas = [];
        this.addresses = [];
        this.indexRole = 0;
        this.defaultImg = "../../assets/Image/default-img-twich.jpg";
        this.htmlShow = "";
    }
    IntermediateTwitchTvComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.addresses = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
        for (var _i = 0, _a = this.addresses; _i < _a.length; _i++) {
            var address = _a[_i];
            this.getData(address);
        }
        this.changeDataShow(this.indexRole);
    };
    IntermediateTwitchTvComponent.prototype.getData = function (address) {
        var _this = this;
        this.http.get(this.channelAPI(address))
            .map(function (res) { return res.json(); })
            .subscribe(function (resJson) {
            _this.addData(resJson);
        }, function (error) {
            console.log(error);
        });
    };
    IntermediateTwitchTvComponent.prototype.addData = function (data) {
        this.datas.push(data);
    };
    IntermediateTwitchTvComponent.prototype.changeDataShow = function (index) {
        this.isLoading = true;
        this.currentDatas = [];
        var controller = this;
        setTimeout(function () {
            for (var _i = 0, _a = controller.datas; _i < _a.length; _i++) {
                var data = _a[_i];
                if (index == 0)
                    controller.currentDatas.push(data);
                else if (index == 1 && data.partner)
                    controller.currentDatas.push(data);
                else if (index == 2 && !data.partner)
                    controller.currentDatas.push(data);
            }
            controller.isLoading = false;
        }, 2000);
    };
    IntermediateTwitchTvComponent.prototype.channelAPI = function (name) {
        return 'https://wind-bow.glitch.me/twitch-api/channels/' + name;
    };
    IntermediateTwitchTvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-intermediate-twitch-tv',
            template: __webpack_require__("../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.html"),
            styles: [__webpack_require__("../../../../../src/app/intermediate-twitch-tv/intermediate-twitch-tv.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], IntermediateTwitchTvComponent);
    return IntermediateTwitchTvComponent;
    var _a;
}());

//# sourceMappingURL=intermediate-twitch-tv.component.js.map

/***/ }),

/***/ "../../../../../src/app/intermediate-wiki/intermediate-wiki.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cointainer{  \r\n    background: #EEEEEE;\r\n    padding: 100px;\r\n    min-height: 660px;\r\n}\r\na {\r\n    font-size: 200%;\r\n    text-decoration: none;\r\n}\r\n\r\na:hover {\r\n    text-decoration: none;\r\n}\r\n\r\ninput#search {\r\n    border-radius: 5px;\r\n    border: 1px black solid;\r\n    width: 41%;\r\n    height: 34px;\r\n    float: left;\r\n    padding-left: 15px;\r\n}\r\n\r\nbutton#searchButton {\r\n    float: left;\r\n    border-radius: 5px;\r\n    margin-left: 10px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.info {\r\n    background: grey;\r\n    border-left: 2px black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intermediate-wiki/intermediate-wiki.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cointainer col-md-12\">\n  <form class=\"text-center col-md-12\" (submit)='search()'>\n    <h2>Search in Wikipedia</h2>\n    <div class=\"col-md-12\" style=\"padding-top:14px\">\n      <div class=\"col-md-4\">\n      </div>\n      <div class=\"col-md-8\">\n        <input type=\"text\" id='search' required [(ngModel)]='search_text' name='wikipedia_search' placeholder=\"Search ...\">\n        <button id='searchButton' class=\"btn btn-default\" type=\"submit\">\n          <i class=\"fa fa-search\"></i>\n        </button>\n      </div>\n    </div>\n    <div class=\"col-md-12\">\n      <a href=\"https://en.wikipedia.org/wiki/Special:Random\">\n        <i style=\"font-size: 12px\">Click here for a random article</i>\n      </a>\n    </div>\n  </form>\n  <div class=\"col-md-12 result\">\n    <div *ngIf='isLoading' class=\"text-center\" style=\"font-size: 100px\">\n      <i class=\"fa fa-spinner fa-spin\"></i>\n    </div>\n    <div class=\"col-md-12 text-center\" *ngIf='searchList.length <= 1 && failSearch == true'>\n      <h4>No data!</h4>\n    </div>\n    <div class=\"col-md-12\" *ngIf='searchList.length > 1'>\n      <div class=\"row\" *ngFor='let res of searchList[1]; let i = index'>\n        <wiki-show-comp name='{{searchList[1][i]}}' intro='{{searchList[2][i]}}' link='{{searchList[3][i]}}'></wiki-show-comp>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/intermediate-wiki/intermediate-wiki.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntermediateWikiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IntermediateWikiComponent = /** @class */ (function () {
    function IntermediateWikiComponent(http) {
        this.http = http;
        this.search_text = '';
        this.searchList = [];
        this.isLoading = false;
        this.failSearch = false;
    }
    IntermediateWikiComponent.prototype.ngOnInit = function () {
    };
    IntermediateWikiComponent.prototype.search = function () {
        this.isLoading = true;
        this.searchList = [];
        var controller = this;
        setTimeout(function () {
            controller.http.get('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + controller.search_text)
                .map(function (res) { return res.json(); })
                .subscribe(function (resJson) {
                controller.searchList = resJson;
            }, function (error) {
                console.log(error);
                controller.failSearch = true;
            });
            controller.isLoading = false;
        }, 500);
        controller.failSearch = false;
    };
    IntermediateWikiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-intermediate-wiki',
            template: __webpack_require__("../../../../../src/app/intermediate-wiki/intermediate-wiki.component.html"),
            styles: [__webpack_require__("../../../../../src/app/intermediate-wiki/intermediate-wiki.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], IntermediateWikiComponent);
    return IntermediateWikiComponent;
    var _a;
}());

//# sourceMappingURL=intermediate-wiki.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/detail/advanced/advancedProject.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-header\" class=\"col-md-12 text-center\">\r\n    <p style=\"font-family: fantasy; font-size: 50px; margin-top: 10px\">Advanced Project</p>\r\n</div>\r\n<div id=\"main-body\" class=\"pull-left\" style=\"margin-left: 150px\">\r\n    <app-entry-door background='#BCAAA4' margin='25px' name='Caculator Page' (click)='changeRoute(\"calculator\")'></app-entry-door>\r\n    <app-entry-door background='#90A4AE' margin='25px' name='WatchLock Page' (click)='changeRoute(\"watch-lock\")'></app-entry-door>\r\n    <app-entry-door background='#FFF59D' margin='25px' name='TicTacToe Project' (click)='changeRoute(\"tic-tac-toe\")'></app-entry-door>\r\n    <app-entry-door background='#FFE082' margin='25px' name='SimonGame Project' (click)='changeRoute(\"simon-game\")'></app-entry-door>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/detail/advanced/advancedProject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvancedProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdvancedProjectComponent = /** @class */ (function () {
    function AdvancedProjectComponent(router) {
        this.router = router;
    }
    AdvancedProjectComponent.prototype.ngOnInit = function () { };
    AdvancedProjectComponent.prototype.changeRoute = function (route) {
        this.router.navigateByUrl('/advanced/' + route);
    };
    AdvancedProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'advanced-comp',
            template: __webpack_require__("../../../../../src/app/main/detail/advanced/advancedProject.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], AdvancedProjectComponent);
    return AdvancedProjectComponent;
    var _a;
}());

//# sourceMappingURL=advancedProject.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/detail/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-header\" class=\"col-md-12 text-center\">\r\n    <p style=\"font-family: fantasy; font-size: 50px; margin-top: 10px\">Basic Project</p>\r\n</div>\r\n<div id=\"main-body\" class=\"pull-left\" style=\"margin-left: 60px\">\r\n    <app-entry-door background='#BCAAA4' margin='75px' name='Tribute Page' (click)='changeRoute(\"tribute-page\")'></app-entry-door>\r\n    <app-entry-door background='#90A4AE' margin='75px' name='UI Page' (click)='changeRoute(\"ui-page\")'></app-entry-door>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/detail/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicProjectComponent = /** @class */ (function () {
    function BasicProjectComponent(router) {
        this.router = router;
    }
    BasicProjectComponent.prototype.ngOnInit = function () { };
    BasicProjectComponent.prototype.changeRoute = function (rout) {
        this.router.navigateByUrl('/basic/' + rout);
    };
    BasicProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'basic',
            template: __webpack_require__("../../../../../src/app/main/detail/basic/basic.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], BasicProjectComponent);
    return BasicProjectComponent;
    var _a;
}());

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/detail/intermerdiate/intermerdiate.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-header\" class=\"col-md-12 text-center\">\r\n    <p style=\"font-family: fantasy; font-size: 50px; margin-top: 10px\">Intermerdiate Project</p>\r\n</div>\r\n<div id=\"main-body\" class=\"pull-left\" style=\"margin-left: 60px\">\r\n    <app-entry-door background='#BCAAA4' margin='75px' name='Wikipedia Page' (click)='changeRoute(\"wikipedia-page\")'></app-entry-door>\r\n    <app-entry-door background='#90A4AE' margin='75px' name='Twich-TV Page' (click)='changeRoute(\"twich-tv-page\")'></app-entry-door>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/detail/intermerdiate/intermerdiate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntermerdiateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntermerdiateComponent = /** @class */ (function () {
    function IntermerdiateComponent(router) {
        this.router = router;
    }
    IntermerdiateComponent.prototype.ngOnInit = function () { };
    IntermerdiateComponent.prototype.changeRoute = function (route) {
        this.router.navigateByUrl('/intermediate/' + route);
    };
    IntermerdiateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'intermerdiate-comp',
            template: __webpack_require__("../../../../../src/app/main/detail/intermerdiate/intermerdiate.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], IntermerdiateComponent);
    return IntermerdiateComponent;
    var _a;
}());

//# sourceMappingURL=intermerdiate.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_master_main_component__ = __webpack_require__("../../../../../src/app/main/master/master-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__detail_basic_basic_component__ = __webpack_require__("../../../../../src/app/main/detail/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_intermerdiate_intermerdiate_component__ = __webpack_require__("../../../../../src/app/main/detail/intermerdiate/intermerdiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_advanced_advancedProject_component__ = __webpack_require__("../../../../../src/app/main/detail/advanced/advancedProject.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__main_component__["a" /* MainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__master_master_main_component__["a" /* MasterMainComponent */] },
            { path: 'basic', component: __WEBPACK_IMPORTED_MODULE_3__detail_basic_basic_component__["a" /* BasicProjectComponent */] },
            { path: 'intermediate', component: __WEBPACK_IMPORTED_MODULE_5__detail_intermerdiate_intermerdiate_component__["a" /* IntermerdiateComponent */] },
            { path: 'advanced', component: __WEBPACK_IMPORTED_MODULE_6__detail_advanced_advancedProject_component__["a" /* AdvancedProjectComponent */] }
        ]
    }
];
var MaintRoutingModule = /** @class */ (function () {
    function MaintRoutingModule() {
    }
    MaintRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        })
    ], MaintRoutingModule);
    return MaintRoutingModule;
}());

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main-cointener{\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/Image/avenger.jpg") + ");\r\n    background-size: 100% 100%;\r\n    height: 800px;\r\n    background-repeat: no-repeat;\r\n    color: skyblue;\r\n}\r\n#main-box{\r\n    border-radius: 5px;\r\n    width: 900px;\r\n    height: 500px;\r\n    margin: 0 auto;\r\n    margin-top: 100px;\r\n    background: #EEEEEE;    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 no-padding\" id=\"main-cointener\">\n  <div id=\"main-box\">\n    <router-outlet></router-outlet>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__entry_door_entry_door_component__ = __webpack_require__("../../../../../src/app/entry-door/entry-door.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detail_basic_basic_component__ = __webpack_require__("../../../../../src/app/main/detail/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__master_master_main_component__ = __webpack_require__("../../../../../src/app/main/master/master-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__detail_intermerdiate_intermerdiate_component__ = __webpack_require__("../../../../../src/app/main/detail/intermerdiate/intermerdiate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__detail_advanced_advancedProject_component__ = __webpack_require__("../../../../../src/app/main/detail/advanced/advancedProject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basic_tribute_page_basic_tribute_page_component__ = __webpack_require__("../../../../../src/app/basic-tribute-page/basic-tribute-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__main_routing_module__["a" /* MaintRoutingModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_7__master_master_main_component__["a" /* MasterMainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__detail_basic_basic_component__["a" /* BasicProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_8__detail_intermerdiate_intermerdiate_component__["a" /* IntermerdiateComponent */],
                __WEBPACK_IMPORTED_MODULE_9__detail_advanced_advancedProject_component__["a" /* AdvancedProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_4__entry_door_entry_door_component__["a" /* EntryDoorComponent */],
                __WEBPACK_IMPORTED_MODULE_10__basic_tribute_page_basic_tribute_page_component__["a" /* BasicTributePageComponent */]
            ],
            providers: [],
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/master/master-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"main-header\" class=\"col-md-12 text-center\">\r\n    <p style=\"font-family: fantasy; font-size: 50px; margin-top: 10px\">Frontend Project in\r\n        <br> FreeCodeCamp</p>\r\n</div>\r\n<div id=\"main-body\" class=\"pull-left\">\r\n    <app-entry-door margin='25px' background='#FFF59D' name='Basic Project' (click)='changeRoute(\"basic\")'></app-entry-door>\r\n    <app-entry-door margin='25px' background='#FFE082' name='Intermerdiate Project' (click)='changeRoute(\"intermediate\")'></app-entry-door>\r\n    <app-entry-door margin='25px' background='#FFCC80' name='Advanced Project' (click)='changeRoute(\"advanced\")'></app-entry-door>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/main/master/master-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasterMainComponent = /** @class */ (function () {
    function MasterMainComponent(router) {
        this.router = router;
    }
    MasterMainComponent.prototype.ngOnInit = function () {
    };
    MasterMainComponent.prototype.changeRoute = function (route) {
        this.router.navigateByUrl('/' + route);
    };
    MasterMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'master-main',
            template: __webpack_require__("../../../../../src/app/main/master/master-main.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object])
    ], MasterMainComponent);
    return MasterMainComponent;
    var _a;
}());

//# sourceMappingURL=master-main.component.js.map

/***/ }),

/***/ "../../../../../src/app/simmon-game/simmon-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alfa+Slab+One|Electrolize|Oswald|Oswald|Dancing+Script);", ""]);

// module
exports.push([module.i, ".parent-cont{\r\n    padding-top: 50px;\r\n    text-align: center;\r\n    width: 100%;\r\n    min-height: 680px;\r\n    background-image: url('https://www.classicalmusicindy.org/wp-content/uploads/2016/09/Music-Wallpaper-HD-8.jpg');\r\n    /* background-image: url('http://images.tapchianhdep.net/15-12nhung-hinh-anh-dong-hai-huoc-cuc-ki-vui-nhon11.gif'); */\r\n    background-size: cover;\r\n}\r\n.nopadding{\r\n    padding:0;\r\n}\r\n.container{\r\n    width: 600px;\r\n    margin: 0 auto;\r\n}\r\n.container #title{\r\n    font-family: pacifico, serif;\r\n    font-size: 80px;\r\n    color: white;\r\n}\r\n#simon_game{\r\n    width: 400px;\r\n    height: 400px;\r\n    position: relative;\r\n    margin: 0 auto;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n#win{\r\n    width: 400px;\r\n    height: 400px;\r\n    margin: 0 auto;\r\n    background: url(http://images.tapchianhdep.net/15-12nhung-hinh-anh-dong-hai-huoc-cuc-ki-vui-nhon11.gif);\r\n    background-repeat: no-repeat;\r\n    margin-top: 30px;\r\n    margin-bottom: 10px;\r\n}\r\n.buttn{\r\n    width: 200px;\r\n    height: 200px;\r\n    position: absolute;\r\n    border:black solid 20px;\r\n    cursor: pointer;\r\n}\r\n.buttn_green{\r\n    background: #00695C;\r\n    border-top-left-radius: 100%;\r\n    top:0;\r\n    left:0;    \r\n}\r\n.buttn_red{\r\n    background: #C62828;\r\n    border-top-right-radius: 100%;\r\n    top:0;\r\n    right:0;\r\n}\r\n.buttn_yellow{\r\n    background: #F9A825;\r\n    border-bottom-left-radius: 100%;\r\n    bottom:0;\r\n    left:0;\r\n}\r\n.buttn_blue{\r\n    background: #0277BD;\r\n    border-bottom-right-radius: 100%;\r\n    bottom:0;\r\n    right:0;\r\n}\r\n.buttn_green.light {\r\n    background-color: #26A69A !important;\r\n  }\r\n.buttn_red.light {\r\n    background-color: #FE2E2E !important;\r\n  }\r\n.buttn_yellow.light {\r\n    background-color: #F7FE2E !important;\r\n  }\r\n.buttn_blue.light {\r\n    background-color: #2EFEF7 !important;\r\n  }\r\n#remote{\r\n    height: 220px;\r\n    width: 220px;\r\n    border: black solid 20px;\r\n    position: absolute;\r\n    top: 90px;\r\n    left: 90px;\r\n    border-radius: 50%;\r\n    background: #BDBDBD;\r\n}\r\n#remote label{\r\n    font-size: 20px;\r\n    margin-top:10px;\r\n    font-family: pacifico, serif;\r\n    color:black;\r\n}\r\n#screen{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    width: 70px;\r\n    height: 35px;\r\n    background: #212121;\r\n    color:#F44336;\r\n    font-family: Electrolize;\r\n    font-size: 30px;\r\n    border-radius:10px;\r\n}\r\n.ledOff{\r\n    color: #B71C1C !important;\r\n}\r\n#level{\r\n    float:left;\r\n    width: 180px;\r\n}\r\n#start{\r\n    margin:5px 20px 0 35px;\r\n    float: left;\r\n}\r\n#start button{\r\n    background: #F44336;\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#strict{\r\n    margin-top:5px;\r\n    margin-right:35px;    \r\n    float: right;\r\n}\r\n#strict button{\r\n    background: #F9A825;\r\n    border-radius: 50%;\r\n    width: 30px;\r\n    height: 30px;\r\n}\r\n#light_strict{\r\n    float: right;\r\n    width: 8px;\r\n    height: 8px;\r\n    border-radius: 50%;\r\n    background: #333333;\r\n    border: 2px solid #333333;\r\n}\r\n.light{\r\n    background: #F44336 !important;\r\n}\r\n#switch{\r\n    display: inline-block;\r\n}\r\n#switch_1{\r\n    cursor: pointer;\r\n    height: 20px;\r\n    width: 32%;\r\n    background: #333333;\r\n    border-radius: 5px;\r\n}\r\n#control{\r\n    background: #EEEEEE;\r\n    height: 18px;\r\n    margin: 1px;\r\n    border-radius: 5px;\r\n    float: left;\r\n    width: 50%;\r\n}\r\n#footer{\r\n    font-family: pacifico, serif;\r\n    color: white;\r\n    font-size: 20px;\r\n}\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\na:hover{\r\n    color: white;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simmon-game/simmon-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='parent-cont'>\n  <div class=\"container\">\n    <p id=\"title\">Simon Game</p>\n    <div id=\"simon_game\">\n      <div id='0' class=\"buttn buttn_green\"></div>\n      <div id='1' class=\"buttn buttn_red\"></div>\n      <div id='2' class=\"buttn buttn_yellow\"></div>\n      <div id='3' class=\"buttn buttn_blue\"></div>\n      <div id=\"remote\">\n        <div id=\"level\">\n          <label>Level</label>\n          <br>\n          <input id=\"screen\" class=\"ledOff\" value=\"--\" readonly>\n          <br>\n        </div>\n        <div id=\"start\">\n          <button></button>\n          <p>\n            <b>Start</b>\n          </p>\n        </div>\n        <div id=\"strict\">\n          <div id='light_strict'></div>\n          <button></button>\n          <p>\n            <b>Strict</b>\n          </p>\n        </div>\n        <div id='switch'>\n          <div class=\"col-md-12\">\n            <div class=\"col-md-4\" style=\"padding-left:0\">\n              <b>OFF</b>\n            </div>\n            <div id=\"switch_1\" class=\"col-md-4 nopadding\">\n              <div id=\"control\"></div>\n            </div>\n            <div class=\"col-md-4\" style=\"margin-left:-8%\">\n              <b>ON</b>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div id=\"win\" style=\"display:none\"></div>\n    <b id='footer'>Code by\n      <a href=\"https://www.freecodecamp.org/ductrinhhoang\">Đức Trịnh Hoàng</a>\n    </b>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/simmon-game/simmon-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimmonGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SimmonGameComponent = /** @class */ (function () {
    function SimmonGameComponent() {
    }
    SimmonGameComponent.prototype.ngOnInit = function () {
        var audio_sound = {
            audio0: "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3",
            audio1: "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3",
            audio2: "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3",
            audio3: "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3",
        };
        var wrong_audio = "http://themushroomkingdom.net/sounds/wav/smb/smb_mariodie.wav";
        var win_audio = "http://themushroomkingdom.net/sounds/wav/smb/smb_stage_clear.wav";
        var switch_position = 'left', playing = false, step = 1, stepNow = 0, playNow = false, randomPlay = [], numberWin = 100;
        jQuery('#switch_1').click(function () {
            playing = !playing;
            switch_position = (switch_position == 'left') ? 'right' : 'left';
            jQuery('#control').css('float', switch_position);
            if (switch_position != 'left')
                jQuery('#screen').removeClass('ledOff');
            else {
                jQuery('#screen').addClass('ledOff');
                resetGame();
            }
        });
        jQuery('#strict button').click(function () {
            if (playing) {
                if (jQuery('#light_strict')[0].classList.length == 0)
                    jQuery('#light_strict').addClass('light');
                else
                    jQuery('#light_strict').removeClass('light');
            }
        });
        jQuery('.buttn').click(function () {
            if (playNow) {
                var num_1 = +jQuery(this)[0].id;
                if (num_1 == randomPlay[stepNow]) {
                    playAudio(num_1);
                    stepNow++;
                }
                else {
                    jQuery('#' + num_1).addClass('light');
                    setTimeout(function () {
                        jQuery('#' + num_1).removeClass('light');
                    }, 200);
                    // document.getElementById('wrong-sound').play();
                    var audio = new Audio();
                    audio.src = wrong_audio;
                    audio.play();
                    setTimeout(nextStep(), 10000);
                }
                if (stepNow == step) {
                    if (stepNow == numberWin) {
                        jQuery('#simon_game').hide();
                        jQuery('#win').fadeIn(200);
                        var audio = new Audio();
                        audio.src = win_audio;
                        audio.play();
                    }
                    step++;
                    nextStep();
                }
            }
        });
        function playAudio(num) {
            jQuery('#' + num).addClass('light');
            setTimeout(function () {
                jQuery('#' + num).removeClass('light');
            }, 200);
            var audio = new Audio();
            audio.src = audio_sound['audio' + num];
            audio.play();
        }
        jQuery('#start button').click(function () {
            if (playing) {
                nextStep();
                jQuery('#screen').val(formatStep(step));
            }
        });
        function resetGame() {
            step = 1;
            jQuery('#light_strict').removeClass('light');
            jQuery('#screen').addClass('ledOff');
            jQuery('#screen').val('--');
        }
        function formatStep(step) {
            if (+step < 10)
                return '0' + step;
            else
                return step + '';
        }
        function nextStep() {
            stepNow = 0;
            jQuery('#screen').val(formatStep(step));
            randomPlay = [];
            var i = 0;
            var _loop_1 = function () {
                var num = Math.floor(4 * Math.random());
                randomPlay.push(num);
                setTimeout(function () {
                    playAudio(num);
                }, 1000 * (i + 1));
            };
            for (i = 0; i < step; i++) {
                _loop_1();
            }
            playNow = true;
        }
    };
    SimmonGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-simmon-game',
            template: __webpack_require__("../../../../../src/app/simmon-game/simmon-game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/simmon-game/simmon-game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SimmonGameComponent);
    return SimmonGameComponent;
}());

//# sourceMappingURL=simmon-game.component.js.map

/***/ }),

/***/ "../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro{\r\n    height: 100px; \r\n    background: white;\r\n    border-radius: 5px;\r\n    margin: 15px;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8 intro\">\r\n        <h5>\r\n            <a href=\"{{link}}\">{{name}}</a>\r\n            <hr style=\"margin: 0;margin-top: 3px\">\r\n        </h5>\r\n        <p>{{intro}}</p>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WikiShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WikiShowComponent = /** @class */ (function () {
    function WikiShowComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], WikiShowComponent.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], WikiShowComponent.prototype, "intro", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], WikiShowComponent.prototype, "link", void 0);
    WikiShowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'wiki-show-comp',
            template: __webpack_require__("../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.html"),
            styles: [__webpack_require__("../../../../../src/app/support-component/wikipedia-comp/wikipedia-comp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WikiShowComponent);
    return WikiShowComponent;
}());

//# sourceMappingURL=wikipedia-comp.component.js.map

/***/ }),

/***/ "../../../../../src/assets/Image/avenger.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "avenger.d8327198fc71616791e7.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map