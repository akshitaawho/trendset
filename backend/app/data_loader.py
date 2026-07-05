from pathlib import Path

import pandas as pd

DATA_PATH = (
    Path(__file__)
    .resolve()
    .parents[2]
    / "data"
    / "processed"
    / "master_dataset.csv"
)

_master_df = None


def load_dataset():
    global _master_df

    if _master_df is None:
        _master_df = pd.read_csv(DATA_PATH, low_memory=False)

    return _master_df