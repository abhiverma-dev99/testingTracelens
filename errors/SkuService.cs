namespace TraceLens.Inventory;

// Intentional bug: sku record was not loaded.
public class SkuService
{
    public Task ReserveAsync(Sku sku, int qty)
    {
        sku.Quantity -= qty;
        return Task.CompletedTask;
    }
}
