import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DevlTextComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DevlTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-devl-text',
                template: "<input type=\"text\" />",
                styles: [""]
            }] }
];
/** @nocollapse */
DevlTextComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DevlTextModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: DevlTextModule,
        };
    }
}
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