package com.tracelens.billing;

// Intentional bug: invoice is null after a failed lookup.
public class InvoiceService {
    public int charge(Invoice invoice) {
        return invoice.getAmount();
    }
}
