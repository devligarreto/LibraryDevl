(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('library-devl', ['exports', '@angular/common', '@angular/core'], factory) :
    (factory((global['library-devl'] = {}),global.ng.common,global.ng.core));
}(this, (function (exports,common,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DevlTextComponent = /** @class */ (function () {
        function DevlTextComponent() {
        }
        /**
         * @return {?}
         */
        DevlTextComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        DevlTextComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-devl-text',
                        template: "<input type=\"text\" />",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        DevlTextComponent.ctorParameters = function () { return []; };
        return DevlTextComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DevlTextModule = /** @class */ (function () {
        function DevlTextModule() {
        }
        /**
         * @return {?}
         */
        DevlTextModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: DevlTextModule,
                };
            };
        DevlTextModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            DevlTextComponent
                        ],
                        exports: [
                            DevlTextComponent
                        ],
                        imports: [
                            common.CommonModule
                        ]
                    },] }
        ];
        return DevlTextModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.DevlTextModule = DevlTextModule;
    exports.DevlTextComponent = DevlTextComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=library-devl.umd.js.map