from pathlib import Path

import pandas as pd
from huggingface_hub import snapshot_download

PROJECT_ROOT = Path(__file__).resolve().parents[2]

DATA_PATH = (
    PROJECT_ROOT
    / "data"
    / "processed"
    / "master_dataset.csv"
)

_master_df = None


def download_dataset():
    if DATA_PATH.exists():
        return

    snapshot_download(
        repo_id="sahoothoot/trendset-data",
        repo_type="dataset",
        local_dir=PROJECT_ROOT / "data",
    )


def load_dataset():
    global _master_df

    if _master_df is None:
        download_dataset()
        _master_df = pd.read_csv(DATA_PATH, low_memory=False)

    return _master_df