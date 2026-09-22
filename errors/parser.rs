// Intentional bug: empty batch is indexed at 0.
pub fn parse_event(batch: &[u8]) -> u8 {
    batch[0]
}
