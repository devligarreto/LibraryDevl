import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

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
        { type: Component, args: [{
                    selector: 'app-devl-text',
                    template: "<input type=\"text\" class=\"form-control\" />",
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
        { type: NgModule, args: [{
                    declarations: [
                        DevlTextComponent
                    ],
                    exports: [
                        DevlTextComponent
                    ],
                    imports: [
                        CommonModule
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

export { DevlTextModule, DevlTextComponent };

//# sourceMappingURL=library-devl.js.map