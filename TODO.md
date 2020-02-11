We could make a caching key. This will cache the parse results. This will improve performance tremendously.

We would only cache on the static positions, not the dynamic positions which come switching between states that aren't finished yet.

Hotspot caching. We could cache values that repeatedly come in. And clear cache when those values are used often.
