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
const type_graphql_1 = require("type-graphql");
let Bet = class Bet {
};
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Bet.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Int),
    __metadata("design:type", Number)
], Bet.prototype, "userId", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Float),
    __metadata("design:type", Number)
], Bet.prototype, "betAmount", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Float),
    __metadata("design:type", Number)
], Bet.prototype, "chance", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => type_graphql_1.Float),
    __metadata("design:type", Number)
], Bet.prototype, "payout", void 0);
__decorate([
    (0, type_graphql_1.Field)(type => Boolean),
    __metadata("design:type", Boolean)
], Bet.prototype, "win", void 0);
Bet = __decorate([
    (0, type_graphql_1.ObjectType)()
], Bet);
exports.default = Bet;
