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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cmplt_service_1 = require("../cmplt.service");
var ComplaintsComponent = /** @class */ (function () {
    function ComplaintsComponent(cmpltService) {
        this.cmpltService = cmpltService;
        //complaints: Complaint[] ;
        this.complaints = [];
    }
    ComplaintsComponent.prototype.ngOnInit = function () { };
    ComplaintsComponent.prototype.addComplaints = function (f) {
        var _this = this;
        var newComplaint = {
            village: this.village,
            mandal: this.mandal,
            district: this.district,
            postalcode: this.postalcode,
            date: this.date,
            file: this.file,
            description: this.description
        };
        this.cmpltService.addComplaints(newComplaint)
            .subscribe(function (Complaint) {
            _this.complaints.push(Complaint);
            //f.resetForm();
        });
    };
    ComplaintsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-complaints',
            templateUrl: './complaints.component.html',
            styleUrls: ['./complaints.component.css'],
            providers: [cmplt_service_1.CmpltService]
        }),
        __metadata("design:paramtypes", [cmplt_service_1.CmpltService])
    ], ComplaintsComponent);
    return ComplaintsComponent;
}());
exports.ComplaintsComponent = ComplaintsComponent;
//# sourceMappingURL=complaints.component.js.map