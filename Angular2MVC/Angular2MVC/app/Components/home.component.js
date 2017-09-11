"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var listItem_service_1 = require("../Service/listItem.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var global_1 = require("../Shared/global");
var HomeComponent = (function () {
    function HomeComponent(/*private fb: FormBuilder,*/ _ListItemService) {
        this._ListItemService = _ListItemService;
        this.ListItems = [];
        this.indLoading = false;
        this.Types = [
            { value: true, display: 'Defect' },
            { value: false, display: 'Task' }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this._ListItemService
        //    .get(Global.BASE_USER_ENDPOINT)
        //    .subscribe(ListItems => { this.ListItems = ListItems; console.log(this.ListItems); });        
        this.LoadListItems();
    };
    HomeComponent.prototype.LoadListItems = function () {
        var _this = this;
        this.indLoading = true;
        this._ListItemService.get(global_1.Global.BASE_USER_ENDPOINT)
            .subscribe(function (ListItems) {
            _this.ListItems = ListItems;
            _this.indLoading = false;
            console.log(_this.ListItems);
        }, function (error) { return _this.msg = error; });
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('modal'),
    __metadata("design:type", ng2_bs3_modal_1.ModalComponent)
], HomeComponent.prototype, "modal", void 0);
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/Components/home.component.html'
    }),
    __metadata("design:paramtypes", [listItem_service_1.ListItemService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map