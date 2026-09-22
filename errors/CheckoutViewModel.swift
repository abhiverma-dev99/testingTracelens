// Intentional bug: payment method is nil.
struct CheckoutViewModel {
    var paymentMethod: String?

    func placeOrder() {
        let method = paymentMethod!
        print(method)
    }
}
