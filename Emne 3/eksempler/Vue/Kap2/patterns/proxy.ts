import { IPayment, ComplicatedPayment } from "./paymentService";

class PaymentServiceProxy implements IPayment {
    private realService: ComplicatedPayment;
    private userHasAccess: boolean;

    constructor(realService: ComplicatedPayment, userHasAccess: boolean) {
        this.realService = realService;
        this.userHasAccess = userHasAccess;
    }
    connect(): void {
        this.realService.connect();
    }
    
    public pay(amount: number): boolean {
        if (!this.userHasAccess) {
            console.log("[Proxy] Access Denied");
            return false;
        }
        this.realService.pay(amount);
        return true;
    }
}
