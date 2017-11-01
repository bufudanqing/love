(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AcademicExchangeActions = function () {
    function AcademicExchangeActions() {
        _classCallCheck(this, AcademicExchangeActions);

        this.generateActions('getAcademicExchangeSuccess', 'getAcademicExchangeFail');
    }

    _createClass(AcademicExchangeActions, [{
        key: 'getAcademicExchange',
        value: function getAcademicExchange(id) {
            var _this = this;

            $.ajax({ url: '/yjzx/academic-exchange/getAcademicExchange/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getAcademicExchangeSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getAcademicExchangeFail(data);
            });
        }
    }]);

    return AcademicExchangeActions;
}();

exports.default = _alt2.default.createActions(AcademicExchangeActions);

},{"../alt":31,"./Base64":14}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AcademicExchangeListActions = function () {
    function AcademicExchangeListActions() {
        _classCallCheck(this, AcademicExchangeListActions);

        this.generateActions('getAcademicExchangeListSuccess', 'getAcademicExchangeListFail');
    }

    _createClass(AcademicExchangeListActions, [{
        key: 'getAcademicExchanges',
        value: function getAcademicExchanges() {
            var _this = this;

            var url = '/yjzx/academic-exchange/getAcademicExchanges' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getAcademicExchangeListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getAcademicExchangeListFail(data.data);
            });
        }
    }, {
        key: 'delAcademicExchange',
        value: function delAcademicExchange(id) {
            var _this2 = this;

            var url = '/yjzx/academic-exchange/delAcademicExchange/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getAcademicExchangeListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getAcademicExchangeListFail(data.data);
            });
        }
    }]);

    return AcademicExchangeListActions;
}();

exports.default = _alt2.default.createActions(AcademicExchangeListActions);

},{"../alt":31,"./Base64":14}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddAcademicExchangeActions = function () {
    function AddAcademicExchangeActions() {
        _classCallCheck(this, AddAcademicExchangeActions);

        this.generateActions('addAcademicExchangeSuccess', 'addAcademicExchangeFail', 'updateTitle', 'updateAuthor', 'updateAddress');
    }

    _createClass(AddAcademicExchangeActions, [{
        key: 'addAcademicExchange',
        value: function addAcademicExchange(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/pxjd/academic-exchange/addAcademicExchange',
                data: reqData
            }).done(function (data) {
                _this.actions.addAcademicExchangeSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addAcademicExchangeFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'editAcademicExchange',
        value: function editAcademicExchange(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/pxjd/academic-exchange/editAcademicExchange',
                data: reqData
            }).done(function (data) {
                _this2.actions.addAcademicExchangeSuccess(data.message);
            }).fail(function (jqXhr) {
                _this2.actions.addAcademicExchangeFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddAcademicExchangeActions;
}();

exports.default = _alt2.default.createActions(AddAcademicExchangeActions);

},{"../alt":31}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddDocumentActions = function () {
    function AddDocumentActions() {
        _classCallCheck(this, AddDocumentActions);

        this.generateActions('addDocumentSuccess', 'addDocumentFail', 'updateName');
    }

    _createClass(AddDocumentActions, [{
        key: 'addDocument',
        value: function addDocument(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/document/add',
                data: reqData
            }).done(function (data) {
                _this.actions.addDocumentSuccess(data.message);
            }).fail(function (data) {
                _this.actions.addDocumentFail(data.message);
            });
        }
    }]);

    return AddDocumentActions;
}();

exports.default = _alt2.default.createActions(AddDocumentActions);

},{"../alt":31}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddFlowActions = function () {
    function AddFlowActions() {
        _classCallCheck(this, AddFlowActions);

        this.generateActions('addFlowSuccess', 'addFlowFail', 'updateName', 'updateAuthor', 'updateContent', 'updateUrl');
    }

    _createClass(AddFlowActions, [{
        key: 'addFlow',
        value: function addFlow(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/flow/addFlow',
                data: reqData
            }).done(function (data) {
                _this.actions.addFlowSuccess(data.message);
            }).fail(function (data) {
                _this.actions.addFlowFail(data.message);
            });
        }
    }, {
        key: 'editFlow',
        value: function editFlow(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/flow/editFlow',
                data: reqData
            }).done(function (data) {
                _this2.actions.addFlowSuccess(data.message);
            }).fail(function (data) {
                _this2.actions.addFlowFail(data.message);
            });
        }
    }]);

    return AddFlowActions;
}();

exports.default = _alt2.default.createActions(AddFlowActions);

},{"../alt":31}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddMasterTeamActions = function () {
    function AddMasterTeamActions() {
        _classCallCheck(this, AddMasterTeamActions);

        this.generateActions('addMasterTeamSuccess', 'addMasterTeamFail', 'updateName', 'updateJob', 'updateContent', 'updateAliases', 'updateIntroduction');
    }

    _createClass(AddMasterTeamActions, [{
        key: 'addMasterTeam',
        value: function addMasterTeam(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/pxjd/master-team/addMasterTeam',
                data: reqData
            }).done(function (data) {
                _this.actions.addMasterTeamSuccess(data.message);
            }).fail(function (data) {
                _this.actions.addMasterTeamFail(data.message);
            });
        }
    }, {
        key: 'editMasterTeam',
        value: function editMasterTeam(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/pxjd/master-team/editMasterTeam',
                data: reqData
            }).done(function (data) {
                _this2.actions.addMasterTeamSuccess(data.message);
            }).fail(function (data) {
                _this2.actions.addMasterTeamFail(data.message);
            });
        }
    }]);

    return AddMasterTeamActions;
}();

exports.default = _alt2.default.createActions(AddMasterTeamActions);

},{"../alt":31}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddNewsConsultActions = function () {
    function AddNewsConsultActions() {
        _classCallCheck(this, AddNewsConsultActions);

        this.generateActions('addNewsConsultSuccess', 'addNewsConsultFail', 'updateTitle', 'updateSubtitle', 'updateAuthor', 'updateType', 'updateContent');
    }

    _createClass(AddNewsConsultActions, [{
        key: 'addNewsConsult',
        value: function addNewsConsult(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/syxa/news-consult/addNewsConsult',
                data: reqData
            }).done(function (data) {
                _this.actions.addNewsConsultSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addNewsConsultFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'editNewsConsult',
        value: function editNewsConsult(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/syxa/news-consult/editNewsConsult',
                data: reqData
            }).done(function (data) {
                _this2.actions.addNewsConsultSuccess(data.message);
            }).fail(function (jqXhr) {
                _this2.actions.addNewsConsultFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddNewsConsultActions;
}();

exports.default = _alt2.default.createActions(AddNewsConsultActions);

},{"../alt":31}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchProjectActions = function () {
    function AddResearchProjectActions() {
        _classCallCheck(this, AddResearchProjectActions);

        this.generateActions('addResearchProjectSuccess', 'addResearchProjectFail', 'updateTitle');
    }

    _createClass(AddResearchProjectActions, [{
        key: 'addResearchProject',
        value: function addResearchProject(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-project/addResearchProject',
                data: reqData
            }).done(function (data) {
                _this.actions.addResearchProjectSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addResearchProjectFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'editMasterTeam',
        value: function editMasterTeam(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-project/editResearchProject',
                data: reqData
            }).done(function (data) {
                _this2.actions.addResearchProjectSuccess(data.message);
            }).fail(function (jqXhr) {
                _this2.actions.addResearchProjectFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddResearchProjectActions;
}();

exports.default = _alt2.default.createActions(AddResearchProjectActions);

},{"../alt":31}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchResultActions = function () {
    function AddResearchResultActions() {
        _classCallCheck(this, AddResearchResultActions);

        this.generateActions('addResearchResultSuccess', 'addResearchResultFail', 'updateTitle', 'updateType');
    }

    _createClass(AddResearchResultActions, [{
        key: 'addResearchResult',
        value: function addResearchResult(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-result/addResearchResult',
                data: reqData
            }).done(function (data) {
                _this.actions.addResearchResultSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addResearchResultFail(jqXhr.responseJSON.message);
            });
        }
    }, {
        key: 'editResearchResult',
        value: function editResearchResult(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-result/editResearchResult',
                data: reqData
            }).done(function (data) {
                _this2.actions.addResearchResultSuccess(data.message);
            }).fail(function (jqXhr) {
                _this2.actions.addResearchResultFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddResearchResultActions;
}();

exports.default = _alt2.default.createActions(AddResearchResultActions);

},{"../alt":31}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchTeamActions = function () {
    function AddResearchTeamActions() {
        _classCallCheck(this, AddResearchTeamActions);

        this.generateActions('addResearchTeamSuccess', 'addResearchTeamFail', 'updateName', 'updateType', 'updateAcademy');
    }

    _createClass(AddResearchTeamActions, [{
        key: 'addResearchTeam',
        value: function addResearchTeam(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-team/addResearchTeam',
                data: reqData
            }).done(function (data) {
                _this.actions.addResearchTeamSuccess(data.message);
            }).fail(function (data) {
                _this.actions.addResearchTeamFail(data.message);
            });
        }
    }, {
        key: 'editResearchTeam',
        value: function editResearchTeam(reqData) {
            var _this2 = this;

            $.ajax({
                type: 'POST',
                url: '/yjzx/research-team/editResearchTeam',
                data: reqData
            }).done(function (data) {
                _this2.actions.addResearchTeamSuccess(data.message);
            }).fail(function (data) {
                _this2.actions.addResearchTeamFail(data.message);
            });
        }
    }]);

    return AddResearchTeamActions;
}();

exports.default = _alt2.default.createActions(AddResearchTeamActions);

},{"../alt":31}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddSpreadActions = function () {
    function AddSpreadActions() {
        _classCallCheck(this, AddSpreadActions);

        this.generateActions('getSpreadSuccess', 'getSpreadFail');
    }

    _createClass(AddSpreadActions, [{
        key: 'addSpread',
        value: function addSpread(args) {
            var _this = this;

            $.ajax({ url: '/spread/add', method: "POST", data: args }).done(function (data) {
                _this.actions.getSpreadSuccess(data);
            }).fail(function (data) {
                _this.actions.getSpreadFail(data);
            });
        }
    }]);

    return AddSpreadActions;
}();

exports.default = _alt2.default.createActions(AddSpreadActions);

},{"../alt":31}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApkActions = function () {
    function ApkActions() {
        _classCallCheck(this, ApkActions);

        this.generateActions('addApkActionsSuccess', 'addApkActionsFail');
    }

    _createClass(ApkActions, [{
        key: 'addApk',
        value: function addApk(reqData) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/apk/add',
                data: reqData
            }).done(function (data) {
                _this.actions.addApkActionsSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addApkActionsFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return ApkActions;
}();

exports.default = _alt2.default.createActions(ApkActions);

},{"../alt":31}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApkListActions = function () {
    function ApkListActions() {
        _classCallCheck(this, ApkListActions);

        this.generateActions('getApkListSuccess', 'getApkListFail');
    }

    _createClass(ApkListActions, [{
        key: 'getApks',
        value: function getApks() {
            var _this = this;

            var url = '/apk/list' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getApkListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getApkListFail(data.data);
            });
        }
    }]);

    return ApkListActions;
}();

exports.default = _alt2.default.createActions(ApkListActions);

},{"../alt":31,"./Base64":14}],14:[function(require,module,exports){
'use strict';

var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);

module.exports.sign = function () {
    var newTime = new Date().getTime() + 10 * 1000;
    var newDate = base64encode(newTime + '');
    var arrs = newDate.split('');
    arrs[2] = arrs[2] + 'c';
    var arrTime = arrs.join('');
    return '/8eb06391a10c49d34beb03a0b46b9256/' + arrTime;
};
function base64encode(str) {
    var out, i, len;
    var c1, c2, c3;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4);
            out += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            out += base64EncodeChars.charAt(c1 >> 2);
            out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
            out += base64EncodeChars.charAt((c2 & 0xF) << 2);
            out += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        out += base64EncodeChars.charAt(c1 >> 2);
        out += base64EncodeChars.charAt((c1 & 0x3) << 4 | (c2 & 0xF0) >> 4);
        out += base64EncodeChars.charAt((c2 & 0xF) << 2 | (c3 & 0xC0) >> 6);
        out += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return out;
}
function base64decode(str) {
    var c1, c2, c3, c4;
    var i, len, out;
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c1 == -1);
        if (c1 == -1) break;
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        } while (i < len && c2 == -1);
        if (c2 == -1) break;
        out += String.fromCharCode(c1 << 2 | (c2 & 0x30) >> 4);
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) return out;
            c3 = base64DecodeChars[c3];
        } while (i < len && c3 == -1);
        if (c3 == -1) break;
        out += String.fromCharCode((c2 & 0XF) << 4 | (c3 & 0x3C) >> 2);
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) return out;
            c4 = base64DecodeChars[c4];
        } while (i < len && c4 == -1);
        if (c4 == -1) break;
        out += String.fromCharCode((c3 & 0x03) << 6 | c4);
    }
    return out;
}

function utf16to8(str) {
    var out, i, len, c;
    out = "";
    len = str.length;
    for (i = 0; i < len; i++) {
        c = str.charCodeAt(i);
        if (c >= 0x0001 && c <= 0x007F) {
            out += str.charAt(i);
        } else if (c > 0x07FF) {
            out += String.fromCharCode(0xE0 | c >> 12 & 0x0F);
            out += String.fromCharCode(0x80 | c >> 6 & 0x3F);
            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        } else {
            out += String.fromCharCode(0xC0 | c >> 6 & 0x1F);
            out += String.fromCharCode(0x80 | c >> 0 & 0x3F);
        }
    }
    return out;
}
function utf8to16(str) {
    var out, i, len, c;
    var char2, char3;
    out = "";
    len = str.length;
    i = 0;
    while (i < len) {
        c = str.charCodeAt(i++);
        switch (c >> 4) {
            case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:
                out += str.charAt(i - 1);
                break;
            case 12:case 13:
                char2 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 0x1F) << 6 | char2 & 0x3F);
                break;
            case 14:
                char2 = str.charCodeAt(i++);
                char3 = str.charCodeAt(i++);
                out += String.fromCharCode((c & 0x0F) << 12 | (char2 & 0x3F) << 6 | (char3 & 0x3F) << 0);
                break;
        }
    }
    return out;
}
module.exports.parseBase64 = function (data) {
    if (!data) {
        return false;
    }
    return JSON.parse(utf8to16(base64decode(data)));
};

},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedBackActions = function () {
    function FeedBackActions() {
        _classCallCheck(this, FeedBackActions);

        this.generateActions('getFeedBackSuccess', 'getFeedBackFail');
    }

    _createClass(FeedBackActions, [{
        key: 'getFeedBack',
        value: function getFeedBack(id) {
            var _this = this;

            $.ajax({ url: '/yjzx/feed-back/getFeedBack/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFeedBackSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFeedBackFail(data);
            });
        }
    }]);

    return FeedBackActions;
}();

exports.default = _alt2.default.createActions(FeedBackActions);

},{"../alt":31,"./Base64":14}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedBackListActions = function () {
    function FeedBackListActions() {
        _classCallCheck(this, FeedBackListActions);

        this.generateActions('getFeedBackListSuccess', 'getFeedBackListFail');
    }

    _createClass(FeedBackListActions, [{
        key: 'getFeedBacks',
        value: function getFeedBacks() {
            var _this = this;

            var url = '/yjzx/feed-back/getFeedBacks' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFeedBackListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFeedBackListFail(data.data);
            });
        }
    }, {
        key: 'delFeedBacks',
        value: function delFeedBacks(id) {
            var _this2 = this;

            var url = '/yjzx/feed-back/delFeedBacks/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getFeedBackListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getFeedBackListFail(data.data);
            });
        }
    }]);

    return FeedBackListActions;
}();

exports.default = _alt2.default.createActions(FeedBackListActions);

},{"../alt":31,"./Base64":14}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowActions = function () {
    function FlowActions() {
        _classCallCheck(this, FlowActions);

        this.generateActions('getFlowSuccess', 'getFlowFail');
    }

    _createClass(FlowActions, [{
        key: 'getFlow',
        value: function getFlow(id) {
            var _this = this;

            $.ajax({ url: '/flow/getFlow/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFlowSuccess(data[0]);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFlowFail(data[0]);
            });
        }
    }]);

    return FlowActions;
}();

exports.default = _alt2.default.createActions(FlowActions);

},{"../alt":31,"./Base64":14}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowListActions = function () {
    function FlowListActions() {
        _classCallCheck(this, FlowListActions);

        this.generateActions('getFlowListSuccess', 'getFlowListFail');
    }

    _createClass(FlowListActions, [{
        key: 'getFlows',
        value: function getFlows() {
            var _this = this;

            var url = '/flow/getFlows' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFlowListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getFlowListFail(data.data);
            });
        }
    }, {
        key: 'delFlow',
        value: function delFlow(id, type) {
            var _this2 = this;

            var url = '/flow/delFlow/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getFlowListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getFlowListFail(data.data);
            });
        }
    }]);

    return FlowListActions;
}();

exports.default = _alt2.default.createActions(FlowListActions);

},{"../alt":31,"./Base64":14}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterTeamActions = function () {
    function MasterTeamActions() {
        _classCallCheck(this, MasterTeamActions);

        this.generateActions('getMasterTeamSuccess', 'getMasterTeamFail');
    }

    _createClass(MasterTeamActions, [{
        key: 'getMasterTeam',
        value: function getMasterTeam(id) {
            var _this = this;

            $.ajax({ url: '/pxjd/master-team/getMasterTeam/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getMasterTeamSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getMasterTeamFail(data);
            });
        }
    }]);

    return MasterTeamActions;
}();

exports.default = _alt2.default.createActions(MasterTeamActions);

},{"../alt":31,"./Base64":14}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterTeamListActions = function () {
    function MasterTeamListActions() {
        _classCallCheck(this, MasterTeamListActions);

        this.generateActions('getMasterTeamListSuccess', 'getMasterTeamListFail');
    }

    _createClass(MasterTeamListActions, [{
        key: 'getMasterTeams',
        value: function getMasterTeams() {
            var _this = this;

            var url = '/pxjd/master-team/getMasterTeams' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getMasterTeamListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getMasterTeamListFail(data.data);
            });
        }
    }, {
        key: 'delMasterTeam',
        value: function delMasterTeam(id, type) {
            var _this2 = this;

            var url = '/pxjd/master-team/delMasterTeam/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getMasterTeamListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getMasterTeamListFail(data.data);
            });
        }
    }]);

    return MasterTeamListActions;
}();

exports.default = _alt2.default.createActions(MasterTeamListActions);

},{"../alt":31,"./Base64":14}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function NavbarActions() {
  _classCallCheck(this, NavbarActions);

  this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery');
};

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":31,"underscore":"underscore"}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsConsultActions = function () {
    function NewsConsultActions() {
        _classCallCheck(this, NewsConsultActions);

        this.generateActions('getNewsConsultSuccess', 'getNewsConsultFail');
    }

    _createClass(NewsConsultActions, [{
        key: 'getNewsConsult',
        value: function getNewsConsult(id) {
            var _this = this;

            $.ajax({ url: '/syxa/news-consult/getNewsConsult/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getNewsConsultSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getNewsConsultFail(jqXhr);
            });
        }
    }]);

    return NewsConsultActions;
}();

exports.default = _alt2.default.createActions(NewsConsultActions);

},{"../alt":31,"./Base64":14}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsConsultListActions = function () {
    function NewsConsultListActions() {
        _classCallCheck(this, NewsConsultListActions);

        this.generateActions('getNewsConssultSuccess', 'getNewsConsultFail');
    }

    _createClass(NewsConsultListActions, [{
        key: 'getNewsConsults',
        value: function getNewsConsults() {
            var _this = this;

            var start = 0,
                size = 10;
            var url = '/syxa/news-consult/getNewsConsults/' + start + '/' + size + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                data.data.forEach(function (item, insex, arr) {
                    item.type == "1" ? item.type = "新闻咨询" : item.type = "公司动态";
                    arr[insex] = item;
                });
                _this.actions.getNewsConssultSuccess(data);
            }).fail(function (data) {
                _this.actions.getNewsConssultSuccess(data);
            });
        }
    }, {
        key: 'delNewsConsult',
        value: function delNewsConsult(id) {
            var _this2 = this;

            var url = '/syxa/news-consult/delNewsConsult/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                data.data.forEach(function (item, insex, arr) {
                    item.type == "1" ? item.type = "新闻咨询" : item.type = "公司动态";
                    arr[insex] = item;
                });
                _this2.actions.getNewsConssultSuccess(data);
            }).fail(function (data) {
                _this2.actions.getNewsConssultSuccess(data);
            });
        }
    }]);

    return NewsConsultListActions;
}();

exports.default = _alt2.default.createActions(NewsConsultListActions);

},{"../alt":31,"./Base64":14}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchProjectActions = function () {
    function ResearchProjectActions() {
        _classCallCheck(this, ResearchProjectActions);

        this.generateActions('getResearchProjectSuccess', 'getResearchProjectFail');
    }

    _createClass(ResearchProjectActions, [{
        key: 'getResearchProject',
        value: function getResearchProject(id) {
            var _this = this;

            $.ajax({ url: '/yjzx/research-project/getResearchProject/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchProjectSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchProjectFail(data);
            });
        }
    }]);

    return ResearchProjectActions;
}();

exports.default = _alt2.default.createActions(ResearchProjectActions);

},{"../alt":31,"./Base64":14}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchProjectListActions = function () {
    function ResearchProjectListActions() {
        _classCallCheck(this, ResearchProjectListActions);

        this.generateActions('getResearchProjectListSuccess', 'getResearchProjectListFail');
    }

    _createClass(ResearchProjectListActions, [{
        key: 'getResearchProjects',
        value: function getResearchProjects(type) {
            var _this = this;

            var url = '/yjzx/research-project/getResearchProjects' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchProjectListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchProjectListFail(data.data);
            });
        }
    }, {
        key: 'delResearchProject',
        value: function delResearchProject(id) {
            var _this2 = this;

            var url = '/yjzx/research-project/delResearchProject/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchProjectListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchProjectListFail(data.data);
            });
        }
    }]);

    return ResearchProjectListActions;
}();

exports.default = _alt2.default.createActions(ResearchProjectListActions);

},{"../alt":31,"./Base64":14}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchResultActions = function () {
    function ResearchResultActions() {
        _classCallCheck(this, ResearchResultActions);

        this.generateActions('getResearchResultSuccess', 'getResearchResultFail');
    }

    _createClass(ResearchResultActions, [{
        key: 'getResearchResult',
        value: function getResearchResult(id) {
            var _this = this;

            $.ajax({ url: '/yjzx/research-result/getResearchResult/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchResultSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchResultFail(data);
            });
        }
    }]);

    return ResearchResultActions;
}();

exports.default = _alt2.default.createActions(ResearchResultActions);

},{"../alt":31,"./Base64":14}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchResultListActions = function () {
    function ResearchResultListActions() {
        _classCallCheck(this, ResearchResultListActions);

        this.generateActions('getResearchResultListSuccess', 'getResearchResultListFail');
    }

    _createClass(ResearchResultListActions, [{
        key: 'getResearchResults',
        value: function getResearchResults(type) {
            var _this = this;

            var url = '/yjzx/research-result/getResearchResults/' + type + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                data.data.forEach(function (item, index, arr) {
                    item.type == "1" ? item.type = "专利" : item.type == "2" ? item.type = "软著" : item.type == "3" ? item.type = "获奖" : item.type == "4" ? item.type = "项目" : item.type = "论文";
                    arr[index] = item;
                });
                _this.actions.getResearchResultListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchResultListFail(data.data);
            });
        }
    }, {
        key: 'delResearchResult',
        value: function delResearchResult(id, type) {
            var _this2 = this;

            var url = '/yjzx/research-result/delResearchResult/' + id + '/' + type + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchResultListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchResultListFail(data.data);
            });
        }
    }]);

    return ResearchResultListActions;
}();

exports.default = _alt2.default.createActions(ResearchResultListActions);

},{"../alt":31,"./Base64":14}],28:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchTeamActions = function () {
    function ResearchTeamActions() {
        _classCallCheck(this, ResearchTeamActions);

        this.generateActions('getResearchTeamSuccess', 'getResearchTeamFail');
    }

    _createClass(ResearchTeamActions, [{
        key: 'getResearchTeam',
        value: function getResearchTeam(id) {
            var _this = this;

            $.ajax({ url: '/pxjd/research-team/getResearchTeam/' + id + _Base2.default.sign(), method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchTeamSuccess(data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchTeamFail(data);
            });
        }
    }]);

    return ResearchTeamActions;
}();

exports.default = _alt2.default.createActions(ResearchTeamActions);

},{"../alt":31,"./Base64":14}],29:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchTeamListActions = function () {
    function ResearchTeamListActions() {
        _classCallCheck(this, ResearchTeamListActions);

        this.generateActions('getResearchTeamListSuccess', 'getResearchTeamListFail');
    }

    _createClass(ResearchTeamListActions, [{
        key: 'getResearchTeams',
        value: function getResearchTeams(type) {
            var _this = this;

            var url = '/yjzx/research-team/getResearchTeams' + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                data.data.forEach(function (item, index, arr) {
                    item.type == "1" ? item.type = "教授" : item.type == "2" ? item.type = "专家" : item.type = "技术";
                    arr[index] = item;
                });
                _this.actions.getResearchTeamListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getResearchTeamListFail(data.data);
            });
        }
    }, {
        key: 'delResearchTeam',
        value: function delResearchTeam(id) {
            var _this2 = this;

            var url = '/yjzx/research-team/delResearchTeam/' + id + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchTeamListSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this2.actions.getResearchTeamListFail(data.data);
            });
        }
    }]);

    return ResearchTeamListActions;
}();

exports.default = _alt2.default.createActions(ResearchTeamListActions);

},{"../alt":31,"./Base64":14}],30:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _Base = require('./Base64');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpreadListActions = function () {
    function SpreadListActions() {
        _classCallCheck(this, SpreadListActions);

        this.generateActions('getSpreadsSuccess', 'getSpreadsFail');
    }

    _createClass(SpreadListActions, [{
        key: 'getSpreads',
        value: function getSpreads(type) {
            var _this = this;

            var url = '/spread/list/' + type + _Base2.default.sign();
            $.ajax({ url: url, method: "GET" }).done(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getSpreadsSuccess(data.data);
            }).fail(function (data) {
                var data = _Base2.default.parseBase64(data);
                _this.actions.getSpreadsFail(data.data);
            });
        }
    }]);

    return SpreadListActions;
}();

exports.default = _alt2.default.createActions(SpreadListActions);

},{"../alt":31,"./Base64":14}],31:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],32:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AcademicExchangeStore = require('../stores/AcademicExchangeStore');

var _AcademicExchangeStore2 = _interopRequireDefault(_AcademicExchangeStore);

var _AcademicExchangeActions = require('../actions/AcademicExchangeActions');

var _AcademicExchangeActions2 = _interopRequireDefault(_AcademicExchangeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AcademicExchange = function (_React$Component) {
    _inherits(AcademicExchange, _React$Component);

    function AcademicExchange(props) {
        _classCallCheck(this, AcademicExchange);

        var _this = _possibleConstructorReturn(this, (AcademicExchange.__proto__ || Object.getPrototypeOf(AcademicExchange)).call(this, props));

        _this.state = _AcademicExchangeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AcademicExchange, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AcademicExchangeStore2.default.listen(this.onChange);
            _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AcademicExchangeStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.content);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u540D\u5B66\u672F\u4EA4\u6D41'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6807\u9898'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u4F5C\u8005'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.author
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5730\u5740'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.address
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AcademicExchange;
}(_react2.default.Component);

exports.default = AcademicExchange;

},{"../actions/AcademicExchangeActions":1,"../stores/AcademicExchangeStore":79,"react":"react"}],33:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _AcademicExchangeListStore = require('../stores/AcademicExchangeListStore');

var _AcademicExchangeListStore2 = _interopRequireDefault(_AcademicExchangeListStore);

var _AcademicExchangeListActions = require('../actions/AcademicExchangeListActions');

var _AcademicExchangeListActions2 = _interopRequireDefault(_AcademicExchangeListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AcademicExchangeList = function (_React$Component) {
    _inherits(AcademicExchangeList, _React$Component);

    function AcademicExchangeList(props) {
        _classCallCheck(this, AcademicExchangeList);

        var _this = _possibleConstructorReturn(this, (AcademicExchangeList.__proto__ || Object.getPrototypeOf(AcademicExchangeList)).call(this, props));

        _this.state = _AcademicExchangeListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AcademicExchangeList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AcademicExchangeListStore2.default.listen(this.onChange);
            _AcademicExchangeListActions2.default.getAcademicExchanges();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AcademicExchangeListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _AcademicExchangeListActions2.default.delAcademicExchange(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var AcademicExchangeList = this.state.academicExchanges.map(function (scademicExchange, index) {
                return _react2.default.createElement(
                    'div',
                    { key: scademicExchange.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement('img', { className: 'media-object', src: scademicExchange.url })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u6807\u9898 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/yjzx/academic-exchange/getAcademicExchange/' + scademicExchange.id },
                                            scademicExchange.title
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u4F5C\u8005 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    scademicExchange.author
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u5730\u5740 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    scademicExchange.address
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/syxa/academic-exchange/editAcademicExchange/' + scademicExchange.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: scademicExchange.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    AcademicExchangeList
                )
            );
        }
    }]);

    return AcademicExchangeList;
}(_react2.default.Component);

exports.default = AcademicExchangeList;

},{"../actions/AcademicExchangeListActions":2,"../stores/AcademicExchangeListStore":78,"react":"react","react-router":"react-router","underscore":"underscore"}],34:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddAcademicExchangeStore = require('../stores/AddAcademicExchangeStore');

var _AddAcademicExchangeStore2 = _interopRequireDefault(_AddAcademicExchangeStore);

var _AddAcademicExchangeActions = require('../actions/AddAcademicExchangeActions');

var _AddAcademicExchangeActions2 = _interopRequireDefault(_AddAcademicExchangeActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddAcademicExchange = function (_React$Component) {
    _inherits(AddAcademicExchange, _React$Component);

    function AddAcademicExchange(props) {
        _classCallCheck(this, AddAcademicExchange);

        var _this = _possibleConstructorReturn(this, (AddAcademicExchange.__proto__ || Object.getPrototypeOf(AddAcademicExchange)).call(this, props));

        _this.state = _AddAcademicExchangeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddAcademicExchange, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddAcademicExchangeStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddAcademicExchangeStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                title: this.state.title,
                author: this.state.author,
                address: this.state.address,
                url: $("#imgUrl").attr("src"),
                content: UE.getEditor('content').getContent()
            };
            _AddAcademicExchangeActions2.default.addAcademicExchange(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u5B66\u672F\u4EA4\u6D41'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/academic_exchange/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title,
                                            onChange: _AddAcademicExchangeActions2.default.updateTitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.author,
                                            onChange: _AddAcademicExchangeActions2.default.updateAuthor, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5730\u5740'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.address,
                                            onChange: _AddAcademicExchangeActions2.default.updateAddress, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddAcademicExchange;
}(_react2.default.Component);

exports.default = AddAcademicExchange;

},{"../actions/AddAcademicExchangeActions":3,"../stores/AddAcademicExchangeStore":80,"./Ueditor":75,"react":"react"}],35:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddDocumentStore = require('../stores/AddDocumentStore');

var _AddDocumentStore2 = _interopRequireDefault(_AddDocumentStore);

var _AddDocumentActions = require('../actions/AddDocumentActions');

var _AddDocumentActions2 = _interopRequireDefault(_AddDocumentActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddDocument = function (_React$Component) {
    _inherits(AddDocument, _React$Component);

    function AddDocument(props) {
        _classCallCheck(this, AddDocument);

        var _this = _possibleConstructorReturn(this, (AddDocument.__proto__ || Object.getPrototypeOf(AddDocument)).call(this, props));

        _this.state = _AddDocumentStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddDocument, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddDocumentStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddDocumentStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange() {}
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                name: $("#name").val(),
                size: $("#size").val(),
                url: $("#fileUrl").val()
            };
            _AddDocumentActions2.default.addDocument(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".doc" || objType === ".docx" || objType === ".pdf" || objType === ".zip" || objType === ".png" || objType === ".jpg" || objType === ".xls" || objType === ".xlsx" || objType === ".exe")) {
                    alert("请选择合法文档");
                    return false;
                }
                $.ajax({
                    url: '/apkUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    $("#fileUrl").val(res.src);
                    $("#size").val(res.size);
                    $("#imgUrl").attr("src", res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u6DFB\u52A0\u6587\u6863'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6587\u6863'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/document/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'fileUrl', defaultValue: '' }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u540D\u5B57'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name', defaultValue: '' })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5927\u5C0F'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'size', defaultValue: '' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddDocument;
}(_react2.default.Component);

exports.default = AddDocument;

},{"../actions/AddDocumentActions":4,"../stores/AddDocumentStore":81,"./Ueditor":75,"react":"react"}],36:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddFlowStore = require('../stores/AddFlowStore');

var _AddFlowStore2 = _interopRequireDefault(_AddFlowStore);

var _AddFlowActions = require('../actions/AddFlowActions');

var _AddFlowActions2 = _interopRequireDefault(_AddFlowActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddFlow = function (_React$Component) {
    _inherits(AddFlow, _React$Component);

    function AddFlow(props) {
        _classCallCheck(this, AddFlow);

        var _this = _possibleConstructorReturn(this, (AddFlow.__proto__ || Object.getPrototypeOf(AddFlow)).call(this, props));

        _this.state = _AddFlowStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddFlow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddFlowStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddFlowStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                name: this.state.name,
                author: this.state.author,
                url: $("#imgUrl").attr("src"),
                content: UE.getEditor('content').getContent()
            };
            _AddFlowActions2.default.addFlow(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u6D41\u7A0B'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6D41\u7A0B\u56FE'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/flow/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u540D\u5B57'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _AddFlowActions2.default.updateName, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.author,
                                            onChange: _AddFlowActions2.default.updateAuthor, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddFlow;
}(_react2.default.Component);

exports.default = AddFlow;

},{"../actions/AddFlowActions":5,"../stores/AddFlowStore":82,"./Ueditor":75,"react":"react"}],37:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddMasterTeamStore = require('../stores/AddMasterTeamStore');

var _AddMasterTeamStore2 = _interopRequireDefault(_AddMasterTeamStore);

var _AddMasterTeamActions = require('../actions/AddMasterTeamActions');

var _AddMasterTeamActions2 = _interopRequireDefault(_AddMasterTeamActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddResearchTeam = function (_React$Component) {
    _inherits(AddResearchTeam, _React$Component);

    function AddResearchTeam(props) {
        _classCallCheck(this, AddResearchTeam);

        var _this = _possibleConstructorReturn(this, (AddResearchTeam.__proto__ || Object.getPrototypeOf(AddResearchTeam)).call(this, props));

        _this.state = _AddMasterTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddResearchTeam, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddMasterTeamStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddMasterTeamStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                name: this.state.name,
                url: $("#imgUrl").attr("src"),
                job: this.state.job,
                aliases: this.state.aliases,
                introduction: this.state.introduction,
                content: UE.getEditor('content').getContent()
            };
            _AddMasterTeamActions2.default.addMasterTeam(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u540D\u5E08\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5934\u50CF'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/pxjd/master_team/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u59D3\u540D'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _AddMasterTeamActions2.default.updateName, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u522B\u540D'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.aliases,
                                            onChange: _AddMasterTeamActions2.default.updateAliases, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7B80\u4ECB'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.introduction,
                                            onChange: _AddMasterTeamActions2.default.updateIntroduction, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u804C\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.job,
                                            onChange: _AddMasterTeamActions2.default.updateJob, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddResearchTeam;
}(_react2.default.Component);

exports.default = AddResearchTeam;

},{"../actions/AddMasterTeamActions":6,"../stores/AddMasterTeamStore":83,"./Ueditor":75,"react":"react"}],38:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddNewsConsultStore = require('../stores/AddNewsConsultStore');

var _AddNewsConsultStore2 = _interopRequireDefault(_AddNewsConsultStore);

var _AddNewsConsultActions = require('../actions/AddNewsConsultActions');

var _AddNewsConsultActions2 = _interopRequireDefault(_AddNewsConsultActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //此处是创建一个添加新闻公告/公司动态的组件


var AddNewsConsult = function (_React$Component) {
    _inherits(AddNewsConsult, _React$Component);

    function AddNewsConsult(props) {
        _classCallCheck(this, AddNewsConsult);

        var _this = _possibleConstructorReturn(this, (AddNewsConsult.__proto__ || Object.getPrototypeOf(AddNewsConsult)).call(this, props));

        _this.state = _AddNewsConsultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddNewsConsult, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddNewsConsultStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddNewsConsultStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                title: this.state.title,
                author: this.state.author,
                subtitle: this.state.subtitle,
                type: this.state.type,
                content: '<p style="text-align: center;"><span>' + this.state.title + '</span></p></br></br>' + UE.getEditor('content').getContent(),
                top_img: $("#imgUrl").attr("src")
            };
            _AddNewsConsultActions2.default.addNewsConsult(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u65B0\u95FB\u516C\u544A/\u516C\u53F8\u52A8\u6001'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/syxa/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title,
                                            onChange: _AddNewsConsultActions2.default.updateTitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.author,
                                            onChange: _AddNewsConsultActions2.default.updateAuthor, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5B50\u6807\u9898'
                                        ),
                                        _react2.default.createElement('textarea', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.subtitle,
                                            onChange: _AddNewsConsultActions2.default.updateSubtitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7C7B\u578B'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'female', value: '1', checked: this.state.type === '1',
                                                onChange: _AddNewsConsultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'female' },
                                                '\u516C\u53F8\u52A8\u6001'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'gender', id: 'male', value: '2', checked: this.state.type === '2',
                                                onChange: _AddNewsConsultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'male' },
                                                '\u65B0\u95FB\u8D44\u8BAF'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u5185\u5BB9'
                                            ),
                                            _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddNewsConsult;
}(_react2.default.Component);

exports.default = AddNewsConsult;

},{"../actions/AddNewsConsultActions":7,"../stores/AddNewsConsultStore":84,"./Ueditor":75,"react":"react"}],39:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddResearchProjectStore = require('../stores/AddResearchProjectStore');

var _AddResearchProjectStore2 = _interopRequireDefault(_AddResearchProjectStore);

var _AddResearchProjectActions = require('../actions/AddResearchProjectActions');

var _AddResearchProjectActions2 = _interopRequireDefault(_AddResearchProjectActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //此处是创建一个添加新闻公告/公司动态的组件


var AddResearchProject = function (_React$Component) {
    _inherits(AddResearchProject, _React$Component);

    function AddResearchProject(props) {
        _classCallCheck(this, AddResearchProject);

        var _this = _possibleConstructorReturn(this, (AddResearchProject.__proto__ || Object.getPrototypeOf(AddResearchProject)).call(this, props));

        _this.state = _AddResearchProjectStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddResearchProject, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddResearchProjectStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddResearchProjectStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                title: this.state.title,
                url: $("#imgUrl").attr("src"),
                summary: UE.getEditor('content').getContent()
            };
            _AddResearchProjectActions2.default.addResearchProject(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u7814\u7A76\u9879\u76EE'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_project/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u9879\u76EE\u540D\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title,
                                            onChange: _AddResearchProjectActions2.default.updateTitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u63CF\u8FF0'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddResearchProject;
}(_react2.default.Component);

exports.default = AddResearchProject;

},{"../actions/AddResearchProjectActions":8,"../stores/AddResearchProjectStore":85,"./Ueditor":75,"react":"react"}],40:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddResearchResultStore = require('../stores/AddResearchResultStore');

var _AddResearchResultStore2 = _interopRequireDefault(_AddResearchResultStore);

var _AddResearchResultActions = require('../actions/AddResearchResultActions');

var _AddResearchResultActions2 = _interopRequireDefault(_AddResearchResultActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //此处是创建一个添加新闻公告/公司动态的组件


var AddResearchResult = function (_React$Component) {
    _inherits(AddResearchResult, _React$Component);

    function AddResearchResult(props) {
        _classCallCheck(this, AddResearchResult);

        var _this = _possibleConstructorReturn(this, (AddResearchResult.__proto__ || Object.getPrototypeOf(AddResearchResult)).call(this, props));

        _this.state = _AddResearchResultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddResearchResult, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddResearchResultStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddResearchResultStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                title: this.state.title,
                type: this.state.type,
                url: $("#imgUrl").attr("src"),
                summary: UE.getEditor('content').getContent()
            };
            _AddResearchResultActions2.default.addResearchResult(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u7814\u7A76\u6210\u679C'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_result/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title,
                                            onChange: _AddResearchResultActions2.default.updateTitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7C7B\u578B'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zl', value: '1', checked: this.state.type === '1',
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'zl' },
                                                '\u4E13\u5229'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'rz', value: '2', checked: this.state.type === '2',
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'rz' },
                                                '\u8F6F\u8457'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'hj', value: '3', checked: this.state.type === '3',
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'hj' },
                                                '\u83B7\u5956'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'xm', value: '4', checked: this.state.type === '4',
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'xm' },
                                                '\u9879\u76EE'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'lw', value: '5', checked: this.state.type === '5',
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'lw' },
                                                '\u8BBA\u6587'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u63CF\u8FF0'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddResearchResult;
}(_react2.default.Component);

exports.default = AddResearchResult;

},{"../actions/AddResearchResultActions":9,"../stores/AddResearchResultStore":86,"./Ueditor":75,"react":"react"}],41:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddResearchTeamStore = require('../stores/AddResearchTeamStore');

var _AddResearchTeamStore2 = _interopRequireDefault(_AddResearchTeamStore);

var _AddResearchTeamActions = require('../actions/AddResearchTeamActions');

var _AddResearchTeamActions2 = _interopRequireDefault(_AddResearchTeamActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //此处是创建一个添加新闻公告/公司动态的组件


var AddResearchTeam = function (_React$Component) {
    _inherits(AddResearchTeam, _React$Component);

    function AddResearchTeam(props) {
        _classCallCheck(this, AddResearchTeam);

        var _this = _possibleConstructorReturn(this, (AddResearchTeam.__proto__ || Object.getPrototypeOf(AddResearchTeam)).call(this, props));

        _this.state = _AddResearchTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddResearchTeam, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddResearchTeamStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddResearchTeamStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                name: this.state.name,
                type: this.state.type,
                url: $("#imgUrl").attr("src"),
                academy: this.state.academy,
                summary: UE.getEditor('content').getContent()
            };
            _AddResearchTeamActions2.default.addResearchTeam(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u7814\u7A76\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_team/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: '/img/default.gif' }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u56E2\u961F\u540D\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name,
                                            onChange: _AddResearchTeamActions2.default.updateName, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js', value: '1', checked: this.state.type === '1',
                                                onChange: _AddResearchTeamActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'js' },
                                                '\u6559\u6388'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zj', value: '2', checked: this.state.type === '2',
                                                onChange: _AddResearchTeamActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'zj' },
                                                '\u4E13\u5BB6'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js2', value: '3', checked: this.state.type === '3',
                                                onChange: _AddResearchTeamActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'js2' },
                                                '\u6280\u672F'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7B80\u4ECB'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.academy,
                                            onChange: _AddResearchTeamActions2.default.updateAcademy, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u63CF\u8FF0'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddResearchTeam;
}(_react2.default.Component);

exports.default = AddResearchTeam;

},{"../actions/AddResearchTeamActions":10,"../stores/AddResearchTeamStore":87,"./Ueditor":75,"react":"react"}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddSpreadStore = require('../stores/AddSpreadStore');

var _AddSpreadStore2 = _interopRequireDefault(_AddSpreadStore);

var _AddSpreadActions = require('../actions/AddSpreadActions');

var _AddSpreadActions2 = _interopRequireDefault(_AddSpreadActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddSpread = function (_React$Component) {
    _inherits(AddSpread, _React$Component);

    function AddSpread(props) {
        _classCallCheck(this, AddSpread);

        var _this = _possibleConstructorReturn(this, (AddSpread.__proto__ || Object.getPrototypeOf(AddSpread)).call(this, props));

        _this.state = _AddSpreadStore2.default.getState();
        return _this;
    }

    _createClass(AddSpread, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var spread = this;
            $("input[type='radio']").on("click", function () {
                switch ($(this).val()) {
                    case "1":
                        spread.setState({ baseUrl: "public/img/spread/syxa/", type: 1 });
                        break;
                    case "2":
                        spread.setState({ baseUrl: "public/img/spread/pxjd/", type: 2 });
                        break;
                    case "3":
                        spread.setState({ baseUrl: "public/img/spread/yjzx/", type: 3 });
                        break;
                    default:
                        break;
                }
            });
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            if (this.state.baseUrl.length < 1) {
                alert("请先选择上传图片的类型!");
                return false;
            }
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'subBtn',
        value: function subBtn() {
            _AddSpreadActions2.default.addSpread({ type: this.state.type, url: $("#imgUrl").attr("src") });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u521B\u5EFA\u5C55\u677F'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'help-block' },
                                this.state.helpBlock
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row ' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-6' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u56FE\u7247:'
                                            ),
                                            _react2.default.createElement(
                                                'form',
                                                null,
                                                _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: this.state.baseUrl }),
                                                _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '300', width: '300', src: '/img/default.gif' }),
                                                _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-6' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u7C7B\u578B:'
                                            ),
                                            _react2.default.createElement('br', null),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'radio radio-inline' },
                                                _react2.default.createElement('input', { type: 'radio', name: 'type', value: '1', id: 'syxa' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { htmlFor: 'syxa' },
                                                    '\u6570\u5143\u4FE1\u5B89'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'radio radio-inline' },
                                                _react2.default.createElement('input', { type: 'radio', name: 'type', value: '2', id: 'pxjd' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { htmlFor: 'pxjd' },
                                                    '\u57F9\u8BAD\u57FA\u5730'
                                                )
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                { className: 'radio  radio-inline' },
                                                _react2.default.createElement('input', { type: 'radio', name: 'type', value: '3', id: 'yjzx' }),
                                                _react2.default.createElement(
                                                    'label',
                                                    { htmlFor: 'yjzx' },
                                                    '\u7814\u7A76\u4E2D\u5FC3'
                                                )
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn btn-primary subBtn', onClick: this.subBtn.bind(this) },
                                    '\u63D0\u4EA4'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddSpread;
}(_react2.default.Component);

exports.default = AddSpread;

},{"../actions/AddSpreadActions":11,"../stores/AddSpreadStore":88,"react":"react"}],43:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ApkStore = require('../stores/ApkStore');

var _ApkStore2 = _interopRequireDefault(_ApkStore);

var _ApkActions = require('../actions/ApkActions');

var _ApkActions2 = _interopRequireDefault(_ApkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Apk = function (_React$Component) {
    _inherits(Apk, _React$Component);

    function Apk(props) {
        _classCallCheck(this, Apk);

        var _this = _possibleConstructorReturn(this, (Apk.__proto__ || Object.getPrototypeOf(Apk)).call(this, props));

        _this.state = _ApkStore2.default.getState();
        return _this;
    }

    _createClass(Apk, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".apk")) {
                    alert("请上传apk文件");
                    return false;
                }
                if (objType === ".apk") {
                    $.ajax({
                        url: '/apkUpload/add',
                        type: 'POST',
                        cache: false,
                        data: new FormData(formDom[0]),
                        processData: false,
                        contentType: false
                    }).done(function (res) {
                        imgEle.attr('src', res.src);
                        $("#size").val(res.size);
                        $("#download").val(res.url);
                    }).fail(function (res) {});
                }
            });
        }
    }, {
        key: 'subBtn',
        value: function subBtn() {
            var reqData = {
                name: $("#name").val(),
                version: $("#version").val(),
                url: $("#apkUrl").attr("src"),
                down_url: $("#download").val(),
                size: $("#size").val()
            };
            _ApkActions2.default.addApk(reqData);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u6DFB\u52A0Apk'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'row ' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'col-sm-6' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement('input', { type: 'hidden', id: 'download' }),
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u540D\u79F0'
                                            ),
                                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name'
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u7248\u672C'
                                            ),
                                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'version'
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement('input', { type: 'hidden', id: 'download' }),
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u5927\u5C0F'
                                            ),
                                            _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'size'
                                            })
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                'Apk:'
                                            ),
                                            _react2.default.createElement(
                                                'form',
                                                null,
                                                _react2.default.createElement('input', { type: 'hidden', name: 'imgurl', id: 'imgurl', value: '' }),
                                                _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/apk/' }),
                                                _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'apkUrl', height: '150', width: '150', src: '/img/default.gif' }),
                                                _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                            )
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'button',
                                    { type: 'submit', className: 'btn btn-primary subBtn', onClick: this.subBtn.bind(this) },
                                    '\u63D0\u4EA4'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Apk;
}(_react2.default.Component);

exports.default = Apk;

},{"../actions/ApkActions":12,"../stores/ApkStore":90,"react":"react"}],44:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _ApkListStore = require('../stores/ApkListStore');

var _ApkListStore2 = _interopRequireDefault(_ApkListStore);

var _ApkListActions = require('../actions/ApkListActions');

var _ApkListActions2 = _interopRequireDefault(_ApkListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ApkList = function (_React$Component) {
    _inherits(ApkList, _React$Component);

    function ApkList(props) {
        _classCallCheck(this, ApkList);

        var _this = _possibleConstructorReturn(this, (ApkList.__proto__ || Object.getPrototypeOf(ApkList)).call(this, props));

        _this.state = _ApkListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ApkList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ApkListStore2.default.listen(this.onChange);
            _ApkListActions2.default.getApks();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ApkListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var ListApk = this.state.apks.map(function (apk, index) {
                return _react2.default.createElement(
                    'div',
                    { key: apk.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-left thumb-lg' },
                                _react2.default.createElement('img', { className: 'media-object', src: apk.url })
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u540D\u5B57 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/#' + apk.id },
                                            apk.name
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u7248\u672C ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    apk.version
                                )
                            ),
                            _react2.default.createElement('br', null)
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    ListApk
                )
            );
        }
    }]);

    return ApkList;
}(_react2.default.Component);

exports.default = ApkList;

},{"../actions/ApkListActions":13,"../stores/ApkListStore":89,"react":"react","react-router":"react-router","underscore":"underscore"}],45:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"react":"react"}],46:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AcademicExchangeStore = require('../stores/AcademicExchangeStore');

var _AcademicExchangeStore2 = _interopRequireDefault(_AcademicExchangeStore);

var _AcademicExchangeActions = require('../actions/AcademicExchangeActions');

var _AcademicExchangeActions2 = _interopRequireDefault(_AcademicExchangeActions);

var _AddAcademicExchangeActions = require('../actions/AddAcademicExchangeActions');

var _AddAcademicExchangeActions2 = _interopRequireDefault(_AddAcademicExchangeActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditAcademicExchange = function (_React$Component) {
    _inherits(EditAcademicExchange, _React$Component);

    function EditAcademicExchange(props) {
        _classCallCheck(this, EditAcademicExchange);

        var _this = _possibleConstructorReturn(this, (EditAcademicExchange.__proto__ || Object.getPrototypeOf(EditAcademicExchange)).call(this, props));

        _this.state = _AcademicExchangeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditAcademicExchange, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AcademicExchangeStore2.default.unlisten(this.onChange);
            _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AcademicExchangeStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _AcademicExchangeActions2.default.getAcademicExchange(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                title: $("#title").val(),
                author: $("#author").val(),
                address: $("#address").val(),
                content: UE.getEditor('content').getContent(),
                url: $("#imgUrl").attr("src")
            };
            _AddAcademicExchangeActions2.default.editAcademicExchange(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u5B66\u672F\u4EA4\u6D41'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/academic_exchange/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'title', ref: 'nameTextField', defaultValue: this.state.title,
                                            onChange: _AcademicExchangeActions2.default.updateTitle })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'author', ref: 'nameTextField', defaultValue: this.state.author,
                                            onChange: _AcademicExchangeActions2.default.updateAuthor, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5730\u5740'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'address', ref: 'nameTextField', defaultValue: this.state.address,
                                            onChange: _AcademicExchangeActions2.default.updateAddress, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.content, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditAcademicExchange;
}(_react2.default.Component);

exports.default = EditAcademicExchange;

},{"../actions/AcademicExchangeActions":1,"../actions/AddAcademicExchangeActions":3,"../stores/AcademicExchangeStore":79,"./Ueditor":75,"react":"react"}],47:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlowStore = require('../stores/FlowStore');

var _FlowStore2 = _interopRequireDefault(_FlowStore);

var _FlowActions = require('../actions/FlowActions');

var _FlowActions2 = _interopRequireDefault(_FlowActions);

var _AddFlowActions = require('../actions/AddFlowActions');

var _AddFlowActions2 = _interopRequireDefault(_AddFlowActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditMasterTeam = function (_React$Component) {
    _inherits(EditMasterTeam, _React$Component);

    function EditMasterTeam(props) {
        _classCallCheck(this, EditMasterTeam);

        var _this = _possibleConstructorReturn(this, (EditMasterTeam.__proto__ || Object.getPrototypeOf(EditMasterTeam)).call(this, props));

        _this.state = _FlowStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditMasterTeam, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _FlowActions2.default.getFlow(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FlowStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FlowStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                name: $("#name").val(),
                author: $("#author").val(),
                url: $("#imgUrl").attr("src"),
                content: UE.getEditor('content').getContent()
            };
            _AddFlowActions2.default.editFlow(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u6D41\u7A0B'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/flow/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u540D\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name', ref: 'nameTextField', defaultValue: this.state.name,
                                            onChange: _AddFlowActions2.default.updateName })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'author', ref: 'nameTextField', defaultValue: this.state.author,
                                            onChange: _AddFlowActions2.default.updateAuthor })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.content, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditMasterTeam;
}(_react2.default.Component);

exports.default = EditMasterTeam;

},{"../actions/AddFlowActions":5,"../actions/FlowActions":17,"../stores/FlowStore":94,"./Ueditor":75,"react":"react"}],48:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MasterTeamStore = require('../stores/MasterTeamStore');

var _MasterTeamStore2 = _interopRequireDefault(_MasterTeamStore);

var _MasterTeamActions = require('../actions/MasterTeamActions');

var _MasterTeamActions2 = _interopRequireDefault(_MasterTeamActions);

var _AddMasterTeamActions = require('../actions/AddMasterTeamActions');

var _AddMasterTeamActions2 = _interopRequireDefault(_AddMasterTeamActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditMasterTeam = function (_React$Component) {
    _inherits(EditMasterTeam, _React$Component);

    function EditMasterTeam(props) {
        _classCallCheck(this, EditMasterTeam);

        var _this = _possibleConstructorReturn(this, (EditMasterTeam.__proto__ || Object.getPrototypeOf(EditMasterTeam)).call(this, props));

        _this.state = _MasterTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditMasterTeam, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _MasterTeamStore2.default.unlisten(this.onChange);
            _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _MasterTeamStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                name: $("#name").val(),
                job: $("#job").val(),
                introduction: $("#introduction").val(),
                aliases: $("#aliases").val(),
                url: $("#imgUrl").attr("src"),
                content: UE.getEditor('content').getContent()
            };
            _AddMasterTeamActions2.default.editMasterTeam(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u540D\u5E08\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/pxjd/master_team/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u540D\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name', ref: 'nameTextField', defaultValue: this.state.name,
                                            onChange: _AddMasterTeamActions2.default.updateName })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u522B\u540D'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'aliases', ref: 'nameTextField', defaultValue: this.state.aliases,
                                            onChange: _AddMasterTeamActions2.default.updateAliases })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7B80\u4ECB'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'introduction', ref: 'nameTextField', defaultValue: this.state.introduction,
                                            onChange: _AddMasterTeamActions2.default.updateIntroduction })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u804C\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'job', ref: 'nameTextField', defaultValue: this.state.job,
                                            onChange: _AddMasterTeamActions2.default.updateJob, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.content, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditMasterTeam;
}(_react2.default.Component);

exports.default = EditMasterTeam;

},{"../actions/AddMasterTeamActions":6,"../actions/MasterTeamActions":19,"../stores/MasterTeamStore":96,"./Ueditor":75,"react":"react"}],49:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewsConsultStore = require('../stores/NewsConsultStore');

var _NewsConsultStore2 = _interopRequireDefault(_NewsConsultStore);

var _NewsConsultActions = require('../actions/NewsConsultActions');

var _NewsConsultActions2 = _interopRequireDefault(_NewsConsultActions);

var _AddNewsConsultActions = require('../actions/AddNewsConsultActions');

var _AddNewsConsultActions2 = _interopRequireDefault(_AddNewsConsultActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditNewsConsult = function (_React$Component) {
    _inherits(EditNewsConsult, _React$Component);

    function EditNewsConsult(props) {
        _classCallCheck(this, EditNewsConsult);

        var _this = _possibleConstructorReturn(this, (EditNewsConsult.__proto__ || Object.getPrototypeOf(EditNewsConsult)).call(this, props));

        _this.state = _NewsConsultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditNewsConsult, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NewsConsultStore2.default.unlisten(this.onChange);
            _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NewsConsultStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                title: $("#title").val(),
                author: $("#author").val(),
                subtitle: $("#subtitle").val(),
                type: $('input:radio[name="type"]:checked').val(),
                top_img: $("#imgUrl").attr("src"),
                content: UE.getEditor('content').getContent()
            };
            _AddNewsConsultActions2.default.editNewsConsult(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var top_img = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u65B0\u95FB\u8D44\u8BAF/\u516C\u53F8\u52A8\u6001'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/syxa/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.top_img || top_img }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'title', ref: 'nameTextField', defaultValue: this.state.title,
                                            onChange: this.updateTitle })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u4F5C\u8005'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'author', ref: 'nameTextField', defaultValue: this.state.author,
                                            onChange: _AddNewsConsultActions2.default.updateAuthor, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5B50\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'subtitle', ref: 'nameTextField', defaultValue: this.state.subtitle,
                                            onChange: _AddNewsConsultActions2.default.updateSubtitle, autoFocus: true })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7C7B\u578B'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'female', value: '1', defaultChecked: this.state.type === 1
                                            }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'female' },
                                                '\u65B0\u95FB\u54A8\u8BE2'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'male', value: '2', defaultChecked: this.state.type === 2
                                            }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'male' },
                                                '\u516C\u53F8\u52A8\u6001'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'form-group ' },
                                            _react2.default.createElement(
                                                'label',
                                                { className: 'control-label' },
                                                '\u5185\u5BB9'
                                            ),
                                            _react2.default.createElement(_Ueditor2.default, { name: this.state.content, id: 'content', height: '400' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditNewsConsult;
}(_react2.default.Component);

exports.default = EditNewsConsult;

},{"../actions/AddNewsConsultActions":7,"../actions/NewsConsultActions":22,"../stores/NewsConsultStore":99,"./Ueditor":75,"react":"react"}],50:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchProjectStore = require('../stores/ResearchProjectStore');

var _ResearchProjectStore2 = _interopRequireDefault(_ResearchProjectStore);

var _ResearchProjectActions = require('../actions/ResearchProjectActions');

var _ResearchProjectActions2 = _interopRequireDefault(_ResearchProjectActions);

var _AddResearchProjectActions = require('../actions/AddResearchProjectActions');

var _AddResearchProjectActions2 = _interopRequireDefault(_AddResearchProjectActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditResearchProject = function (_React$Component) {
    _inherits(EditResearchProject, _React$Component);

    function EditResearchProject(props) {
        _classCallCheck(this, EditResearchProject);

        var _this = _possibleConstructorReturn(this, (EditResearchProject.__proto__ || Object.getPrototypeOf(EditResearchProject)).call(this, props));

        _this.state = _ResearchProjectStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditResearchProject, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchProjectStore2.default.unlisten(this.onChange);
            _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchProjectStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                title: $("#title").val(),
                url: $("#imgUrl").attr("src"),
                summary: UE.getEditor('content').getContent()
            };
            _AddResearchProjectActions2.default.editMasterTeam(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u7814\u7A76\u5DE5\u7A0B'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_project/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'title', ref: 'nameTextField', defaultValue: this.state.title,
                                            onChange: _AddResearchProjectActions2.default.updateTitle })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.summary, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditResearchProject;
}(_react2.default.Component);

exports.default = EditResearchProject;

},{"../actions/AddResearchProjectActions":8,"../actions/ResearchProjectActions":24,"../stores/ResearchProjectStore":101,"./Ueditor":75,"react":"react"}],51:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchResultStore = require('../stores/ResearchResultStore');

var _ResearchResultStore2 = _interopRequireDefault(_ResearchResultStore);

var _ResearchResultActions = require('../actions/ResearchResultActions');

var _ResearchResultActions2 = _interopRequireDefault(_ResearchResultActions);

var _AddResearchResultActions = require('../actions/AddResearchResultActions');

var _AddResearchResultActions2 = _interopRequireDefault(_AddResearchResultActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditResearchResult = function (_React$Component) {
    _inherits(EditResearchResult, _React$Component);

    function EditResearchResult(props) {
        _classCallCheck(this, EditResearchResult);

        var _this = _possibleConstructorReturn(this, (EditResearchResult.__proto__ || Object.getPrototypeOf(EditResearchResult)).call(this, props));

        _this.state = _ResearchResultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditResearchResult, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchResultActions2.default.getResearchResult(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchResultStore2.default.unlisten(this.onChange);
            _ResearchResultActions2.default.getResearchResult(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchResultStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchResultActions2.default.getResearchResult(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                title: $("#title").val(),
                type: $('input:radio[name="type"]:checked').val(),
                url: $("#imgUrl").attr("src"),
                summary: UE.getEditor('content').getContent()
            };
            _AddResearchResultActions2.default.editResearchResult(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u7814\u7A76\u6210\u679C'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_result/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'span',
                                        { className: 'help-block' },
                                        this.state.helpBlock
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u6807\u9898'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'title', ref: 'nameTextField', defaultValue: this.state.title,
                                            onChange: _AddResearchResultActions2.default.updateTitle })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7C7B\u578B'
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zl', value: '1', defaultChecked: this.state.type == "1",
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'zl' },
                                                '\u4E13\u5229'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'rz', value: '2', defaultChecked: this.state.type == "2",
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'rz' },
                                                '\u8F6F\u8457'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'hj', value: '3', defaultChecked: this.state.type == "3",
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'hj' },
                                                '\u83B7\u5956'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'xm', value: '4', defaultChecked: this.state.type == "4",
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'xm' },
                                                '\u9879\u76EE'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'lw', value: '5', defaultChecked: this.state.type == "5",
                                                onChange: _AddResearchResultActions2.default.updateType }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'lw' },
                                                '\u8BBA\u6587'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.summary, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditResearchResult;
}(_react2.default.Component);

exports.default = EditResearchResult;

},{"../actions/AddResearchResultActions":9,"../actions/ResearchResultActions":26,"../stores/ResearchResultStore":103,"./Ueditor":75,"react":"react"}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchTeamStore = require('../stores/ResearchTeamStore');

var _ResearchTeamStore2 = _interopRequireDefault(_ResearchTeamStore);

var _ResearchTeamActions = require('../actions/ResearchTeamActions');

var _ResearchTeamActions2 = _interopRequireDefault(_ResearchTeamActions);

var _AddResearchTeamActions = require('../actions/AddResearchTeamActions');

var _AddResearchTeamActions2 = _interopRequireDefault(_AddResearchTeamActions);

var _Ueditor = require('./Ueditor');

var _Ueditor2 = _interopRequireDefault(_Ueditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditResearchTeam = function (_React$Component) {
    _inherits(EditResearchTeam, _React$Component);

    function EditResearchTeam(props) {
        _classCallCheck(this, EditResearchTeam);

        var _this = _possibleConstructorReturn(this, (EditResearchTeam.__proto__ || Object.getPrototypeOf(EditResearchTeam)).call(this, props));

        _this.state = _ResearchTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(EditResearchTeam, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchTeamStore2.default.unlisten(this.onChange);
            _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchTeamStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();
            var reqData = {
                id: this.state.id,
                name: $("#name").val(),
                academy: $("#academy").val(),
                type: $('input:radio[name="type"]:checked').val(),
                url: $("#imgUrl").attr("src"),
                summary: UE.getEditor('content').getContent(),
                aliases: $("#aliases").val(),
                professional: $("#professional").val()
            };
            _AddResearchTeamActions2.default.editResearchTeam(reqData);
        }
    }, {
        key: 'imgAjaxUpload',
        value: function imgAjaxUpload(event) {
            var self = this;
            event.preventDefault();
            var imgEle = $(event.target),
                formDom = $(event.target.parentNode),
                fileEle = $(event.target.nextSibling);
            fileEle.click();
            fileEle.on('change', function () {
                var objFile = $(this).val();
                var objType = objFile.substring(objFile.lastIndexOf(".")).toLowerCase();
                if (!(objType === ".jpg" || objType === ".png" || objType === ".jpeg")) {
                    alert("请选择.jpg/.png/.jpeg类型的图片");
                    return false;
                }
                $.ajax({
                    url: '/fileUpload/add',
                    type: 'POST',
                    cache: false,
                    data: new FormData(formDom[0]),
                    processData: false,
                    contentType: false
                }).done(function (res) {
                    imgEle.attr('src', res.src);
                }).fail(function (res) {});
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                opacity: 0
            };
            var url = "/img/default.gif";
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u7F16\u8F91\u7814\u7A76\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'help-block' },
                                    this.state.helpBlock
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement(
                                        'form',
                                        null,
                                        _react2.default.createElement('input', { type: 'hidden', name: 'baseUrl', value: 'public/img/yjzx/research_team/' }),
                                        _react2.default.createElement('img', { onClick: this.imgAjaxUpload.bind(this), id: 'imgUrl', height: '200', width: '200', src: this.state.url || url }),
                                        _react2.default.createElement('input', { name: 'img', type: 'file', style: style })
                                    )
                                ),
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('input', { type: 'hidden', id: 'id', value: this.state.id }),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u56E2\u961F\u540D\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'name', ref: 'nameTextField', defaultValue: this.state.name,
                                            onChange: _ResearchTeamActions2.default.updateName })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u522B\u540D'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'aliases', ref: 'nameTextField', defaultValue: this.state.aliases,
                                            onChange: _ResearchTeamActions2.default.updateAliases })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u804C\u79F0'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'professional', ref: 'nameTextField', defaultValue: this.state.professional,
                                            onChange: _ResearchTeamActions2.default.updateProfessional })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js', value: '1', defaultChecked: this.state.type == 1
                                            }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'js' },
                                                '\u6559\u6388'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zj', value: '2', defaultChecked: this.state.type == 2
                                            }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'zj' },
                                                '\u4E13\u5BB6'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js1', value: '3', defaultChecked: this.state.type == 3
                                            }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: 'js1' },
                                                '\u6280\u672F'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u7B80\u4ECB'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', id: 'academy', ref: 'nameTextField', defaultValue: this.state.academy,
                                            onChange: _ResearchTeamActions2.default.updateAcademy })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u63CF\u8FF0'
                                        ),
                                        _react2.default.createElement(_Ueditor2.default, { name: this.state.summary, id: 'content', height: '400' })
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary subBtn' },
                                        '\u63D0\u4EA4'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return EditResearchTeam;
}(_react2.default.Component);

exports.default = EditResearchTeam;

},{"../actions/AddResearchTeamActions":10,"../actions/ResearchTeamActions":28,"../stores/ResearchTeamStore":105,"./Ueditor":75,"react":"react"}],53:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Error = function (_React$Component) {
    _inherits(Error, _React$Component);

    function Error() {
        _classCallCheck(this, Error);

        return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
    }

    _createClass(Error, [{
        key: "render",
        value: function render() {
            var style = {
                width: "100%",
                height: "100%"
            };
            var div = {
                "position": "absolute",
                "width": "100%",
                "height": "100%",
                "z-index": -1
            };
            return _react2.default.createElement(
                "div",
                { className: div },
                _react2.default.createElement("img", { height: style.height, width: style.width, src: "/error.jpg" })
            );
        }
    }]);

    return Error;
}(_react2.default.Component);

exports.default = Error;

},{"react":"react"}],54:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FeedBackStore = require('../stores/FeedBackStore');

var _FeedBackStore2 = _interopRequireDefault(_FeedBackStore);

var _FeedBackActions = require('../actions/FeedBackActions');

var _FeedBackActions2 = _interopRequireDefault(_FeedBackActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedBack = function (_React$Component) {
    _inherits(FeedBack, _React$Component);

    function FeedBack(props) {
        _classCallCheck(this, FeedBack);

        var _this = _possibleConstructorReturn(this, (FeedBack.__proto__ || Object.getPrototypeOf(FeedBack)).call(this, props));

        _this.state = _FeedBackStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(FeedBack, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _FeedBackActions2.default.getFeedBack(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FeedBackStore2.default.listen(this.onChange);
            _FeedBackActions2.default.getFeedBack(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FeedBackStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _FeedBackActions2.default.getFeedBack(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.message);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u53CD\u9988\u62A5\u544A'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u59D3\u540D'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        'Email'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.email
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return FeedBack;
}(_react2.default.Component);

exports.default = FeedBack;

},{"../actions/FeedBackActions":15,"../stores/FeedBackStore":92,"react":"react"}],55:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _FeedBackListStore = require('../stores/FeedBackListStore');

var _FeedBackListStore2 = _interopRequireDefault(_FeedBackListStore);

var _FeedBackListActions = require('../actions/FeedBackListActions');

var _FeedBackListActions2 = _interopRequireDefault(_FeedBackListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeedBackList = function (_React$Component) {
    _inherits(FeedBackList, _React$Component);

    function FeedBackList(props) {
        _classCallCheck(this, FeedBackList);

        var _this = _possibleConstructorReturn(this, (FeedBackList.__proto__ || Object.getPrototypeOf(FeedBackList)).call(this, props));

        _this.state = _FeedBackListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(FeedBackList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FeedBackListStore2.default.listen(this.onChange);
            _FeedBackListActions2.default.getFeedBacks();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FeedBackListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _FeedBackListActions2.default.delFeedBacks(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var FeedBackList = this.state.feedBacks.map(function (feedBack, index) {
                return _react2.default.createElement(
                    'div',
                    { key: feedBack.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u59D3\u540D ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/yjzx/feed-book/getFeedBack/' + feedBack.id },
                                            feedBack.name
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Email ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    feedBack.email
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u5185\u5BB9 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    feedBack.message
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: feedBack.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    FeedBackList
                )
            );
        }
    }]);

    return FeedBackList;
}(_react2.default.Component);

exports.default = FeedBackList;

},{"../actions/FeedBackListActions":16,"../stores/FeedBackListStore":91,"react":"react","react-router":"react-router","underscore":"underscore"}],56:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlowStore = require('../stores/FlowStore');

var _FlowStore2 = _interopRequireDefault(_FlowStore);

var _FlowActions = require('../actions/FlowActions');

var _FlowActions2 = _interopRequireDefault(_FlowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Flow = function (_React$Component) {
    _inherits(Flow, _React$Component);

    function Flow(props) {
        _classCallCheck(this, Flow);

        var _this = _possibleConstructorReturn(this, (Flow.__proto__ || Object.getPrototypeOf(Flow)).call(this, props));

        _this.state = _FlowStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Flow, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _FlowActions2.default.getFlow(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FlowStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FlowStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.content);
        }
    }, {
        key: 'innerHtml',
        value: function innerHtml() {}
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u6D41\u7A0B'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u540D\u79F0'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u4F5C\u8005'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.author
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Flow;
}(_react2.default.Component);

exports.default = Flow;

},{"../actions/FlowActions":17,"../stores/FlowStore":94,"react":"react"}],57:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _FlowListStore = require('../stores/FlowListStore');

var _FlowListStore2 = _interopRequireDefault(_FlowListStore);

var _FlowListActions = require('../actions/FlowListActions');

var _FlowListActions2 = _interopRequireDefault(_FlowListActions);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowList = function (_React$Component) {
    _inherits(FlowList, _React$Component);

    function FlowList(props) {
        _classCallCheck(this, FlowList);

        var _this = _possibleConstructorReturn(this, (FlowList.__proto__ || Object.getPrototypeOf(FlowList)).call(this, props));

        _this.state = _FlowListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    //页面渲染完毕 获取数据


    _createClass(FlowList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FlowListStore2.default.listen(this.onChange);
            _FlowListActions2.default.getFlows();
        }
    }, {
        key: 'pageChangeHandle',
        value: function pageChangeHandle() {
            console.info(JSON.stringify(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FlowListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _FlowListActions2.default.delFlow(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var FlowList = this.state.flows.map(function (flow, index) {
                return _react2.default.createElement(
                    'div',
                    { key: flow.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-left thumb-lg' },
                                _react2.default.createElement('img', { className: 'media-object', src: flow.url })
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u540D\u5B57 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/flow/getFlow/' + flow.id },
                                            flow.name
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u4F5C\u8005 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    flow.author
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/flow/editFlow/' + flow.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: flow.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    FlowList
                )
            );
        }
    }]);

    return FlowList;
}(_react2.default.Component);

exports.default = FlowList;

},{"../actions/FlowListActions":18,"../stores/FlowListStore":93,"./Page":67,"react":"react","react-router":"react-router","underscore":"underscore"}],58:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
    }

    _createClass(Footer, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'footer',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-12 ' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'lead' },
                                '\u6570\u5143\u4FE1\u5B89 \xA9 2017.5 Dmisec'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react"}],59:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('h3', { className: 'text-center' }),
        _react2.default.createElement('div', { className: 'row' })
      );
    }
  }]);

  return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],60:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":58,"./Navbar":64,"react":"react"}],61:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_React$Component) {
    _inherits(Login, _React$Component);

    function Login(props) {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));
    }

    _createClass(Login, [{
        key: 'loginSubmit',
        value: function loginSubmit() {
            $.ajax({ url: '/login',
                method: "POST",
                async: false,
                data: {
                    name: $("#loginName").val(),
                    pwd: $("#loginPwd").val()
                }
            }).done(function (data) {
                if (data.success) {
                    $("#goHome").click();
                }
            }).fail(function (data) {});
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                'width': '30%',
                'marginLeft': 'auto',
                'marginRight': 'auto'
            };
            var fromtop = {
                'marginTop': '100px'
            };
            return _react2.default.createElement(
                'div',
                { className: 'container', id: 'login', style: style },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: 'text-center' },
                        '\u6570\u5143\u4FE1\u5B89 '
                    ),
                    _react2.default.createElement(
                        'h4',
                        { className: 'text-center' },
                        '\u540E\u53F0'
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { id: 'login-form', style: fromtop },
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group', style: { width: "100%" } },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u7528\u6237\u540D'
                        ),
                        _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u7528\u6237\u540D', id: 'loginName', required: true })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'form-group', style: { width: "100%" } },
                        _react2.default.createElement(
                            'label',
                            null,
                            '\u5BC6\u7801'
                        ),
                        _react2.default.createElement('input', { type: 'password', className: 'form-control', placeholder: '\u5BC6\u7801', id: 'loginPwd', required: true })
                    ),
                    _react2.default.createElement(
                        'button',
                        { type: 'submit', className: 'btn btn-default', onClick: this.loginSubmit },
                        '\u767B\u5F55'
                    )
                ),
                _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/home' },
                    _react2.default.createElement('div', { id: 'goHome' })
                )
            );
        }
    }]);

    return Login;
}(_react2.default.Component);

exports.default = Login;

},{"react":"react","react-router":"react-router"}],62:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MasterTeamStore = require('../stores/MasterTeamStore');

var _MasterTeamStore2 = _interopRequireDefault(_MasterTeamStore);

var _MasterTeamActions = require('../actions/MasterTeamActions');

var _MasterTeamActions2 = _interopRequireDefault(_MasterTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasterTeam = function (_React$Component) {
    _inherits(MasterTeam, _React$Component);

    function MasterTeam(props) {
        _classCallCheck(this, MasterTeam);

        var _this = _possibleConstructorReturn(this, (MasterTeam.__proto__ || Object.getPrototypeOf(MasterTeam)).call(this, props));

        _this.state = _MasterTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(MasterTeam, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _MasterTeamStore2.default.listen(this.onChange);
            _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _MasterTeamStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _MasterTeamActions2.default.getMasterTeam(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.content);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u540D\u5E08\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u540D\u79F0'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u522B\u540D'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.aliases
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u7B80\u4ECB'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.introduction
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u804C\u79F0'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.job
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return MasterTeam;
}(_react2.default.Component);

exports.default = MasterTeam;

},{"../actions/MasterTeamActions":19,"../stores/MasterTeamStore":96,"react":"react"}],63:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _MasterTeamListStore = require('../stores/MasterTeamListStore');

var _MasterTeamListStore2 = _interopRequireDefault(_MasterTeamListStore);

var _MasterTeamListActions = require('../actions/MasterTeamListActions');

var _MasterTeamListActions2 = _interopRequireDefault(_MasterTeamListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MasterTeamList = function (_React$Component) {
    _inherits(MasterTeamList, _React$Component);

    function MasterTeamList(props) {
        _classCallCheck(this, MasterTeamList);

        var _this = _possibleConstructorReturn(this, (MasterTeamList.__proto__ || Object.getPrototypeOf(MasterTeamList)).call(this, props));

        _this.state = _MasterTeamListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(MasterTeamList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _MasterTeamListStore2.default.listen(this.onChange);
            _MasterTeamListActions2.default.getMasterTeams();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _MasterTeamListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _MasterTeamListActions2.default.delMasterTeam(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var MasterTeamList = this.state.masterTeams.map(function (masterTeam, index) {
                return _react2.default.createElement(
                    'div',
                    { key: masterTeam.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement('img', { className: 'media-object', src: masterTeam.url })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u540D\u79F0 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/pxjd/master-team/getMasterTeam/' + masterTeam.id },
                                            masterTeam.name
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u804C\u79F0 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    masterTeam.job
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/pxjd/master-team/editMasterTeam/' + masterTeam.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: masterTeam.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    MasterTeamList
                )
            );
        }
    }]);

    return MasterTeamList;
}(_react2.default.Component);

exports.default = MasterTeamList;

},{"../actions/MasterTeamListActions":20,"../stores/MasterTeamListStore":95,"react":"react","react-router":"react-router","underscore":"underscore"}],64:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar(props) {
    _classCallCheck(this, Navbar);

    var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

    _this.state = _NavbarStore2.default.getState();
    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  _createClass(Navbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      _NavbarStore2.default.listen(this.onChange);
      $(document).ajaxStart(function () {
        _NavbarActions2.default.updateAjaxAnimation('fadeIn');
      });

      $(document).ajaxComplete(function () {
        setTimeout(function () {
          _NavbarActions2.default.updateAjaxAnimation('fadeOut');
        }, 750);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _NavbarStore2.default.unlisten(this.onChange);
    }
  }, {
    key: 'onChange',
    value: function onChange(state) {
      this.setState(state);
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var searchQuery = this.state.searchQuery.trim();

      if (searchQuery) {
        _NavbarActions2.default.findCharacter({
          searchQuery: searchQuery,
          searchForm: this.refs.searchForm,
          history: this.props.history
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        { className: 'navbar navbar-default navbar-static-top' },
        _react2.default.createElement(
          'div',
          { className: 'navbar-header' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
            _react2.default.createElement(
              'span',
              { className: 'sr-only' },
              'Toggle navigation'
            ),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' }),
            _react2.default.createElement('span', { className: 'icon-bar' })
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/home', className: 'navbar-brand' },
            _react2.default.createElement(
              'span',
              { className: 'triangles animated ' + this.state.ajaxAnimationClass },
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' }),
              _react2.default.createElement('div', { className: 'tri' }),
              _react2.default.createElement('div', { className: 'tri invert' })
            ),
            'Dmisec'
          )
        ),
        _react2.default.createElement(
          'div',
          { id: 'navbar', className: 'navbar-collapse collapse' },
          _react2.default.createElement(
            'ul',
            { className: 'nav navbar-nav' },
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u6570\u5143\u4FE1\u5B89 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u5217\u8868'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/syxa/news-consult/list' },
                        '\u65B0\u95FB\u8D44\u8BAF'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u6DFB\u52A0'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/syxa/news-consult/add' },
                        '\u65B0\u95FB\u8D44\u8BAF'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u57F9\u8BAD\u57FA\u5730 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u5217\u8868'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/pxjd/master-team/list' },
                        '\u540D\u5E08\u56E2\u961F'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u6DFB\u52A0'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/pxjd/master-team/add' },
                        '\u540D\u5E08\u56E2\u961F'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u7814\u7A76\u4E2D\u5FC3 ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u5217\u8868'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/research-team/list' },
                        '\u7814\u7A76\u56E2\u961F'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/research-project/list' },
                        '\u7814\u7A76\u9879\u76EE'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      { className: 'dropdown-submenu' },
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '#' },
                        '\u7814\u7A76\u6210\u679C'
                      ),
                      _react2.default.createElement(
                        'ul',
                        { className: 'dropdown-menu' },
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/yjzx/research-result/list/1' },
                            '\u4E13\u5229'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/yjzx/research-result/list/2' },
                            '\u8F6F\u8457'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/yjzx/research-result/list/3' },
                            '\u83B7\u5956'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/yjzx/research-result/list/4' },
                            '\u9879\u76EE'
                          )
                        ),
                        _react2.default.createElement(
                          'li',
                          null,
                          _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/yjzx/research-result/list/5' },
                            '\u8BBA\u6587'
                          )
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/academic-exchange/list' },
                        '\u5B66\u672F\u4EA4\u6D41'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/feed-back/list' },
                        '\u610F\u89C1\u53CD\u9988'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u6DFB\u52A0'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/research-team/add' },
                        '\u7814\u7A76\u56E2\u961F'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/research-project/add' },
                        '\u7814\u7A76\u9879\u76EE'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/research-result/add' },
                        '\u7814\u7A76\u6210\u679C'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/yjzx/academic-exchange/add' },
                        '\u5B66\u672F\u4EA4\u6D41'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u5C55\u677F ',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  { className: 'dropdown-submenu' },
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '#' },
                    '\u5217\u8868'
                  ),
                  _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/syxa/spread/list/1' },
                        '\u6570\u5143\u4FE1\u5B89'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/syxa/spread/list/2' },
                        '\u57F9\u8BAD\u57FA\u5730'
                      )
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/syxa/spread/list/3' },
                        '\u7814\u7A76\u4E2D\u5FC3'
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/syxa/spread/add/' },
                    '\u6DFB\u52A0'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u5E94\u7528\u5305',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/apk/list' },
                    '\u5217\u8868'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/apk/add' },
                    '\u6DFB\u52A0'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u6D41\u7A0B',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/flow/list' },
                    '\u5217\u8868'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/flow/add' },
                    '\u6DFB\u52A0'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'dropdown' },
              _react2.default.createElement(
                'a',
                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                '\u6587\u4EF6',
                _react2.default.createElement('span', { className: 'caret' })
              ),
              _react2.default.createElement(
                'ul',
                { className: 'dropdown-menu' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/document/list' },
                    '\u5217\u8868'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    _reactRouter.Link,
                    { to: '/document/add' },
                    '\u6DFB\u52A0'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":21,"../stores/NavbarStore":97,"react":"react","react-router":"react-router"}],65:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NewsConsultStore = require('../stores/NewsConsultStore');

var _NewsConsultStore2 = _interopRequireDefault(_NewsConsultStore);

var _NewsConsultActions = require('../actions/NewsConsultActions');

var _NewsConsultActions2 = _interopRequireDefault(_NewsConsultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsConsult = function (_React$Component) {
    _inherits(NewsConsult, _React$Component);

    function NewsConsult(props) {
        _classCallCheck(this, NewsConsult);

        var _this = _possibleConstructorReturn(this, (NewsConsult.__proto__ || Object.getPrototypeOf(NewsConsult)).call(this, props));

        _this.state = _NewsConsultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(NewsConsult, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NewsConsultStore2.default.listen(this.onChange);
            _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
            $("#showContent").html(this.state.content);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NewsConsultStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _NewsConsultActions2.default.getNewsConsult(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.content);
        }
    }, {
        key: 'innerHtml',
        value: function innerHtml() {}
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u65B0\u95FB\u8D44\u8BAF/\u516C\u53F8\u52A8\u6001'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.top_img })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6807\u9898'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', defaultValue: this.state.title
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u4F5C\u8005'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', defaultValue: this.state.author
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5B50\u6807\u9898'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', defaultValue: this.state.subtitle
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'female', defaultValue: '1', checked: this.state.type === 1
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'female' },
                                            '\u65B0\u95FB\u54A8\u8BE2'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'male', defaultValue: '2', checked: this.state.type === 2
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'male' },
                                            '\u516C\u53F8\u52A8\u6001'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            '\u5185\u5BB9'
                                        ),
                                        _react2.default.createElement('br', null),
                                        _react2.default.createElement('div', { id: 'showContent' })
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return NewsConsult;
}(_react2.default.Component);

exports.default = NewsConsult;

},{"../actions/NewsConsultActions":22,"../stores/NewsConsultStore":99,"react":"react"}],66:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _NewsConsultListStore = require('../stores/NewsConsultListStore');

var _NewsConsultListStore2 = _interopRequireDefault(_NewsConsultListStore);

var _NewsConsultListActions = require('../actions/NewsConsultListActions');

var _NewsConsultListActions2 = _interopRequireDefault(_NewsConsultListActions);

var _Page = require('./Page');

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsConsultList = function (_React$Component) {
    _inherits(NewsConsultList, _React$Component);

    function NewsConsultList(props) {
        _classCallCheck(this, NewsConsultList);

        var _this = _possibleConstructorReturn(this, (NewsConsultList.__proto__ || Object.getPrototypeOf(NewsConsultList)).call(this, props));

        _this.state = _NewsConsultListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }
    //页面渲染完毕 获取数据


    _createClass(NewsConsultList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NewsConsultListStore2.default.listen(this.onChange);
            _NewsConsultListActions2.default.getNewsConsults();
        }
    }, {
        key: 'pageChangeHandle',
        value: function pageChangeHandle() {
            console.info(JSON.stringify(this));
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NewsConsultListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _NewsConsultListActions2.default.delNewsConsult(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var NewsConsultList = this.state.newsConsults.map(function (newsConsult, index) {
                return _react2.default.createElement(
                    'div',
                    { key: newsConsult.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'div',
                                { className: 'pull-left thumb-lg' },
                                _react2.default.createElement('img', { className: 'media-object', src: newsConsult.top_img })
                            ),
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u6807\u9898 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/syxa/news-consult/getNewsConsult/' + newsConsult.id },
                                            newsConsult.title
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u4F5C\u8005 ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    newsConsult.author
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u7C7B\u578B ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    newsConsult.type
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/syxa/news-consult/editNewsConsult/' + newsConsult.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: newsConsult.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    NewsConsultList
                )
            );
        }
    }]);

    return NewsConsultList;
}(_react2.default.Component);

exports.default = NewsConsultList;

},{"../actions/NewsConsultListActions":23,"../stores/NewsConsultListStore":98,"./Page":67,"react":"react","react-router":"react-router","underscore":"underscore"}],67:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

        _this.state = {
            showLinkNum: 10 //每次显示的页数
        };
        return _this;
    }

    _createClass(Page, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var pageIndex = this.props.start / this.props.total + 1;
            var pageNum = this.props.total % this.props.size == 0 ? this.props.total / this.props.size : parseInt(this.props.total / this.props.size + 1);

            this.setState(Object.assign({}, this.props, { pageIndex: pageIndex, pageNum: pageNum }));
        }

        //控制页码跳转的函数

    }, {
        key: 'pageIndexChange',
        value: function pageIndexChange(event) {
            var target = event.target;
            if (target.parentNode.className == 'disabled') return;
            var index = "";
            var pageIndex = target.value;
            var pageInputIndex = target.value;
            var type = target.getAttribute("data-type");
            if (type == "link") {
                index = event.target.innerHTML;
                if (!isNaN(index)) {
                    pageIndex = index;
                } else if (index == "首页") {
                    pageIndex = 1;
                } else if (index == "尾页") {
                    pageIndex = this.state.pageNum;
                } else if (index == "»") {
                    pageIndex = parseInt(this.state.pageIndex) + 1;
                } else if (index == "«") {
                    pageIndex = parseInt(this.state.pageIndex) - 1;
                }
                this.state.pageIndexChange((pageIndex - 1) * this.state.size);
            } else if (type == "btn-go") {
                var goIndex = document.getElementById("index-input");
                pageIndex = goIndex.value;
                this.state.pageIndexChange((pageIndex - 1) * this.state.size);
            } else if (type == "input") {
                return null;
            }

            this.setState({ pageIndex: pageIndex });
        }
    }, {
        key: 'render',
        value: function render() {
            var arrFirst = []; //首页和前一页
            var arrLast = []; //尾页和后一页
            var arrLinkShow = []; //每次显示的页码
            var prevDisplay = 1 == this.state.pageIndex ? 'disabled' : ''; //当前页为1时，首页和前一页失效
            var lastDisplay = this.state.pageNum == this.state.pageIndex ? 'disabled' : ''; //当前页为最后一页时，尾页和后一页失效
            var startIndex = (Math.ceil(this.state.pageIndex / this.state.showLinkNum) - 1) * this.state.showLinkNum + 1; //每次显示页数的开始页
            var endIndex = Math.min(startIndex + this.state.showLinkNum, this.state.pageNum + 1); //每次显示页数的结束页
            for (var i = startIndex; i < endIndex; i++) {
                var currentIndexDisplay = i == this.state.pageIndex ? 'active' : '';
                arrLinkShow.push(_react2.default.createElement(
                    'li',
                    { key: i, className: currentIndexDisplay },
                    _react2.default.createElement(
                        'a',
                        { href: 'javascript:;', 'data-type': 'link' },
                        i
                    )
                ));
            }
            arrFirst.push(_react2.default.createElement(
                'li',
                { key: 'first', className: prevDisplay },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', 'data-type': 'link' },
                    '\u9996\u9875'
                )
            ));
            arrFirst.push(_react2.default.createElement(
                'li',
                { key: '1', className: prevDisplay },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', 'aria-label': 'Previous', 'data-type': 'link', id: 'pre' },
                    '\xAB'
                )
            ));
            arrLast.push(_react2.default.createElement(
                'li',
                { key: 'last', className: lastDisplay },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', 'data-type': 'link' },
                    '\u5C3E\u9875'
                )
            ));
            arrLast.push(_react2.default.createElement(
                'li',
                { key: this.state.pageNum, className: lastDisplay },
                _react2.default.createElement(
                    'a',
                    { href: 'javascript:;', 'aria-label': 'Next', 'data-type': 'link', id: 'next' },
                    '\xBB'
                )
            ));
            return _react2.default.createElement(
                'nav',
                { className: 'text-center', key: 'page' },
                _react2.default.createElement(
                    'ul',
                    { key: 'page-ul', className: 'pagination', onClick: this.pageIndexChange.bind(this) },
                    arrFirst,
                    arrLinkShow,
                    arrLast
                )
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

exports.default = Page;


Page.propTypes = {
    pageIndexChange: _react.PropTypes.func.isRequired,
    size: _react.PropTypes.number.isRequired,
    total: _react.PropTypes.number.isRequired,
    start: _react.PropTypes.number.isRequired
};

},{"react":"react"}],68:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchProjectStore = require('../stores/ResearchProjectStore');

var _ResearchProjectStore2 = _interopRequireDefault(_ResearchProjectStore);

var _ResearchProjectActions = require('../actions/ResearchProjectActions');

var _ResearchProjectActions2 = _interopRequireDefault(_ResearchProjectActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchProject = function (_React$Component) {
    _inherits(ResearchProject, _React$Component);

    function ResearchProject(props) {
        _classCallCheck(this, ResearchProject);

        var _this = _possibleConstructorReturn(this, (ResearchProject.__proto__ || Object.getPrototypeOf(ResearchProject)).call(this, props));

        _this.state = _ResearchProjectStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchProject, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchProjectStore2.default.listen(this.onChange);
            _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchProjectStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchProjectActions2.default.getResearchProject(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.summary);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u7814\u7A76\u5DE5\u7A0B'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6807\u9898'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ResearchProject;
}(_react2.default.Component);

exports.default = ResearchProject;

},{"../actions/ResearchProjectActions":24,"../stores/ResearchProjectStore":101,"react":"react"}],69:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _ResearchProjectListStore = require('../stores/ResearchProjectListStore');

var _ResearchProjectListStore2 = _interopRequireDefault(_ResearchProjectListStore);

var _ResearchProjectListActions = require('../actions/ResearchProjectListActions');

var _ResearchProjectListActions2 = _interopRequireDefault(_ResearchProjectListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchProjectList = function (_React$Component) {
    _inherits(ResearchProjectList, _React$Component);

    function ResearchProjectList(props) {
        _classCallCheck(this, ResearchProjectList);

        var _this = _possibleConstructorReturn(this, (ResearchProjectList.__proto__ || Object.getPrototypeOf(ResearchProjectList)).call(this, props));

        _this.state = _ResearchProjectListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchProjectList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchProjectListStore2.default.listen(this.onChange);
            _ResearchProjectListActions2.default.getResearchProjects();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchProjectListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _ResearchProjectListActions2.default.delResearchProject(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var ResearchProjectList = this.state.researchProjects.map(function (researchProject, index) {
                return _react2.default.createElement(
                    'div',
                    { key: researchProject.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement('img', { className: 'media-object', src: researchProject.url })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u6807\u9898 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/yjzx/research-project/getResearchProject/' + researchProject.id },
                                            researchProject.title
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/syxa/news-project/editNewsProject/' + researchProject.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: researchProject.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    ResearchProjectList
                )
            );
        }
    }]);

    return ResearchProjectList;
}(_react2.default.Component);

exports.default = ResearchProjectList;

},{"../actions/ResearchProjectListActions":25,"../stores/ResearchProjectListStore":100,"react":"react","react-router":"react-router","underscore":"underscore"}],70:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchResultStore = require('../stores/ResearchResultStore');

var _ResearchResultStore2 = _interopRequireDefault(_ResearchResultStore);

var _ResearchResultActions = require('../actions/ResearchResultActions');

var _ResearchResultActions2 = _interopRequireDefault(_ResearchResultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchResult = function (_React$Component) {
    _inherits(ResearchResult, _React$Component);

    function ResearchResult(props) {
        _classCallCheck(this, ResearchResult);

        var _this = _possibleConstructorReturn(this, (ResearchResult.__proto__ || Object.getPrototypeOf(ResearchResult)).call(this, props));

        _this.state = _ResearchResultStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchResult, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchResultActions2.default.getResearchResult(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchResultStore2.default.listen(this.onChange);
            _ResearchResultActions2.default.getResearchResult(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchResultStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchResultActions2.default.getResearchResult(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.summary);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u7814\u7A76\u6210\u679C'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u6807\u9898'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.title
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u7C7B\u578B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zl', value: '1', checked: this.state.type == "1"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'zl' },
                                            '\u4E13\u5229'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'rz', value: '2', checked: this.state.type == "2"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'rz' },
                                            '\u8F6F\u8457'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'hj', value: '3', checked: this.state.type == "3"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'hj' },
                                            '\u83B7\u5956'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'xm', value: '4', checked: this.state.type == "4"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'xm' },
                                            '\u9879\u76EE'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'lw', value: '5', checked: this.state.type == "5"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'lw' },
                                            '\u8BBA\u6587'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ResearchResult;
}(_react2.default.Component);

exports.default = ResearchResult;

},{"../actions/ResearchResultActions":26,"../stores/ResearchResultStore":103,"react":"react"}],71:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _ResearchResultListStore = require('../stores/ResearchResultListStore');

var _ResearchResultListStore2 = _interopRequireDefault(_ResearchResultListStore);

var _ResearchResultListActions = require('../actions/ResearchResultListActions');

var _ResearchResultListActions2 = _interopRequireDefault(_ResearchResultListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchResultList = function (_React$Component) {
    _inherits(ResearchResultList, _React$Component);

    function ResearchResultList(props) {
        _classCallCheck(this, ResearchResultList);

        var _this = _possibleConstructorReturn(this, (ResearchResultList.__proto__ || Object.getPrototypeOf(ResearchResultList)).call(this, props));

        _this.state = _ResearchResultListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchResultList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchResultListStore2.default.listen(this.onChange);
            _ResearchResultListActions2.default.getResearchResults(this.props.params.type);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchResultListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _ResearchResultListActions2.default.delResearchResult(event.target.name, this.props.params.type);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var ResearchResultList = this.state.researchResults.map(function (researchResult, index) {
                return _react2.default.createElement(
                    'div',
                    { key: researchResult.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement('img', { className: 'media-object', src: researchResult.url })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u6807\u9898 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/yjzx/research-result/getResearchResult/' + researchResult.id },
                                            researchResult.title
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u7C7B\u578B ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    researchResult.type
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/yjzx/research-result/editresearchResult/' + researchResult.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: researchResult.id, onClick: _this2.delClick.bind(_this2) })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    ResearchResultList
                )
            );
        }
    }]);

    return ResearchResultList;
}(_react2.default.Component);

exports.default = ResearchResultList;

},{"../actions/ResearchResultListActions":27,"../stores/ResearchResultListStore":102,"react":"react","react-router":"react-router","underscore":"underscore"}],72:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ResearchTeamStore = require('../stores/ResearchTeamStore');

var _ResearchTeamStore2 = _interopRequireDefault(_ResearchTeamStore);

var _ResearchTeamActions = require('../actions/ResearchTeamActions');

var _ResearchTeamActions2 = _interopRequireDefault(_ResearchTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchTeam = function (_React$Component) {
    _inherits(ResearchTeam, _React$Component);

    function ResearchTeam(props) {
        _classCallCheck(this, ResearchTeam);

        var _this = _possibleConstructorReturn(this, (ResearchTeam.__proto__ || Object.getPrototypeOf(ResearchTeam)).call(this, props));

        _this.state = _ResearchTeamStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchTeam, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchTeamStore2.default.listen(this.onChange);
            _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchTeamStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.id !== this.props.params.id) {
                _ResearchTeamActions2.default.getResearchTeam(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
            $("#showContent").html(this.state.summary);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-12' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                '\u67E5\u770B\u7814\u7A76\u56E2\u961F'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u540D\u79F0'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u522B\u540D'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.aliases
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u804C\u79F0'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.professional
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u7C7B\u578B'
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js', defaultValue: '1', checked: this.state.type === "1"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'js' },
                                            '\u6559\u6388'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'zj', defaultValue: '2', checked: this.state.type === "2"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'js' },
                                            '\u4E13\u5BB6'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'radio radio-inline' },
                                        _react2.default.createElement('input', { type: 'radio', name: 'type', id: 'js1', defaultValue: '1', checked: this.state.type === "3"
                                        }),
                                        _react2.default.createElement(
                                            'label',
                                            { htmlFor: 'js1' },
                                            '\u6280\u672F'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u56FE\u7247'
                                    ),
                                    _react2.default.createElement('img', { width: style.width, height: style.height, src: this.state.url })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u7B80\u4ECB'
                                    ),
                                    _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.academy
                                    })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'form-group ' },
                                    _react2.default.createElement(
                                        'label',
                                        { className: 'control-label' },
                                        '\u5185\u5BB9'
                                    ),
                                    _react2.default.createElement('br', null),
                                    _react2.default.createElement('div', { id: 'showContent' })
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return ResearchTeam;
}(_react2.default.Component);

exports.default = ResearchTeam;

},{"../actions/ResearchTeamActions":28,"../stores/ResearchTeamStore":105,"react":"react"}],73:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _ResearchTeamListStore = require('../stores/ResearchTeamListStore');

var _ResearchTeamListStore2 = _interopRequireDefault(_ResearchTeamListStore);

var _ResearchTeamListActions = require('../actions/ResearchTeamListActions');

var _ResearchTeamListActions2 = _interopRequireDefault(_ResearchTeamListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResearchTeamList = function (_React$Component) {
    _inherits(ResearchTeamList, _React$Component);

    function ResearchTeamList(props) {
        _classCallCheck(this, ResearchTeamList);

        var _this = _possibleConstructorReturn(this, (ResearchTeamList.__proto__ || Object.getPrototypeOf(ResearchTeamList)).call(this, props));

        _this.state = _ResearchTeamListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(ResearchTeamList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _ResearchTeamListStore2.default.listen(this.onChange);
            _ResearchTeamListActions2.default.getResearchTeams();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _ResearchTeamListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {}
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'delClick',
        value: function delClick(event) {
            _ResearchTeamListActions2.default.delResearchTeam(event.target.name);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var ResearchTeamList = this.state.researchTeams.map(function (researchTeam, index) {
                return _react2.default.createElement(
                    'div',
                    { key: researchTeam.id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index <= 8 ? '0' + (index + 1) : index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement('img', { className: 'media-object', src: researchTeam.url })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'h4',
                                { className: 'media-heading' },
                                _react2.default.createElement(
                                    'small',
                                    null,
                                    '\u540D\u79F0 ',
                                    _react2.default.createElement(
                                        'strong',
                                        null,
                                        _react2.default.createElement(
                                            _reactRouter.Link,
                                            { to: '/yjzx/research-team/getResearchTeam/' + researchTeam.id },
                                            researchTeam.name
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u7C7B\u578B ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    researchTeam.type
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                '\u7B80\u4ECB ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    researchTeam.academy
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'div',
                                { className: 'del-button' },
                                _react2.default.createElement(
                                    'button',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/yjzx/research-team/editResearchTeam/' + researchTeam.id },
                                        '\u7F16\u8F91'
                                    )
                                ),
                                _react2.default.createElement('input', { type: 'button', value: '\u5220\u9664', name: researchTeam.id, onClick: _this2.delClick })
                            )
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    ResearchTeamList
                )
            );
        }
    }]);

    return ResearchTeamList;
}(_react2.default.Component);

exports.default = ResearchTeamList;

},{"../actions/ResearchTeamListActions":29,"../stores/ResearchTeamListStore":104,"react":"react","react-router":"react-router","underscore":"underscore"}],74:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _SpreadListStore = require('../stores/SpreadListStore');

var _SpreadListStore2 = _interopRequireDefault(_SpreadListStore);

var _SpreadListActions = require('../actions/SpreadListActions');

var _SpreadListActions2 = _interopRequireDefault(_SpreadListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpreadList = function (_React$Component) {
    _inherits(SpreadList, _React$Component);

    function SpreadList(props) {
        _classCallCheck(this, SpreadList);

        var _this = _possibleConstructorReturn(this, (SpreadList.__proto__ || Object.getPrototypeOf(SpreadList)).call(this, props));

        _this.state = _SpreadListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(SpreadList, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            _SpreadListStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            _SpreadListActions2.default.getSpreads(this.props.params.type);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _SpreadListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (prevProps.params.type !== this.props.params.type) {
                _SpreadListActions2.default.getSpreads(this.props.params.id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var style = {
                width: "200px",
                height: "200px"
            };
            var SpreadList = this.state.spreads.map(function (spread, index) {
                return _react2.default.createElement(
                    'div',
                    { key: spread.id, className: 'col-sm-2' },
                    _react2.default.createElement('img', { width: style.width, height: style.height, src: spread.url })
                );
            });
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    SpreadList
                )
            );
        }
    }]);

    return SpreadList;
}(_react2.default.Component);

exports.default = SpreadList;

},{"../actions/SpreadListActions":30,"../stores/SpreadListStore":106,"react":"react","react-router":"react-router","underscore":"underscore"}],75:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Ueditor = function (_React$Component) {
    _inherits(Ueditor, _React$Component);

    function Ueditor(props) {
        _classCallCheck(this, Ueditor);

        var _this = _possibleConstructorReturn(this, (Ueditor.__proto__ || Object.getPrototypeOf(Ueditor)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Ueditor, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.initEditor();
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            // 组件卸载后，清除放入库的id
            UE.delEditor(this.props.id);
        }
    }, {
        key: "initEditor",
        value: function initEditor() {
            var id = this.props.id;
            var cont = this.props.name;
            var ueEditor = UE.getEditor(this.props.id, { autoClearinitialContent: false });
            ueEditor.ready(function (ueditor) {
                if (!ueditor) {
                    UE.delEditor(id);
                    self.initEditor();
                }
                ueEditor.setContent(cont);
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", { id: this.props.id, name: "content", type: "text/plain" });
        }
    }]);

    return Ueditor;
}(_react2.default.Component);

exports.default = Ueditor;

},{"react":"react"}],76:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _Navbar = require('./components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./components/Navbar":64,"./routes":77,"history/lib/createBrowserHistory":115,"react":"react","react-dom":"react-dom","react-router":"react-router"}],77:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Index = require('./components/Index');

var _Index2 = _interopRequireDefault(_Index);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Login = require('./components/Login');

var _Login2 = _interopRequireDefault(_Login);

var _Error = require('./components/Error');

var _Error2 = _interopRequireDefault(_Error);

var _AddNewsConsult = require('./components/AddNewsConsult');

var _AddNewsConsult2 = _interopRequireDefault(_AddNewsConsult);

var _NewsConsult = require('./components/NewsConsult');

var _NewsConsult2 = _interopRequireDefault(_NewsConsult);

var _NewsConsultList = require('./components/NewsConsultList');

var _NewsConsultList2 = _interopRequireDefault(_NewsConsultList);

var _EditNewsConsult = require('./components/EditNewsConsult');

var _EditNewsConsult2 = _interopRequireDefault(_EditNewsConsult);

var _AddMasterTeam = require('./components/AddMasterTeam');

var _AddMasterTeam2 = _interopRequireDefault(_AddMasterTeam);

var _MasterTeamList = require('./components/MasterTeamList');

var _MasterTeamList2 = _interopRequireDefault(_MasterTeamList);

var _MasterTeam = require('./components/MasterTeam');

var _MasterTeam2 = _interopRequireDefault(_MasterTeam);

var _EditMasterTeam = require('./components/EditMasterTeam');

var _EditMasterTeam2 = _interopRequireDefault(_EditMasterTeam);

var _AddResearchTeam = require('./components/AddResearchTeam');

var _AddResearchTeam2 = _interopRequireDefault(_AddResearchTeam);

var _ResearchTeamList = require('./components/ResearchTeamList');

var _ResearchTeamList2 = _interopRequireDefault(_ResearchTeamList);

var _EditResearchResult = require('./components/EditResearchResult');

var _EditResearchResult2 = _interopRequireDefault(_EditResearchResult);

var _ResearchTeam = require('./components/ResearchTeam');

var _ResearchTeam2 = _interopRequireDefault(_ResearchTeam);

var _EditResearchTeam = require('./components/EditResearchTeam');

var _EditResearchTeam2 = _interopRequireDefault(_EditResearchTeam);

var _AddResearchProject = require('./components/AddResearchProject');

var _AddResearchProject2 = _interopRequireDefault(_AddResearchProject);

var _ResearchProjectList = require('./components/ResearchProjectList');

var _ResearchProjectList2 = _interopRequireDefault(_ResearchProjectList);

var _EditResearchProject = require('./components/EditResearchProject');

var _EditResearchProject2 = _interopRequireDefault(_EditResearchProject);

var _ResearchProject = require('./components/ResearchProject');

var _ResearchProject2 = _interopRequireDefault(_ResearchProject);

var _AddResearchResult = require('./components/AddResearchResult');

var _AddResearchResult2 = _interopRequireDefault(_AddResearchResult);

var _ResearchResultList = require('./components/ResearchResultList');

var _ResearchResultList2 = _interopRequireDefault(_ResearchResultList);

var _ResearchResult = require('./components/ResearchResult');

var _ResearchResult2 = _interopRequireDefault(_ResearchResult);

var _AddAcademicExchange = require('./components/AddAcademicExchange');

var _AddAcademicExchange2 = _interopRequireDefault(_AddAcademicExchange);

var _AcademicExchangeList = require('./components/AcademicExchangeList');

var _AcademicExchangeList2 = _interopRequireDefault(_AcademicExchangeList);

var _EditAcademicExchange = require('./components/EditAcademicExchange');

var _EditAcademicExchange2 = _interopRequireDefault(_EditAcademicExchange);

var _AcademicExchange = require('./components/AcademicExchange');

var _AcademicExchange2 = _interopRequireDefault(_AcademicExchange);

var _SpreadList = require('./components/SpreadList');

var _SpreadList2 = _interopRequireDefault(_SpreadList);

var _FeedBackList = require('./components/FeedBackList');

var _FeedBackList2 = _interopRequireDefault(_FeedBackList);

var _FeedBack = require('./components/FeedBack');

var _FeedBack2 = _interopRequireDefault(_FeedBack);

var _AddSpread = require('./components/AddSpread');

var _AddSpread2 = _interopRequireDefault(_AddSpread);

var _Apk = require('./components/Apk');

var _Apk2 = _interopRequireDefault(_Apk);

var _ApkList = require('./components/ApkList');

var _ApkList2 = _interopRequireDefault(_ApkList);

var _AddFlow = require('./components/AddFlow');

var _AddFlow2 = _interopRequireDefault(_AddFlow);

var _FlowList = require('./components/FlowList');

var _FlowList2 = _interopRequireDefault(_FlowList);

var _Flow = require('./components/Flow');

var _Flow2 = _interopRequireDefault(_Flow);

var _EditFlow = require('./components/EditFlow');

var _EditFlow2 = _interopRequireDefault(_EditFlow);

var _AddDocument = require('./components/AddDocument');

var _AddDocument2 = _interopRequireDefault(_AddDocument);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
  _reactRouter.Route,
  { component: _App2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/login', component: _Login2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/error', component: _Error2.default }),
  _react2.default.createElement(
    _reactRouter.Route,
    { component: _Index2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/news-consult/add', component: _AddNewsConsult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/news-consult/list', component: _NewsConsultList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/news-consult/getNewsConsult/:id', component: _NewsConsult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/news-consult/editNewsConsult/:id', component: _EditNewsConsult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/pxjd/master-team/add', component: _AddMasterTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/pxjd/master-team/list', component: _MasterTeamList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/pxjd/master-team/editMasterTeam/:id', component: _EditMasterTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/pxjd/master-team/getMasterTeam/:id', component: _MasterTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-team/add', component: _AddResearchTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-team/list', component: _ResearchTeamList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-team/editResearchTeam/:id', component: _EditResearchTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-team/getResearchTeam/:id', component: _ResearchTeam2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-project/add', component: _AddResearchProject2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-project/list', component: _ResearchProjectList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-project/getResearchProject/:id', component: _ResearchProject2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/news-project/editNewsProject/:id', component: _EditResearchProject2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-result/add', component: _AddResearchResult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-result/list/:type', component: _ResearchResultList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-result/getResearchResult/:id', component: _ResearchResult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/research-result/editresearchResult/:id', component: _EditResearchResult2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/academic-exchange/add', component: _AddAcademicExchange2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/academic-exchange/list', component: _AcademicExchangeList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/academic-exchange/getAcademicExchange/:id', component: _AcademicExchange2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/academic-exchange/editAcademicExchange/:id', component: _EditAcademicExchange2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/feed-back/list', component: _FeedBackList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/yjzx/feed-book/getFeedBack/:id', component: _FeedBack2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/spread/add', component: _AddSpread2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/syxa/spread/list/:type', component: _SpreadList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/apk/add', component: _Apk2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/apk/list', component: _ApkList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/flow/add', component: _AddFlow2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/flow/list', component: _FlowList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/flow/getFlow/:id', component: _Flow2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/flow/editFlow/:id', component: _EditFlow2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/document/add', component: _AddDocument2.default })
  )
);

},{"./components/AcademicExchange":32,"./components/AcademicExchangeList":33,"./components/AddAcademicExchange":34,"./components/AddDocument":35,"./components/AddFlow":36,"./components/AddMasterTeam":37,"./components/AddNewsConsult":38,"./components/AddResearchProject":39,"./components/AddResearchResult":40,"./components/AddResearchTeam":41,"./components/AddSpread":42,"./components/Apk":43,"./components/ApkList":44,"./components/App":45,"./components/EditAcademicExchange":46,"./components/EditFlow":47,"./components/EditMasterTeam":48,"./components/EditNewsConsult":49,"./components/EditResearchProject":50,"./components/EditResearchResult":51,"./components/EditResearchTeam":52,"./components/Error":53,"./components/FeedBack":54,"./components/FeedBackList":55,"./components/Flow":56,"./components/FlowList":57,"./components/Home":59,"./components/Index":60,"./components/Login":61,"./components/MasterTeam":62,"./components/MasterTeamList":63,"./components/NewsConsult":65,"./components/NewsConsultList":66,"./components/ResearchProject":68,"./components/ResearchProjectList":69,"./components/ResearchResult":70,"./components/ResearchResultList":71,"./components/ResearchTeam":72,"./components/ResearchTeamList":73,"./components/SpreadList":74,"react":"react","react-router":"react-router"}],78:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AcademicExchangeListActions = require('../actions/AcademicExchangeListActions');

var _AcademicExchangeListActions2 = _interopRequireDefault(_AcademicExchangeListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AcademicExchangeListStore = function () {
    function AcademicExchangeListStore() {
        _classCallCheck(this, AcademicExchangeListStore);

        this.bindActions(_AcademicExchangeListActions2.default);
        this.academicExchanges = [];
    }

    _createClass(AcademicExchangeListStore, [{
        key: 'onGetAcademicExchangeListSuccess',
        value: function onGetAcademicExchangeListSuccess(data) {
            this.academicExchanges = data;
        }
    }, {
        key: 'onGetAcademicExchangeListFail',
        value: function onGetAcademicExchangeListFail(data) {
            this.academicExchanges = data;
        }
    }]);

    return AcademicExchangeListStore;
}();

exports.default = _alt2.default.createStore(AcademicExchangeListStore);

},{"../actions/AcademicExchangeListActions":2,"../alt":31}],79:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AcademicExchangeActions = require('../actions/AcademicExchangeActions');

var _AcademicExchangeActions2 = _interopRequireDefault(_AcademicExchangeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AcademicExchangeStore = function () {
    function AcademicExchangeStore() {
        _classCallCheck(this, AcademicExchangeStore);

        this.bindActions(_AcademicExchangeActions2.default);
        this.id = 0;
        this.title = '';
        this.address = '';
        this.author = '';
        this.content = '';
    }

    _createClass(AcademicExchangeStore, [{
        key: 'onGetAcademicExchangeSuccess',
        value: function onGetAcademicExchangeSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetAcademicExchangeFail',
        value: function onGetAcademicExchangeFail(jqXhr) {}
    }]);

    return AcademicExchangeStore;
}();

exports.default = _alt2.default.createStore(AcademicExchangeStore);

},{"../actions/AcademicExchangeActions":1,"../alt":31,"underscore":"underscore"}],80:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddAcademicExchangeActions = require('../actions/AddAcademicExchangeActions');

var _AddAcademicExchangeActions2 = _interopRequireDefault(_AddAcademicExchangeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddAcademicExchangeStore = function () {
    function AddAcademicExchangeStore() {
        _classCallCheck(this, AddAcademicExchangeStore);

        this.bindActions(_AddAcademicExchangeActions2.default);
        this.title = ''; //标题
        this.author = ''; //地址
        this.address = ''; //内容
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddAcademicExchangeStore, [{
        key: 'onAddAcademicExchangeSuccess',
        value: function onAddAcademicExchangeSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddAcademicExchangeFail',
        value: function onAddAcademicExchangeFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateTitle',
        value: function onUpdateTitle(event) {
            this.title = event.target.value;
        }
    }, {
        key: 'onUpdateAuthor',
        value: function onUpdateAuthor(event) {
            this.author = event.target.value;
        }
    }, {
        key: 'onUpdateAddress',
        value: function onUpdateAddress(event) {
            this.address = event.target.value;
        }
    }]);

    return AddAcademicExchangeStore;
}();

exports.default = _alt2.default.createStore(AddAcademicExchangeStore);

},{"../actions/AddAcademicExchangeActions":3,"../alt":31}],81:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddDocumentActions = require('../actions/AddDocumentActions');

var _AddDocumentActions2 = _interopRequireDefault(_AddDocumentActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddDocumentStore = function () {
    function AddDocumentStore() {
        _classCallCheck(this, AddDocumentStore);

        this.bindActions(_AddDocumentActions2.default);
        this.name = '';
        this.helpBlock = '';
    }

    _createClass(AddDocumentStore, [{
        key: 'onAddDocumentSuccess',
        value: function onAddDocumentSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddDocumentFail',
        value: function onAddDocumentFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
        }
    }]);

    return AddDocumentStore;
}();

exports.default = _alt2.default.createStore(AddDocumentStore);

},{"../actions/AddDocumentActions":4,"../alt":31}],82:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddFlowActions = require('../actions/AddFlowActions');

var _AddFlowActions2 = _interopRequireDefault(_AddFlowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddFlowStore = function () {
    function AddFlowStore() {
        _classCallCheck(this, AddFlowStore);

        this.bindActions(_AddFlowActions2.default);
        this.name = '';
        this.author = '';
        this.content = '';
        this.url = '';
        this.helpBlock = '';
    }

    _createClass(AddFlowStore, [{
        key: 'onAddFlowSuccess',
        value: function onAddFlowSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddFlowFail',
        value: function onAddFlowFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
        }
    }, {
        key: 'onUpdateAuthor',
        value: function onUpdateAuthor(event) {
            this.author = event.target.value;
        }
    }, {
        key: 'onUpdateJob',
        value: function onUpdateJob(event) {
            this.url = event.target.value;
        }
    }, {
        key: 'onUpdateContent',
        value: function onUpdateContent(event) {
            this.content = event.target.value;
        }
    }]);

    return AddFlowStore;
}();

exports.default = _alt2.default.createStore(AddFlowStore);

},{"../actions/AddFlowActions":5,"../alt":31}],83:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddMasterTeamActions = require('../actions/AddMasterTeamActions');

var _AddMasterTeamActions2 = _interopRequireDefault(_AddMasterTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddMasterTeamStore = function () {
    function AddMasterTeamStore() {
        _classCallCheck(this, AddMasterTeamStore);

        this.bindActions(_AddMasterTeamActions2.default);
        this.name = ''; //标题
        this.job = ''; //地址
        this.content = ''; //内容
        this.aliases = '';
        this.introduction = '';
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddMasterTeamStore, [{
        key: 'onAddMasterTeamSuccess',
        value: function onAddMasterTeamSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddMasterTeamFail',
        value: function onAddMasterTeamFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
        }
    }, {
        key: 'onUpdateAliases',
        value: function onUpdateAliases(event) {
            this.aliases = event.target.value;
        }
    }, {
        key: 'onUpdateIntroduction',
        value: function onUpdateIntroduction(event) {
            this.introduction = event.target.value;
        }
    }, {
        key: 'onUpdateJob',
        value: function onUpdateJob(event) {
            this.job = event.target.value;
        }
    }, {
        key: 'onUpdateContent',
        value: function onUpdateContent(event) {
            this.content = event.target.value;
        }
    }]);

    return AddMasterTeamStore;
}();

exports.default = _alt2.default.createStore(AddMasterTeamStore);

},{"../actions/AddMasterTeamActions":6,"../alt":31}],84:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddNewsConsultActions = require('../actions/AddNewsConsultActions');

var _AddNewsConsultActions2 = _interopRequireDefault(_AddNewsConsultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddNewsConsultStore = function () {
    function AddNewsConsultStore() {
        _classCallCheck(this, AddNewsConsultStore);

        this.bindActions(_AddNewsConsultActions2.default);
        this.title = ''; //标题
        this.author = ''; //作者
        this.type = '1'; //新闻公告/公司动态
        this.subtitle = ''; //描述
        this.content = ''; //内容
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddNewsConsultStore, [{
        key: 'onAddNewsConsultSuccess',
        value: function onAddNewsConsultSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddNewConsultFail',
        value: function onAddNewConsultFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateTitle',
        value: function onUpdateTitle(event) {
            this.title = event.target.value;
        }
    }, {
        key: 'onUpdateAuthor',
        value: function onUpdateAuthor(event) {
            this.author = event.target.value;
        }
    }, {
        key: 'onUpdateType',
        value: function onUpdateType(event) {
            this.type = event.target.value;
        }
    }, {
        key: 'onUpdateSubtitle',
        value: function onUpdateSubtitle(event) {
            this.subtitle = event.target.value;
        }
    }, {
        key: 'onUpdateContent',
        value: function onUpdateContent(event) {
            this.content = event.target.value;
        }
    }]);

    return AddNewsConsultStore;
}();

exports.default = _alt2.default.createStore(AddNewsConsultStore);

},{"../actions/AddNewsConsultActions":7,"../alt":31}],85:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddResearchProjectActions = require('../actions/AddResearchProjectActions');

var _AddResearchProjectActions2 = _interopRequireDefault(_AddResearchProjectActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchProjectStore = function () {
    function AddResearchProjectStore() {
        _classCallCheck(this, AddResearchProjectStore);

        this.bindActions(_AddResearchProjectActions2.default);
        this.title = '';
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddResearchProjectStore, [{
        key: 'onAddResearchProjectSuccess',
        value: function onAddResearchProjectSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddResearchProjectFail',
        value: function onAddResearchProjectFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateTitle',
        value: function onUpdateTitle(event) {
            this.title = event.target.value;
        }
    }]);

    return AddResearchProjectStore;
}();

exports.default = _alt2.default.createStore(AddResearchProjectStore);

},{"../actions/AddResearchProjectActions":8,"../alt":31}],86:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddResearchResultActions = require('../actions/AddResearchResultActions');

var _AddResearchResultActions2 = _interopRequireDefault(_AddResearchResultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchResultStore = function () {
    function AddResearchResultStore() {
        _classCallCheck(this, AddResearchResultStore);

        this.bindActions(_AddResearchResultActions2.default);
        this.title = '';
        this.type = '1';
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddResearchResultStore, [{
        key: 'onAddResearchResultSuccess',
        value: function onAddResearchResultSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddResearchResultFail',
        value: function onAddResearchResultFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateTitle',
        value: function onUpdateTitle(event) {
            this.title = event.target.value;
        }
    }, {
        key: 'onUpdateType',
        value: function onUpdateType(event) {
            this.type = event.target.value;
        }
    }]);

    return AddResearchResultStore;
}();

exports.default = _alt2.default.createStore(AddResearchResultStore);

},{"../actions/AddResearchResultActions":9,"../alt":31}],87:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddResearchTeamActions = require('../actions/AddResearchTeamActions');

var _AddResearchTeamActions2 = _interopRequireDefault(_AddResearchTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddResearchTeamStore = function () {
    function AddResearchTeamStore() {
        _classCallCheck(this, AddResearchTeamStore);

        this.bindActions(_AddResearchTeamActions2.default);
        this.name = '';
        this.type = '3';
        this.academy = '';
        this.helpBlock = '';
    }
    //添加成功的事件


    _createClass(AddResearchTeamStore, [{
        key: 'onAddResearchTeamSuccess',
        value: function onAddResearchTeamSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
        //添加失败的事件

    }, {
        key: 'onAddResearchTeamFail',
        value: function onAddResearchTeamFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
        //修改更新

    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
        }
    }, {
        key: 'onUpdateType',
        value: function onUpdateType(event) {
            this.type = event.target.value;
        }
    }, {
        key: 'onUpdateAcademy',
        value: function onUpdateAcademy(event) {
            this.academy = event.target.value;
        }
    }]);

    return AddResearchTeamStore;
}();

exports.default = _alt2.default.createStore(AddResearchTeamStore);

},{"../actions/AddResearchTeamActions":10,"../alt":31}],88:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddSpreadActions = require('../actions/AddSpreadActions');

var _AddSpreadActions2 = _interopRequireDefault(_AddSpreadActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddSpreadStore = function AddSpreadStore() {
    _classCallCheck(this, AddSpreadStore);

    this.bindActions(_AddSpreadActions2.default);
    this.baseUrl = '';
    this.helpBlock = '';
};

exports.default = _alt2.default.createStore(AddSpreadStore);

},{"../actions/AddSpreadActions":11,"../alt":31}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ApkListActions = require('../actions/ApkListActions');

var _ApkListActions2 = _interopRequireDefault(_ApkListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApkListStore = function () {
    function ApkListStore() {
        _classCallCheck(this, ApkListStore);

        this.bindActions(_ApkListActions2.default);
        this.apks = [];
    }

    _createClass(ApkListStore, [{
        key: 'onGetApkListSuccess',
        value: function onGetApkListSuccess(data) {
            this.apks = data;
        }
    }, {
        key: 'onGetApkListFail',
        value: function onGetApkListFail(data) {
            this.apks = data;
        }
    }]);

    return ApkListStore;
}();

exports.default = _alt2.default.createStore(ApkListStore);

},{"../actions/ApkListActions":13,"../alt":31}],90:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ApkActions = require('../actions/ApkActions');

var _ApkActions2 = _interopRequireDefault(_ApkActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ApkStore = function () {
    function ApkStore() {
        _classCallCheck(this, ApkStore);

        this.bindActions(_ApkActions2.default);
        this.name = '';
        this.version = '';
        this.helpBlock = '';
    }

    _createClass(ApkStore, [{
        key: 'onAddApkActionsSuccess',
        value: function onAddApkActionsSuccess(successMessage) {
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddApkActionsFail',
        value: function onAddApkActionsFail(errorMessage) {
            this.helpBlock = errorMessage;
        }
    }]);

    return ApkStore;
}();

exports.default = _alt2.default.createStore(ApkStore);

},{"../actions/ApkActions":12,"../alt":31}],91:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FeedBackListActions = require('../actions/FeedBackListActions');

var _FeedBackListActions2 = _interopRequireDefault(_FeedBackListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedBackListStore = function () {
    function FeedBackListStore() {
        _classCallCheck(this, FeedBackListStore);

        this.bindActions(_FeedBackListActions2.default);
        this.feedBacks = [];
    }

    _createClass(FeedBackListStore, [{
        key: 'onGetFeedBackListSuccess',
        value: function onGetFeedBackListSuccess(data) {
            this.feedBacks = data;
        }
    }, {
        key: 'onGetFeedBackListFail',
        value: function onGetFeedBackListFail(data) {
            this.feedBacks = data;
        }
    }]);

    return FeedBackListStore;
}();

exports.default = _alt2.default.createStore(FeedBackListStore);

},{"../actions/FeedBackListActions":16,"../alt":31}],92:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FeedBackActions = require('../actions/FeedBackActions');

var _FeedBackActions2 = _interopRequireDefault(_FeedBackActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedBackStore = function () {
    function FeedBackStore() {
        _classCallCheck(this, FeedBackStore);

        this.bindActions(_FeedBackActions2.default);
        this.id = 0;
        this.name = '';
        this.email = '';
        this.message = '';
    }

    _createClass(FeedBackStore, [{
        key: 'onGetFeedBackSuccess',
        value: function onGetFeedBackSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetFeedBackFail',
        value: function onGetFeedBackFail(jqXhr) {}
    }]);

    return FeedBackStore;
}();

exports.default = _alt2.default.createStore(FeedBackStore);

},{"../actions/FeedBackActions":15,"../alt":31,"underscore":"underscore"}],93:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FlowListActions = require('../actions/FlowListActions');

var _FlowListActions2 = _interopRequireDefault(_FlowListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowListStore = function () {
    function FlowListStore() {
        _classCallCheck(this, FlowListStore);

        this.bindActions(_FlowListActions2.default);
        this.flows = [];
    }

    _createClass(FlowListStore, [{
        key: 'onGetFlowListSuccess',
        value: function onGetFlowListSuccess(data) {
            this.flows = data;
        }
    }, {
        key: 'onGetFlowListFail',
        value: function onGetFlowListFail(data) {
            this.flows = data;
        }
    }]);

    return FlowListStore;
}();

exports.default = _alt2.default.createStore(FlowListStore);

},{"../actions/FlowListActions":18,"../alt":31}],94:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FlowActions = require('../actions/FlowActions');

var _FlowActions2 = _interopRequireDefault(_FlowActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlowStore = function () {
    function FlowStore() {
        _classCallCheck(this, FlowStore);

        this.bindActions(_FlowActions2.default);
        this.id = 0;
        this.name = '';
        this.author = '';
        this.url = '';
        this.content = '';
    }

    _createClass(FlowStore, [{
        key: 'onGetFlowSuccess',
        value: function onGetFlowSuccess(data) {
            this.setState(data);
        }
    }, {
        key: 'onGetFlowFail',
        value: function onGetFlowFail(jqXhr) {}
    }]);

    return FlowStore;
}();

exports.default = _alt2.default.createStore(FlowStore);

},{"../actions/FlowActions":17,"../alt":31,"underscore":"underscore"}],95:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _MasterTeamListActions = require('../actions/MasterTeamListActions');

var _MasterTeamListActions2 = _interopRequireDefault(_MasterTeamListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterTeamListStore = function () {
    function MasterTeamListStore() {
        _classCallCheck(this, MasterTeamListStore);

        this.bindActions(_MasterTeamListActions2.default);
        this.masterTeams = [];
    }

    _createClass(MasterTeamListStore, [{
        key: 'onGetMasterTeamListSuccess',
        value: function onGetMasterTeamListSuccess(data) {
            this.masterTeams = data;
        }
    }, {
        key: 'onGetMasterTeamListFail',
        value: function onGetMasterTeamListFail(data) {
            this.masterTeams = data;
        }
    }]);

    return MasterTeamListStore;
}();

exports.default = _alt2.default.createStore(MasterTeamListStore);

},{"../actions/MasterTeamListActions":20,"../alt":31}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _MasterTeamActions = require('../actions/MasterTeamActions');

var _MasterTeamActions2 = _interopRequireDefault(_MasterTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MasterTeamStore = function () {
    function MasterTeamStore() {
        _classCallCheck(this, MasterTeamStore);

        this.bindActions(_MasterTeamActions2.default);
        this.id = 0;
        this.name = '';
        this.job = '';
        this.aliases = '';
        this.introduction = '';
        this.url = '/img/default.gif';
        this.content = '';
    }

    _createClass(MasterTeamStore, [{
        key: 'onGetMasterTeamSuccess',
        value: function onGetMasterTeamSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetMasterTeamFail',
        value: function onGetMasterTeamFail(jqXhr) {}
    }]);

    return MasterTeamStore;
}();

exports.default = _alt2.default.createStore(MasterTeamStore);

},{"../actions/MasterTeamActions":19,"../alt":31,"underscore":"underscore"}],97:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
  function NavbarStore() {
    _classCallCheck(this, NavbarStore);

    this.bindActions(_NavbarActions2.default);
    this.totalCharacters = 0;
    this.onlineUsers = 0;
    this.searchQuery = '';
    this.ajaxAnimationClass = '';
  }

  _createClass(NavbarStore, [{
    key: 'onUpdateOnlineUsers',
    value: function onUpdateOnlineUsers(data) {
      this.onlineUsers = data.onlineUsers;
    }
  }, {
    key: 'onUpdateAjaxAnimation',
    value: function onUpdateAjaxAnimation(className) {
      this.ajaxAnimationClass = className; //fadein or fadeout
    }
  }, {
    key: 'onUpdateSearchQuery',
    value: function onUpdateSearchQuery(event) {
      this.searchQuery = event.target.value;
    }
  }]);

  return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":21,"../alt":31}],98:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NewsConsultListActions = require('../actions/NewsConsultListActions');

var _NewsConsultListActions2 = _interopRequireDefault(_NewsConsultListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsConsultListStore = function () {
    function NewsConsultListStore() {
        _classCallCheck(this, NewsConsultListStore);

        this.bindActions(_NewsConsultListActions2.default);
        this.newsConsults = [];
    }

    _createClass(NewsConsultListStore, [{
        key: 'onGetNewsConssultSuccess',
        value: function onGetNewsConssultSuccess(data) {
            this.setState({ newsConsults: data.data });
        }
    }, {
        key: 'onGetNewsConssultFail',
        value: function onGetNewsConssultFail(data) {
            this.newsConsults = data;
        }
    }]);

    return NewsConsultListStore;
}();

exports.default = _alt2.default.createStore(NewsConsultListStore);

},{"../actions/NewsConsultListActions":23,"../alt":31}],99:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NewsConsultActions = require('../actions/NewsConsultActions');

var _NewsConsultActions2 = _interopRequireDefault(_NewsConsultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NewsConsultStore = function () {
    function NewsConsultStore() {
        _classCallCheck(this, NewsConsultStore);

        this.bindActions(_NewsConsultActions2.default);
        this.id = 0;
        this.title = '';
        this.author = '';
        this.top_img = '';
        this.type = '';
        this.subtitle = '';
        this.content = '';
    }

    _createClass(NewsConsultStore, [{
        key: 'onGetNewsConsultSuccess',
        value: function onGetNewsConsultSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetNewConsultFail',
        value: function onGetNewConsultFail(jqXhr) {}
    }]);

    return NewsConsultStore;
}();

exports.default = _alt2.default.createStore(NewsConsultStore);

},{"../actions/NewsConsultActions":22,"../alt":31,"underscore":"underscore"}],100:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchProjectListActions = require('../actions/ResearchProjectListActions');

var _ResearchProjectListActions2 = _interopRequireDefault(_ResearchProjectListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchProjectListStore = function () {
    function ResearchProjectListStore() {
        _classCallCheck(this, ResearchProjectListStore);

        this.bindActions(_ResearchProjectListActions2.default);
        this.researchProjects = [];
    }

    _createClass(ResearchProjectListStore, [{
        key: 'onGetResearchProjectListSuccess',
        value: function onGetResearchProjectListSuccess(data) {
            this.researchProjects = data;
        }
    }, {
        key: 'onGetResearchProjectListFail',
        value: function onGetResearchProjectListFail(data) {
            this.researchProjects = data;
        }
    }]);

    return ResearchProjectListStore;
}();

exports.default = _alt2.default.createStore(ResearchProjectListStore);

},{"../actions/ResearchProjectListActions":25,"../alt":31}],101:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchProjectActions = require('../actions/ResearchProjectActions');

var _ResearchProjectActions2 = _interopRequireDefault(_ResearchProjectActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchProjectStore = function () {
    function ResearchProjectStore() {
        _classCallCheck(this, ResearchProjectStore);

        this.bindActions(_ResearchProjectActions2.default);
        this.id = 0;
        this.title = '';
        this.url = '/img/default.gif';
        this.summary = '';
    }

    _createClass(ResearchProjectStore, [{
        key: 'onGetResearchProjectSuccess',
        value: function onGetResearchProjectSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetResearchProjectFail',
        value: function onGetResearchProjectFail(jqXhr) {}
    }]);

    return ResearchProjectStore;
}();

exports.default = _alt2.default.createStore(ResearchProjectStore);

},{"../actions/ResearchProjectActions":24,"../alt":31,"underscore":"underscore"}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchResultListActions = require('../actions/ResearchResultListActions');

var _ResearchResultListActions2 = _interopRequireDefault(_ResearchResultListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchResultListStore = function () {
    function ResearchResultListStore() {
        _classCallCheck(this, ResearchResultListStore);

        this.bindActions(_ResearchResultListActions2.default);
        this.researchResults = [];
    }

    _createClass(ResearchResultListStore, [{
        key: 'onGetResearchResultListSuccess',
        value: function onGetResearchResultListSuccess(data) {
            this.researchResults = data;
        }
    }, {
        key: 'onGetResearchResultListFail',
        value: function onGetResearchResultListFail(data) {
            this.researchResults = data;
        }
    }]);

    return ResearchResultListStore;
}();

exports.default = _alt2.default.createStore(ResearchResultListStore);

},{"../actions/ResearchResultListActions":27,"../alt":31}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchResultActions = require('../actions/ResearchResultActions');

var _ResearchResultActions2 = _interopRequireDefault(_ResearchResultActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchResultStore = function () {
    function ResearchResultStore() {
        _classCallCheck(this, ResearchResultStore);

        this.bindActions(_ResearchResultActions2.default);
        this.id = 0;
        this.title = '';
        this.type = '';
        this.url = '/img/default.gif';
        this.summary = '';
    }

    _createClass(ResearchResultStore, [{
        key: 'onGetResearchResultSuccess',
        value: function onGetResearchResultSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetResearchResultFail',
        value: function onGetResearchResultFail(jqXhr) {}
    }]);

    return ResearchResultStore;
}();

exports.default = _alt2.default.createStore(ResearchResultStore);

},{"../actions/ResearchResultActions":26,"../alt":31,"underscore":"underscore"}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchTeamListActions = require('../actions/ResearchTeamListActions');

var _ResearchTeamListActions2 = _interopRequireDefault(_ResearchTeamListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchTeamListStore = function () {
    function ResearchTeamListStore() {
        _classCallCheck(this, ResearchTeamListStore);

        this.bindActions(_ResearchTeamListActions2.default);
        this.researchTeams = [];
    }

    _createClass(ResearchTeamListStore, [{
        key: 'onGetResearchTeamListSuccess',
        value: function onGetResearchTeamListSuccess(data) {
            this.researchTeams = data;
        }
    }, {
        key: 'onGetResearchTeamListFail',
        value: function onGetResearchTeamListFail(data) {
            this.researchTeams = data;
        }
    }]);

    return ResearchTeamListStore;
}();

exports.default = _alt2.default.createStore(ResearchTeamListStore);

},{"../actions/ResearchTeamListActions":29,"../alt":31}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _ResearchTeamActions = require('../actions/ResearchTeamActions');

var _ResearchTeamActions2 = _interopRequireDefault(_ResearchTeamActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResearchTeamStore = function () {
    function ResearchTeamStore() {
        _classCallCheck(this, ResearchTeamStore);

        this.bindActions(_ResearchTeamActions2.default);
        this.id = 0;
        this.name = '';
        this.type = '';
        this.url = '/img/default.gif';
        this.academy = '';
        this.summary = '';
    }

    _createClass(ResearchTeamStore, [{
        key: 'onGetResearchTeamSuccess',
        value: function onGetResearchTeamSuccess(data) {
            this.setState(data[0]);
        }
    }, {
        key: 'onGetResearchTeamFail',
        value: function onGetResearchTeamFail(jqXhr) {}
    }]);

    return ResearchTeamStore;
}();

exports.default = _alt2.default.createStore(ResearchTeamStore);

},{"../actions/ResearchTeamActions":28,"../alt":31,"underscore":"underscore"}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _SpreadListActions = require('../actions/SpreadListActions');

var _SpreadListActions2 = _interopRequireDefault(_SpreadListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpreadListStore = function () {
    function SpreadListStore() {
        _classCallCheck(this, SpreadListStore);

        this.bindActions(_SpreadListActions2.default);
        this.spreads = [];
    }

    _createClass(SpreadListStore, [{
        key: 'onGetSpreadsSuccess',
        value: function onGetSpreadsSuccess(data) {
            this.spreads = data;
        }
    }, {
        key: 'onGetSpreadsFail',
        value: function onGetSpreadsFail(data) {
            this.spreads = data;
        }
    }]);

    return SpreadListStore;
}();

exports.default = _alt2.default.createStore(SpreadListStore);

},{"../actions/SpreadListActions":30,"../alt":31}],107:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":108,"./lib/keys.js":109}],108:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],109:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],110:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],111:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],112:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":124,"warning":125}],113:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],114:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],115:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":110,"./DOMStateStorage":112,"./DOMUtils":113,"./ExecutionEnvironment":114,"./createDOMHistory":116,"./parsePath":121,"_process":124,"invariant":123}],116:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":113,"./ExecutionEnvironment":114,"./createHistory":117,"_process":124,"invariant":123}],117:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":110,"./AsyncUtils":111,"./createLocation":118,"./deprecate":119,"./parsePath":121,"./runTransitionHook":122,"deep-equal":107}],118:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":110,"./parsePath":121}],119:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],120:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],121:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":120,"_process":124,"warning":125}],122:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":124,"warning":125}],123:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":124}],124:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],125:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":124}]},{},[76])

//# sourceMappingURL=bundle.js.map
