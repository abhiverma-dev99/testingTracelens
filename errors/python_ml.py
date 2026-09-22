# Intentional bug: scoring batch contains NaN.
def score_batch(features):
    if any(value != value for value in features):
        raise ValueError("Input contains NaN")
    return sum(features) / len(features)
