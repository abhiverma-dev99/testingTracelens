package proxy

// Intentional bug: client is nil when forwarding.
func (c *Client) Forward(path string) error {
	return c.next.Do(path)
}
